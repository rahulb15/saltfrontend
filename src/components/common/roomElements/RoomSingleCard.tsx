// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { imageLoader } from "@/hooks/image-loader";
// import { useRouter, useSearchParams } from 'next/navigation';
// import { setRooms } from "@/redux/slices/roomSlice";
// import { toast } from "sonner";
// import { useAppDispatch } from "@/redux/hooks";
// import { useGetRoomListingsQuery } from "@/services/roomAPI";
// import {
//   removeBooking,
// } from "@/redux/slices/bookingSlice";
// import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";

// interface IHotelPropsType {
//   hotel: {
//     id: string;
//     img: string;
//     name: string;
//     location: string;
//     distanceFromLandmark: string;
//     type: string;
//     highlightFeature: string;
//     rating: number;
//     price: number;
//     originalPrice?: number;
//     taxesAndFees: number;
//     amenities?: string[];
//   };
// }

// interface Booking {
//   city: string;
//   checkIn: string;
//   checkOut: string;
//   room: number;
//   adult: number;
//   children: number;
// }

// const DEFAULT_HOTEL = {
//   img: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
//   name: "--",
//   location: "--",
//   distanceFromLandmark: "--",
//   type: "--",
//   highlightFeature: "--",
//   rating: 0,
//   price: 0,
//   originalPrice: 0,
//   taxesAndFees: 0,
// };

// const HotelSingleCard: React.FC<IHotelPropsType> = ({ hotel: hotelProps }) => {
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const searchParams = useSearchParams();
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [queryParams, setQueryParams] = useState<any>(null);
//     const bookings = useSelector((state: RootState) => state.booking.bookings);
  
//   // Get booking details from URL query parameters
//   const currentBooking: Booking = {
//     city: searchParams.get('city') || '',
//     checkIn: searchParams.get('checkIn') || '',
//     checkOut: searchParams.get('checkOut') || '',
//     room: parseInt(searchParams.get('room') || '0'),
//     adult: parseInt(searchParams.get('adult') || '0'),
//     children: parseInt(searchParams.get('children') || '0')
//   };

//   // Setup the RTK Query hook with skip option
//   const {
//     data: roomListingsData,
//     error: roomListingsError,
//     isLoading,
//     isFetching
//   } = useGetRoomListingsQuery(
//     queryParams || {
//       hotelId: hotelProps.id,
//       check_in_date: currentBooking.checkIn,
//       check_out_date: currentBooking.checkOut,
//       number_adults: currentBooking.adult,
//       number_children: currentBooking.children
//     },
//     {
//       // Skip the query until params are set
//       skip: !queryParams
//     }
//   );

//   // Merge provided hotel data with default values
//   const hotel = {
//     ...DEFAULT_HOTEL,
//     ...hotelProps,
//     price: hotelProps?.price || DEFAULT_HOTEL.price,
//     taxesAndFees: hotelProps?.taxesAndFees || DEFAULT_HOTEL.taxesAndFees,
//     rating: hotelProps?.rating || DEFAULT_HOTEL.rating,
//   };

//   // Create thumbnails array with default or provided image
//   const thumbnails = Array(4).fill(hotel.img || DEFAULT_HOTEL.img);

//   const handleClick = async () => {
//     try {
//       if (!currentBooking.checkIn || !currentBooking.checkOut) {
//         toast.error("Please select booking dates first");
//         return;
//       }

//           dispatch(removeBooking(bookings[0]?.Package_Id));
      

//       // Set query parameters to trigger the query
//       setQueryParams({
//         hotelId: hotelProps.id,
//         check_in_date: currentBooking.checkIn,
//         check_out_date: currentBooking.checkOut,
//         number_adults: currentBooking.adult,
//         number_children: currentBooking.children
//       });
//     } catch (error) {
//       console.error("Error fetching room data:", error);
//       toast.error("Failed to fetch room data. Please try again.");
//     }
//   };

//   // Handle successful data fetch
//   useEffect(() => {
//     console.log("roomListingsData", roomListingsData);
    
//     if (roomListingsData?.status === "success" && !isFetching) {
//       // Check if we have an error response from the third-party API
//       const hasApiError = roomListingsData.data.rooms?.[0]?.['Error Details'];
//       if (hasApiError) {
//         toast.warning(`🏨 We're working on adding more rooms to serve you better! Please check back soon or explore our other amazing properties.`, {
//           duration: 5000
//         });
//         setQueryParams(null);
//         return;
//       }

//       // Check if we have valid room data
//       const validRooms = roomListingsData.data.rooms?.filter(room => 
//         room.Room_Name && 
//         room.roomrateunkid && 
//         !room['Error Details']
//       );

