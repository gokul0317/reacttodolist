import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Addtodo extends Component {
    state = {
        title : ''
    }
    onChange = (e)=>{
        this.setState({ [e.target.name] : e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ''})
    }
  render() {
    return (
       <form style={{ display : 'flex'}} onSubmit = {this.onSubmit}>   
           <input type="text" name="title" placeholder="Add To Do" value={this.state.title} onChange={this.onChange} style={{flex:'10',padding : '5px'}} />

           <input type="submit" value="submit" className="btn" style = {{flex : '1'}}  />
       </form> 
    )
  }
}

Addtodo.propTypes = {
    addTodo : PropTypes.func.isRequired,
    
 }

export default Addtodo
