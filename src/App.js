import './App.css';

import React, { Component } from 'react'

import News from './components/News';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    let Style='dark';
    const Changetheme=()=>{
      if(Style==='dark'){
        // const mystyle={
        //   color:'white',
        //   backgroundColor:'black'
        // }
        document.body.style.backgroundColor='rgb(51, 46, 46)'
        Style='light'
      }
      else{
        // const mystyle={
        //   color:'black',
        //   backgroundColor:'white'
        // }
        document.body.style.backgroundColor='white'
        Style='dark'
      }
    }
    return (
      <div>
        <Router>
        <NavBar Changetheme={Changetheme} handlechange={(e)=>{console.log(e.target.value)}} />
        <Switch>
          <Route exact path="/"><News  key="general" pageSize={6} country="in" category="general"/></Route>
          <Route exact path="/technology"><News key="general" pageSize={6} country="in" category="technology"/></Route>
          <Route exact path="/business"><News key="business" pageSize={6} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={6} country="in" category="entertainment"/></Route>
          
          <Route exact path="/science"><News key="science" pageSize={6} country="in" category="science"/></Route>
          <Route exact path="/health"><News key="health" pageSize={6} country="in" category="health"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}