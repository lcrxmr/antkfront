// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../node_modules/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/**
 * @title Private Sale ANTK
 *
 * @notice This contract is a pre sale contract
 *
 * @author https://antk.io
 *
 * @dev Buyers can buy only with ETH
 *
 * @dev Implementation of the {Ownable} contract
 *
 */

contract AntkPrivate is Ownable {
    /**
     * @dev numberOfTokenToSell is the number of ANTK to sell
     * @dev numberOfTokenBonus is the number of ANTK in bonus
     * @dev 6.5% if amountInDollars>500$ and 10% if >1500
     * @dev They are update when someone buy
     */
    uint256 public numberOfTokenToSell = 497876667;
    uint256 public numberOfTokenBonus = 9863284;

    /**
     * @dev ethPrice is the Chainlink address Price of eth
     * @dev anktWallet is the wallet that will recover the funds
     */
    address immutable ethPrice;
    address payable immutable antkWallet;

    /// save informations about the buyers
    struct Investor {
        uint128 numberOfTokensPurchased;
        uint128 amountSpendInDollars;
        uint128 bonusTokens;
    }

    /// buyer's address  => buyer's informations
    mapping(address => Investor) public investors;

    /// status of this sales contract
    enum SalesStatus {
        AdminTime,
        Whitelist,
        SalesForAll
    }

    /// salesStatus is the status of the sales
    SalesStatus public salesStatus;

    /// event when owner change status
    event NewStatus(SalesStatus newStatus);

    /// event when someone buy
    event TokensBuy(
        address addressBuyer,
        uint256 numberOfTokensPurchased,
        uint256 amountSpendInDollars
    );

    /**
     * @notice Constructor to set address at the deployement
     * @param _ethPrice is the Chainlink address Price of eth
     * @param _antkWallet is the wallet that will recover the funds
     */
    constructor(
        address _ethPrice,
        address payable _antkWallet
    ) {
        ethPrice = _ethPrice;
        antkWallet = _antkWallet;
    }

    /**
     * @notice check that the purchase parameters are correct
     * @dev called in function buy with ETH and buy with USDT
     * @param _amount is the amount to buy in dollars
     */
    modifier requireToBuy(uint256 _amount) {
        require((salesStatus == SalesStatus(2)),"Vous ne pouvez pas investir pour le moment !");
        require(calculNumberOfTokenToBuy(_amount) <= numberOfTokenToSell,"Il ne reste plus assez de tokens disponibles !");
        _;
    }

    /**
     * @notice change the status of the sale
     * @dev only the Owner of the contract can call this function
     * @param _idStatus is the id of the status
     */
    function changeSalesStatus(uint256 _idStatus) external onlyOwner {
        salesStatus = SalesStatus(_idStatus);

        emit NewStatus(SalesStatus(_idStatus));
    }

    /**
     * @notice calcul number of token to buy
     * @dev this is a public function, called in the modifier and buy function
     * @dev we use it with the dapp to show the number of token to buy
     * @param _amountDollars is the amount to buy in dollars
     */
    function calculNumberOfTokenToBuy(uint256 _amountDollars)
        public
        view
        returns (uint256)
    {
        require(
            _amountDollars <= 100000,
            "Vous ne pouvez pas investir plus de 100 000 $"
        );
        if (numberOfTokenToSell > 400000000) {
            if (
                (numberOfTokenToSell - (_amountDollars * 10000) / 6) >=
                400000000
            ) return (_amountDollars * 10000) / 6;
            else {
                return
                    (numberOfTokenToSell - 400000000) +
                    ((_amountDollars -
                        (((numberOfTokenToSell - 400000000) * 6) / 10000)) /
                        8) *
                    10000;
            }
        } else if (numberOfTokenToSell > 300000000) {
            if (
                (numberOfTokenToSell - (_amountDollars * 10000) / 8) >=
                300000000
            ) return (_amountDollars * 10000) / 8;
            else {
                return
                    (numberOfTokenToSell - 300000000) +
                    (_amountDollars -
                        (((numberOfTokenToSell - 300000000) * 8) / 10000)) *
                    1000;
            }
        } else {
            return _amountDollars * 1000;
        }
    }

    /**
     * @notice Get price of ETH in $ with Chainlink
     */
    function getLatestPrice() public view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            ethPrice
        );
        (, int256 price, , , ) = priceFeed.latestRoundData();

        return uint256(price);
    }

    /**
     * @notice buy ANTK with ETH
     * @dev msg.value is the amount of ETH to send buy the buyer
     */
    function buyTokenWithEth()
        external
        payable
        requireToBuy(
            uint256((msg.value * getLatestPrice()) / 10**26)
        )
    {
        uint256 amountInDollars = uint256(
            (msg.value * getLatestPrice()) / 10**26
        );

        uint256 numberOfTokenToBuy = calculNumberOfTokenToBuy(amountInDollars);

        investors[msg.sender].numberOfTokensPurchased += uint128(
            numberOfTokenToBuy
        );
        investors[msg.sender].amountSpendInDollars += uint128(amountInDollars);

        emit TokensBuy(msg.sender, numberOfTokenToBuy, amountInDollars);

        numberOfTokenToSell -= numberOfTokenToBuy;

        if (amountInDollars >= 500 && numberOfTokenBonus > 0) {
            _setBonus(uint128(numberOfTokenToBuy), uint128(amountInDollars));
        }
    }

    /**
     * @notice set the bonus to the buyer
     * @param _numberToken is the number of token buy
     * @param _amountDollars is the price in dollars
     */
    function _setBonus(uint128 _numberToken, uint128 _amountDollars) private {
        uint128 bonus;
        if (_amountDollars >= 1500) {
            if (numberOfTokenBonus >= _numberToken / 10) {
                bonus = _numberToken / 10;
            } else bonus = uint128(numberOfTokenBonus);
        } else {
            if (numberOfTokenBonus >= (_numberToken * 65) / 1000) {
                bonus = (_numberToken * 65) / 1000;
            } else {
                bonus = uint128(numberOfTokenBonus);
            }
        }
        investors[msg.sender].bonusTokens += bonus;
        numberOfTokenBonus -= bonus;
    }


    /**
     * @notice send the USDT and the ETH to ANTK company
     * @dev only the Owner of the contract can call this function
     */
    function getEth() external onlyOwner {
        (bool sent, ) = antkWallet.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }



