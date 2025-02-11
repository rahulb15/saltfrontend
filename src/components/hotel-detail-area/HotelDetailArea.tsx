// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { EffectFade, Navigation, Pagination } from "swiper/modules";
// import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
// import HotelDetailFilter from "../shearedComponents/hotel-detail-filter";

// const HotelDetailArea = ({ hotelData, rooms }: any) => {
//   console.log(hotelData);
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;
//   const selectHandler = () => {};
//   return (
//     <>
//       <section className="bd-banner-area banner-style-five fix">
//         <div className="swiper bd-slider-active p-relative fix">
//           <SwiperReact
//             modules={[EffectFade, Navigation, Pagination]}
//             spaceBetween={24}
//             slidesPerView={1}
//             effect={"fade"}
//             navigation={{
//               nextEl: ".banner-navigation-next",
//               prevEl: ".banner-navigation-prev",
//             }}
//             loop={true}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: true,
//             }}
//             pagination={{
//               el: ".bd-pagination",
//               clickable: true,
//             }}
//           >
//             {rooms &&
//               rooms[1]?.RoomImages?.map((image: any, index: any) => (
//                 <SwiperSlide key={index} className="custom-swiper-slide">
//                   <div className="banner-slider-wrapper">
//                     <div
//                       className="banner-bg-image"
//                       style={{ backgroundImage: `url(${image?.image})` }}
//                     ></div>
//                     <div className="container">
//                       <div className="row">
//                         <div className="col-xxl-7 col-xl-9 col-lg-8">
//                           <div className="banner-five-content"></div>
//                         </div>
//                       </div>
                      
//                     </div>
                    
//                   </div>
//                 </SwiperSlide>
//               ))}
//           </SwiperReact>

         

//           {/**navigation button start**/}
//           <div className="banner-nav-btn banner-five-navigation d-none d-xxl-block">
//             <div className="banner-navigation-btn-2">
//               <button className="banner-navigation-prev">
//                 <i className="fa-regular fa-angle-left"></i>
//               </button>
//               <button className="banner-navigation-next">
//                 <i className="fa-regular fa-angle-right"></i>
//               </button>
//             </div>
//           </div>
//           {/**navigation button end**/}
//         </div>
       
//       </section>
//       <div className="banner-search-wrapper mt-45 w-100">
//                         <HotelDetailFilter rooms={rooms} />
//                       </div>
//     </>
//   );
// };

// export default HotelDetailArea;


"use client";
import Link from "next/link";
import React, { useState, useEffect,useCallback } from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import HotelDetailFilter from "../shearedComponents/hotel-detail-filter";
import styles from "./HotelDetailArea.module.css";

const HotelDetailArea = ({  rooms,id }: any) => {
  console.log(rooms[2]?.RoomImages);
  console.log(rooms);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const selectHandler = () => {};
  const [selectedRoomType, setSelectedRoomType] = useState<any>(null);
  const memoizedRooms = useCallback(() => rooms, [JSON.stringify(rooms)]);

useEffect(() => {
    console.log(rooms);
    if (rooms && rooms.length > 0) {
      console.log(rooms);
      let minPriceRoom = null;
      let minPrice = Infinity;

      rooms.forEach((room:any) => {
        const roomPrice = room.room_rates_info?.totalprice_inclusive_all;
        console.log(roomPrice, minPrice);
        if (roomPrice && typeof roomPrice === 'number' && roomPrice < minPrice) {
          minPrice = roomPrice;
          minPriceRoom = room;
        }
      });

      setSelectedRoomType(minPriceRoom);
    }
}, [memoizedRooms]);

  console.log(selectedRoomType);

  return (
    <>
       <div className="mainContentWrapper">
       <div className="hotelDetailWrapper">
      <section className={styles.bdBannerArea}>
        <div className="swiper bd-slider-active p-relative fix">
          <SwiperReact
            modules={[EffectFade, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            effect={"fade"}
            navigation={{
              nextEl: ".banner-navigation-next",
              prevEl: ".banner-navigation-prev",
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              el: ".bd-pagination",
              clickable: true,
            }}
          >
            {selectedRoomType &&
              selectedRoomType?.RoomImages?.map((image: any, index: any) => (
                <SwiperSlide key={index} className="custom-swiper-slide">
                  <div className="banner-slider-wrapper">
                    <div
                      className="banner-bg-image"
                      style={{ backgroundImage: `url(${image?.image})` }}
                    ></div>
                    <div className="container">
                      <div className="row">
                        <div className="col-xxl-7 col-xl-9 col-lg-8">
                          <div className="banner-five-content">
                            {/* {selectedRoomType && (
                              <div>
                                <h3>Best Price: {selectedRoomType.room_rates_info?.totalprice_inclusive_all}</h3>
                                <p>Room: {selectedRoomType.Room_Name}</p>
                              </div>
                            )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </SwiperReact>

          {/**navigation button start**/}
          <div className="banner-nav-btn banner-five-navigation d-none d-xxl-block">
            <div className="banner-navigation-btn-2">
              <button className="banner-navigation-prev">
                <i className="fa-regular fa-angle-left"></i>
              </button>
              <button className="banner-navigation-next">
                <i className="fa-regular fa-angle-right"></i>
              </button>
            </div>
          </div>
          {/**navigation button end**/}
        </div>
        {/* <div className={`${styles.bannerSearchWrapper} ${styles.filter}`}>
          {selectedRoomType && (
                      <HotelDetailFilter rooms={rooms} selectedRoomType={selectedRoomType} id={id} />

          )}
        </div> */}
         <div className={`${styles.filter} clearfix`}>
          {selectedRoomType && (
            <HotelDetailFilter 
              rooms={rooms} 
              selectedRoomType={selectedRoomType} 
              id={id} 
            />
          )}
        </div>
      </section>
      </div>
      </div>
    </>
  );
};

export default HotelDetailArea;