//       // if (!validRooms || validRooms.length === 0) {
//       //   toast.error('No available rooms found for these dates');
//       //   setQueryParams(null); // Reset query params to allow retrying
//       //   return;
//       // }

//       // If we have valid rooms, proceed with dispatch and navigation
      

//       if (!validRooms || validRooms.length === 0) {
//         toast.custom((t) => (
//           <div className="bg-white rounded-lg shadow-lg p-4 max-w-md">
//             <h3 className="text-lg font-semibold mb-2">No Rooms Available</h3>
//             <p className="text-gray-600 mb-3">
//               We're currently working hard to bring more rooms for these dates. 
//               Please try different dates or explore our other wonderful properties.
//             </p>
//             <p className="text-sm text-gray-500 italic">
//               Thank you for your patience and understanding! 🙏
//             </p>
//           </div>
//         ), {
//           duration: 5000
//         });
//         setQueryParams(null);
//         return;
//       }
      
//       dispatch(setRooms({ 
//         rooms: validRooms
//       }));

//       console.log("Valid room data:", validRooms);
      
//       // Preserve query parameters when navigating
//       const queryString = new URLSearchParams({
//         ...currentBooking,
//         room: currentBooking.room.toString(),
//         adult: currentBooking.adult.toString(),
//         children: currentBooking.children.toString()
//       }).toString();
      
//       // Navigate to details page
//       router.push(`/hotel-details/${hotelProps.id}?${queryString}`);
//     }
//   }, [roomListingsData, isFetching]);

//   const handleThumbnailClick = (index: number) => {
//     setSelectedImageIndex(index);
//   };


//   return (
//     <div className="room-card">
//       <div className="room-card-wrapper">
//         <div className="room-image-section">
//           <div className="room-main-image">
//              <Image
//               src={thumbnails[selectedImageIndex]}
//               loader={imageLoader}
//               alt={hotel.name}
//               layout="fill"
//               objectFit="cover"
//               quality={100}
//               priority
//             />
//           </div>
//           <div className="room-thumbnail-images">
//             {thumbnails.map((thumb, index) => (
//               <div 
//                 key={index} 
//                 className="thumbnail"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleThumbnailClick(index);
//                 }}
//                 style={{
//                   border: selectedImageIndex === index ? '2px solid #4caf50' : '2px solid white'
//                 }}
//               >
//                 <Image
//                   src={thumb}
//                   loader={imageLoader}
//                   alt={`Thumbnail ${index + 1}`}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             ))}
//           </div>
//           <button 
//             className="view-all-btn"
//             onClick={(e) => {
//               e.stopPropagation();
//               // Add view all images functionality
//             }}
//           >
//             View All
//           </button>
//         </div>

//         <div className="room-details-section">
//           <h2 className="room-title">{hotel.name}</h2>
//           <p className="room-location">
//           <span>📍</span> {hotel.location} | {hotel.distanceFromLandmark}
//           </p>
//           <div className="room-tags">
//           <span className="tag">{hotel.type}</span>
//           </div>
//           <p className="room-feature">
//           <span className="feature-icon">🏆</span> {hotel.highlightFeature}
//           </p>
//           <div className="room-rating">
//             <div className="rating-score">
//             {hotel?.rating}
//             </div>
//             <span className="rating-count">Excellent</span>
//           </div>
//           <div className="room-price-booking">
//             <div className="price-section">
//               <span className="current-price">
//               ₹{hotel.price?.toLocaleString("en-IN")}
//               </span>
//               {hotel.originalPrice && (
//                 <span className="original-price">
//                   ₹{hotel.originalPrice.toLocaleString("en-IN")}
//                   </span>
//               )}
//               <p className="price-detail">
//               + ₹{hotel.taxesAndFees} taxes & fees
//               </p>
//               <p className="per-night">Per Night</p>
//             </div>
//             {/* <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleClick();
//               }}
//               className="booking-btn"
//               type="button"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Loading...' : 'Book Now & Pay Later!'}
//             </button> */}

// <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleClick();
//               }}
//               className="booking-btn"
//               type="button"
//               disabled={isLoading || isFetching}
//             >
//               {(isLoading || isFetching) ? (
//                 <div className="flex items-center justify-center">
//                   <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
//                   Checking Rooms...
//                 </div>
//               ) : (
//                 'Book Now & Pay Later!'
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelSingleCard;



// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { imageLoader } from "@/hooks/image-loader";
// import { useRouter, useSearchParams } from 'next/navigation';
// import { setRooms } from "@/redux/slices/roomSlice";
// import { toast } from "sonner";
// import { useAppDispatch } from "@/redux/hooks";
// import { useGetRoomListingsQuery } from "@/services/roomAPI";
// import { removeBooking } from "@/redux/slices/bookingSlice";
// import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";
// import CarouselSlider from "./ImageSliderModal";

