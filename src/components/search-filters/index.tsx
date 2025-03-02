import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SaltStayzHome from '../saltstay/location-search';
import SearchFiltersMain from './search-filters-main';

const SearchFiltersIndex = () => {
    return (
        <>
        <div className="bookNow py-5">
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
        <SaltStayzHome/>
        <SearchFiltersMain/>
        </>
    );
};

export default SearchFiltersIndex;