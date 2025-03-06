"use client";
import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
const HotelRoomDetail = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <div className="hotel-room-detail">
                <Container>
                    <div className="text-end d-flex align-items-center m-0 justify-content-end gap-2 py-2">
                        <img src="/index/bulb-heading.png" alt="" width={20}/>
                        <p className='text-gray'>Property with private kitchens and rooms boasting balconies</p>
                    </div>
                    <div className="heading-sec">
                        <h1><span className="text-gray">Salt Stayz Premier</span> Galleria Market Road & Sector 27</h1>
                        <div className="img">
                            <img src="/index/makemytrip-meter.png" alt=""  width={104} className='mb-3'/>
                            <img src="/index/makemytrip.png" alt="" width={96}/>
                        </div>
                    </div>
                    <p> <div className="pt-3">
                <p>
                    Nestled in the heart of Gurgaon, Saltstayz Premier offers a peaceful retreat amidst the bustling city life. 
                    This is where modern luxury meets serene comfort, providing guests with a tranquil escape. 
                    {isExpanded && (
                        "Enjoy a stay where sophistication and relaxation blend seamlessly, offering a perfect balance of convenience and calm, just moments away from the vibrant city."
                    )}
                </p>
                <button className="btn btn-link" onClick={toggleReadMore}>
                    {isExpanded ? "Read Less" : "Read More..."}
                </button>
            </div></p>
                </Container>
            </div>
            

        </>
    );
};

export default HotelRoomDetail;