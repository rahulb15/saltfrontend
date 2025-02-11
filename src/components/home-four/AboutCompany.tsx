import Image from "next/image";
import React from "react";
import AboutImgSeven from "../../../public/assets/rooms/9.png";
import AboutImgEight from "../../../public/assets/images/about/about-img-8.png";
import Link from "next/link";

const AboutCompany = () => {
  return (
    <>
      <section className="bd-about-area flash-white section-space fix">
        <div className="container">
          <div className="row gy-24 justify-content-between">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 wow bdFadeInLeft">
              <div className="about-content-wrapper">
                <div className="section-title-wrapper mb-35">
                  <span className="section-subtitle mb-15">
                    About Our Company
                  </span>
                  <h2 className="section-title mb-20">
                    Saltstayz: Contemporary Comfort
                  </h2>
                  <p>
                    Saltstayz is a contemporary boutique hotel chain offering a unique and immersive experience for discerning travelers. Nestled in vibrant urban settings, we capture the essence of modern design and comfort, ideal for both business and leisure.
                  </p>
                </div>
                <div className="about-feature-list">
                  <ul>
                    <li>
                      <span className="list-icon">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <p>
                        Exceptional venue for social events, corporate events, and weddings
                      </p>
                    </li>
                    <li>
                      <span className="list-icon">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <p>Strong footprint in the Delhi NCR market</p>
                    </li>
                    <li>
                      <span className="list-icon">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <p>
                        Mid-budget to premium market segment offerings
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="about-btn-wrap">
                  <div className="about-btn">
                    <Link
                      href="#"
                      className="bd-primary-btn btn-style has-arrow is-bg radius-60"
                    >
                      <span className="bd-primary-btn-arrow arrow-right">
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                      <span className="bd-primary-btn-text">Our Story</span>
                      <span className="bd-primary-btn-circle"></span>
                      <span className="bd-primary-btn-arrow arrow-left">
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="about-call">
                    <span>
                      <i className="icon-support"></i>
                    </span>
                    <Link className="fw-5" href="tel:18004536744">
                      1-800-453-6744
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12">
              <div className="about-thumb-wrapper about-style-three ">
                <div className="about-thumb-seven wow img-custom-anim-left">
                  <Image src={AboutImgSeven} alt="Saltstayz hotel exterior" />
                </div>
                <div className="about-thumb-eight wow img-custom-anim-right">
                  <Image src={AboutImgSeven} alt="Saltstayz hotel interior" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;