import React from "react";
import poster1 from "../Assets/fivebox/hunterx.jpg";
import poster2 from "../Assets/fivebox/hunterbag.jpg";
import poster3 from "../Assets/fivebox/ultramen.jpg";
import poster4 from "../Assets/fivebox/ssss.jpg";
import poster5 from "../Assets/fivebox/hunterxxx.jpg";
const Fivebox = () => {
  return (
    <div className="fivebox-container">
      <div className="fivebox-wrapper row m-0 p-0">
        <div className="fivebox-three col-md-4 m-0 p-0">
          <div className="carosal-image">
            <img src={poster1} alt="" />
          </div>
          <div className="fivebox-header">
            <h2>JERSEYS</h2>
            <button className="fivebox-btn">VIEW PRODUCTS</button>
          </div>
        </div>
        <div className="fivebox-three col-md-4 m-0 p-0">
          <div className="carosal-image">
            <img src={poster2} alt="" />
          </div>
          <div className="fivebox-header">
            <h2>ACCESSORIES</h2>
            <button className="fivebox-btn">VIEW PRODUCTS</button>
          </div>
        </div>
        <div className="fivebox-three col-md-4 m-0 p-0">
          <div className="carosal-image">
            <img src={poster3} alt="" />
          </div>
          <div className="fivebox-header">
            <h2>T-SHIRT</h2>
            <button className="fivebox-btn">VIEW PRODUCTS</button>
          </div>
        </div>
        <div className="fivebox-three col-md-6 m-0 p-0">
          <div className="carosal-image">
            <img src={poster4} alt="" />
          </div>
          <div className="fivebox-header-2">
            <h2>SLIDES</h2>
            <button className="fivebox-btn">VIEW PRODUCTS</button>
          </div>
        </div>
        <div className="fivebox-three col-md-6 m-0 p-0">
          <div className="fivebox-image carosal-image">
            <img src={poster5} alt="" />
          </div>
          <div className="fivebox-header-2">
            <h2>JACKETS</h2>
            <button className="fivebox-btn">VIEW PRODUCTS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fivebox;
