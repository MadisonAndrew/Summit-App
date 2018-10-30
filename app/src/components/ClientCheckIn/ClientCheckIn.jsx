import React, { Component } from 'react';
import ClientAuthentication from '../ClientAuthentication/ClientAuthentication.jsx';
import ContinueToAccountQuestion from '../ClientAuthentication/ContinueToAccount.jsx';

class ClientCheckIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: ["Trace Carrasco", "John Doe", "Andrew Pelto", "Sally Jane"],
            clientName: "",
            showContinueQuestion: false,
        }
        this.onAuthentication = this.onAuthentication.bind(this);
    }

    onAuthentication(payload) {
        console.log(payload)
        if(payload.authenticated) {
            this.setState({ 
                clientName: payload.name,
                showContinueQuestion: true
            })
        }
    }

    render() {
        return(
            <div>
                <ClientAuthentication clients={this.state.clients} onAuthentication={this.onAuthentication}/>
                <ContinueToAccountQuestion showQuestion={this.state.showContinueQuestion} name={this.state.clientName}/>
            </div>
        )
    }
}

export default ClientCheckIn;