import React, { Component } from 'react';
import ClientAuthenticator from '../ClientAuthentication/ClientAuthentication.jsx';
import { Redirect } from 'react-router-dom';

class ClientLoginContainer extends Component {
    constructor() {
        super();

        this.state = {
            userId: undefined,
        };

        this.onAuthenticated = this.onAuthenticated.bind(this);
    }

    onAuthenticated(payload) {
        if(payload.userId) {
            this.setState({
                userId: payload.userId,
            })
        }
    }

    render() {
        return(
            <div>
                <ClientAuthenticator onAuthentication={this.onAuthenticated}/>
                {this.state.userId &&
                    <Redirect to={{
                        pathname: "/ClientAccount",
                        state: {
                            userId: this.state.userId,
                        },
                    }} />
                }
            </div>
        )
    }
}

export default ClientLoginContainer;
