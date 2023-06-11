import React from 'react';
import './App.css';

import {
  NavHeader,
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
      <div className="AppContainer">
      <Router>
          <Header/>
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
      </Router>
      </div>
    );
}

export default App;
