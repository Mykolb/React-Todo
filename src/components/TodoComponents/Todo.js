import React from 'react';
import TodoList from './TodoList'
import PropTypes from 'prop-types';

class Todo extends React.Component {
    markComplete = () => {
        console.log('Hey')
    }


   render() {
      return this.props.todo.map((todo) => (
          <TodoList key={todo.id} todo={todo} markComplete={this.markComplete} />
      ));
    }
}

// PropTypes
Todo.propTypes = {
    todo: PropTypes.array.isRequired
}


export default Todo;