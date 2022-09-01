import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import tshirt3 from "../Assets/slider/tshirt3.jpg";
import tshirt2 from "../Assets/slider/tshirt2.jpg";
import shorts from "../Assets/slider/shorts.jpg";
import socks from "../Assets/slider/socks.jpg";

const Carousal = () => {
  return (
    <Carousel
    autoPlay
    useKeyboardArrows={true}
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    interval={5000}
    transitionTime={1000}
    className="carousal">
      <div className="carosal-image">
        <img src={tshirt3} />
        <div className="carosal-heading">
          <h3>NEW ARRIVALS</h3>
          <h2>SAMURAI CHAMPLOO</h2>
          <button className="carosal-btn">SHOP NOW</button>
        </div>
      </div>
      <div className="carosal-image">
        <img src={tshirt2} />
        <div className="carosal-heading">
          <h3>NEW ARRIVALS</h3>
          <h2>T-SHIRTS</h2>
          <button className="carosal-btn">SHOP NOW</button>
        </div>
      </div>
      <div className="carosal-image">
        <img  src={shorts} />
        <div className="carosal-heading">
          <h3>NEW ARRIVALS</h3>
          <h2>SHORTS</h2>
          <button className="carosal-btn">SHOP NOW</button>
        </div>
      </div>
      <div className="carosal-image">
        <img src={socks} />
        <div className="carosal-heading">
          <h3>NEW ARRIVALS</h3>
          <h2>SOCKS</h2>
          <button className="carosal-btn ">SHOP NOW</button>
        </div>
      </div>
    </Carousel>
  );
};
export default Carousal;