'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BookingOff = () => {
    const reviews = [
        {
            profile: "/index/off-img.png",
            name: "Unlock 25% off your stay Save 25% on Baku’s best hotel",
              },
        {
            profile: "/index/off-img.png",
            name: "Unlock 25% off your stay Save 25% on Baku’s best hotel",
        }, 
        {
            profile: "/index/off-img.png",
            name: "Unlock 25% off your stay Save 25% on Baku’s best hotel",
        }, 
        {
            profile: "/index/off-img.png",
            name: "Unlock 25% off your stay Save 25% on Baku’s best hotel",
        }, 
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <div className="booking-off">
                <Container>
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} className="booking">
                                <Row>
                                <Col md={6}>
                                <img
                                        src={review.profile}
                                        alt={review.name}
                                        className="booking-img"
                                    />
                                </Col>
                                <Col md={6} className='align-items-center d-flex border-left'>
                                    <div className="booking-off-text">
                                  
                                        <p className="review-name">
                                        <img
                                        src="/index/quotation-icon.png"
                                        className="quotation-left"
                                    />
                                            {review.name}

                                        <img
                                        src="/index/quotation-icon.png"
                                        className="quotation-right"
                                    />
                                        </p>
                                        
                                    </div>
                                    </Col>
                            </Row>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </>
    );
};

export default BookingOff;

