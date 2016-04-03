import 'font-awesome/css/font-awesome.css'
import './styles/index.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import Entries from './components/Entries'
import ConnectedEntry from './components/ConnectedEntry'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/entries" component={Entries}>
      <Route path="/entries/:id" component={ConnectedEntry} />
    </Route>
  </Router>
), document.getElementById('app'))
