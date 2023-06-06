import React from 'react';
import './App.css';

import {
  Header,
  VideoHeader,
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
          <Header/>
          <VideoHeader/>
            <Switch>
                <Route path="/service" component={Sound}>
                </Route>
                <Route path="/music" component={Music}>
                </Route>
                <Route path="/company" component={Art}>
                </Route>
                <Route exact path="/" component={Home}>
                </Route>
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
}

export default App;
