import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import { HOSPITAL_ABI, HOSPITAL_ADDRESS } from './config';
import Doctor from './Doctor';
import Patient from './Patient';
import {Button} from 'react-bootstrap'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    //const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    
    const hospital = new web3.eth.Contract(HOSPITAL_ABI, HOSPITAL_ADDRESS)
    this.setState({ hospital })
    
    const doctorsCount = await hospital.methods.doctorsCount().call()
    this.setState({ doctorsCount })

    const patientsCount = await hospital.methods.patientsCount().call()
    this.setState({ patientsCount })

    for (var i = 1; i <= doctorsCount; i++) {
      const doctor = await hospital.methods.doctors(i).call()
      this.setState({
        doctors: [...this.state.doctors, doctor]
      })
    }


    for (var i = 1; i <= patientsCount; i++) {
      const patient = await hospital.methods.patients(i).call()
      this.setState({
        patients: [...this.state.patients, patient]
      })
    }

    this.setState({ loading: false })


  }

  constructor(props) {
    super(props)
    this.state = { 
      account: '',
      doctorsCount: 0,
      patientsCount: 0,
      doctors: [],
      patients: [],
      loading: true,
      showDoctor: false,
      title: "Change to Doctor"
      }

    this.addDoctor = this.addDoctor.bind(this)
    this.addPatient = this.addPatient.bind(this)
    this.findDoctor = this.findDoctor.bind(this)
  }

  addDoctor(name, birth, gender) {
    this.setState({ loading : true })
    this.state.hospital.methods.addDoctor(name, birth, gender).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  addPatient(name, birth, gender, insuranceCode, medicRecord) {
    this.setState({ loading : true })
    this.state.hospital.methods.addPatient(name, birth, gender, insuranceCode, medicRecord).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  findDoctor(id) {
    this.setState({ loading: true })
    this.state.hospital.methods.findDoctor(id).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  render() {

    const { showDoctor, showPatient, title } = this.state

    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="http://www.dappuniversity.com/free-download" target="_blank">Dapp | Hospital Management</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small><a className="nav-link" href="#"><span id="account"></span></a></small>
            </li>
          </ul>
          <div>
          <Button id="doctor" variant="primary" active onClick={() => { this.setState({ showDoctor: !this.state.showDoctor});
                                                                        if (this.state.showDoctor){ this.setState({ title: "Change to Doctor"})} else { this.setState({ title: "Change to Patient"})} }}>{this.state.title}</Button>
          <Button variant="secondary" active>Sign out</Button>
          </div>
        </nav>
        <hr />
        <br />
        

        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">

              { this.state.loading
                ? <div id="loader" className="text-center"><p>Loading...</p></div>
                : <div>
                  { this.state.showDoctor
                    ? <Doctor doctors={ this.state.doctors } addDoctor={ this.addDoctor} findDoctor={ this.findDoctor }/>
                    : <Patient patients= { this.state.patients } addPatient={ this.addPatient } />
                  }
                  </div>
              }
              


            </main>
          </div>
        </div>
        <p className="text-center">Your account : {this.state.account}</p>
      </div>
    );
  }
}

export default App;
