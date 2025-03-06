import HotelRoomDetails from '@/components/hotel-room-details';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
const HotelDetailsPage = () => {
    return (
        <>
            <MetaData pageTitle="hotel-room-details">
                <Wrapper>
                    <main>
                        <HotelRoomDetails />
                    </main>
                </Wrapper>
            </MetaData>
        </>
    );
};

export default HotelDetailsPage;