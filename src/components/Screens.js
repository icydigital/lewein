import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export class Sound extends React.Component {
  render () {
    return (
      <div className="soundContainer">
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
          About Music
        </div>
        <div className="col2">
          Projects Music
        </div>
      </div>
    )
  }
}

export class Art extends React.Component {
  render () {
    return (
      <div className="artContainer">
        <div className="col1">
          About Art
        </div>
        <div className="col1">
          Projects Art
        </div>
      </div>
    )
  }
}
