import React, { Component } from 'react';

class ReadContent0 extends Component{
    render(){
var data=this.props.data;
var b=Number(this.props.id);
var t=this.props.title;


      return (
        <article>
<h2>{data[b-1].title}</h2>
<h3>{data[b-1].desc}</h3>
        </article>
      );
    }
  }

export default ReadContent0;