// // Update the interface in HotelSingleCard.tsx
// interface IHotelPropsType {
//   hotel: {
//     id: string;
//     img: string;
//     images?: string[];  // Add images array
//     name: string;
//     location: string;
//     distanceFromLandmark: string;
//     type: string;
//     highlightFeature: string;
//     rating: number;
//     price: number;
//     originalPrice?: number;
//     taxesAndFees: number;
//     amenities?: Array<{  // Update amenities type to match API
//       _id: string;
//       name: string;
//       icon?: string;
//       category: string;
//     }>;
//     deals?: string;     // Add deals property
//     hotelId?: string;   // Add hotelId if needed
//   };
// }

// interface Booking {
//   city: string;
//   checkIn: string;
//   checkOut: string;
//   room: number;
//   adult: number;
//   children: number;
// }

// const DEFAULT_HOTEL = {
//   img: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
//   name: "--",
//   location: "--",
//   distanceFromLandmark: "--",
//   type: "--",
//   highlightFeature: "--",
//   rating: 0,
//   price: 0,
//   originalPrice: 0,
//   taxesAndFees: 0,
// };

// const HotelSingleCard: React.FC<IHotelPropsType> = ({ hotel: hotelProps }) => {
//   console.log("hotelProps", hotelProps);
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const searchParams = useSearchParams();
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [queryParams, setQueryParams] = useState<any>(null);
//   const bookings = useSelector((state: RootState) => state.booking.bookings);
  
//   // Get booking details from URL parameters
//   const currentBooking: Booking = {
//     city: searchParams.get('city') || '',
//     checkIn: searchParams.get('checkIn') || '',
//     checkOut: searchParams.get('checkOut') || '',
//     room: parseInt(searchParams.get('room') || '0'),
//     adult: parseInt(searchParams.get('adult') || '0'),
//     children: parseInt(searchParams.get('children') || '0')
//   };

//   // Setup RTK Query hook with skip option
//   const {
//     data: roomListingsData,
//     error: roomListingsError,
//     isLoading,
//     isFetching
//   } = useGetRoomListingsQuery(
//     queryParams || {
//       hotelId: hotelProps.id,
//       check_in_date: currentBooking.checkIn,
//       check_out_date: currentBooking.checkOut,
//       number_adults: currentBooking.adult,
//       number_children: currentBooking.children
//     },
//     {
//       skip: !queryParams
//     }
//   );

//   // Merge hotel data with defaults
//   const hotel = {
//     ...DEFAULT_HOTEL,
//     ...hotelProps,
//     price: hotelProps?.price || DEFAULT_HOTEL.price,
//     taxesAndFees: hotelProps?.taxesAndFees || DEFAULT_HOTEL.taxesAndFees,
//     rating: hotelProps?.rating || DEFAULT_HOTEL.rating,
//   };

//   // Get thumbnails
//   // const thumbnails = Array(4).fill(hotel.img || DEFAULT_HOTEL.img);
//   const thumbnails = hotelProps.images || [hotelProps.img || DEFAULT_HOTEL.img];


//   const handleClick = async () => {
//     try {
//       if (!currentBooking.checkIn || !currentBooking.checkOut) {
//         toast.error("Please select booking dates first");
//         return;
//       }

//       dispatch(removeBooking(bookings[0]?.Package_Id));
      
//       setQueryParams({
//         hotelId: hotelProps.id,
//         check_in_date: currentBooking.checkIn,
//         check_out_date: currentBooking.checkOut,
//         number_adults: currentBooking.adult,
//         number_children: currentBooking.children
//       });
//     } catch (error) {
//       console.error("Error fetching room data:", error);
//       toast.error("Failed to fetch room data. Please try again.");
//     }
//   };

//   // Handle room data response
//   useEffect(() => {
//     if (roomListingsData?.status === "success" && !isFetching) {
//       const hasApiError = roomListingsData.data.rooms?.[0]?.['Error Details'];
//       if (hasApiError) {
//         toast.warning(`🏨 We're working on adding more rooms to serve you better! Please check back soon or explore our other amazing properties.`, {
//           duration: 5000
//         });
//         setQueryParams(null);
//         return;
//       }

//       const validRooms = roomListingsData.data.rooms?.filter(room => 
//         room.Room_Name && 
//         room.roomrateunkid && 
//         !room['Error Details']
//       );

//       if (!validRooms || validRooms.length === 0) {
//         toast.custom((t) => (
//           <div className="no-rooms-toast">
//             <h3>No Rooms Available</h3>
//             <p>
//               We're currently working hard to bring more rooms for these dates. 
//               Please try different dates or explore our other wonderful properties.
//             </p>
//             <p className="toast-note">
//               Thank you for your patience and understanding! 🙏
//             </p>
//           </div>
//         ), {
//           duration: 5000
//         });
//         setQueryParams(null);
//         return;
//       }
      
