import React from "react"
import { Link } from "react-router-dom"

import allforyou from "../assets/All_for_you.png"
import danfox from "../assets/Dan_FOX.png"
import guidomaria from "../assets/Guido_Maria.png"
import nuin from "../assets/Heat_RDY_copy.png"
import champion from "../assets/Heat_RDY_copy2.png"
import nikedance from "../assets/Nike_Dance.png"

const allforyouUrl = "https://www.youtube.com/embed/83GRQvemCyo&t=7s"
const danfoxUrl = "https://www.youtube.com/embed/Pi4An155Pvs"
const guidomariaUrl = "https://www.youtube.com/embed/InpAW63xues"
const nikedanceUrl = "https://www.instagram.com/reel/CryGEugHs/?utim_source-ig_we-MzRIODBINWFIZ=="
const championUrl = "https://www.youtube.com/embed/yIsxfAKoTA8"
const nuinUrl = "https://www.youtube.com/embed/I1eliCfl8GE"

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
            <div className="soundVideoContainer">
              <div className="soundPicBox">
                <a className="serviceLink" href={nikedanceUrl}>
                  <iframe className="videoItem" src={nikedanceUrl}></iframe>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr}</div>
                   <div>{directedstr}</div>
                   <div>{musicstr}</div>
                   <div>{brandstr}</div>
                 </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={championUrl}>
                  <iframe src={championUrl}  frameborder="0" allowfullscreen="true"></iframe>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr}</div>
                   <div>{directedstr}</div>
                   <div>{musicstr}</div>
                   <div>{brandstr}</div>
                 </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={allforyouUrl}>
                  <iframe src={allforyouUrl}  frameborder="0" allowfullscreen="true"></iframe>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr}</div>
                   <div>{directedstr}</div>
                   <div>{musicstr}</div>
                   <div>{brandstr}</div>
                 </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={nuinUrl}>
                  <iframe src={nuinUrl}  frameborder="0" allowfullscreen="true"></iframe>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr}</div>
                   <div>{directedstr}</div>
                   <div>{musicstr}</div>
                   <div>{brandstr}</div>
                 </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={guidomariaUrl}>
                  <iframe src={guidomariaUrl}  frameborder="0" allowfullscreen="true"></iframe>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr}</div>
                   <div>{directedstr}</div>
                   <div>{musicstr}</div>
                   <div>{brandstr}</div>
                 </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={danfoxUrl}>
                  <iframe src={danfoxUrl}  frameborder="0" allowfullscreen="true"></iframe>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr}</div>
                   <div>{directedstr}</div>
                   <div>{musicstr}</div>
                   <div>{brandstr}</div>
                 </div>
                </div>
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
