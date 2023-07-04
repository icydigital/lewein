import React from 'react';
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
  constructor (props) {
    super(props)
    this.active = {
      "backgroundColor": ""
    }
  }
  render () {
    return (
      <div className="AppHeader">
        <div className="LogoHeader">
          <NavLink className="lewineLink" exact to="/" activeStyle={this.active}>Lewine</NavLink>
        </div>
        <div className="LinkHeader">
          <NavLink className="serviceLink" to="/sound" activeStyle={this.active}>Sound</NavLink>
          <NavLink className="musicLink" to="/music" activeStyle={this.active}>Music</NavLink>
          <NavLink className="companyLink" to="/art" activeStyle={this.active}>Art</NavLink>
        </div>
      </div>
    )
  }
}

export class VideoHeader extends React.Component {
  render () {
    return (
      <div class="VideoHeader">
        <video autoplay muted loop id="lewineVideo">
          <source src="https://www.youtube.com/watch?v=vpzPpxjegZs" type="video/mp4"></source>
        </video>
        Video Round
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
