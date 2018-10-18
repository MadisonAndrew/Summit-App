import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import MainMenu from './components/MainMenu/MainMenuContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import GymInformation from './components/GymInformation/GymInformationContainer.js';
import './App.css';

const Header = () => (
  <div>
    <NavBar />
  </div>
)

const Body = () => (
  <div>
    <Switch>
      <Route exact path='/MainMenu' component={MainMenu}/>
      <Route path='/GymInformation' component={GymInformation}/>
    </Switch>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
