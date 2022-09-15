

function Devise({ whitelisted, currentState }) {




    if (whitelisted && currentState == 1 || currentState == 2) {
        return (
            <div><h4>Quelle devise souhaitez-vous utiliser ?</h4></div>
        )
    }

}

export default Devise;