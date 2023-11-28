import React from 'react';
import './App.css';

import {
  DataSecurity,
  Footer, 
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
        <div className="AppContainer">
            <Switch>
              <Route path="/sound" component={Sound}>
              </Route>
              <Route exact path="/" component={Sound}>
              </Route>
              <Route path="/imprint" component={Imprint}>
              </Route>
              <Route path="/datasecurity" component={DataSecurity}>
              </Route>
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
}

export default App;
