import React from 'react';
import TourGridLeft from './TourGridLeft';
import Breadcrumb from '../common/breadcrumb/BreadCrumb';
import CtaAreaFive from '../home-five/CtaAreaFive';

const TourGridLeftMain = () => {
    return (
        <>
            <Breadcrumb titleOne='Hotel List' titleTwo='Hotel List' />
            <CtaAreaFive />
            <TourGridLeft />
        </>
    );
};

export default TourGridLeftMain;