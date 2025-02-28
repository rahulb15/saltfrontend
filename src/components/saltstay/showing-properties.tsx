"use client";

import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Container } from "reactstrap";

const cityData = [
  { name: " Galleria Market & MG Road", bade:"Premimum", image: "/index/property-img.jpg",  startingAt: "3200 /-"},
  { name: " Galleria Market & MG Road", bade:"Premimum", image: "/index/property-img2.jpg",  startingAt: "3200 /-"},
  { name: " Galleria Market & MG Road", bade:"Premimum", image: "/index/property-img.jpg",  startingAt: "3200 /-"},
  { name: " Galleria Market & MG Road", bade:"Premimum", image: "/index/property-img2.jpg",  startingAt: "3200 /-"},
  { name: " Galleria Market & MG Road", bade:"Premimum", image: "/index/property-img2.jpg",  startingAt: "3200 /-"},
  { name: " Galleria Market & MG Road", bade:"Premimum", image: "/index/property-img.jpg",  startingAt: "3200 /-"},
  { name: " Galleria Market & MG Road", bade:"Premimum", image: "/index/property-img2.jpg",  startingAt: "3200 /-"},
  { name: " Galleria Market & MG Road", bade:"Premimum", image: "/index/property-img.jpg",  startingAt: "3200 /-"},
  { name: " Galleria Market & MG Road", bade:"Premimum", image: "/index/property-img2.jpg",  startingAt: "3200 /-"},

];

const ShowingProperties = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="ss-showProperties">
    <Container >
      <div className="text-content">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-4">
          <h6>Showing Properties in Gurgaon</h6>
          </div>
          <div className="col-md-4">
            <img src="/index/straightline.png" alt="" />
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {cityData.map((city, index) => (
          <div key={index} className="p-3">
            <div className="city">
                <div className="img-bg">
                <Image
                    src={city.image}
                    alt={city.name}
                    width={400}
                    height={250}
                    className="card-img-top"
                />
                <div className="badge">{city.bade}</div>
                </div>
                <p className="card-title">{city.name}</p>
                <img src="/index/bottom-line.png" alt="" className="bottom-line" />
                <h5 className="card-title">Starting @  <span> {city.startingAt}</span></h5>
            </div>
          </div>
        ))}
      </Slider>

    </Container>
    </div>
  );
};

export default ShowingProperties;
