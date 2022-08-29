import React from "react";

const Spinner = (props) =>{
    return(
        <div class="ui active dimmer">
            <div class="ui big text loader">
                {props.message}
            </div>
            <p></p>
        </div>
    )
}

/* Message par défaut quand on utilise pas la variable message */
Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner;