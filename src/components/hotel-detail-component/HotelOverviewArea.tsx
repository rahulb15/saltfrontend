"use client";
import { tourData } from "@/data/tour-data";
import React from "react";
import RoomSingleCard2 from "../common/roomElements/RoomSingleCard2";
import BookingFormModal from "@/elements/modals/BookingFormModal";
const HotelOverviewArea = ({hotelData, rooms, id}:any) => {
    console.log(hotelData, rooms)
  return (
    <>
      <section className="bd-service-area section-space">
        <div className="container">
          <div className="row gy-24 align-items-left justify-content-left section-title-space">
            <div className="col-lg-6 col-md-8">
              <div className="section-title-wrapper text-left">
                {/* <span className="section-subtitle mb-10">Our Trips</span> */}
                <h2 className="section-title">Rooms</h2>
              </div>
            </div>
          </div>
          {/* <div className="row gy-24">
            {rooms &&
                rooms
                .map((item:any) => (
                  <RoomSingleCard2
                    key={item?.id}
                    room={item}
                    className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                    tourWrapperClass="tour-wrapper style-one"
                    isparentClass={true}
                  />
                ))}
          </div> */}
          <div className="row g-4">
  {rooms &&
    rooms.map((item: any) => (
      <div key={item?.id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
        <RoomSingleCard2
          room={item}
          className="h-100"
          tourWrapperClass="tour-wrapper style-one h-100"
          isparentClass={true}
          id={id}
        />
      </div>
    ))}
</div>
        </div>
      </section>
      <BookingFormModal />
    </>
  );
};

export default HotelOverviewArea;
