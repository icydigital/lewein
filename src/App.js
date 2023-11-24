import React from 'react';
import './App.css';

import {
  VideoHeader,
  Header,
  Footer } from './components/Frame.js'
import {
  Sound,
  // Music,
  // Art
} from './components/Screens.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
      <Router>
        <div className="AppContainer">
          <div className="AppHeader">
            <VideoHeader/>
          </div>
            <Switch>
              <Route path="/sound" component={Sound}>
              </Route>
              <Route exact path="/" component={Sound}>
              </Route>
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
}

export default App;
