import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import allforyou from '../pics/All_for_you.png'
import danfox from '../pics/Dan_FOX.png'
import guidomaria from '../pics/Guido_Maria.png'
import heatrdy from '../pics/Heat_RDY.png'
import nikedance from '../pics/Nike_Dance.png'

const yearstr = "year:"
const directedstr = "directed:"
const musicstr = "music:"
const brandstr = "brand:"

export class Sound extends React.Component {
  render () {
    return (
      <div className="soundContainer">
        <div className="col1">
          I offer MUSIC SUPERVISION and tailor-made compositions for commercials, television, and film productions. I am here to assist you with music production and sound consultancy. With my extensive portfolio and expertise, I help you find the perfect musical accompaniment for your commercial projects. Trust in my professional approach, and let us together create an unforgettable soundscape for your content. Contact me now and let's bring your vision to life!
        </div>
        <div className="col2">
            <div className="soundPicContainer">
              <img className="soundPic" src={nikedance} alt="Nike_Dance"/>
              <div>{yearstr}</div>
              <div>{directedstr}</div>
              <div>{musicstr}</div>
              <div>{brandstr}</div>
            </div>
            <div className="soundPicContainer">
              <img className="soundPic" src={nikedance} alt="Nike_Dance"/>
              <div>{yearstr}</div>
              <div>{directedstr}</div>
              <div>{musicstr}</div>
              <div>{brandstr}</div>
            </div>
            <div className="soundPicContainer">
              <img className="soundPic" src={allforyou} alt="All_for_you"/>
              <div>{yearstr}</div>
              <div>{directedstr}</div>
              <div>{musicstr}</div>
              <div>{brandstr}</div>
            </div>
            <div className="soundPicContainer">
              <img className="soundPic" src={heatrdy} alt="Heat_RDY"/>
              <div>{yearstr}</div>
              <div>{directedstr}</div>
              <div>{musicstr}</div>
              <div>{brandstr}</div>
            </div>
            <div className="soundPicContainer">
              <img className="soundPic" src={guidomaria} alt="Guido_Maria"/>
              <div>{yearstr}</div>
              <div>{directedstr}</div>
              <div>{musicstr}</div>
              <div>{brandstr}</div>
            </div>
            <div className="soundPicContainer">
              <img className="soundPic" src={danfox} alt="Dan_FOX"/>
              <div>{yearstr}</div>
              <div>{directedstr}</div>
              <div>{musicstr}</div>
              <div>{brandstr}</div>
            </div>
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
          <div></div>
        </div>
      </div>
    )
  }
}
