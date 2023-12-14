import React from 'react';
import './App.css';

import {
  PrivacyPolicy,
  Imprint 
} from './components/Frame.js'
import { Sound } from './components/Screens.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
      <Router>
            <Switch>
              {/* <Route path="/sound" component={Sound}>
              </Route> */}
              <Route exact path="/" component={Sound}>
              </Route>
              <Route path="/imprint" component={Imprint}>
              </Route>
              <Route path="/privacypolicy" component={PrivacyPolicy}>
              </Route>
            </Switch>
      </Router>
    );
}

export default App;
