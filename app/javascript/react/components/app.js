import React from 'react'
import { browserHistory, Route, IndexRoute, Router, Link } from 'react-router'
import TripIndexContainer from '../containers/TripIndexContainer'
import TripShowContainer from '../containers/TripShowContainer'
import SignUp from '../components/SignUp'

// <Route path="/homes"/>

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={TripIndexContainer} />
        <Route path="trips/:id" component={TripShowContainer} />
    </Router>
    </div>

  )
}

export default App
