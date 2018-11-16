import React, { Component } from 'react';
import ClientAuthenticator from '../ClientAuthentication/ClientAuthentication.jsx';

class ClientLoginContainer extends Component {
    render() {
        return(
            <div>
                <ClientAuthenticator onAuthentication={() => {this.props.history.push('/ClientAccount')}}/>
            </div>
        )
    }
}

export default ClientLoginContainer;