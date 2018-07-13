import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'
import Header from './components/header/Header'
import axios from 'axios'
const getUrl = "/api/inventory"



class App extends Component {
  constructor(){
    super()
    this.state={
      invList:[],
      userInput:""
  }
  }
  componentDidMount(){
    axios.get(getUrl).then((response)=>{
      this.setState({invList:response})}).catch((err)=>console.log(err));
      console.log(this.state)
  }
  changeHandler(){}
  addProduct(){
    axios.put('/api/product').then((response)=>console.log(response)).catch((err)=>console.log(err));
  }
  updateProduct(){
    axios.put('/api/product').then((response)=>console.log(response)).catch((err)=>console.log(err));
  }
  deleteProduct(){
    axios.delete('/api/product').then((response)=>console.log(response)).catch((err)=>console.log(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <button onClick={this.addProduct()}>POST</button>
          <input/><button onClick={this.updateProduct()}>PUT</button>
          <input/><button onClick={this.deleteProduct()}>DELETE</button>
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
