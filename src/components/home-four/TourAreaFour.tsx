// "use client";
// import { tourData } from "@/data/tour-data";
// import Link from "next/link";
// import React from "react";
// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import TourSingleCardTwo from "../common/tourElements/TourSingleCardTwo";
// import BookingFormModal from "@/elements/modals/BookingFormModal";
// const TourAreaFour = () => {
//   return (
//     <>
//       <section className="bd-service-area section-space fix">
//         <div className="container">
//           <div className="row gy-24 align-items-center justify-content-between section-title-space">
//             <div className="col-lg-6 col-md-8">
//               <div className="section-title-wrapper">
//                 <span className="section-subtitle mb-10">Our Curated Property Selection</span>
//                 <h2 className="section-title">Hand-picked selection of quality Stay</h2>
//               </div>
//             </div>
//             <div className="col-lg-2 text-md-end">
//               <div className="tour-btn">
//                 <Link
//                   href="#"
//                   className="bd-primary-btn btn-style has-arrow radius-60"
//                 >
//                   <span className="bd-primary-btn-arrow arrow-right">
//                     <i className="fa-regular fa-arrow-right"></i>
//                   </span>
//                   <span className="bd-primary-btn-text">View All</span>
//                   <span className="bd-primary-btn-circle"></span>
//                   <span className="bd-primary-btn-arrow arrow-left">
//                     <i className="fa-regular fa-arrow-right"></i>
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="tour-slide-wrapper p-relative">
//                 <div className="swiper tour-four-active">
//                   <Swiper
//                     modules={[Navigation]}
//                     spaceBetween={24}
//                     slidesPerView={3}
//                     breakpoints={{
//                       0: {
//                         slidesPerView: 1,
//                       },
//                       768: {
//                         slidesPerView: 2,
//                       },
//                       1024: {
//                         slidesPerView: 3,
//                       },
//                     }}
//                     mousewheel={true}
//                     navigation={{
//                       nextEl: ".tourigo-navigation-next",
//                       prevEl: ".tourigo-navigation-prev",
//                     }}
//                   >
//                     {tourData &&
//                       tourData.slice(20, 24).map((item) => (
//                         <SwiperSlide
//                           key={item.id}
//                           className="custom-swiper-slide"
//                         >
//                           <TourSingleCardTwo
//                             key={item?.id}
//                             tour={item}
//                             className=""
//                             tourWrapperClass="tour-wrapper style-four"
//                             isparentClass={false}
//                           />
//                         </SwiperSlide>
//                       ))}
//                   </Swiper>
//                 </div>
//                 <div className="tour-navigation btn-navigation">
//                   <button className="tourigo-navigation-prev">
//                     <i className="fa-regular fa-angle-left"></i>
//                   </button>
//                   <button className="tourigo-navigation-next">
//                     <i className="fa-regular fa-angle-right"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <BookingFormModal />
//     </>
//   );
// };

// export default TourAreaFour;




// "use client";
// import Link from "next/link";
// import React from "react";
// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import TourSingleCardTwo from "../common/tourElements/TourSingleCardTwo";
// import { useGetFeaturedHotelsQuery } from "@/services/featuredAPI";

// const TourAreaFour = () => {
//   const { data, error, isLoading } = useGetFeaturedHotelsQuery({
//     sectionType: 'featured',
//     limit: 4,
//     status: 'active'
//   });

//   const featuredHotels = data?.data?.hotels || [];

//   // Handle loading state
//   if (isLoading) {
//     return (
//       <section className="bd-service-area section-space fix">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="tour-slide-wrapper p-relative">
//                 <div className="swiper tour-four-active">
//                   {[1, 2, 3].map((index) => (
//                     <div key={index} className="animate-pulse bg-gray-200 h-96 rounded-lg mb-4" />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // Handle error state
//   if (error) {
//     return null;
//   }

//   return (
//     <section className="bd-service-area section-space fix">
//       <div className="container">
//         <div className="row gy-24 align-items-center justify-content-between section-title-space">
//           <div className="col-lg-6 col-md-8">
//             <div className="section-title-wrapper">
//               <span className="section-subtitle mb-10">Our Curated Property Selection</span>
//               <h2 className="section-title">Hand-picked selection of quality Stay</h2>
//             </div>
//           </div>
//           <div className="col-lg-2 text-md-end">
//             <div className="tour-btn">
//               <Link
//                 href="/hotels"
//                 className="bd-primary-btn btn-style has-arrow radius-60"
//               >
//                 <span className="bd-primary-btn-arrow arrow-right">
//                   <i className="fa-regular fa-arrow-right"></i>
//                 </span>
//                 <span className="bd-primary-btn-text">View All</span>
//                 <span className="bd-primary-btn-circle"></span>
//                 <span className="bd-primary-btn-arrow arrow-left">
//                   <i className="fa-regular fa-arrow-right"></i>
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-xl-12">
//             <div className="tour-slide-wrapper p-relative">
//               <div className="swiper tour-four-active">
//                 <Swiper
//                   modules={[Navigation]}
//                   spaceBetween={24}
//                   slidesPerView={3}
//                   breakpoints={{
//                     0: {
//                       slidesPerView: 1,
//                     },
//                     768: {
//                       slidesPerView: 2,
//                     },
//                     1024: {
//                       slidesPerView: 3,
//                     },
//                   }}
//                   mousewheel={true}
//                   navigation={{
//                     nextEl: ".tourigo-navigation-next",
//                     prevEl: ".tourigo-navigation-prev",
//                   }}
//                 >
//                   {featuredHotels.map((hotel) => (
//                     <SwiperSlide
//                       key={hotel._id}
//                       className="custom-swiper-slide"
//                     >
//                       <TourSingleCardTwo
//                         tour={hotel}
//                         className=""
//                         tourWrapperClass="tour-wrapper style-four"
//                         isparentClass={false}
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//               <div className="tour-navigation btn-navigation">
//                 <button className="tourigo-navigation-prev">
//                   <i className="fa-regular fa-angle-left"></i>
//                 </button>
//                 <button className="tourigo-navigation-next">
//                   <i className="fa-regular fa-angle-right"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TourAreaFour;

