import React, { Component } from 'react';

class DobInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currSelected: "",
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onValidDOB(e.target.value);
    }

    render() {
        return(
            <div>
                <input type="date" name="dobInputField" onChange={this.onChange}/>
            </div>
        )
    }
}

export default DobInput;