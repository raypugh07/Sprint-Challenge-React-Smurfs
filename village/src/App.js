import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
//import styled from 'styled-components';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
      console.log(res);
      this.setState({smurfs:res.data})})
      .catch(err=>{
        console.log(err)
      })
    }

    addSmurf=smurf=>{
      axios.post('http://localhost:3333/smurfs',smurf)
      .then(res=>{
        this.setState({smurfs:res.data});
        this.props.history.push('/smurfs');
      })
      .catch(err=>console.log(err));
    }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <ul>
     <li><NavLink className='nav' to="/">Smurfs</NavLink></li> 
     <li> <NavLink className='nav' to="/smurf-form">Add Smurf</NavLink></li>
     
      </ul>

     <Route exact path='/' render={props=>(<Smurfs{...props} smurfs={this.state.smurfs}/>)}/> 
      <Route  path='/smurf-form' render={props=>(<SmurfForm{...props} addSmurf={this.addSmurf}/>)}/>
      
     
      
      </div>
    );
  }
}

export default App;


//<SmurfForm addSmurf={this.addSmurf}/>
//<Smurfs smurfs={this.state.smurfs} />