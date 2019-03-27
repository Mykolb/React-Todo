import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Todo from './Todo';


export class TodoForm extends Component {
    state = {
        task: ''
    }

    onSubmit = (e) => {
         e.preventDefault();
         this.props.todoForm(this.state.task);
         this.setState({ task: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display: 'flex'}}> 
               <input 
               type='text' 
               name='task' 
               style={{flex: '10', padding: '5px'}}
               placeholder='Add Todo ...'
               value={this.state.task}
               onChange={this.onChange}
               />
               <input 
               type='submit'
               className='btn'
               style={{flex: '1'}}
                />
           </form>
        )
    }
}

// PropTypes
TodoForm.propTypes = {
    todoForm: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}




export default TodoForm;