import { useEth } from "../../contexts/EthContext";
// import NoticeNoArtifact from "./NoticeNoArtifact";
// import NoticeWrongNetwork from "./NoticeWrongNetwork";


function NetWork() {
  const { state } = useEth();

  function NoticeWrongNetwork() {
    return (
      <h3>
        ⚠️ MetaMask n'est pas connecté à la bonne blockchain !.
      </h3>
    );
  }

  function NoticeNoArtifact() {
    return (
      <p>
        ⚠️ Impossible de trouver <span className="code">AntkPrivate</span> contract artifact.
        Veuillez d'abord effectuer le déploiement, puis redémarrer le serveur react.
      </p>
    );
  }

  const Params =
    <>
      <div>
        <h6>Vous êtes connecté sur le bon réseau de la vente privée !</h6>
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
