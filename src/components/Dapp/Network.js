import { useEth } from "../../contexts/EthContext";
// import NoticeNoArtifact from "./NoticeNoArtifact";
// import NoticeWrongNetwork from "./NoticeWrongNetwork";


function NetWork() {
  const { state } = useEth();

  function NoticeWrongNetwork() {
    return (
      <p>
        ⚠️ MetaMask is not connected to the good network.
      </p>
    );
  }

  function NoticeNoArtifact() {
    return (
      <p>
        ⚠️ Cannot find <span className="code">Voting</span> contract artifact.
        Please complete the above preparation first, then restart the react dev server.
      </p>
    );
  }

  const Params =
    <>
      <div>
        <h3>You are on the good NetWork of Private Dapp !</h3>
      </div>
    </>;

  return (
    <div className="demo">
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            Params
      }
      <hr />
    </div>
  );
}

export default NetWork;
