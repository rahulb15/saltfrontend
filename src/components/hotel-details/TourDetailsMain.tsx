import React from "react";
import HotelDetails from "./HotelDetails";
import Breadcrumb from "../common/breadcrumb/BreadCrumb";
import { idType } from "@/interFace/interFace";

const TourDetailsMain = ({ id }: idType) => {
  return (
    <>
      {/* <Breadcrumb titleOne="Hotel Details" titleTwo="Hotel Details" /> */}
      <HotelDetails id={id} />
    </>
  );
};

export default TourDetailsMain;
