import React from 'react'
import { browserHistory, Route, IndexRoute, Router, Link } from 'react-router'
import TripIndexContainer from '../containers/TripIndexContainer'
import TripShowContainer from '../containers/TripShowContainer'
import UserShowContainer from '../containers/UserShowContainer'
import ChatContainer from '../containers/ChatContainer'
import TodoContainer from '../containers/TodoContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={TripIndexContainer} />
        <Route path="trips" component={TripIndexContainer} />
        <Route path="trips/:id" component={TripShowContainer} />
        <Route path="trips/:id/chats" component={ChatContainer} />
        <Route path="trips/:id/todos" component={TodoContainer} />
        <Route path="users/:id" component={UserShowContainer} />
    </Router>
    </div>
  )
}

export default App
