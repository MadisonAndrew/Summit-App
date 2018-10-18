import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './App.css';

import MainMenu from './components/MainMenu/MainMenuContainer.js';
import GymInformation from './components/GymInformation/GymInformationContainer.js';
import ClientCheckIn from './components/ClientCheckIn/ClientCheckInContainer.js';
import ClientLoginContainer from './components/ClientLogin/ClientLoginContainer.js';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/Home'>
            <Button bsStyle="primary" >
                Home
            </Button>
          </Link>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={MainMenu}/>
            <Route exact path='/Home' component={MainMenu}/>
            <Route path='/GymInformation' component={GymInformation}/>
            <Route path='/CheckIn' component={ClientCheckIn}/>
            <Route path='/Login' component={ClientLoginContainer}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
