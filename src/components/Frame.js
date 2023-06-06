import React from 'react';
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
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
        <NavLink className="serviceLink" to="/service" activeStyle={this.active}>Sound</NavLink>
        <NavLink className="musicLink" to="/music" activeStyle={this.active}>Music</NavLink>
        <NavLink className="companyLink" to="/company" activeStyle={this.active}>Art</NavLink>
      </div>
    )
  }
}

export class VideoHeader extends React.Component {
  render () {
    return (
      <div>
      Logo
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
