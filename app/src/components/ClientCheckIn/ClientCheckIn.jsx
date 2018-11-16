import React, { Component } from 'react';
import ClientAuthentication from '../ClientAuthentication/ClientAuthentication.jsx';
import ContinueToAccountQuestion from '../ClientAuthentication/ContinueToAccount.jsx';

class ClientCheckIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientName: "",
            showContinueQuestion: false,
        }
        this.onAuthentication = this.onAuthentication.bind(this);
    }

    onAuthentication(payload) {
        if(payload.authenticated) {
            this.setState({ 
                clientName: payload.name,
                showContinueQuestion: true
            });
        }
    }

    render() {
        return(
            <div>
                <ClientAuthentication onAuthentication={this.onAuthentication}/>
                <ContinueToAccountQuestion showQuestion={this.state.showContinueQuestion} name={this.state.clientName}/>
            </div>
        )
    }
}

export default ClientCheckIn;
