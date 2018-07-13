import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'
import Header from './components/header/Header'
import axios from 'axios'
const baseUrl = "http://localhost:3500/api/inventory"



class App extends Component {
  constructor(){
    super()
    this.state={
      invList:[]
  }
  }
  componentDidMount(){
    axios.get(baseUrl).then((response)=>{
      this.setState({invList:response})}).catch((err)=>console.log(err));
      console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Dashboard list={this.state.invList}/>
          <Form/>
          <Header/>
          <div>{this.state.invList}</div>
        </div>
      </div>
    );
  }
}

export default App;
