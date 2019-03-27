import React from 'react';

import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Header from './components/TodoComponents/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare);

// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


class App extends React.Component {
  state = {
    todo: [
        {
          task: 'Take a nap',
          id: 1528817077278,
          completed: false
        },

 {
        task: 'Netflix and chill',
        id: 1528817077276,
        completed: false
    },
    {
        task: 'Get a mani',
        id: 1528817077281,
        completed: false
      }
 ]
}

// toggle complete
markComplete = (id) => {
  this.setState({ todo: this.state.todo.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  }) })
}


//Add Todo
TodoForm = (task) => {
  // console.log(task)
  const newTodo = {
    id: '5',
    task: task,
    completed: false
  }
  this.setState({ todo: [...this.state.todo, newTodo]})
}

//Delete Todo
deleteTodo = (id) => {
  this.setState({todo: [...this.state.todo.filter(todo => todo.id !== id)] });
}

//TodoForm//
todoForm = (task) => {
  const newTodo = {
    id: 4,
    task,
    completed: false
  }
  this.setState({todo: [...this.state.todo, newTodo] });
}


 render() {
   console.log(this.state.todo)
    return (
      <div className='App'>
      <div className='container'>
      <Header />
      <TodoForm todoForm={this.TodoForm} />
        <Todo todo={this.state.todo} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
      </div>
    );
    }
  }

export default App;