//       dispatch(setRooms({ rooms: validRooms }));

//       // Navigate to details page
//       const queryString = new URLSearchParams({
//         ...currentBooking,
//         room: currentBooking.room.toString(),
//         adult: currentBooking.adult.toString(),
//         children: currentBooking.children.toString()
//       }).toString();
      
//       router.push(`/hotel-details/${hotelProps.id}?${queryString}`);
//     }
//   }, [roomListingsData, isFetching]);

//   const handleThumbnailClick = (index: number) => {
//     setSelectedImageIndex(index);
//   };

//   const handleViewAllClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsModalOpen(true);
//   };

//   return (
//     <>
//       <div className="room-card">
//         <div className="room-card-wrapper">
//           <div className="room-image-section">
//           <div className="room-main-image">
//   <Image
//     src={thumbnails[selectedImageIndex]}
//     loader={imageLoader}
//     alt={hotel.name}
//     layout="fill"
//     objectFit="cover"
//     quality={100}
//     priority
//   />
// </div>
//             <div className="room-thumbnail-images">
//   {thumbnails.map((thumb, index) => (
//     <div 
//       key={index} 
//       className="thumbnail"
//       onClick={(e) => {
//         e.stopPropagation();
//         handleThumbnailClick(index);
//       }}
//       style={{
//         border: selectedImageIndex === index ? '2px solid #4caf50' : '2px solid white'
//       }}
//     >
//       <Image
//         src={thumb}
//         loader={imageLoader}
//         alt={`Thumbnail ${index + 1}`}
//         layout="fill"
//         objectFit="cover"
//       />
//     </div>
//   ))}
// </div>
//             <button 
//               className="view-all-btn"
//               onClick={handleViewAllClick}
//             >
//               View All
//             </button>
//           </div>

//           <div className="room-details-section">
//             <h2 className="room-title">{hotel.name}</h2>
//             <p className="room-location">
//               <span>📍</span> {hotel.location} | {hotel.distanceFromLandmark}
//             </p>
//             <div className="room-tags">
//               <span className="tag">{hotel.type}</span>
//             </div>
//             <p className="room-feature">
//               <span className="feature-icon">🏆</span> {hotel.highlightFeature}
//             </p>
//             <div className="room-rating">
//               <div className="rating-score">
//                 {hotel.rating}
//               </div>
//               <span className="rating-count">Excellent</span>
//             </div>
//             <div className="room-price-booking">
//               <div className="price-section">
//                 <span className="current-price">
//                   ₹{hotel.price.toLocaleString("en-IN")}
//                 </span>
//                 {hotel.originalPrice && (
//                   <span className="original-price">
//                     ₹{hotel.originalPrice.toLocaleString("en-IN")}
//                   </span>
//                 )}
//                 <p className="price-detail">
//                   + ₹{hotel.taxesAndFees} taxes & fees
//                 </p>
//                 <p className="per-night">Per Night</p>
//               </div>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleClick();
//                 }}
//                 className="booking-btn"
//                 type="button"
//                 disabled={isLoading || isFetching}
//               >
//                 {(isLoading || isFetching) ? (
//                   <div className="loading-state">
//                     <div className="spinner"></div>
//                     <span>Checking Rooms...</span>
//                   </div>
//                 ) : (
//                   'Book Now & Pay Later!'
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//   <CarouselSlider
//     images={thumbnails}
//     initialIndex={selectedImageIndex}
//     isOpen={isModalOpen}
//     onClose={() => setIsModalOpen(false)}
//     onIndexChange={setSelectedImageIndex}
//   />
// )}

//       <style jsx>{`
//         .room-card {
//           border: 1px solid #e0e0e0;
//           border-radius: 8px;
//           overflow: hidden;
//           margin-bottom: 20px;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           transition: box-shadow 0.3s ease;
//         }

//         .room-card:hover {
//           box-shadow: 0 4px 8px rgba(76, 175, 80, 0.2);
//         }

//         .room-card-wrapper {
//           display: flex;
//         }

//         .room-image-section {
//           position: relative;
//           width: 40%;
//           padding-top: 30%;
//           overflow: hidden;
//           box-shadow: 0 0 30px 0 rgba(154, 231, 174, 0.3);
//         }

//         .room-main-image {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//         }

//         .room-thumbnail-images {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           width: 60px;
//         }

//         .thumbnail {
//           position: relative;
//           width: 100%;
//           padding-top: 100%;
//           border-radius: 4px;
//           overflow: hidden;
//           cursor: pointer;
//           transition: transform 0.2s ease;
//         }

