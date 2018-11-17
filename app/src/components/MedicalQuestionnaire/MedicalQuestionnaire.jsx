import React, { Component } from 'react';
class MedicalQuestionnaire extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasIllness: '',
            takingMedications: '',
            lastCheckup: '',
            hasAllergies: '',
            medicalChanges: ''
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
            hasIllness: '',
            takingMedications: '',
            lastCheckup: '',
            hasAllergies: '',
            medicalChanges: ''
        })
    }
  
    render() {
      return (
        <div className="ClientRegistration">
            <form onSubmit={this.handleSubmit}>
                Are you currently being or have been in the past year treated for a medical condition?<br/> <input name = "hasIllness" type="textarea" value={this.state.hasIllness} onChange={this.handleChange}/>
                <br/>
                Are you currently taking any medications?<br/> <input name = "takingMedications" type="textarea" value={this.state.takingMedications} onChange={this.handleChange}/>
                <br/>
                When was your last checkup? <br/> <input name = "lastCheckup" type="date" value={this.state.lastCheckup} onChange={this.handleChange}/>
                <br/>
                Do you have any allergies we should be aware of? <br/> <input name = "hasAllergies" type="textarea" value={this.state.hasAllergies} onChange={this.handleChange}/>
                <br/>
                Have there been any changes in your medical history over the past year? <br/> <input name = "medicalChanges" type="date" value={this.state.medicalChanges} onChange={this.handleChange}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
      );
    }
  }

  export default MedicalQuestionnaire;