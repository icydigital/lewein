import React from "react"
import {
  AppHeader,
  HomeFooter } from './Frame.js'

import allforyou from "../assets/All_for_you.png"
import danfox from "../assets/Dan_FOX.png"
import guidomaria from "../assets/Guido_Maria.png"
import nuin from "../assets/nuin.png"
import champion from "../assets/Champion.png"
import nikedance from "../assets/Nike_Dance.png"
import peppingtom from "../assets/Pepping_tom.png"
import mint from "../assets/Mint.png"

const allforyouUrl = "https://www.youtube.com/watch?v=83GRQvemCyo&t=7s"
const danfoxUrl = "https://www.youtube.com/watch?v=Pi4An155Pvs"
const guidomariaUrl = "https://www.youtube.com/watch?v=InpAW63xues"
const nikedanceUrl = "https://www.instagram.com/p/CwhOFpxsXZR/?hl=en"
const championUrl = "https://www.youtube.com/watch?v=yIsxfAKoTA8"
const nuinUrl = "https://www.youtube.com/watch?v=I1eliCfl8GE"
const peppingtomUrl = "https://www.instagram.com/p/C1uZii1AkRq/"
const mintUrl = "https://www.instagram.com/p/CxIvrdkMGs6/"

const yearstr = "year:"
const musicstr = "music:"

export class Sound extends React.Component {
  render () {
    return (
      <div className="AppContainer">
        <AppHeader/>
      <div className="soundContainer">
        <div className="col1">
          I offer MUSIC SUPERVISION and tailor-made compositions for commercials, 
          television, and film productions. I am here to assist you with music 
          production and sound consultancy. With my extensive portfolio and 
          expertise, I help you find the perfect musical accompaniment for 
          your commercial projects. Trust in my professional approach, 
          and let us together create an unforgettable soundscape for your content. 
          Contact me now and let's bring your vision to life!
        </div>
        <div className="col2">
          <div className="soundProjectListContainerChampion">
            <div className="soundProject">
              <a className="soundProjectLink" href={peppingtomUrl} target="_blank" rel="noreferrer">
                <img className="soundPic" src={peppingtom} alt="pepping_tom"/>
              </a>
            </div>
            <div className="soundProjectDescription">
              <br></br>
              <div>{musicstr} Lewein</div>
              <div>{yearstr} 2023</div>
            </div>            
          </div>
          <div className="soundProjectListContainerChampion">
            <div className="soundProject">
              <a className="soundProjectLinkLast" href={mintUrl} target="_blank" rel="noreferrer">
                <img className="soundPic" src={mint} alt="mint"/>
              </a>
            </div>
            <div className="soundProjectDescription">
              <br></br>
              <div>{musicstr} Lewein</div>
              <div>{yearstr} 2023</div>
            </div>            
          </div>
          <div className="soundProjectListContainer">
            <div className="soundProject">
              <a className="soundProjectLink" href={nikedanceUrl} target="_blank" rel="noreferrer">
                <img className="soundPic" src={nikedance} alt="Nike_Dance"/>
              </a>
            </div>
            <div className="soundProjectDescription">
              <br></br>
              <div>{musicstr} Lewein</div>
              <div>{yearstr} 2023</div>
            </div>    
          </div>
          <div className="soundProjectListContainerChampion">
            <div className="soundProject">
              <a className="soundProjectLink" href={championUrl} target="_blank" rel="noreferrer">
                <img className="soundPic" src={champion} alt="Nike_Dance"/>
              </a>
            </div>
            <div className="soundProjectDescription">
              <br></br>
              <div>{musicstr} Lewein</div>
              <div>{yearstr} 2021</div>
            </div>            
          </div>
          <div className="soundProjectListContainer">
            <a className="soundProjectLink" href={allforyouUrl} target="_blank" rel="noreferrer">
              <img className="soundPic" src={allforyou} alt="All_for_you"/>
            </a>
            <div className="soundProjectDescription">
              <br></br>
              <div>{musicstr} Lewein</div>
              <div>{yearstr} 2021</div>
            </div>  
          </div>
          <div className="soundProjectListContainerNuin">
            <div className="soundProjectNuin">
              <a className="soundProjectLink" href={nuinUrl} target="_blank" rel="noreferrer">
                <img className="soundPic" src={nuin} alt="Nu_In"/>
              </a>
            </div>
            <div className="soundProjectDescription">
              <br></br>
              <div>{musicstr} Lewein</div>
              <div>{yearstr} 2020</div>
            </div>             
          </div>
          <div className="soundProjectListContainer">
            <a className="soundProjectLink" href={guidomariaUrl} target="_blank" rel="noreferrer">
              <img className="soundPic" src={guidomaria} alt="Guido_Maria"/>
            </a>
            <div className="soundProjectDescription">
              <br></br>
              <div>{musicstr} Lewein</div>
              <div>{yearstr} 2020</div>
            </div>              
          </div>
          <div className="soundProjectListContainer">
            <a className="soundProjectLink" href={danfoxUrl} target="_blank" rel="noreferrer">
              <img className="soundPic" src={danfox} alt="Dan_FOX"/>
            </a>
            <div className="soundProjectDescription">
              <br></br>
              <div>{musicstr} Lewein</div>
              <div>{yearstr} 2020</div>
            </div>            
          </div>      
        </div>
        <HomeFooter/>
      </div>
    </div>
    )
  }
}

// export class Music extends React.Component {
//   render () {
//     return (
//       <div className="musicContainer">
//         <div className="col1">
//           About Music
//         </div>
//         <div className="col2">
//           Projects Music
//         </div>
//       </div>
//     )
//   }
// }

// export class Art extends React.Component {
//   render () {
//     return (
//       <div className="artContainer">
//         <div className="col1">
//           About Art
//         </div>
//         <div className="col1">
//           <div></div>
//         </div>
//       </div>
//     )
//   }
// }