//         .thumbnail:hover {
//           transform: scale(1.05);
//         }

//         .view-all-btn {
//           position: absolute;
//           bottom: 10px;
//           right: 10px;
//           background-color: rgba(0, 0, 0, 0.7);
//           color: white;
//           border: none;
//           padding: 8px 12px;
//           border-radius: 4px;
//           cursor: pointer;
//           font-size: 0.8rem;
//           transition: background-color 0.3s ease;
//         }

//         .view-all-btn:hover {
//           background-color: rgba(0, 0, 0, 0.9);
//         }

//         .room-details-section {
//           flex: 1;
//           padding: 20px;
//         }

//         .room-title {
//           font-size: 1.8rem;
//           font-weight: 600;
//           margin-bottom: 10px;
//           color: #333;
//         }

//         .room-location {
//           font-size: 0.9rem;
//           color: #666;
//           margin-bottom: 15px;
//           display: flex;
//           align-items: center;
//           gap: 5px;
//         }

//         .room-tags {
//           margin-bottom: 15px;
//         }

//         .tag {
//           background-color: #e8f5e9;
//           color: #2e7d32;
//           padding: 6px 12px;
//           border-radius: 4px;
//           font-size: 0.9rem;
//           font-weight: 500;
//         }

//         .room-feature {
//           font-size: 0.95rem;
//           color: #555;
//           margin-bottom: 15px;
//           line-height: 1.5;
//         }

//         .feature-icon {
//           margin-right: 8px;
//         }

//         .room-rating {
//           display: flex;
//           align-items: center;
//           margin-bottom: 20px;
//         }

//         .rating-score {
//           background-color: #4caf50;
//           color: white;
//           padding: 4px 8px;
//           border-radius: 4px;
//           font-weight: 600;
//           margin-right: 10px;
//         }

//         .rating-count {
//           color: #666;
//           font-size: 0.9rem;
//         }

//         .room-price-booking {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-end;
//           margin-top: auto;
//         }

//         .price-section {
//           display: flex;
//           flex-direction: column;
//         }

//         .current-price {
//           font-size: 1.5rem;
//           font-weight: 600;
//           color: #333;
//         }

//         .original-price {
//           text-decoration: line-through;
//           color: #999;
//           font-size: 0.9rem;
//           margin-top: 2px;
//         }

//         .price-detail {
//           color: #666;
//           font-size: 0.85rem;
//           margin-top: 4px;
//         }

//         .per-night {
//           color: #999;
//           font-size: 0.8rem;
//           margin-top: 2px;
//         }

//         .booking-btn {
//           background-color: #198754;
//           color: white;
//           border: none;
//           padding: 12px 24px;
//           border-radius: 6px;
//           font-weight: 600;
//           font-size: 0.95rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           min-width: 180px;
//           justify-content: center;
//         }

//         .booking-btn:hover {
//           background-color: #ffb623;
//           color: #000;
//           transform: translateY(-2px);
//         }

//         .booking-btn:disabled {
//           background-color: #ccc;
//           cursor: not-allowed;
//           transform: none;
//         }

//         .loading-state {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .spinner {
//           width: 16px;
//           height: 16px;
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 50%;
//           border-top-color: #fff;
//           animation: spin 1s linear infinite;
//         }

//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .no-rooms-toast {
//           background-color: white;
//           padding: 16px;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//           max-width: 400px;
//         }

//         .no-rooms-toast h3 {
//           font-size: 1.1rem;
//           font-weight: 600;
//           margin-bottom: 8px;
//           color: #333;
//         }

//         .no-rooms-toast p {
//           color: #666;
//           margin-bottom: 12px;
//           line-height: 1.4;
//         }

//         .toast-note {
//           font-style: italic;
//           color: #888;
//           font-size: 0.9rem;
//         }

//         @media (max-width: 1024px) {
//           .room-card-wrapper {
//             flex-direction: column;
//           }

//           .room-image-section {
//             width: 100%;
//             padding-top: 60%;
//           }

//           .room-details-section {
//             padding: 15px;
//           }

//           .room-title {
//             font-size: 1.5rem;
//           }

//           .room-thumbnail-images {
//             flex-direction: row;
//             top: auto;
//             bottom: 50px;
//             right: auto;
//             left: 10px;
//             width: auto;
//             height: 50px;
//           }

//           .thumbnail {
//             width: 50px;
//             padding-top: 50px;
//           }

//           .booking-btn {
//             padding: 10px 20px;
//             font-size: 0.9rem;
//           }
//         }

//         @media (max-width: 768px) {
//           .room-image-section {
//             padding-top: 75%;
//           }

//           .room-price-booking {
//             flex-direction: column;
//             gap: 15px;
//             align-items: stretch;
//           }

