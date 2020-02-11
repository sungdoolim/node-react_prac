import React, { Component } from 'react';
class Control0 extends Component {
    render(){
      console.log('Subject render');
      return (
    <ul>
<li><a href="#" onClick={function(e){
  e.preventDefault();
  this.props.changeM('create');
}.bind(this)}>create</a></li>

<li><a href="#" onClick={function(e){
  e.preventDefault();
  this.props.changeM('update');
}.bind(this)}>update</a></li>

<li><form><input type="button" value="delete"></input></form></li>

    </ul>
      );
    }
  }

export default Control0;
