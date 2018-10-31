import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

class ClientListTypeahead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currSelected: "",
        }
        // Have to bind "this" to each method that I use
        this.handleTypeaheadSelect = this.handleTypeaheadSelect.bind(this);
    }

    /**
     * Calls the parent's onSelect method after updating state
     * @param {String} selected 
     */
    handleTypeaheadSelect(selected) {
        // Updating current selection
        this.setState({ currSelected: selected[0] })
        // Handling selection
        this.props.onSelect(selected[0])
    }

    render() {
        return(
            <div>
                <Typeahead
                    labelKey="name"
                    options={this.props.clientList}
                    placeholder="Enter Name..."
                    onChange={(selected) => this.handleTypeaheadSelect(selected)}
                    minLength={3}
                />
            </div>
        )
    }
}

export default ClientListTypeahead;