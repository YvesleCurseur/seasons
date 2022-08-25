import React from "react"
import ReactDOM  from "react-dom"

// Refactor the component
class App extends React.Component{
    //Fonction de javascript
    constructor(props){
        //super pour appeller les éléments dans le constructor qui lui se trouve dans le Component
        super(props)
        //initialiser un state (Manière plus clean de le faire)
        this.state = {lat: null, errorMessage: ''}

        // Récupérer la position de l'utilisateur grâce une API de mozilla developper 
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //Pour mettre à jour notre state on utiliste setState
                this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        )
    }

    render(){
        //Mettre un state dans le jsx
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error, {this.state.errorMessage}</div>
        }
        
        if(!this.state.errorMessage && this.state.lat){
            return <div>Latidute is {this.state.lat}</div>
        }
        
        return <div>Loading...</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
