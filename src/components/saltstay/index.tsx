import React from 'react';
import Locationsearch from './location-search';
import CitySlider from './citySlider';
import ShowingProperties from './showing-properties';
import DealsForYou from './deals-for-you';
import HotelCategories from '../HotelCategories';
import InstagramSection from '../InstagramSection';
const SaltStayIndex = () => {
    return (
        <>
        <Locationsearch/>
        <CitySlider />
        <ShowingProperties/>
        <DealsForYou/>
        <HotelCategories/>
        <InstagramSection/>
        </>
    );
};

export default SaltStayIndex;