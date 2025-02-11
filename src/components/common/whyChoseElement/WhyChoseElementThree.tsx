"use client";
import Image from "next/image";
import React from "react";
import chooseImgTwo from "../../../../public/assets/avtarimage/1.jpg";
import chooseImgThree from "../../../../public/assets/avtarimage/2.jpg";
import { imageLoader } from "@/hooks/image-loader";
import Link from "next/link";

const WhyChooseSaltstayz = () => {
  return (
    <>
      <div className="row gy-24 align-items-center justify-content-between">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12">
          <div className="section-title-wrapper section-title-space">
            <span className="section-subtitle mb-10">Why choose us</span>
            <h2 className="section-title mb-20">
              Experience Modern Comfort with Saltstayz
            </h2>
            <p>
              Saltstayz is a contemporary boutique hotel chain offering unique and immersive experiences for discerning travelers. We blend modern design with comfort, catering to both business and leisure needs in vibrant urban settings.
            </p>
          </div>
          <div className="choose-list-box">
            <ul>
              <li className="underline wow bdFadeInUp" data-wow-delay=".3s">
                <span>
                  <i className="icon-world-map"></i>
                </span>
                {/* <Link href="/about">Strategic Locations in Delhi NCR</Link> */}
                <Link href="#">Strategic Locations in Delhi NCR</Link>
              </li>
              <li className="underline wow bdFadeInUp" data-wow-delay=".4s">
                <span>
                  <i className="icon-cleander-check"></i>
                </span>
                {/* <Link href="/booking">Guaranteed Room Bookings</Link> */}
                <Link href="#">Guaranteed Room Bookings</Link>
              </li>
              <li className="underline wow bdFadeInUp" data-wow-delay=".35s">
                <span>
                  <i className="icon-support"></i>
                </span>
                {/* <Link href="/contact">24/7 Front Desk Support</Link> */}
                <Link href="#">24/7 Front Desk Support</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12">
          <div className="choose-thumb-wrapper p-relative">
            <div
              className="choose-thumb-main wow bdFadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="hover-effect">
                <Image
                  src={chooseImgThree}
                  loader={imageLoader}
                  style={{ width: "100%", height: "auto" }}
                  alt="Saltstayz Hotel Room"
                />
              </div>
            </div>
            <div
              className="choose-thumb-bordered wow bdFadeInRight"
              data-wow-delay=".3s"
            >
              <Image
                src={chooseImgTwo}
                loader={imageLoader}
                style={{ width: "100%", height: "auto" }}
                alt="Saltstayz Event Space"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseSaltstayz;