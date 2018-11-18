import React, { Component } from 'react';
import { setMedicalQuestionnaire } from './MedicalQuestionnaireVirtualController'

class MedicalQuestionnaire extends Component {
    constructor (props) {
        super(props);

        // state info
        this.state = {
            firstName: '',
            lastName: '',
            dob: '',
            hasIllness: '',
            takingMedications: '',
            lastCheckup: '',
            hasAllergies: '',
            medicalChanges: '',
            isSubmitted: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFinish = this.onFinish.bind(this);
    }

    handleChange ({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        console.log(this.state);

        setMedicalQuestionnaire(this.state, this.onFinish);
    }

    onFinish(isSuccessful) {
        this.setState({
            isSubmitted: isSuccessful,
        });
    }

    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                first name <br/>
                <input name = "firstName" type="textarea" value={this.state.firstName} onChange={this.handleChange} />
                <br/>

                last name <br/>
                <input name = "lastName" type="textarea" value={this.state.lastName} onChange={this.handleChange} />
                <br/>

                date of birth <br/>
                <input name = "dob" type="date" value={this.state.dob} onChange={this.handleChange}/>
                <br/>

                Are you currently being or have been in the past year treated for a medical condition?<br/>
                <input name = "hasIllness" type="textarea" value={this.state.hasIllness} onChange={this.handleChange} />
                <br/>

                Are you currently taking any medications?<br/>
                <input name = "takingMedications" type="textarea" value={this.state.takingMedications} onChange={this.handleChange}/>
                <br/>

                When was your last checkup? <br/>
                <input name = "lastCheckup" type="date" value={this.state.lastCheckup} onChange={this.handleChange}/>
                <br/>

                Do you have any allergies we should be aware of? <br/>
                <input name = "hasAllergies" type="textarea" value={this.state.hasAllergies} onChange={this.handleChange}/>
                <br/>

                Have there been any changes in your medical history over the past year? <br/>
                <input name = "medicalChanges" type="date" value={this.state.medicalChanges} onChange={this.handleChange}/>
                <br/>

                <input type="submit" value="Submit"/>
            </form>
            {this.state.isSubmitted &&
                <h3>Submitted</h3>
            }
        </div>
      );
    }
}

export default MedicalQuestionnaire;
