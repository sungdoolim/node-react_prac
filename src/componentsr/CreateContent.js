import React, {Component} from 'react';
class UpdateContent extends Component{
render(){

return (
  <article>
<form method="post" action="/create_process" onSubmit={function(e){
e.preventDefault();// 페이지 전환 // XXX:


this.props.onSubmit(e.target.title.value,e.target.desc.value);
alert('submit');

}.bind(this)}>
<p><input type="text" name="title" placeholder="title"></input></p>
<p><textarea name="desc" placeholder="description"></textarea></p>
<p><input type="submit"></input></p>
</form>
  </article>


);
}
}
export default UpdateContent;
