import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Summary from './summary';

const AvailabilityAndSummary = () => {
    return (
        <>
            <div className="availality-summary">
                <Container>
                    <Row>
                        <Col md={7}>
                        
                        </Col>
                        <Col md={4}>
                        <Summary/>
                        </Col>
                    </Row>
                </Container>
            
            </div>

        </>
    );
};

export default AvailabilityAndSummary;