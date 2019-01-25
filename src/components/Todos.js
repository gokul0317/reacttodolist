import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
   //let op = [];

    // op = this.props.todos.map( todo =>{
    //     return <Todoitem  />   
    // })

    // return ( op );


    return this.props.todos.map( todo =>{
       return <Todoitem key= {todo.id}  todo = {todo} delTodo={this.props.delTodo}  markComplete={this.props.markComplete} />
    })
  }
}

Todos.propTypes = {
   todos : PropTypes.array.isRequired,
   markComplete : PropTypes.func.isRequired,
   delTodo : PropTypes.func.isRequired,
   
}

export default Todos;
