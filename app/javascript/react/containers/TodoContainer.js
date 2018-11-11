import React, { Component } from 'react'
import TodoForm from "../components/TodoForm"
import TodoTile from "../components/TodoTile"

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      description: ""
    }
    this.addTodo = this.addTodo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    let todosId = this.props.params.id
    fetch(`/api/v1/todos/${todosId}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      this.setState({todos: data})
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  addTodo(formPayload) {
    formPayload.tripId = this.props.params.id
    fetch(`/api/v1/todos`, {
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
     })
     .then(response => {
      if (response.ok) {
        return response
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
      }
     })
     .then(response => response.json())
     .then(body => {
       debugger
       this.setState({todos: body})
     })
     .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleUpdate(todoId) {
    let updatedTodo = this.state.todos.filter((todo) => todo.id == todoId)
    fetch(`/api/v1/todos/${this.props.params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedTodo),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
     })
     .then(response => {
      if (response.ok) {
        return response
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
      }
     })
     .then(response => response.json())
     .then(body => {
      this.setState({todos: body})
     })
     .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayLoad = {
      description: this.state.description
    }
    if(this.state.description.trim() != "") {
      this.addTodo(formPayLoad)
      this.setState({ description: "" })
    }
  }


  render() {
    let eachTodo = this.state.todos.map((todo) => {

      let toggleCompleted = () => {
        this.handleUpdate(todo.id)
      }

      return(
        <TodoTile
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          description={todo.description}
          toggleCompleted={toggleCompleted}
        />
      )
    })

    return(
      <div className="grid-x">
        <div className="cell small-8 small-offset-2 medium-6 medium-offset-3">
          <div className="tile callout">
          <h3> Trip Todos </h3>
            {eachTodo}
            <br/>
            <TodoForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              description={this.state.description}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoContainer
