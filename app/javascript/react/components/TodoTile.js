import React from 'react'

const TodoTile = (props) => {
  let updateTodo = () => {
    props.handleUpdate(props.id)
  }

  let completed = ""
  let checked = ""
  if(props.completed) {
    completed = "strikeout"
    checked = "checked"
  } else {
    checked = ""
  }

  return(
    <div>
      <input type="checkbox" onChange={props.toggleCompleted} checked={checked}/><span className={completed}> {props.description} </span>
    </div>
  );
};

export default TodoTile
