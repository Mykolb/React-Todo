import React from 'react';
import PropTypes from 'prop-types';
import { generateKeyPair } from 'crypto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export class TodoList extends React.Component {
    getStyle = () => {
        return {
            background: 'white',
            padding: '10px',
            borderbottom: '1px solid gray',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
            //ternary operator if completed, put a line thru it, else(;) don't put a line through it.//
    }

markComplete = (e) => { //takes in event param//
console.log(this.props)
}



    render() {
            const {id, task } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {''}
                {task}
                <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>
                <FontAwesomeIcon icon='check-square' />
                </button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoList.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'white',
    color: 'pink',
    padding: '5px 10px',
    borderRadius: '5%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoList;