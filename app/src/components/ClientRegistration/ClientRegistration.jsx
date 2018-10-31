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
        event.preventDefault();
        console.log(this.state);
    }
  
    render() {
      return (
        <div className="ClientRegistration">
            <form onSubmit={this.handleSubmit}>
                <input name = "firstName" type="text" value={this.state.firstName} onChange={this.handleChange}/>
                <input name = "lastName" type="text" value={this.state.lastName} onChange={this.handleChange}/>
                <input name = "dateOfBirth" type="text" value={this.state.dateOfBirth} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
      );
    }
  }