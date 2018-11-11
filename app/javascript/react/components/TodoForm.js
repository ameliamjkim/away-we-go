import React from 'react'

const TodoForm = (props) => {
  return(
    <form className="grid-x">
      <input className="cell small-9" type="text" name="description" placeholder="Enter Todo" onChange={props.handleChange} value={props.description}>
      </input>
      <button className="button" onClick={props.handleSubmit} type="submit">Add</button>
    </form>
  );
};

export default TodoForm
