import React, { Component } from 'react';
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






export default TodoForm;