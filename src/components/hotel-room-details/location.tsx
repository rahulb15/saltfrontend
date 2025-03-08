'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';



const LocationDetails = () => {

    return (
        <>
            <div className="location-detials">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="location-head">
                                <img src="/index/location.png" alt="" width={44}/>
                                <div className="text">
                                    <h3>Location</h3>
                                    <p className="black-text"> 
                                        Galleria Market & MG Road</p>
                                </div>
                             </div>

                                <p className="black-text mb-15">A Bright Retreat for Every Traveler</p>
                                <p className='mb-35'>
                                    With its vibrant and welcoming design, Salt Stayz Hotel Express is a refreshing haven for both business and leisure travelers. Just like the lively spirit of the city around it, the hotel offers a peaceful escape where comfort.
                                </p>
                        </Col>
                        <Col md={6}>
                        <div className="map">
                            {/* <iframe
                            title="Google Map"
                            width="100%"
                            height="300"
                        
                            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Delhi,India"
                            allowFullScreen
                        ></iframe> */}
                        <img src="/index/location-dummy.jpg" alt=""/>
                        </div>
                       
                        </Col>
                    </Row>
                    <h4>About this <span>Listing</span></h4>
                    <strong className="text-gray">Property Phone Number for Direct Booking: 
                        <a href="callto:+919319719659" className="call">+91 9319719659</a>
                    </strong>
                    <strong className="text-gray">Email: 
                        <a href="mailto:saltstayzhorizon@gmail.com" className="call">saltstayzhorizon@gmail.com</a>
                    </strong>
                    <p>Situated next to the DLF Sector 42-43 metro station on Golf Course Road, this hotel is perfect for both business and leisure travellers looking for comfort and convenience. </p>
                    <p>The rooms are tastefully decorated and well-appointed with all the essential amenities to ensure a comfortable stay. Each room comes with air-conditioning, comfortable beds, clean linens, a flat-screen smart TV, High speed Wi-Fi, In-room dining service, Tea/ Coffee Maker and premium toiletries which one requires while travelling. </p>
                    <p>The hotel has a kitchen that serves delicious Indian and international cuisine. Our chefs use only the freshest ingredients to prepare mouth-watering dishes. </p>
                    <strong>Policies</strong>
                    <p>In keeping with Government regulations, we request all guests (on single/double/triple occupancy) to carry a photo identity to present on check-in. Foreign nationals are required to present their valid passport and visa. Indian nationals can present any government-issued photo identity address proof card e.g. driving license, passport, Aadhar card, or voter's ID card. PAN Card will not be accepted as the above. Also do keep handy proof of corporate affiliations, if you have made a corporate booking.</p>
                    <Row className='position-relative'>
                    <div className="leftside-vector">
                        <img src="/index/vec-lines.svg" alt="" className="vec-lines" />
                     </div>
                        <Col md={6}>
                            <strong>Where to hop around  SaltStayz?</strong>
                            <ul>
                                <li>DLF Golf & Country Club (5 mins)</li>
                                <li>DT Mega Mall (2 mins)</li>
                                <li>MG Road (5 mins)</li>
                                <li>One Horizon centre (5 mins)</li>
                                <li>Galleria Market (5 mins)</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <strong>Where to hop around  SaltStayz?</strong>
                            <ol>
                                <li>1. DLF Phase 1 rapid metro station (1 min) </li>
                                <li>2. Huda city centre metro station (5 mins)</li>
                                <li>3. Paras Hospital, Phase 1 (10 mins)</li>
                                <li>4. DLF Cyber City (10 mins)</li>
                                <li>5. Udyog Vihar (12 mins)</li>
                                <li>6. Gurugram Railway Station (25 mins)</li>
                            </ol>
                        </Col>
                    </Row>
                    <strong>Payment POLICY</strong>
                    <p>For Group & Bulk Bookings (More than 3 Rooms or Total 10 Room nights), Corporate and Social Event and Conferences. All bookings must be guaranteed at the time of reservation by a 25% Pre payment of the booking amount. </p>
                </Container>
            </div>
        </>
    );
};

export default LocationDetails;