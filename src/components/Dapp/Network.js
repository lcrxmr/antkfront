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
            <h6>⚠️ MetaMask n'est pas connecté à la bonne blockchain !.</h6>
          </MediaQuery>
          <MediaQuery minWidth={0} maxWidth={1000}>
            <h3>⚠️ MetaMask n'est pas connecté à la bonne blockchain !.</h3>
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
              ⚠️ Impossible de trouver <span className="code">AntkPrivate</span>{" "}
              contract artifact. Veuillez d'abord effectuer le déploiement, puis
              redémarrer le serveur react.
            </h6>
          </MediaQuery>
          <MediaQuery minWidth={0} maxWidth={1000}>
            <h3>
              ⚠️ Impossible de trouver <span className="code">AntkPrivate</span>{" "}
              contract artifact. Veuillez d'abord effectuer le déploiement, puis
              redémarrer le serveur react.
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
          <h6>Vous êtes connecté sur le bon réseau de la vente privée !</h6>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1000}>
          <h3>Vous êtes connecté sur le bon réseau de la vente privée !</h3>
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
