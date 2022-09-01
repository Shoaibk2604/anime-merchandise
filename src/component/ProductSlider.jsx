import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import bakugo from "../Assets/productslider/bakugo.png";
const ProductSlider = (props) => {
  const [filter, filterData] = useState([]);
  const [over, setOver] = useState(-1);
  //Load filter data
  useEffect(() => {
    props.data && filteredData();
  }, []);

  // slider filter
  const filteredData = () => {
    const data = props.data.filter((ele, index) => {
      if (props.condition === "my hero academia") {
        return ele.categoryName === props.condition;
      } else if (props.condition === "best seller") {
        return ele.rating >= 4;
      } else {
        return ele.discount >= 30;
      }
    });
    filterData(data);
  };
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1195,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false,
          initialSlide: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };
  return (
    <div className="product-slider-container">
      {props.data && props.condition === "my hero academia" ? (
        <div className="product-slider-heading">
          <h4>NEW ARRIVALS</h4>
          <h2>{props.condition}</h2>
        </div>
      ) : props.condition === "best seller" ? (
        <div className="product-slider-heading">
          <h2>{props.condition}</h2>
        </div>
      ) : (
        <div className="product-slider-heading">
          <h4>Featured collection</h4>
          <h2>last chance</h2>
        </div>
      )}

      <Slider {...settings} className="margin-box">
        {filter &&
          filter.map((product, index) => {
            return (
              <div className="product-div" key={index}>
                <div className="product-image" onMouseEnter={()=> setOver(index)} onMouseLeave={()=> setOver(-1)}>
                  {over === index && product.imageHover ? ( 
                    <img src={product.imageHover} alt="" />
                  ) : (
                    <img src={product.image} alt="" />
                  )}
                </div>
                <div className="product-title">
                  <p>{product.categoryName}</p>
                  <h2>{product.productName}</h2>
                </div>
              </div>
            );
          })}
      </Slider>
      <div className="product-view-btn">
        <a href="">view all products</a>
      </div>
    </div>
  );
};

export default ProductSlider;