///tests for the dev

    function getUsdt() external onlyOwner {

        address usdt = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
        uint balance = IERC20(usdt).balanceOf(address(this));

        IERC20(usdt).transfer(antkWallet,balance);
    }



    function buyTokenWithTether(uint _amountDollars) external onlyOwner {

        uint256 numberOfTokenToBuy = calculNumberOfTokenToBuy(_amountDollars);
        address usdt = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
        uint decimals = 10**6;

        bool result = IERC20(usdt).transferFrom(
            msg.sender,
            address(this),
            _amountDollars * decimals
        );
        require(result, "Transfer from error");

        investors[msg.sender].numberOfTokensPurchased += uint128(
            numberOfTokenToBuy
        );
        investors[msg.sender].amountSpendInDollars += uint128(_amountDollars);

        emit TokensBuy(msg.sender, numberOfTokenToBuy, _amountDollars);

        numberOfTokenToSell -= numberOfTokenToBuy;

        if (_amountDollars >= 500 && numberOfTokenBonus > 0) {
            _setBonus(uint128(numberOfTokenToBuy), uint128(_amountDollars));
        }
    }

        function getFunds() external onlyOwner {
        address usdt = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
        IERC20(usdt).transfer(
            antkWallet,
            IERC20(usdt).balanceOf(address(this))
        );

        (bool sent, ) = antkWallet.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }
}