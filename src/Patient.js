import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class Patient extends Component {

	renderPatientData() {
		return this.props.patients.map((patient, index) => {
			const { id, name, birth, gender, insuranceCode, medicRecord } = patient
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{birth}</td>
					<td>{gender}</td>
					<td>{insuranceCode}</td>
					<td>{medicRecord}</td>
				</tr>
				)
		})
	}

	showPatientData() {
		return (
			<div>
				<h1>Patient Data</h1>
				<table className="table" style={{width : "50em"}}>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Date of birth</th>
							<th scope="col">Gender</th>
							<th scope="col">Insurance Code</th>
							<th scope="col">Medical Record</th>
						</tr>
					</thead>
					<tbody>
						{ this.renderPatientData() }
					</tbody>
				</table>
			</div>
		)
	}

	showPatientForm() {
	    return (
	      <div style={{width: "50em"}}>
	        <form>
	          <fieldset>
	              <legend>Patient ID</legend><input className="form-control" type="text" id="id-input-doctor" placeholder="You do not need to enter this field when submitting new data." />
	              <legend>Patient name</legend><input className="form-control" type="text" id="name-input-doctor" placeholder="Ex: Dao Hong Quan" />
	              <legend>Date of Birth</legend><input className="form-control" type="date" id="age-input-doctor" />
	              <legend>Gender</legend><input className="form-control" type="text" id="gender-input-doctor" placeholder="Male or Female"/>
	              <legend>Insurance Code</legend><input className="form-control" type="text" id="code-input-doctor" />
	              <legend>Medical Record</legend><input className="form-control" type="text" id="record-input-doctor" />
	          </fieldset>
	          <Button variant="primary" type="button" onClick={this.handleAddPatient}>Add</Button>
	          <Button variant="primary" type="button" onClick={this.handleFindDoctor}>Find</Button>
	        </form>
	      </div>
      )
  }

  	handleAddPatient = (event) => {
		var name = document.getElementById("name-input-doctor").value
		var age = document.getElementById("age-input-doctor").value
		var gender = document.getElementById("gender-input-doctor").value
		var insuranceCode = document.getElementById("code-input-doctor").value
		var medicRecord = document.getElementById("record-input-doctor").value

		event.preventDefault()
		this.props.addPatient(name, age, gender, insuranceCode, medicRecord)
  }

	render() {
		return (
			<div>
				{ this.showPatientForm() }
				{ this.showPatientData() }
			</div>
		)
	}
}

export default Patient