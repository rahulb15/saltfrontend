"use client";
import React from "react";
import aboutImgThree from "../../../public/assets/rooms/4.webp";
import aboutImgFour from "../../../public/assets/rooms/5.webp";
import aboutShape from "../../../public/assets/images/shapes/about-shape.png";
import { imageLoader } from "@/hooks/image-loader";
import Image from "next/image";

const AboutArea = () => {
  return (
    <>
      <div className="row gy-24 justify-content-between">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 wow bdFadeInLeft">
          <div className="about-thumb-wrap about-style-two">
            <div className="about-thumb-one">
              <Image
                src={aboutImgThree}
                loader={imageLoader}
                style={{ width: "100%", height: "100%" }}
                alt="Saltstayz hotel"
              />
            </div>
            <div className="about-thumb-two">
              <Image
                src={aboutImgFour}
                loader={imageLoader}
                style={{ width: "100%", height: "100%" }}
                alt="Saltstayz event space"
              />
            </div>
            <div className="about-icon-badge">
              <span>
                <i className="icon-hotel"></i>
              </span>
            </div>
            <div className="about-shape">
              <Image
                src={aboutShape}
                loader={imageLoader}
                style={{ width: "100%", height: "100%" }}
                alt="shape"
              />
            </div>
            <div className="about-experience">
              <h2 className="about-experience-title">100+</h2>
              <span className="about-experience-subtitle">
                Keys Across <br /> Properties
              </span>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
          <div className="section-title-wrapper mb-35">
            <span className="section-subtitle mb-15">About Us</span>
            <h2 className="section-title mb-20">
              Discover Contemporary Comfort with Saltstayz
            </h2>
          </div>
          <div className="about-list">
            <ul>
              <li>
                <span className="about-list-icon">
                  <i className="icon-hotel-building"></i>
                </span>
                <div>
                  <span className="about-list-title mb-5">
                    Urban Boutique Experience
                  </span>
                  <span className="about-list-subtitle">
                    Saltstayz offers a unique and immersive experience in vibrant urban settings, perfect for both business and leisure travelers.
                  </span>
                </div>
              </li>
              <li>
                <span className="about-list-icon">
                  <i className="icon-event-management"></i>
                </span>
                <div>
                  <span className="about-list-title mb-5">Versatile Event Spaces</span>
                  <span className="about-list-subtitle">
                    With 10 best-in-class event spaces accommodating 50 to 250 guests, we're ideal for social events, corporate functions, and weddings.
                  </span>
                </div>
              </li>
              <li>
                <span className="about-list-icon">
                  <i className="icon-wallet"></i>
                </span>
                <span>
                  <span className="about-list-title mb-5">
                    Value for Money
                  </span>
                  <span className="about-list-subtitle">
                    Saltstayz provides reliable and accessible accommodation options in the mid-budget to premium market segment without compromising on quality.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;