"use client";
import React, { useState } from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// import TourSingleCardTwo from "../common/tourElements/TourSingleCardTwo";
import TourSingleCardTwo from '../common/tourElements/TourSingleCardTwo';
import { useGetFeaturedHotelsQuery } from "@/services/featuredAPI";
import './TabbedTourArea.css';
import { Hotel } from 'lucide-react';  // Changed from SearchHotel to Hotel


const NoDataFound = () => (
  <div className="no-data-container">
    <div className="icon-wrapper">
      <Hotel size={48} />
    </div>
    <h3 className="no-data-title">
      No Properties Found
    </h3>
    <p className="no-data-description">
      We couldn't find any properties in this category at the moment. 
      Please check back later or explore other categories.
    </p>
    <Link href="/hotels" className="browse-all-btn">
      Browse All Properties
    </Link>
  </div>
);

const TabbedTourArea = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [activeCity, setActiveCity] = useState('gurugram');

  const { data, error, isLoading } = useGetFeaturedHotelsQuery({
    sectionType: activeTab ? activeTab === 'city' ? activeCity : activeTab : 'featured',
    limit: 4,
    status: 'active',
    // city: activeTab === 'city' ? activeCity : undefined
  });

  const featuredHotels = data?.data?.hotels || [];



  if (isLoading) {
    return (
      <section className="tab-container">
        <div className="container">
          <div className="loading-skeleton">
            {[1, 2, 3].map((index) => (
              <div key={index} className="skeleton-card" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) return null;


  // <option value="featured">Featured</option>
  // <option value="trending">Trending</option>
  // <option value="topRated">Top Rated</option>
  // <option value="recommended">Recommended</option>
  // <option value="latest">Latest</option>
  // <option value="premier">Premier</option>
  // <option value="select">Select</option>
  // <option value="express">Express</option>
  // <option value="gurugram">Gurugram</option>
  // <option value="delhi">Delhi</option>
  // <option value="mohali">Mohali</option>
  const tabs = [
    { id: 'featured', label: 'Featured' },
    { id: 'trending', label: 'Trending' },
    { id: 'toprated', label: 'Top Rated' },
    { id: 'recommended', label: 'Recommended' },
    { id: 'latest', label: 'Latest' },
    { id: 'premier', label: 'Premier' },
    { id: 'select', label: 'Select' },
    { id: 'express', label: 'Express' },
    { id: 'city', label: 'City' }

    // { id: 'city', label: 'City' }
  ];

  const cities = [
    { id: 'gurugram', label: 'Gurugram' },
    { id: 'delhi', label: 'Delhi' },
    { id: 'mohali', label: 'Mohali' }
  ];

  return (
    <>
    <section className="tab-container">
    <div className="container">
      <div className="section-header">
        <div>
          <h3 className="section-subtitle">OUR CURATED PROPERTY SELECTION</h3>
          <h2 className="section-title">Hand-picked selection of quality Stay</h2>
        </div>
        <Link href="/hotels" className="view-all-btn">
          View All
        </Link>
      </div>

      <div className="tabs-wrapper">
        <div className="tabs-list">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'city' && (
          <div className="city-tabs">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setActiveCity(city.id)}
                className={`city-tab ${activeCity === city.id ? 'active' : ''}`}
              >
                {city.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {featuredHotels.length > 0 ? (
        <div className="swiper-container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".navigation-next",
              prevEl: ".navigation-prev",
            }}
          >
            {featuredHotels?.map((hotel) => (
              <SwiperSlide key={hotel._id}>
                <TourSingleCardTwo
                  tour={hotel}
                  className=""
                  tourWrapperClass="tour-wrapper style-four"
                  isparentClass={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="navigation-button navigation-prev">
            <i className="fa-regular fa-angle-left"></i>
          </button>
          <button className="navigation-button navigation-next">
            <i className="fa-regular fa-angle-right"></i>
          </button>
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  </section>
  </>
  );
};

export default TabbedTourArea;