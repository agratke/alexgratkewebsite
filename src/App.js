import React, { Component } from 'react';
import './App.css';
import LastFmService from "./lastFmCollage/lastFm.service";
import ReactDOM from "react-dom";
import LastFmComponent from "./lastFmCollage/lastFm.component";
import {BrowserRouter as Router, Link} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="AlexMain">
            <header className="Alex-header">
              <img src='https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/21032321_10213597945813984_2502858274605030362_n.jpg?_nc_cat=0&oh=e98d439431be667d0d13d032f801656f&oe=5B8D51FF' className="App-logo" alt="logo" />
              <h1 className="Name-title">{name}</h1>
                <LastFmService />
            </header>
          </div>
        </Router>
    );
  }
}

const name = "Alex Gratke";

//ReactDOM.render(<App />, document.getElementById('root'));

export default App