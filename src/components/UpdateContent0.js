import React, { Component } from 'react';

class UpdateContent0 extends Component{
    constructor(props){
      super(props);
      this.state = {
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
    }
    render(){
      console.log(this.props.data);
      console.log('UpdateContent render');
      return (
        <article>
            <h2>Update</h2>
            <form action="/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                  Number(e.target.id.value),
                    e.target.title.value,
                      e.target.desc.value
                );
              }.bind(this)}
            >
              <input type="hidden" name="id" value={this.state.id}></input>
              <p>
                <input
                  type="text"
                  name="title"
                  placeholder="title"

                //  onChange={this.inputFormHandler}
                ></input>
                </p>
              <p>
                <textarea
                //  onChange={this.inputFormHandler}
                  name="desc"
                  placeholder="description"
              ></textarea>
              </p>
              <p>
                <input type="submit"></input>
              </p>
            </form>
        </article>
      );
    }
  }

export default UpdateContent0;
