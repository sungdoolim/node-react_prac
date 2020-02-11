import React, {Component} from 'react';
class CreateContent extends Component{

constructor(props){
  super(props);
  this.state={
    title:this.props.data.title,
    desc:this.props.data.desc,
    id:this.props.data.id
  }
}

render(){

return (
  <article>
  <h2>update</h2>
<form method="post" action="/create_process"
 onSubmit={function(e){
e.preventDefault();// 페이지 전환 // XXX:


this.props.onSubmit(this.state.id,
this.state.title,
this.state.desc);
alert('submit');

}.bind(this)}>
<input type="hidden" name="id" value={this.state.id}></input>
<p><input type="text"
 value={this.props.data.title}
  name="title"
   placeholder="title"
   onChange={function(e){
console.log(e.target.value);
this.setState({title:e.target.value})
   }}></input></p>
<p><textarea name="desc" placeholder="description"
value={this.state.desc}  onChange={function(e){
console.log(e.target.value);
this.setState({desc:e.target.value})}
 }></textarea></p>
<p><input type="submit"></input></p>
</form>
  </article>


);
}
}
export default CreateContent;
