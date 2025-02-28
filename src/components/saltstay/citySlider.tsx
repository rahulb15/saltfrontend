"use client";

import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Container } from "reactstrap";

const cityData = [
  { name: "Delhi", image: "/index/delhi.svg" },
  { name: "Noida", image: "/index/noida.svg" },
  { name: "GuruGaon", image: "/index/gurgaon.svg" },
  { name: "Mohali", image: "/index/mohali.svg" },
  { name: "Golf Course Road", image: "/index/delhi.svg" },
  { name: "Extension Road", image: "/index/delhi.svg" },
  { name: "Golf Course Road", image: "/index/delhi.svg" },
  { name: "Extension Road", image: "/index/delhi.svg" },
  { name: "Sohana Road", image: "/index/delhi.svg" },

];

const CitySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
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
    <div className="ss-city-slider">
    <Container >
      <Slider {...settings}>
        {cityData.map((city, index) => (
          <div key={index} className="city p-3">
            <div className="text-center border-0">
                <div className="img-bg">
                <Image
                    src={city.image}
                    alt={city.name}
                    width={400}
                    height={250}
                    className="card-img-top rounded"
                />
                </div>
                <h5 className="card-title">{city.name}</h5>
            </div>
          </div>
        ))}
      </Slider>

      <img src="/index/trollybag.svg" alt="" className="trollybag" />
    </Container>
    </div>
  );
};

export default CitySlider;
