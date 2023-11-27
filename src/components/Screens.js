import React from "react"
import { Link } from "react-router-dom"

import allforyou from "../assets/All_for_you.png"
import danfox from "../assets/Dan_FOX.png"
import guidomaria from "../assets/Guido_Maria.png"
import nuin from "../assets/Heat_RDY.png"
import champion from "../assets/Champion.png"
import nikedance from "../assets/Nike_Dance.png"

const allforyouUrl = "https://www.youtube.com/watch?v=83GRQvemCyo&t=7s"
const danfoxUrl = "https://www.youtube.com/watch?v=Pi4An155Pvs"
const guidomariaUrl = "https://www.youtube.com/watch?v=InpAW63xues"
const nikedanceUrl = "https://www.instagram.com/p/CwhOFpxsXZR/?hl=en"
const championUrl = "https://www.youtube.com/watch?v=yIsxfAKoTA8"
const nuinUrl = "https://www.youtube.com/watch?v=I1eliCfl8GE"

const yearstr = "year:"
const directedstr = "directed:"
const musicstr = "music:"
const brandstr = "brand:"

export class Sound extends React.Component {
  render () {
    return (
      <div className="soundContainer">
        <div className="col1">
          <br></br>
          I offer MUSIC SUPERVISION and tailor-made compositions for commercials, 
          television, and film productions. I am here to assist you with music 
          production and sound consultancy. With my extensive portfolio and 
          expertise, I help you find the perfect musical accompaniment for 
          your commercial projects. Trust in my professional approach, 
          and let us together create an unforgettable soundscape for your content. 
          Contact me now and let's bring your vision to life!
        </div>
        <div className="col2">
            <div className="soundVideoContainer">
              <div className="soundPicBox">
                <a className="serviceLink" href={nikedanceUrl}>
                  <img className="soundPic" src={nikedance} alt="Nike_Dance"/>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr} 2023</div>
                   <div>{directedstr} Yannick Müller</div>
                   <div>{musicstr} Lewein</div>
                   <div>{brandstr} Nike</div>
                </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={championUrl}>
                  <img className="soundPic" src={champion} alt="Nike_Dance"/>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr} 2021</div>
                   <div>{musicstr} Lewein</div>
                   <div>{brandstr} Champion</div>
                 </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={allforyouUrl}>
                  <img className="soundPic" src={allforyou} alt="All_for_you"/>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr} 2021</div>
                   <div>{musicstr} Lewein</div>
                 </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={nuinUrl}>
                  <img className="soundPic" src={nuin} alt="Heat_RDY"/>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr} 2020</div>
                   <div>{musicstr} Lewein</div>
                </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={guidomariaUrl}>
                  <img className="soundPic" src={guidomaria} alt="Guido_Maria"/>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                <div>{yearstr} 2020</div>
                   <div>{directedstr} VIVIENNE & TAMAS</div>
                   <div>{musicstr} Lewein</div>
                 </div>
              </div>
              <div className="soundPicBox">
                <a className="serviceLink" href={danfoxUrl}>
                  <img className="soundPic" src={danfox} alt="Dan_FOX"/>
                </a>
                <br></br>
                <div className="videoDetailsContainer">
                   <div>{yearstr} 2020</div>
                   <div>{musicstr} Lewein</div>
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
