import React, {Component} from 'react';
class ReadContent extends Component{
render(){

return (
  <article>
  <h1>
   <a href="/" onClick={function(e){
  e.preventDefault();
  this.props.onChangePage();
}.bind(this)
  }>{this.props.title}</a>
   {this.props.desc}</h1>
  </article>


);
}
}
export default ReadContent;
