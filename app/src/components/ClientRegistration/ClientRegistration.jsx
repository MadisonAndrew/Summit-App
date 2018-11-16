import React, { Component } from 'react';
class ClientRegistration extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            dateOfBirth: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
  
    handleSubmit (event) {
        event.preventDefault()
        console.log(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            dateOfBirth: ''
        })
    }
  
    render() {
      return (
        <div className="ClientRegistration">
            <form onSubmit={this.handleSubmit}>
                First Name:    <input name = "firstName" type="text" value={this.state.firstName} onChange={this.handleChange}/>
                <br/>
                Last Name:     <input name = "lastName" type="text" value={this.state.lastName} onChange={this.handleChange}/>
                <br/>
                Date of Birth: <input name = "dateOfBirth" type="date" value={this.state.dateOfBirth} onChange={this.handleChange}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
      );
    }
  }

  export default ClientRegistration;