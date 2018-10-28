import React from 'react'
import { browserHistory, Route, IndexRoute, Router, Link } from 'react-router'
import TripIndexContainer from '../containers/TripIndexContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={TripIndexContainer} />
    </Router>
    </div>

  )
}

export default App
