import React from 'react';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.active = {
      "backgroundColor": "#FFCC00"
    }
  }
  render () {
    return (
      <div className="AppHeader">
        <NavLink className="lewineLink" exact to="/" activeStyle={this.active}>Lewine</NavLink>
        <NavLink className="serviceLink" to="/sound" activeStyle={this.active}>Sound</NavLink>
        <NavLink className="musicLink" to="/music" activeStyle={this.active}>Music</NavLink>
        <NavLink className="companyLink" to="/art" activeStyle={this.active}>Art</NavLink>
      </div>
    )
  }
}

export class VideoHeader extends React.Component {
  render () {
    return (
      <div class="VideoHeader">
        <Header/>
      Logo
      </div>
    )
  }
}

export class NavHeader extends React.Component {
  render () {
    return (
      <div class="NavHeader">
        <Header/>
      Logo leftbound links rightbound
      </div>
    )
  }
}

export class Footer extends React.Component {
  render () {
    return (
      <div className="AppFooter">
        Social & Newsletter & Impressum & Datenschutz (Link)
      </div>
    )
  }
}
