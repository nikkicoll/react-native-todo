import React from 'react';

const TodoItem = (props) => {
  return (
    <li className="list-group-item">
      {props.id + 1}.
      {' '+props.title}:
      {' '+props.description}
    </li>
  );
}

export default TodoItem;
