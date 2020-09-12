import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


class Hospital extends Component {


  

  // Render Doctor Data
  renderDoctorData() {
    return this.props.doctors.map((doctor, index) => {
      const { id, name, birth, gender } = doctor
      return (
        <
        )
    })
  }

  /* Render Patient Data */ 
  renderPatientData() {

    return this.props.patients.map((patient, index) => {
      const { id, name, birth, gender, insuranceCode, medicRecord} = patient
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



  showDoctorData(_) {
    return (
      <div id="content" striped bordered hover>
        <h1 id="title"> Doctor Data </h1>
        <table id="doctors" className="table" style={{width: "50em"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Birthday</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody id="doctor-content">
            { document.getElementById("doctor-content").append("123") }
          </tbody>
        </table>
      </div>
    )
  }

  showPatientData(_id) {
    return (
      <div id="content" striped bordered hover>
        <h1 id="title"> Patient Data </h1>
        <table id="patients" className="table" style={{width: "50em"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Birthday</th>
              <th scope="col">Gender</th>
              <th scope="col">Insurance Code</th>
              <th scope="col">Medical Record</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPatientData(_id)}
          </tbody>
        </table>
      </div>
    );
  }

  // showDoctorForm() {
  //   return (
  //     <div id="form" style={{width: "50em"}}>
  //       <Form onSubmit={(event) => {
  //         event.preventDefault()
  //         this.props.addDoctor(this.doctorId.value, this.doctorName.value, this.doctorBirth.value, this.doctorGender.value)
  //       }}>
  //         <Form.Group controlId="formBasicId" ref={(input) => this.doctorId = input}>
  //           <Form.Label style={{fontWeight: "bold"}}>Doctor ID</Form.Label>
  //           <Form.Control placeholder="You do not need to enter this field." />
  //           <Form.Text className="text-muted">This field will be automatically incremented.</Form.Text>
  //         </Form.Group>

  //         <Form.Group controlId="formBasicName" ref={(input) => this.doctorName = input}>
  //           <Form.Label style={{fontWeight: "bold"}}>Name</Form.Label>
  //           <Form.Control placeholder="Ex : Dao Hong Quan" />
  //         </Form.Group>

  //         <Form.Group controlId="formBasicAge">
  //           <Form.Label style={{fontWeight: "bold"}}>Date of Birth</Form.Label>
  //           <Form.Control placeholder="Ex : 21/09/1999" />
  //         </Form.Group>

  //         <Form.Group controlId="formBasicGender">
  //           <Form.Label style={{fontWeight: "bold"}}>Gender</Form.Label>
  //           <Form.Control placeholder="Male or Female" />
  //         </Form.Group>

  //         <Button variant="primary" type="submit">Add</Button>
  //         <Button variant="primary" type="submit">Find</Button>
  //       </Form>

  //     </div>
  //   )
  // }

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

  handleAddDoctor = (event) =>  {
    console.log("Name: ", document.getElementById("name-input-doctor").value)
    console.log("Age: ", document.getElementById("age-input-doctor").value)
    console.log("Gender: ", document.getElementById("gender-input-doctor").value)

    var name = document.getElementById("name-input-doctor").value
    var age = document.getElementById("age-input-doctor").value
    var gender = document.getElementById("gender-input-doctor").value

    event.preventDefault()
    this.props.addDoctor(name, age, gender)
  }

  handleFindDoctor = (event) => {
    var _id = document.getElementById("id-input-doctor").value
    var _name = document.getElementById("name-input-doctor").value
    var _age = document.getElementById("age-input-doctor").value
    var _gender = document.getElementById("gender-input-doctor").value

    this.renderDoctorData(_id)


  }


  
  render() {
    return (
      <div>
        {this.showDoctorForm()}
        {this.showDoctorData()}
      </div>
    );
  }
}

export default Hospital;
