import React from 'react'
import { browserHistory, Route, IndexRoute, Router, Link } from 'react-router'
import TripIndexContainer from '../containers/TripIndexContainer'
import TripShowContainer from '../containers/TripShowContainer'
import UserShowContainer from '../containers/UserShowContainer'
import SignUp from '../components/SignUp'

// <Route path="/homes"/>

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={TripIndexContainer} />
        <Route path="trips/:id" component={TripShowContainer} />
        <Route path="users/:id" component={UserShowContainer} />
    </Router>
    </div>

  )
}

export default App
