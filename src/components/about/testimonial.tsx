'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const reviews = [
        {
          profile: "/index/user1.jpg",
          name: "Lucas Anderson",
            position: "Data Scientist",
          description: "Lorem ipsum dolor amet is sit Lorem amet ametcon in sectetur suspe is ndisse. Lorem ipsum dolor sit amet in ipsum consectetur suspend isseLorem ipsum dolor sit amet consectetur into",
        },
        {
            profile: "/index/user2.jpg",
            name: "Lucas Anderson",
              position: "Data Scientist",
            description: "Lorem ipsum dolor amet is sit Lorem amet ametcon in sectetur suspe is ndisse. Lorem ipsum dolor sit amet in ipsum consectetur suspend isseLorem ipsum dolor sit amet consectetur into",
          },
          {
            profile: "/index/user3.png",
            name: "Lucas Anderson",
              position: "Data Scientist",
            description: "Lorem ipsum dolor amet is sit Lorem amet ametcon in sectetur suspe is ndisse. Lorem ipsum dolor sit amet in ipsum consectetur suspend isseLorem ipsum dolor sit amet consectetur into",
          },
          {
            profile: "/index/user3.png",
            name: "Lucas Anderson",
              position: "Data Scientist",
            description: "Lorem ipsum dolor amet is sit Lorem amet ametcon in sectetur suspe is ndisse. Lorem ipsum dolor sit amet in ipsum consectetur suspend isseLorem ipsum dolor sit amet consectetur into",
          },
      ];
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                },
              },
          ],
      };
    return (
        <>
            <div className="tesimonials">
                <Container>
                    <div className="text-content header-div amenites-div testimonials">
                        <div className="left-side">
                            <div className="div">
                                <h2>Testimonials</h2>
                                <p className="text-gray">Our Client Testimonials</p>
                            </div>
                            <img src="/index/bulb-heading.png" width={50} alt="" className="bulb" />

                            <div className="bottom-div">
                                <img src="/index/straightline.png" alt="" className="bottom-line" />
                                <img src="/index/desktop.png" alt="" className='desktop-img' />
                                
                            </div>

                        </div>
                    </div>

                    <div className="google-reviews-slider">
                 <Container>

                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-user">
                                <img
                                src={review.profile}
                                alt={review.name}
                                className="user-profile"
                                />
                                <div className="user-text">
                                    <p className="review-name">{review.name}</p>
                                    <p className="position">{review.position}</p>
                                   
                                </div>
                            </div>
                            <p className='description'>{review.description}</p>
                        </div>
                        ))}
                    </Slider>
                    </Container>

                 </div>
                </Container>
            </div>
        </>
    );
};

export default Testimonials;

