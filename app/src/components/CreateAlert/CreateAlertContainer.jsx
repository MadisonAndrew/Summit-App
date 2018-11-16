import React, { Component } from 'react';


class CreateAlertContainer extends Component {
  constructor() {
  super();
  this.state = {
    name: null,
    datesEffective: null,
    timeToLive: null,
    description: null
  }
  this.handleChange = this.handleChange.bind(this);
};


handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit (event) {
      alert('here')
      event.preventDefault()
      console.log(this.state)
      this.setState({
          firstName: '',
          lastName: '',
          dateOfBirth: ''
      })
  }
    render() {
        return(
          <div>
            <h3>Enter name of alert:</h3>
              <input
                   type="text"
                   name="Name"
                   placeholder="Enter name of alert:"
                   value={ this.state.name }
                   onChange={ this.handleChange }
                 />
             <h3>Enter dates effective:</h3>
               <input
                    type="text"
                    name="Date"
                    placeholder="Enter dates effective:"
                    value={ this.state.datesEffective }
                    onChange={ this.handleChange }
                  />
            <h3>Enter time to live:</h3>
              <input
                   type="text"
                   name="Time"
                   placeholder="Enter time to live:"
                   value={ this.state.timeToLive }
                   onChange={ this.handleChange }
                 />
             <h3>Enter description:</h3>
               <input
                    type="text"
                    name="Description"
                    placeholder="Enter description:"
                    value={ this.state.Description }
                    onChange={ this.handleChange }
                  />
            <input type="submit" value="Submit"/>

    </div>

        )

    }
}

export default CreateAlertContainer;
