class Api::V1::TodosController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Todo.all
  end

  def show
    trip = Trip.find(params[:id])
    todos = trip.todos
		todos = todos.order(:completed)
    render json: todos
  end

  def create
    todo = Todo.new
    todo.description = todo_params[:description]
    todo.user = current_user
    todo.trip = Trip.find(todo_params[:tripId])
    if todo.save
      trip = Trip.find(todo_params[:tripId])
      todos = trip.todos
  		todos = todos.order(:completed)
      render json: todos
    end
  end

  def update
    todo = Todo.find(params["_json"][0][:id])
    todo.completed = !todo.completed
    if todo.save
      trip = Trip.find(params[:id])
      todos = trip.todos
			todos = todos.order(:completed)
      render json: todos
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:description).merge(tripId: params[:tripId])
  end
end
