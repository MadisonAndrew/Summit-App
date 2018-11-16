import React, { Component } from 'react';
import addClients from './ClientRegistrationVirtualController';
import {Button}  from 'react-bootstrap';
import DatePicker from 'react-mobile-datepicker';
import {printDate, verifyName} from '../Shared/Utils.js'

class ClientRegistration extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            dob: null,
		    isOpen: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDOBInput = this.handleDOBInput.bind(this);
    }
  
    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault()
        console.log(this.state)

        var validNameCheck = this.nameCheck(event)

        if(validNameCheck.validName === true){
            var payload = {
                firstName : validNameCheck.firstName,
                lastName  : validNameCheck.lastName,
                dob : this.state.dob,
            }
            addClients(payload, this.confirmNewUser);
        }
        else{
            //Invalid Name - highlight field thats incorrect
            
        }
    }

    nameCheck(form_data){

        //Check for invalid characters and remove whitespace 
        var fName = verifyName(this.state.firstName)
        var lName = verifyName(this.state.lastName)

        if(fName === "" || lName === ""){
            return {validName: false}
        }
        else{
            return {firstName:fName, lastName:lName, validName: true}
        }
    }

    confirmNewUser(query_result){
        if(query_result.error === "none"){
            alert('Successfully added User')
            //redirect to next page
        }
        else if(query_result.error === "DBFail"){
            alert('Database Error')
        }
        else if(query_result.error === "QueryFail"){
            alert('Query Error')
        }
        
    }

    handleCancel = () => {
		this.setState({ isOpen: false });
	}

	handleSelect = (time) => {
		this.setState({ dob: time, isOpen: false });
    }
    
    handleDOBInput() {
        if(this.state.dob === null)
            this.setState({ dob: new Date() });
        this.setState({ isOpen: true })
    }
  
    render() {
      return (
        <div className="ClientRegistration">
            <form id="form1" onSubmit={this.handleSubmit}>
                First Name:    <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}/>
                <br/>
                Last Name:     <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}/>
                <br/>
                Enter Date of Birth: <input name="dob" 
                                            type="text" 
                                            value={printDate(this.state.dob)} //printDate from Utils.js
                                            onChange={() => {}}  //need to update the value
                                            onClick={this.handleDOBInput}/>
            </form>
              
            <DatePicker
					value={this.state.dob}
					isOpen={this.state.isOpen}
					onSelect={this.handleSelect}
                    onCancel={this.handleCancel}
                    confirmText="Done"
                    cancelText="Cancel"
                    max={new Date()}
                    min={new Date(1900,0,1)}
                    customHeader="Year - Month - Day"
                    showHeader={true}
                    theme="ios" /> 

            <Button bsStyle="primary" form="form1" type="submit">Submit</Button>
        </div>
      );
    }
  }

  export default ClientRegistration;