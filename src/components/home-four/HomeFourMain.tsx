import React from "react";
import BannerFour from "./BannerFour";
import LocationAreaFour from "./LocationAreaFour";
import OfferAreaFour from "./OfferAreaMain";
import DestinationAreaFour from "./DestinationAreaFour";
import TourAreaFour from "./TourAreaFour";
import Properties from "./Properties";
import AboutCompany from "./AboutCompany";
import DayTourArea from "./DayTourArea";
import TestimonialAreaFour from "./TestimonialAreaFour";
import WhyChooseFour from "./WhyChooseFour";
import BlogAreaFour from "./BlogAreaFour";
import InstagramArea from "../shearedComponents/InstagramArea";
import CtaAreaStyleOne from "../shearedComponents/CtaAreaStyleOne";
import Hero from "../blanck-space";
import HotelCategories from "../HotelCategories";
import InstagramSection from "../InstagramSection";
import DestinationsSection from "../DestinationsSection";

const HomeFourMain = () => {
  return (
    <>
      <Hero />
      <LocationAreaFour />
      {/* <DestinationAreaFour /> */}
      <Properties />
      <OfferAreaFour />
      <HotelCategories />
      <InstagramSection />
      <DestinationsSection />
      {/* <DestinationAreaFour /> */}
      {/* <AboutCompany />
      <DayTourArea />
      <TestimonialAreaFour /> */}
      {/* <CtaAreaStyleOne /> */}
      {/* <WhyChooseFour />
      <BlogAreaFour />
      <InstagramArea ptClass="section-space-top" /> */}
    </>
  );
};

export default HomeFourMain;
