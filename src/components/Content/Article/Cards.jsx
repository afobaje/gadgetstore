import React from "react";
import "./Cards.css";
import Drone from "./Assets/unsplash_drone.png";
import speaker1 from "./Assets/speaker.png";
import speaker2 from "./Assets/bluetooth.png";
import speaker3 from "./Assets/unsplash_speaker.png";
import Hdphone1 from "./Assets/uphdphone.png";
import Hdphone2 from "./Assets/unsplash_LSNJ-pltdu8.png";
import Hdphone3 from "./Assets/hdphonedown.png";
import Hdphone4 from "./Assets/5d02da5df552836db894cead8a68f5f3 2.png";
import Hdphone5 from "./Assets/5d02da5df552836db894cead8a68f5f3 3.png";
import Camera from "./Assets/cloud.png";

const Cards = () => {
  return (
    <article className="card-slide">
      <div className="card-wrapper">
        <div className="card-wrapperone">
          <div className="cardtxt">
            <p className="smalltext">Best life experience</p>
            <p className="card-wrapperonehead h2">Maximum High Magnification</p>
            <a href="http://" className="card-shop">
              Shop
            </a>
          </div>
          <div className="cardimg">
            <img src={Drone} alt="" />
          </div>
        </div>
        <div className="card-wrappertwo">
          <div className="wrappertwo-first">
            <div className="cardtxt">
              <p className="smalltext">Minimalism Design</p>
              <p className="wrappertwo-first h2">Music Makes Feel Better</p>
              <a href="" className="card-shop">
                Shop
              </a>
            </div>
            <div className="cardimg speakers">
              <div className="imgc">
                <img src={speaker1} alt="" />
              </div>
              <div className="imgc">
                <img src={speaker2} alt="" />
              </div>
              <div className="imgc">
                <img src={speaker3} alt="" />
              </div>
            </div>
          </div>
          <div className="wrappertwo-second">
            <div className="cardtxt">
              <p className="smalltext">High Tech Product</p>
              <p className="wrappertwo-second h2">Monster Beats Headphones</p>
              <a href="" className="card-shop">
                Shop
              </a>
            </div>
            <div className="cardimg dave">
              <img src={Hdphone5} alt="" />
              <img src={Hdphone4} alt="" />
              <img src={Hdphone1} alt="" />
              <img src={Hdphone2} alt="" />
              <img src={Hdphone3} alt="" />
            </div>
          </div>
        </div>
        <div className="card-wrapperthree">
          <div className="cardtxt">
            <p className="gold ">Play The Dream</p>
            <p className="card-wrapperthreehead burma">
              Nikon Ultimate Zoom Picture
            </p>
            <a href="" className="cake">
              Shop
            </a>
          </div>
          <div className="cardimg">
            <img src={Camera} alt="" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cards;
