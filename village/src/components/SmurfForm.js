import React, { Component } from 'react';

class SmurfForm extends Component {
 state={
   smurf:{
     name:'',
     age:'',
     height: ''
    
   }
 }

  

  /*addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };*/


  changeHandler=ev=>{
    ev.persist();
    let value=ev.target.value;
    if(ev.target.name==='age'){
      value=parseInt(value,10);
    }

    this.setState(prevState=>({
      smurf:{
        ...prevState.smurf,
        [ev.target.name]:value
      }

    }))
  }

  handleSubmit=e=>{
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
