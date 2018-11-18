import React, { Component } from 'react';
import { createAlert } from './CreateAlertVirtualController';

class CreateAlertContainer extends Component {
    constructor() {
        super();

        // state info
        this.state = {
            name: '',
            dates_effective: '',
            ttl: '',
            description: '',
            is_created: false,
        }

        // bind all functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFinishAlertCreation = this.onFinishAlertCreation.bind(this);
    };

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        console.log(this.state);
        createAlert(this.state, this.onFinishAlertCreation);
    }

    onFinishAlertCreation(isSuccessful) {
        if(isSuccessful) {
            // change stae
            this.setState({
                is_created: true,
            });

            console.log('created');
        } else {
            console.log('failed to create alert');
        }
    }

    render() {
        return(
            <div>
                <h3>Enter name of alert:</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name of alert:"
                    value={ this.state.name }
                    onChange={ this.handleChange }
                />

                <h3>Enter dates effective:</h3>
                <input
                    type="text"
                    name="dates_effective"
                    placeholder="Enter dates effective:"
                    value={ this.state.datesEffective }
                    onChange={ this.handleChange }
                />

                <h3>Enter time to live:</h3>
                <input
                    type="text"
                    name="ttl"
                    placeholder="Enter time to live:"
                    value={ this.state.timeToLive }
                    onChange={ this.handleChange }
                />

                <h3>Enter description:</h3>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter description:"
                    value={ this.state.description }
                    onChange={ this.handleChange }
                />

                <input type="submit" value="Submit" onClick={this.handleSubmit}/>

                {this.state.is_created &&
                    <h3>Alert Created</h3>
                }
            </div>
        );
    }
}

export default CreateAlertContainer;
