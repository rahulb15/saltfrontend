"use client";

import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Container } from "reactstrap";


const Destinations = () => {


  return (
    <div className="ss-destination">
    <Container >
      <div className="text-content">
        <div className="row align-items-center">
          <div className="col-md-11">
            <div className="left-side">
                <div className="div">
                <h2>Destination </h2>
                </div>
                <img src="/index/bulb-heading.png" alt="" className="bulb"/>
                <img src="/index/straightline.png" alt="" className="bottom-line"/>
            </div>
          </div>
        </div>
      </div>

      <div className="destinations">
        <ul className="destination-nav">
            <li><a href="#">Delhi</a></li>
            <li><a href="#">Mohali</a></li>

            <li><a href="#">Bangalore</a></li>
            <li><a href="#">Bangalore</a></li>
            <li><a href="#">Lucknow</a></li>
            <li><a href="#">Noida</a></li>
            <li><a href="#">Rishikesh</a></li>
            <li><a href="#">Ahemdabad</a></li>
            <li><a href="#">Ahemdabad</a></li>
            <li><a href="#">Mumbai</a></li>

        </ul>
      </div>
    
    </Container>
    <div className="rightside-trolly">
      <img src="/index/trollybag-line.png" alt="" className="trollybag" />
    </div>
    <div className="leftside-vector">
      <img src="/index/vec-lines.svg" alt="" className="vec-lines" />

    </div>
    </div>
  );
};

export default Destinations;
