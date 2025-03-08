'use client';
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';



const GoogleReviews = () => {
    const reviews = [
        {
          profile: "/index/user-profile.png",
          name: "-Ranjan Sharma",
          rating: 5,
          description: "Staying in this hotel was excellent. Rooms are neat and clean. Food is excellent. Room service is also very good. Hotel staff are very cooperative and helpful. One should come and stay in this hotel and feel the difference.",
          name_two:"-Inder Jeet sharma",
        },
        {
          profile: "/index/user-profile.png",
          name: "-Ranjan Sharma",
          rating: 4,
          description: "I've been here for over a month and in my opinion it's one of the best places to consider for long term as well as short stays near Golfe and decked with all major amenities, ample parking space for your vehicle. Close to all the happening places in the city.",
          name_two:"-Rajan Sharma",
        },
        {
          profile: "/index/user-profile.png",
          name: "-Ranjan Sharma",
          rating: 5,
          description: "Clean, reasonably priced hotel close to the airport (hard to find all 3). Staff were friendly and helpful.",
          name_two:"-Kelly Smith",
        },
        {
        profile: "/index/user-profile.png",
        name: "-Ranjan Sharma",
        rating: 5,
        description: "I booked this hotel for my solo trip for business purpose. It was a very comfortable stay. The hotel location is good. Highly 's a safest option for female solo travelers.",
        name_two:"-Pinki Singh",
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
            <div className="google-reviews">
                <Container>
                <div className="text-content header-div amenites-div guest-div px-0">
                        <div className="left-side">
                        <img src="/index/google-reviews.png" width={100} alt="" className="google-review" />
                            <div className="div ms-3">
                                <h2>Google Reviews</h2>
                                <p>From 63 Reviews on Google</p>
                            </div>
                            <img src="/index/bulb-heading.png" width={50} alt="" className="bulb" />
                            <div className="bottom-div">
                                <img src="/index/straightline.png" alt="" className="bottom-line" />
                            </div>
                        </div>
                    </div>
                </Container>

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
                                    <div className="rating d-flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <img key={i} src="/index/star.png" alt="star" width={25} />
                                    ))}
                                    </div>
                                   
                                </div>
                            </div>
                            <p className='description'>{review.description}</p>
                            <p className='review-name2'>{review.name_two}</p>
                        </div>
                        ))}
                    </Slider>
                    </Container>

                 </div>
            </div>
        </>
    );
};

export default GoogleReviews;