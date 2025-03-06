import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import HotelRoomDetail from './hotel-room-detail';
import HotelRoomGallery from './hotel-room-gallery';
import HotelAmenities from './hotel-amenities';
import AvailabilityAndSummary from './availablity-summary';
const HotelRoomDetails = () => {
    return (
        <>
            <div className="bookNow py-4">
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
            <HotelRoomGallery/>

            <HotelRoomDetail />
            <HotelAmenities/>
            <AvailabilityAndSummary/>

              <Container>
                <div className="check-in pt-3">
                    <div className="checktime">
                        <h2>Check-in 2:00pm </h2>
                        <h2> Check-out 11:00am</h2>
                        <p>Book directly to request Early Check-in / Late Check-out, as per availability.</p>
                    </div>
                    <div className="img">
                        <img src="/index/trollybag-line.png" alt="" />
                    </div>
                </div>
            </Container>

        </>
    );
};

export default HotelRoomDetails;