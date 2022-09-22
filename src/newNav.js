import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./newNav.css";
import MediaQuery from "react-responsive";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  const hideNavbar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }

	return (
		<header>
			<img
            alt=""
            src={"./antk_police.png"}
            width={120}
            height={120}
            className="d-inline-block align-top"
            id="navlogo"
          />
			<nav ref={navRef}>
				<a href="#produit" onClick={hideNavbar}>Produits</a>
				<a href="/white-fr.pdf" target="_blank" onClick={hideNavbar}>Whitepaper</a>
				<a href="#tokenomics" onClick={hideNavbar} >Tokenomics</a>
				<a href="#roadmap" onClick={hideNavbar}>Roadmap</a>
        <a href="#team" onClick={hideNavbar}>Équipe</a>
        <MediaQuery minWidth={1000}>
        <a href="/how-to-buy-fr.pdf" target="_blank" onClick={hideNavbar}>
          <button className="howTo">HOW TO BUY</button>
        </a>
        <a href="/private" onClick={hideNavbar}>
          <button className="button">BUY</button>
        </a>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1000}>
        <a href="/how-to-buy-fr.pdf" target="_blank" onClick={hideNavbar}>
          <button className="howToMobile">HOW TO BUY</button>
        </a>
        <a href="/private" onClick={hideNavbar}>
          <button className="buttonMobile">BUY</button>
        </a>
        </MediaQuery>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes size={70}/>
				</button>
             <div className="buyLangFront">
          <MediaQuery minWidth={1000}>
          <a href="/"><h5 className="buyLangButton" >
              fr
            </h5></a>
            <h5>{""} |{""}</h5>
            <a href="/eng"><h5 className="buyLangButton" >
              en
            </h5></a>
          </MediaQuery>
        </div>
        <div className="buyLang">
          <MediaQuery minWidth={0} maxWidth={1000}>
          <a href="/"><h5 className="buyLangButtonMobile" >
              fr
            </h5></a>
            <h5 className="buyLangButtonMobile">{""} |{""}</h5>
            <a href="/eng"><h5 className="buyLangButtonMobile" >
              en
            </h5></a>
          </MediaQuery>
        </div>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars size={70} />
			</button>

		</header>
	);
}

export default Navbar;