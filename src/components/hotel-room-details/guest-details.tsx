'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import ReservationSummary from './reservation-summary';
import GuestDetailsForm from './guest-detilas-form';


const GuestDetails = () => {

    return (
        <>
            <div className="guest-details">
                <Container>
                    <div className="text-content header-div amenites-div guest-div">
                        <div className="left-side">
                            <div className="div">
                                <h2>GUEST DETAILS</h2>
                            </div>
                            <img src="/index/bulb-heading.png" width={50} alt="" className="bulb" />
                            <div className="bottom-div">
                                <img src="/index/straightline.png" alt="" className="bottom-line" />
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col lg={8}>
                        <GuestDetailsForm/>
                        </Col>
                        <Col lg={4}>
                            <ReservationSummary/>
                        </Col>
                    </Row>
                 
                </Container>
            </div>
        </>
    );
};

export default GuestDetails;