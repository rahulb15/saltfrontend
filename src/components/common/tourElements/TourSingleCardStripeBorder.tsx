// import { IDayTourDataType } from "@/interFace/interFace";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// interface ItourPropsType {
//   item: IDayTourDataType;
// }
// const TourSingleCardStripeBorder = ({ item }: ItourPropsType) => {
//   return (
//     <>
//       <div
//         className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow bdFadeInUp"
//         data-wow-delay=".3s"
//       >
//         <div className="tour-wrapper style-six">
//           <div className="tour-thumb image-overly mb-25">
//             {/* <Link href="/tour-details-right"> */}
//             <Link href="#">
//               <Image src={item.img} alt="image" />
//             </Link>
//           </div>
//           <div className="tour-content-wrapper">
//             <h4 className="tour-title medium underline mb-5 fw-5">
//             {/* <Link href="/tour-details-right">{item.tourTitle}</Link> */}
//               <Link href="#">{item.tourTitle}</Link>
//             </h4>
//             <div className="tour-meta mb-10">
//               <span>
//                 <i className="icon-location-fill"></i> {item.tourLocation}
//               </span>
//               <span>
//                 <i className="fa-regular fa-clock"></i> {item.tourTime} Hours
//               </span>
//             </div>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TourSingleCardStripeBorder;


import Image from "next/image";
import Link from "next/link";
import React from "react";

// interface ItourPropsType {
//   item: IDayTourDataType;
// }

const TourSingleCardStripeBorder = ({ item }: any) => {
  return (
    <>
      <div
        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow bdFadeInUp"
        data-wow-delay=".3s"
      >
        <div className="tour-wrapper style-six">
          <div className="tour-thumb image-overly mb-25 relative w-full h-[300px]">
            <Link href="#">
              <Image 
                src={item.img} 
                alt={item.tourTitle}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </Link>
          </div>
          <div className="tour-content-wrapper">
            <h4 className="tour-title medium underline mb-5 fw-5">
              <Link href="#">{item.tourTitle}</Link>
            </h4>
            <div className="tour-meta mb-10">
              <span>
                <i className="icon-location-fill"></i> {item.tourLocation}
              </span>
              <span>
                <i className="fa-regular fa-clock"></i> {item.tourTime} Hours
              </span>
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourSingleCardStripeBorder;