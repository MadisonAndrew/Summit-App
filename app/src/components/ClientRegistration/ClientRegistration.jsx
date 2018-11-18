import React, { Component } from 'react';
import addClients from './ClientRegistrationVirtualController';
import { Button }  from 'react-bootstrap';
import DatePicker from 'react-mobile-datepicker';
import { printDate, verifyName } from '../Shared/Utils.js'

class ClientRegistration extends Component {
    constructor (props) {
        super(props);

        // state info
        this.state = {
            firstName: '',
            lastName: '',
            dob: this.timeFormatter(new Date()),
            time: new Date(),
            isOpen: false,
            isNameValid: true,
        }

        // bind all functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDOBInput = this.handleDOBInput.bind(this);
        this.timeFormatter = this.timeFormatter.bind(this);
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
            this.setState({ isNameValid: true});

            var payload = {
                firstName : validNameCheck.firstName,
                lastName  : validNameCheck.lastName,
                dob : this.state.dob,
            }
            addClients(payload, this.confirmNewUser);
        }
        else{
            console.log('invalid');
            this.setState({ isNameValid: false });
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

    timeFormatter = (time) => {
        let date = time.getFullYear() + '-';
        date += time.getMonth() + 1 + '-';
        date += time.getDate();

        return date;
    }

    handleCancel = () => {
        this.setState({ isOpen: false });
    }

    handleSelect = (time) => {
        this.setState({
            dob: this.timeFormatter(time),
            time: time,
            isOpen: false,
        });
    }

    handleDOBInput() {
        this.setState({
            isOpen: true,
        })
    }

    render() {
      return (
        <div className="ClientRegistration">
            <form id="form1" onSubmit={this.handleSubmit}>
                First Name:
                <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}/>
                {!this.state.isNameValid &&
                    <span style={{color:'red'}}> Invalid Name </span>
                }
                <br/>

                Last Name:
                <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}/>
                {!this.state.isNameValid &&
                    <span style={{color:'red'}}> Invalid Name </span>
                }
                <br/>

                Enter Date of Birth:
                <input name="dob" type="input" value={printDate(this.state.time)} onClick={this.handleDOBInput} onChange={this.handleChange}/>

                <DatePicker
                    value={this.state.time}
                    isOpen={this.state.isOpen}
                    onSelect={this.handleSelect}
                    onCancel={this.handleCancel}
                    confirmText="Done"
                    cancelText="Cancel"
                    theme="ios"
                />
            </form>
            <Button bsStyle="primary" form="form1" type="submit">Submit</Button>
        </div>
      );
    }
  }

  export default ClientRegistration;
