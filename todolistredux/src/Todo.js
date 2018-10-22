import React from 'react';

const Todo = props => (
  <div>
    <h3>{props.task}</h3>
    <h5>status: {props.status}</h5>
  </div>
)

export default Todo