import React, {Component} from 'react';
class NAV extends Component{
render(){
  var i=0;
  var list=[];
  var data=this.props.data;
  while(i<data.length){
list.push(<li key={data[i].id}><a
   href={"/b/"+data[i].id} 
 onClick={

   function(id,e){e.preventDefault();
   this.props.onChangePage(id);
}.bind(this,data[i].id)}>{data[i].title}
</a></li>);

    i=i+1;
  }
  return(
    <nav>
    <ul>

{list}

        </ul>
</nav>

);
}


}export default NAV;
