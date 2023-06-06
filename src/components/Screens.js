import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export class Home extends React.Component {
  render () {
    return (
      <div className="animationHeader">
        <div className="col1">
          <div className="headerTitle">About</div>
        </div>
        <div className="col2">
          Projects
        </div>
      </div>
    )
  }
}

export class Sound extends React.Component {
  render () {
    return (
      <div className="serviceContainer">
        <div className="col1">
          About Sound
        </div>
        <div className="col2">
          Projects Sound
        </div>
      </div>
    )
  }
}

export class Music extends React.Component {
  render () {
    return (
      <div className="musicContainer">
        <div className="col1">
          About
        </div>
        <div className="col2">
          Projects
        </div>
      </div>
    )
  }
}

export class Art extends React.Component {
  render () {
    return (
      <div className="companyContainer">
        <div className="col1">
          About
        </div>
        <div className="col1">
          Projects
        </div>
      </div>
    )
  }
}
