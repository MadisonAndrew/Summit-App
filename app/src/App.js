import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import './App.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import MainMenu from './components/MainMenu/MainMenuContainer.jsx';
import GymInformation from './components/GymInformation/GymInformationContainer.jsx';
import ClientCheckIn from './components/ClientCheckIn/ClientCheckIn.jsx';
import ClientLoginContainer from './components/ClientLogin/ClientLoginContainer.jsx';
import ClientAccount from './components/ClientAccount/ClientAccountContainer.jsx';
import NewClientFormRedirect from './components/newClientFormRedirect/newClientFormRedirectContainer.jsx';
import ClientRegistration from './components/ClientRegistration/ClientRegistration.jsx';

const Header = () => (
  <div>
    <span>
      <Link to='/Home'>
        <Button bsStyle="primary">
            Home
        </Button>
      </Link>
    </span>
    <hr/>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={MainMenu}/>
          <Route exact path='/Home' component={MainMenu}/>
          <Route path='/GymInformation' component={GymInformation}/>
          <Route path='/CheckIn' component={ClientCheckIn}/>
          <Route path='/Login' component={ClientLoginContainer}/>
          <Route path='/ClientAccount' component={ClientAccount}/>
          <Route path='/NewClientFormRedirect' component={NewClientFormRedirect}/>
	        <Route path='/ClientRegistration' component={ClientRegistration}/>
        </Switch>
      </div>
    );
  }
}

export default App;
