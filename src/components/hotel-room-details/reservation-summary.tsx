'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';




const ReservationSummary = () => {

    return (
        <>
            <div className="summary-div reservation-div">
                <h2>
                    RESERVATION SUMMARY
                </h2>
                <div className="checkin-detail outline-div mt-20">
                    <div className="leftside">
                        <p className="gray-text">CHECK IN</p>
                        <strong>20 Feb, 2025</strong>
                    </div>
                    <div className="badge success-badge">1 Night</div>
                    <div className="rightside">
                        <p className="gray">CHECK OUT</p>
                        <strong>21  Feb, 2025</strong>
                    </div>
                </div>
                <div className="checkin-detail flex-column">
                    <div className="badge info-badge">P R E M I E R</div>
                    <h5>Standard Room</h5>
                    <div className="gray-text">₹2259.35 /Night x 1 (1 Guest)</div>
                </div>

                <div className="checkin-detail flex-column">
                    <div className="leftside">
                        <h6>Total Room Charges</h6>
                        <h6>₹2259.35</h6>
                    </div>
                    <div className="leftside">
                        <h6>Total Taxes</h6>
                        <h6>₹31.12</h6>
                    </div>
                    <div className="leftside">
                        <h6>Add-on Charges</h6>
                        <h6>₹259.35</h6>
                    </div>
                </div>

                <div className="checkin-detail outline-div br-3">
                    <h6 className="gray-text">Total Price</h6>
                    <h6>₹2290.47</h6>
                </div>

                <div className="img">
                    <img src="/index/trollybag-line.png" alt="" />
                </div>
            </div>

        </>
    );
};

export default ReservationSummary;