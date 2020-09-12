import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class Doctor extends Component {

	renderDoctorData() {

		return this.props.doctors.map((doctor, index) => {
			const { id, name, birth, gender } = doctor
			
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{birth}</td>
					<td>{gender}</td>
				</tr>
			)
		})
	}

	showDoctorData() {
		return (
			<div>
				<h1>Doctor Data</h1>
				<table id="doctor-table" className="table" style={{width : "50em"}}>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Date of birth</th>
							<th scope="col">Gender</th>
						</tr>
					</thead>
					<tbody>
						{ this.renderDoctorData() }
						
					</tbody>
				</table>
			</div>
		)
	}

	showDoctorForm() {
	    return (
	      <div style={{width: "50em"}}>
	        <form>
	          <fieldset>
	              <legend>Doctor ID</legend><input className="form-control" type="text" id="id-input-doctor" placeholder="You do not need to enter this field when submitting new data." />
	              <legend>Doctor name</legend><input className="form-control" type="text" id="name-input-doctor" placeholder="Ex: Dao Hong Quan" />
	              <legend>Birthday</legend><input className="form-control" type="date" id="age-input-doctor" />
	              <legend>Gender</legend><input className="form-control" type="text" id="gender-input-doctor" placeholder="Male or Female"/>
	          </fieldset>
	          <Button variant="primary" type="button" onClick={this.handleAddDoctor}>Add</Button>
	          <Button variant="primary" type="button" onClick={this.handleFindDoctor}>Find</Button>
	        </form>
	      </div>
      )
  }

  handleAddDoctor = (event) => {
  	var name = document.getElementById("name-input-doctor").value
    var age = document.getElementById("age-input-doctor").value
    var gender = document.getElementById("gender-input-doctor").value

    event.preventDefault()
    this.props.addDoctor(name, age, gender)
  }

  render() {
	return (
		<div>
			{ this.showDoctorForm() }
			{ this.showDoctorData() }
		</div>
	)
  }
}

export default Doctor