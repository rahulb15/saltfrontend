"use client";

import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Container } from "reactstrap";

const deals = [
    {
      id: 1,
      discount: "30%",
      title: "Get 30% off your FIRST STAY !",
      image: "/assets/rooms/10.png", // Using image from your assets
      buttonText: "Book Now",
      type: "primary",
    },
    {
      id: 2,
      discount: "20%",
      title: "Get 30% off on FOOD",
      image: "/assets/rooms/10.png",
      buttonText: "Book Now",
      type: "primary",
    },
    {
      id: 3,
      discount: "10%",
      title: "Use Coupon & Get 10% off !",
      image: "/assets/rooms/10.png",
      buttonText: "SALT10",
      type: "secondary",
      couponCode: "SALT10"
    },
    {
      id: 4,
      discount: "10%",
      title: "Use Coupon & Get 10% off !",
      image: "/assets/rooms/10.png",
      buttonText: "Book Now",
      type: "secondary",
    },
    {
      id: 5,
      discount: "10%",
      title: "Use Coupon & Get 10% off !",
      image: "/assets/rooms/10.png",
      buttonText: "Book Now",
      type: "secondary",
    },
  ];

const DealsForYou = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className="ss-deals">
    <Container >
      <div className="text-content">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="left-side">
                <div className="div">
                <h2>Deals for you </h2>
                <p>Suggestions for you better stay</p>
                </div>
                <img src="/index/bulb.svg" alt="" className="bulb"/>
            </div>
          </div>
         
          <div className="col-md-6">
            <img src="/index/straightline.png" alt="" />
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {deals.map((deal, index) => (
          <div key={index} className="p-3">
            <div className="deal-card">
                <div className="img-bg">
                    <Image
                        src={deal.image}
                        alt={deal.title}
                        width={400}
                        height={250}
                        className="card-img-top"
                    />
                    <div className="badge-salt">
                        {deal.buttonText}
                    </div>
                <div className="badge">Get <span>{deal.discount} </span>Off</div>
                </div>
                <h5 className="card-title">   {deal.title} <span></span></h5>
            </div>
          </div>
        ))}
      </Slider>

    </Container>
    </div>
  );
};

export default DealsForYou;
