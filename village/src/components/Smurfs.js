import React, { Component } from 'react';

import Smurf from './Smurf';
import styled from 'styled-components';


const SmurfCards=styled.div`

background:lightblue;
color:black;
border:1px solid pink;
width:200px;
margin:auto;
margin-top:5px;
display:flex;
justify-content:center;
`
const SmurfPage=styled.div`
color:white;
width:800px;
margin:auto;
display:flex;
justify-content:center;
flex-flow:wrap;
`


class Smurfs extends Component {
  render() {
    return (
     <SmurfPage>
        
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <SmurfCards><Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                
                key={smurf.id}
              /></SmurfCards>
            );
          })}
        </ul>
        </SmurfPage>
     
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
