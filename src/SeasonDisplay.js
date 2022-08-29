import "./SeasonDisplay.css"
import React from "react"

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        //si la latitude est > 0 retourner Summer sinon retourner Winter
        return lat < 0 ? 'Summer' : 'Winter'
    } else {
        return lat > 0 ? 'Winter' : 'Summer'
    }
}

/* Second conception */
const seasonConfig = {
    Winter:{
        text: "Burr it is chilly",
        iconName: 'snowflake'
    },

    Summer:{
        text: "Lets hit the beach",
        iconName: 'sun'
    }
}

const SeasonDisplay = (props) =>{

    /* First conception */
    const season = getSeason(props.lat, new Date().getMonth())
    /* const icon = season === 'Winter' ? 'snowflake' : 'sun'
    const text = season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach' */

    const {text, iconName} = seasonConfig[season]; // {text, iconName}
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
        )
}

export default SeasonDisplay