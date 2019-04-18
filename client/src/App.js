import React, { Component } from 'react';
import './App.css'; 

class App extends Component { 
  state = {
    data: null
  };

  componentDidMount(){
    this.callBackendAPI()
      .then( res => this.setState({ data: res.express }) )
      .catch( err => console.log(err) );
  }

  callBackendAPI = async() => {
    const response = await fetch('express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Pok&eacute;mon Info App </h1>
          <p> Type in a pok&eacute;mon name to get info for it.  </p>
        </header> 

        <p>
          Go
          <img id="pokeball-img" alt="" src={require("./pokeball.png")} />
          <input id="pokemon-input" type="text" name="pokemon" placeholder="Bulbasaur"></input>,
          <button id="btn-go"> I Choose You! </button>
        </p>

        <footer className="App-footer">
          Created using <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>.
          Uses the <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">Pok&eacute;API.</a>
        </footer>
      </div>
    );
  }
}

export default App;