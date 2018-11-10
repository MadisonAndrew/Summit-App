import React, { Component } from 'react';
import ClientAuthentication from '../ClientAuthentication/ClientAuthentication.jsx';
import ContinueToAccountQuestion from '../ClientAuthentication/ContinueToAccount.jsx';
import { getClients } from './ClientCheckInVirtualController';

class ClientCheckIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: null,
            clientName: "",
            showContinueQuestion: false,
        }
        this.onAuthentication = this.onAuthentication.bind(this);
        this.setNewClients = this.setNewClients.bind(this);
    }

    onAuthentication(payload) {
        if(payload.authenticated) {
            this.setState({ 
                clientName: payload.name,
                showContinueQuestion: true
            });
        }
        console.log(payload);
    }

    setNewClients(newClients) {
        this.setState({
            clients: newClients,
        });
    }

    componentDidMount() {
        getClients(this.setNewClients);
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
