import React from "react";
import { NavLink } from "react-router-dom";
import headerVideo from "../assets/Chaampion Handy.mp4";

export class Header extends React.Component {
  constructor (props) {
    super(props)
    this.active = {
      "backgroundColor": ""
    }
  }
  render () {
    return (
      <div className="NavBarHeader">
        <div className="LogoHeader">
          <NavLink className="lewineLink" exact to="/">Lewine</NavLink>
        </div>
        <div className="LinkHeader">
          <NavLink className="serviceLink" to="/sound">Sound</NavLink>
          <NavLink className="musicLink" to="/music">Music</NavLink>
          <NavLink className="companyLink" to="/art">Art</NavLink>
        </div>
      </div>
    )
  }
}

export class VideoHeader extends React.Component {
  render () {
    return (
      <div className="VideoHeader">
        <video className="lewineVideo" src={headerVideo} type="video/mp4" muted preload="true" autoPlay loop playsInline/>
          <Header/>
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
