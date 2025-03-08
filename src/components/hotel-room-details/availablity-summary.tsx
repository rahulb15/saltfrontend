import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Summary from './summary';
import Availablity from './availablity';
const AvailabilityAndSummary = () => {
    return (
        <>
            <div className="availality-summary">
                <Container>
                    <Row>
                        <Col lg={7}>
                        <Availablity/>
                        </Col>
                        <Col lg={4}>
                        <Summary/>
                        </Col>
                    </Row>
                </Container>
            
            </div>

        </>
    );
};

export default AvailabilityAndSummary;