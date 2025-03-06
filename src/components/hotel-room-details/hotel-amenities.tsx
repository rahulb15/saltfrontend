"use client";
import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
const HotelAmenities = () => {
    return (
        <>
             <Container>
                <div className="text-content header-div amenites-div">
                    <div className="left-side">
                        <div className="div">
                            <h2>Hotel Amenities</h2>
                        </div>
                        <img src="/index/bulb-heading.png" width={50} alt="" className="bulb" />

                        <div className="bottom-div">
                            <img src="/index/straightline.png" alt="" className="bottom-line" />
                            <div className="btn view-btn">View Rooms</div>
                        </div>

                    </div>

                    <ul>
                        <li>
                            <div className="amenties-bg">
                                <img src="/index/breakfast-icon.png" alt=""/>
                            </div>
                            <p>Buffet Breakfast with Healthy Options </p>
                        </li>
                        <li>
                            <div className="amenties-bg">
                                <img src="/index/coffee-icon.png" alt=""/>
                            </div>
                            <p>Complimentary coffee station with snacks </p>
                        </li>
                        <li>
                            <div className="amenties-bg">
                                <img src="/index/location-icon.png" alt=""/>
                            </div>
                            <p>Located at PrimeBusiness Hubs</p>
                        </li>
                        <li>
                            <div className="amenties-bg">
                                <img src="/index/gym-icon.png" alt="" />
                            </div>
                            <p>Gym </p>
                        </li>
                        <li>
                            <div className="amenties-bg">
                                <img src="/index/brush-icon.png" alt=""/>
                            </div>
                            <p>Premium Toiletries</p>
                        </li>
                        <li>
                            <div className="amenties-bg">
                                <img src="/index/inchtape-icon.png" alt=""/>
                            </div>
                            <p>Large Size Room</p>
                        </li>
                    </ul>
                </div>
            </Container>

        </>
    );
};

export default HotelAmenities;