//           .booking-btn {
//             width: 100%;
//           }

//           .room-thumbnail-images {
//             display: none;
//           }
//         }

//         @media (max-width: 480px) {
//           .room-title {
//             font-size: 1.3rem;
//           }

//           .room-feature {
//             font-size: 0.85rem;
//           }

//           .current-price {
//             font-size: 1.3rem;
//           }

//           .view-all-btn {
//             bottom: 15px;
//             right: 15px;
//             padding: 6px 10px;
//             font-size: 0.75rem;
//           }
//         }

//         /* Fancy hover effects */
//         .room-card:hover .view-all-btn {
//           background-color: rgba(76, 175, 80, 0.9);
//         }

//         .room-card:hover .room-main-image img {
//           transform: scale(1.05);
//           transition: transform 0.5s ease;
//         }

//         .tag:hover {
//           transform: translateY(-1px);
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//         }

//         /* Accessibility improvements */
//         .booking-btn:focus {
//           outline: none;
//           box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.3);
//         }

//         .view-all-btn:focus {
//           outline: none;
//           box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
//         }

//         /* Additional fancy effects */
//         .amenity-tag {
//           display: inline-flex;
//           align-items: center;
//           background-color: #f5f5f5;
//           padding: 4px 8px;
//           border-radius: 4px;
//           margin: 0 4px 4px 0;
//           font-size: 0.8rem;
//           transition: all 0.3s ease;
//         }

//         .amenity-tag:hover {
//           background-color: #e8f5e9;
//           transform: translateY(-1px);
//         }

//         .amenity-icon {
//           margin-right: 4px;
//           color: #4caf50;
//         }

//         .amenity-tag.more {
//           background-color: transparent;
//           color: #4caf50;
//           cursor: pointer;
//         }

//         .amenity-tag.more:hover {
//           text-decoration: underline;
//         }

//         /* Transitions */
//         .room-card,
//         .booking-btn,
//         .view-all-btn,
//         .thumbnail,
//         .tag,
//         .amenity-tag {
//           transition: all 0.3s ease;
//         }
//       `}</style>
//     </>
//   );
// };

// export default HotelSingleCard;






import React, { useState, useEffect } from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/image-loader";
import { useRouter, useSearchParams } from 'next/navigation';
import { setRooms } from "@/redux/slices/roomSlice";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { useGetRoomListingsQuery } from "@/services/roomAPI";
import { removeBooking } from "@/redux/slices/bookingSlice";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import CarouselSlider from "./ImageSliderModal";

interface IHotelPropsType {
  hotel: {
    id: string;
    img: string;
    images?: string[];
    name: string;
    location: string;
    distanceFromLandmark: string;
    type: string;
    highlightFeature: string;
    rating: number;
    price: number;
    originalPrice?: number;
    taxesAndFees: number;
    amenities?: Array<{
      _id: string;
      name: string;
      icon?: string;
      category: string;
    }>;
    deals?: string;
    hotelId?: string;
  };
}

interface Booking {
  city: string;
  checkIn: string;
  checkOut: string;
  room: number;
  adult: number;
  children: number;
}

const DEFAULT_HOTEL = {
  img: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
  name: "--",
  location: "--",
  distanceFromLandmark: "--",
  type: "--",
  highlightFeature: "--",
  rating: 0,
  price: 0,
  originalPrice: 0,
  taxesAndFees: 0,
};

const HotelSingleCard: React.FC<IHotelPropsType> = ({ hotel: hotelProps }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryParams, setQueryParams] = useState<any>(null);
  const bookings = useSelector((state: RootState) => state.booking.bookings);

  // Get booking details from URL parameters
  const currentBooking: Booking = {
    city: searchParams.get('city') || '',
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    room: parseInt(searchParams.get('room') || '0'),
    adult: parseInt(searchParams.get('adult') || '0'),
    children: parseInt(searchParams.get('children') || '0')
  };

  // Setup RTK Query hook
  const {
    data: roomListingsData,
    error: roomListingsError,
    isLoading,
    isFetching
  } = useGetRoomListingsQuery(
    queryParams || {
      hotelId: hotelProps.id,
      check_in_date: currentBooking.checkIn,
      check_out_date: currentBooking.checkOut,
      number_adults: currentBooking.adult,
      number_children: currentBooking.children
    },
    {
      skip: !queryParams
    }
  );

  // Merge hotel data with defaults
  const hotel = {
    ...DEFAULT_HOTEL,
    ...hotelProps,
    price: hotelProps?.price || DEFAULT_HOTEL.price,
    taxesAndFees: hotelProps?.taxesAndFees || DEFAULT_HOTEL.taxesAndFees,
    rating: hotelProps?.rating || DEFAULT_HOTEL.rating,
  };

  const thumbnails = hotelProps.images || [hotelProps.img || DEFAULT_HOTEL.img];

  const handleClick = async () => {
    try {
      if (!currentBooking.checkIn || !currentBooking.checkOut) {
        toast.error("Please select booking dates first");
        return;
      }

      dispatch(removeBooking(bookings[0]?.Package_Id));
      
      setQueryParams({
        hotelId: hotelProps.id,
        check_in_date: currentBooking.checkIn,
        check_out_date: currentBooking.checkOut,
        number_adults: currentBooking.adult,
        number_children: currentBooking.children
      });
    } catch (error) {
      console.error("Error fetching room data:", error);
      toast.error("Failed to fetch room data. Please try again.");
    }
  };

  useEffect(() => {
    if (roomListingsData?.status === "success" && !isFetching) {
      const hasApiError = roomListingsData.data.rooms?.[0]?.['Error Details'];
      
      if (hasApiError) {
        toast.warning(`🏨 We're working on adding more rooms to serve you better! Please check back soon or explore our other amazing properties.`, {
          duration: 5000
        });
        setQueryParams(null);
        return;
      }

      const validRooms = roomListingsData.data.rooms?.filter(room => 
        room.Room_Name && 
        room.roomrateunkid && 
        !room['Error Details']
      );

      if (!validRooms || validRooms.length === 0) {
        toast.custom((t) => (
          <div className="no-rooms-toast">
            <h3>No Rooms Available</h3>
            <p>We're currently working hard to bring more rooms for these dates.</p>
            <p>Please try different dates or explore our other wonderful properties.</p>
            <p className="toast-note">Thank you for your patience! 🙏</p>
          </div>
        ), {
          duration: 5000
        });
        setQueryParams(null);
        return;
      }
      
      // dispatch(setRooms({ rooms: validRooms }));

      // Navigate to details page
      const queryString = new URLSearchParams({
        ...currentBooking,
        room: currentBooking.room.toString(),
        adult: currentBooking.adult.toString(),
        children: currentBooking.children.toString()
      }).toString();
      
      router.push(`/hotel-details/${hotelProps.id}?${queryString}`);
    }
  }, [roomListingsData, isFetching]);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleViewAllClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="room-card">
        <div className="room-card-wrapper">
          <div className="room-image-section">
            <div className="room-main-image">
              <Image
                src={thumbnails[selectedImageIndex]}
                loader={imageLoader}
                alt={hotel.name}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            </div>
            <div className="room-thumbnail-images">
              {thumbnails.map((thumb, index) => (
                <div 
                  key={index} 
                  className="thumbnail"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleThumbnailClick(index);
                  }}
                  style={{
                    border: selectedImageIndex === index ? '2px solid #4caf50' : '2px solid white'
                  }}
                >
                  <Image
                    src={thumb}
                    loader={imageLoader}
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
            <button 
              className="view-all-btn"
              onClick={handleViewAllClick}
            >
              View All
            </button>
          </div>

          <div className="room-details-section">
            <h2 className="room-title">{hotel.name}</h2>
            <p className="room-location">
              <span>📍</span> {hotel.location} | {hotel.distanceFromLandmark}
            </p>
            <div className="room-tags">
              <span className="tag">{hotel.type}</span>
            </div>
            <p className="room-feature">
              <span className="feature-icon">🏆</span> {hotel.highlightFeature}
            </p>
            
            {/* Amenities Section */}
            <div className="amenities-section">
              {hotel.amenities?.map((amenity) => (
                <span key={amenity._id} className="amenity-tag">
                  {amenity.icon && <span className="amenity-icon">{amenity.icon}</span>}
                  {amenity.name}
                </span>
              ))}
            </div>

            <div className="room-rating">
              <div className="rating-score">
                {hotel.rating}
              </div>
              <span className="rating-count">Excellent</span>
            </div>
            
            <div className="room-price-booking">
              <div className="price-section">
                <span className="current-price">
                  ₹{hotel.price.toLocaleString("en-IN")}
                </span>
                {hotel.originalPrice && (
                  <span className="original-price">
                    ₹{hotel.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <p className="price-detail">
                  + ₹{hotel.taxesAndFees.toFixed(2)} taxes & fees
                </p>
                <p className="per-night">Per Night</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
                className="booking-btn"
                type="button"
                disabled={isLoading || isFetching}
              >
                {(isLoading || isFetching) ? (
                  <div className="loading-state">
                    <div className="spinner"></div>
                    <span>Checking Rooms...</span>
                  </div>
                ) : (
                  'Book Now & Pay Later!'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CarouselSlider
          images={thumbnails}
          initialIndex={selectedImageIndex}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onIndexChange={setSelectedImageIndex}
        />
      )}

<style jsx>{`
  .room-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .room-card:hover {
    box-shadow: 0 4px 8px rgba(76, 175, 80, 0.2);
  }

  .room-card-wrapper {
    display: flex;
  }

  .room-image-section {
    position: relative;
    width: 40%;
    padding-top: 30%;
    overflow: hidden;
    box-shadow: 0 0 30px 0 rgba(154, 231, 174, 0.3);
  }

  .room-main-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .room-thumbnail-images {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 60px;
  }

  .thumbnail {
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .thumbnail:hover {
    transform: scale(1.05);
  }

  .view-all-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: background-color 0.3s ease;
  }

  .view-all-btn:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }

  .room-details-section {
    flex: 1;
    padding: 20px;
  }

  .room-title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;
  }

  .room-location {
        font-size: 1.4rem;
    color: #666;
    font-weight: 500;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .room-tags {
    margin-bottom: 15px;
  }

  .tag {
    background-color: #e8f5e9;
    color: #2e7d32;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .room-feature {
    font-size: 1.2rem;
    font-weight: 500;
    color: #555;
    margin-bottom: 15px;
    line-height: 1.5;
  }

  .feature-icon {
    margin-right: 8px;
  }

  /* Amenities Section */
  .amenities-section {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
  }

  .amenity-tag {
    display: inline-flex;
    align-items: center;
    background-color: #f8f9fa;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    color: #4a5568;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
  }

  .amenity-tag:hover {
    background-color: #e8f5e9;
    transform: translateY(-1px);
    border-color: #4caf50;
    box-shadow: 0 2px 4px rgba(76, 175, 80, 0.1);
  }

  .amenity-icon {
    margin-right: 6px;
    color: #4caf50;
  }

  .room-rating {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .rating-score {
    background-color: #4caf50;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 600;
    margin-right: 10px;
  }

  .rating-count {
    color: #666;
    font-size: 0.9rem;
  }

  .room-price-booking {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
  }

  .price-section {
    display: flex;
    flex-direction: column;
  }

  .current-price {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
  }

  .original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 2px;
  }

  .price-detail {
    color: #666;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 4px;
  }

  .per-night {
    color: #999;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 2px;
  }

  .booking-btn {
    background-color: #198754;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 180px;
    justify-content: center;
  }

  .booking-btn:hover {
    background-color: #ffb623;
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 182, 35, 0.2);
  }

  .booking-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .loading-state {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .no-rooms-toast {
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 400px;
  }

  .no-rooms-toast h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
  }

  .no-rooms-toast p {
    color: #666;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .toast-note {
    font-style: italic;
    color: #888;
    font-size: 0.9rem;
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .room-card-wrapper {
      flex-direction: column;
    }

    .room-image-section {
      width: 100%;
      padding-top: 60%;
    }

    .room-details-section {
      padding: 15px;
    }

    .room-title {
      font-size: 1.5rem;
    }

    .room-thumbnail-images {
      flex-direction: row;
      top: auto;
      bottom: 50px;
      right: auto;
      left: 10px;
      width: auto;
      height: 50px;
    }

    .thumbnail {
      width: 50px;
      padding-top: 50px;
    }

    .booking-btn {
      padding: 10px 20px;
      font-size: 0.9rem;
    }

    .amenities-section {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    .room-image-section {
      padding-top: 75%;
    }

    .room-price-booking {
      flex-direction: column;
      gap: 15px;
      align-items: stretch;
    }

    .booking-btn {
      width: 100%;
    }

    .room-thumbnail-images {
      display: none;
    }

    .amenity-tag {
      padding: 4px 10px;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .room-title {
      font-size: 1.3rem;
    }

    .room-feature {
      font-size: 0.85rem;
    }

    .current-price {
      font-size: 1.3rem;
    }

    .view-all-btn {
      bottom: 15px;
      right: 15px;
      padding: 6px 10px;
      font-size: 0.75rem;
    }

    .amenities-section {
      gap: 6px;
    }

    .price-detail {
      font-size: 0.8rem;
    }
  }

  /* Hover Effects & Transitions */
  .room-card:hover .view-all-btn {
    background-color: rgba(76, 175, 80, 0.9);
  }

  .room-card:hover .room-main-image img {
    transform: scale(1.05);
    transition: transform 0.5s ease;
  }

  .tag:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Accessibility Improvements */
  .booking-btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.3);
  }

  .view-all-btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }

  .thumbnail:focus {
    outline: none;
    border-color: #4caf50;
  }

  /* Smooth Transitions */
  .room-card,
  .booking-btn,
  .view-all-btn,
  .thumbnail,
  .tag,
  .amenity-tag {
    transition: all 0.3s ease;
  }
`}</style>

    </>
  );
}

export default HotelSingleCard;
