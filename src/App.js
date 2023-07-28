import React from 'react';
import './App.css';

import {
  VideoHeader,
  Header,
  Footer } from './components/Frame.js'
import {
  Home,
  Sound,
  Music,
  Art,
  Hello
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
            <Header/>
            <VideoHeader/>
          </div>
            <Switch>
              <Route path="/sound" component={Sound}>
              </Route>
              <Route path="/music" component={Music}>
              </Route>
              <Route path="/art" component={Art}>
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
