import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import HotelRoom from './hotel-room';
import HomeAmenities from './home-amenities';
const DayUseRoom = () => {
    return (
        <>
            <div className="day-use-room">
                <Container>
                      <div className="bookNow">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className="text-end">
                                        <img src="/index/booking-time.png" alt="book" width={40} />
                                        <p>Book Direct for the lowest prices!</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="text-content header-div">
                        <div className="left-side">
                            <div className="div">
                            <h2>Day Use Room</h2>
                            </div>
                            <img src="/index/bulb-heading.png" alt="" className="bulb"/>
                            
                            <div className="bottom-div">
                                <img src="/index/straightline.png" alt="" className="bottom-line"/>
                                <ul>
                                    <li>Couple Friendly</li>
                                    <li>Local ID Accepted </li>
                                    <li>Clean Linen </li>
                                    <li>Friendly Staff </li>
                                    <li> 6 Hours Stay</li>
                                    <li>     Pay at Hotel</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                    <div className="homeamenites-row">
                    <Row>
                        <Col lg={7}>
                            <HomeAmenities/>
                        </Col>
                        <Col lg={5}>
                        <div className="term-condition">
                            <strong>Terms and conditions: </strong>
                            <ul>
                                <li>Check-in and check-out on the same day.</li>    
                                <li>6-hour slot available: 8 AM to 10 PM.</li>
                                <li>Stays longer than 6 hours are subject to availability and additional charges.</li>
                                <li>100% booking amount required at check-in.</li>
                            </ul>
                        </div>
                        </Col>
                    </Row>
                    </div>
                    
                    <HotelRoom/>
                    <div className="check-in pt-3">
                        <div className="checktime">
                            <h2>Check-in 9:00AM</h2>
                            <h2>Check-out 5:00PM</h2>
                            <p>Stays longer than 6 hours are subject to availability and additional charges.</p>
                        </div>
                        <div className="img">
                            <img src="/index/restaurant2.png" alt=""  />
                        </div>
                    </div>
                </Container>
            </div>
          
        </>
    );
};

export default DayUseRoom;