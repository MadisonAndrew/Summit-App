import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ClientListTypeahead from '../Shared/ClientListTypeahead.jsx';
import DOB from '../Shared/DobInput.jsx';
class ClientAuthentication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submit: false,
            dob: null,
            dobCompleted: false,
            nameSelected: null,
            hasSelected: false
        }
        this.handleClientSelection = this.handleClientSelection.bind(this);
        this.handleClientDOB = this.handleClientDOB.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleClientSelection(client) {
        this.setState({ 
            nameSelected: client,
            hasSelected: (client === "" ? false : true )
        })
    } 

    handleClientDOB(clientDob) {
        this.setState({ 
            dob: clientDob,
            dobCompleted: true
        });
    }

    onSubmit(e) {
        if(this.state.nameSelected === undefined)
            this.setState({ hasSelected: false })

        let payload = {
            name : this.state.nameSelected,
            dob  : this.state.dob,
            authenticated : true
        }
        this.props.onAuthentication(payload);
    }

    render() {
        return(
            <div>
                <h2>Enter Your Name:</h2>
                <ClientListTypeahead clientList={this.props.clients} onSelect={this.handleClientSelection}/>
                {
                    this.state.hasSelected
                        ? <DOB onValidDOB={this.handleClientDOB}/>
                        : null
                }
                {
                    this.state.dobCompleted
                        ?
                        <Button 
                            bsStyle="primary" 
                            disabled={!this.state.hasSelected} 
                            onClick={this.onSubmit}>
                            Check In
                        </Button>
                        : null
                }

            </div>
        )
    }
}

export default ClientAuthentication;