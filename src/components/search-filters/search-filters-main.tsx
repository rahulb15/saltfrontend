import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchFilters from './search-filters';
import SearchFiltersResult from './search-filters-result';

const SearchFiltersMain = () => {
    return (
        <>
            <div className="ss-search-filters">
                <Container>
                    <Row>
                        <Col xl={3}>
                            <SearchFilters/>
                        </Col>

                        <Col xl={9}>
                            <SearchFiltersResult/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};


export default SearchFiltersMain;