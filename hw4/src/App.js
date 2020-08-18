

import './App.css';
import axios from "axios";
import React, { Component } from 'react';
import List from "./component/List.js"
import Detail from './component/Detail.js';

 class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        data : [],
        singleData :[],
      }
    }
  
  componentDidMount(){
    this.getData();
  }

  getData = () => {
    axios({method: "get",url: `https://api.github.com/users?per_page=100` })
      .then(response => {
        this.setState({data : response.data})
      })
      .catch(err =>{
        console.log("something wrong when getting Data", err)
      })
  }

  getSingleData = (e, name) => {
    axios({method: "get",url: `https://api.github.com/users/${name}` })
      .then(response => {
        this.setState({singleData : response.data})
      })
      .catch(err =>{
        console.log("something wrong when getting Data", err)
      })
  }

  render() {
    console.log(this.state.singleData)
    return (
      <div className = 'container'>
       <List list = {this.state.data} getSingleData = {this.getSingleData} /> 
       
       <Detail singleData = {this.state.singleData}/>

        </div>
    )
  }
}


export default App;
