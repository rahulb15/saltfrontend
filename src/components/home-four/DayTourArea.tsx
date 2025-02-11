// import { dayTourData } from "@/data/homeFour/day-tour-data";
// import React from "react";
// import TourSingleCardStripeBorder from "../common/tourElements/TourSingleCardStripeBorder";

// const DayTourArea = () => {
//   return (
//     <>
//       <section className="bd-events-area section-space">
//         <div className="container">
//           <div className="row gy-24 align-items-center justify-content-center section-title-space">
//             <div className="col-xl-8 col-md-10">
//               <div className="section-title-wrapper text-center">
//                 <span className="section-subtitle mb-10">Saltstayz Party & Events Services</span>
//                 <h2 className="section-title">Explore our selection of premium services around Gurgaon</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row gy-24">
//             {dayTourData &&
//               dayTourData.map((item) => (
//                 <TourSingleCardStripeBorder key={item?.id} item={item} />
//               ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default DayTourArea;


// components/DayTourArea.tsx
"use client";
import React from 'react';
import TourSingleCardStripeBorder from '../common/tourElements/TourSingleCardStripeBorder';
import { useGetEventCategoriesQuery } from '@/services/eventAPI';


export interface IDayTourDataType {
  id: string;  // Changed to string to match API response
  img: string;
  tourTitle: string;
  tourLocation: string;
  tourTime: number;
  description: string;
}

const DayTourArea = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const limit = 3;

  const { data, isLoading, error } = useGetEventCategoriesQuery({
    page: currentPage,
    limit,
  });

  console.log(data);

  if (isLoading) {
    return (
      <div className="section-space text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-space text-center text-danger">
        Error loading events
      </div>
    );
  }

  return (
    <section className="bd-events-area section-space">
      <div className="container">
        <div className="row gy-24 align-items-center justify-content-center section-title-space">
          <div className="col-xl-8 col-md-10">
            <div className="section-title-wrapper text-center">
              <span className="section-subtitle mb-10">
                Saltstayz Party & Events Services
              </span>
              <h2 className="section-title">
                Explore our selection of premium services around Gurgaon
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-24">
          {data?.tours.map((tour) => (
            <TourSingleCardStripeBorder key={tour.id} item={tour} />
          ))}
        </div>
        {data?.pagination && data.pagination.pages > 1 && (
          <div className="pagination-wrapper text-center mt-50">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: data.pagination.pages }, (_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === data.pagination.pages ? 'disabled' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === data.pagination.pages}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default DayTourArea;