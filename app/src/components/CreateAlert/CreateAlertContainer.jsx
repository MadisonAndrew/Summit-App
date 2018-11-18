import React, { Component } from 'react';


class CreateAlertContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            datesEffective: '',
            timeToLive: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        console.log(this.state);
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
                    name="datesEffective"
                    placeholder="Enter dates effective:"
                    value={ this.state.datesEffective }
                    onChange={ this.handleChange }
                />

                <h3>Enter time to live:</h3>
                <input
                    type="text"
                    name="timeToLive"
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
            </div>
        );
    }
}

export default CreateAlertContainer;
