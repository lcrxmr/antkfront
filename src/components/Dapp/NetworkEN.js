import { useEth } from "../../contexts/EthContext";
// import NoticeNoArtifact from "./NoticeNoArtifact";
// import NoticeWrongNetwork from "./NoticeWrongNetwork";
import MediaQuery from "react-responsive";

function NetWork() {
  const { state } = useEth();

  function NoticeWrongNetwork() {
    return (
      <>
        <div className="status">
          <MediaQuery minWidth={1000}>
            <h6>⚠️ MetaMask is not connected to the blockchain !.</h6>
          </MediaQuery>
          <MediaQuery minWidth={0} maxWidth={1000}>
            <h3>⚠️ MetaMask is not connected to the blockchain!.</h3>
          </MediaQuery>
        </div>
      </>
    );
  }

  function NoticeNoArtifact() {
    return (
      <>
        <div className="status">
          <MediaQuery minWidth={1000}>
            <h6>
            ⚠️ Can't find <span className="code">AntkPrivate</span>{" "}
              contract artifact. Please deploy and restart React server.
            </h6>
          </MediaQuery>
          <MediaQuery minWidth={0} maxWidth={1000}>
            <h3>
              ⚠️ Can't find <span className="code">AntkPrivate</span>{" "}
              contract artifact. Please deploy and restart React server.
              
            </h3>
          </MediaQuery>
        </div>
      </>
    );
  }

  const Params = (
    <>
      <div className="status">
        <MediaQuery minWidth={1000}>
          <h6>You're connected to the network of the private sale!</h6>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1000}>
          <h3>You're connected to the network of the private sale!</h3>
        </MediaQuery>
      </div>
    </>
  );

  return (
    <div className="demo">
      {!state.artifact ? (
        <NoticeNoArtifact />
      ) : !state.contract ? (
        <NoticeWrongNetwork />
      ) : (
        Params
      )}
      <hr />
    </div>
  );
}

export default NetWork;
