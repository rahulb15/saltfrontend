// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Users,
//   Moon,
//   Coffee,
//   Wifi,
//   Star,
//   Plus,
//   Minus,
// } from "lucide-react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from "./RoomSingleCard2.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addBooking,
//   updateBookingQuantity,
//   removeBooking,
//   removeCoupon,
// } from "@/redux/slices/bookingSlice";
// import { RootState } from "@/redux/store";
// import { useRouter, useSearchParams } from 'next/navigation';

// const CustomArrow = ({ onClick, direction }: any) => (
//   <button
//     onClick={onClick}
//     className={`${styles.carouselArrow} ${
//       direction === "prev" ? styles.carouselArrowPrev : styles.carouselArrowNext
//     }`}
//   >
//     {direction === "prev" ? (
//       <ChevronLeft size={16} />
//     ) : (
//       <ChevronRight size={16} />
//     )}
//   </button>
// );

// interface Booking {
//   city: string;
//   checkIn: string;
//   checkOut: string;
//   room: number;
//   adult: number;
//   children: number;
// }

// const RoomSingleCard2 = ({ room, className, tourWrapperClass, id }: any) => {
//   console.log(room,"roomabcd");
//   const router = useRouter();
//     const searchParams = useSearchParams();
//   const dispatch = useDispatch();
//   const bookings = useSelector((state: RootState) => state.booking.bookings);
//   console.log(bookings);
//   const bookedRoom = bookings?.find(
//     (booking) => booking?.Package_Id === room?.Package_Id
//   );
//   console.log(bookedRoom);
//   const quantity = bookedRoom ? bookedRoom.quantity : 0;
//   const minAvaRooms = room.min_ava_rooms || 0;
//   console.log(minAvaRooms);
//   console.log(quantity);
//   const discount = room.deals ? parseInt(room.deals.split("|")[1]) : 0;
//   const maxGuests =
//     Math.max(room.max_adult_occupancy, room.Room_Max_adult) || "N/A";
//   const minNights = room.Avg_min_nights || 1;

//   const amenities = room.specialhighlightinclusion
//     .split(",")
//     .map((item: any) => item.trim());
//   const handleBookNow = () => {
//     dispatch(addBooking(room));
//   };


//   const currentBooking: Booking = {
//     city: searchParams.get('city') || '',
//     checkIn: searchParams.get('checkIn') || '',
//     checkOut: searchParams.get('checkOut') || '',
//     room: parseInt(searchParams.get('room') || '0'),
//     adult: parseInt(searchParams.get('adult') || '0'),
//     children: parseInt(searchParams.get('children') || '0')
//   };


//   const handleAddRoom = () => {
//     dispatch(removeBooking(bookings[0]?.Package_Id));
//         dispatch(removeCoupon());
    

//     const bookingData = {
//       ...room,
//       // hotelId: room.hotelcode,
//       hotelId: id,
//       currentBooking,

//     };
//     dispatch(addBooking(bookingData));


//     // dispatch(addBooking(room));
//     router.push('/checkout')
//   };

//   const handleDecrementRoom = () => {
//     if (quantity > 1) {
//       dispatch(
//         updateBookingQuantity({
//           Package_Id: room.Package_Id,
//           quantity: quantity - 1,
//         })
//       );
//     } else if (quantity === 1) {
//       dispatch(removeBooking(room.Package_Id));
//     }
//   };

//   console.log(quantity);
//   return (
//     <>
//       {room?.RoomImages && room.RoomImages.length > 0 && (
//         <div className={`${className} ${styles.roomCard}`}>
//           <div className={`${tourWrapperClass} ${styles.roomCardInner}`}>
//             <div className={styles.imageContainer}>
//               <Carousel
//                 autoPlay={true}
//                 infiniteLoop={true}
//                 showStatus={false}
//                 showThumbs={false}
//                 interval={3000}
//                 renderArrowPrev={(onClickHandler, hasPrev) =>
//                   hasPrev && (
//                     <CustomArrow onClick={onClickHandler} direction="prev" />
//                   )
//                 }
//                 renderArrowNext={(onClickHandler, hasNext) =>
//                   hasNext && (
//                     <CustomArrow onClick={onClickHandler} direction="next" />
//                   )
//                 }
//               >
//                 {room?.RoomImages && room.RoomImages.length > 0 ? (
//                   room.RoomImages.map((img: any, index: any) => (
//                     <div key={index} className={styles.carouselImageWrapper}>
//                       <Image
//                         src={img.image}
//                         layout="fill"
//                         objectFit="cover"
//                         alt={`${room.Room_Name} - Image ${index + 1}`}
//                       />
//                     </div>
//                   ))
//                 ) : (
//                   <div className={styles.carouselImageWrapper}>
//                     <Image
//                       src="/assets/images/tour/tour-1.jpg"
//                       layout="fill"
//                       objectFit="cover"
//                       alt={room.Room_Name}
//                     />
//                   </div>
//                 )}
//               </Carousel>
//               {discount > 0 && (
//                 <div className={styles.discountBadge}>{discount}% OFF</div>
//               )}
//             </div>
//             <div className={styles.contentContainer}>
//               <h3 className={styles.roomTitle}>
//                 <Link href={`/room-details/${room.Package_Id}`}>
//                   {room.Room_Name}
//                 </Link>
//               </h3>
//               <div className={styles.roomDetails}>
//                 <div className={styles.detailItem}>
//                   <Users size={16} />
//                   <span>{maxGuests} guests</span>
//                 </div>
//                 <div className={styles.detailItem}>
//                   <Moon size={16} />
//                   <span>
//                     Min {minNights} night{minNights > 1 ? "s" : ""}
//                   </span>
//                 </div>
//               </div>
//               <div className={styles.amenities}>
//                 {amenities.slice(0, 3).map((amenity: any, index: any) => (
//                   <span key={index} className={styles.amenity}>
//                     {index === 0 && <Coffee size={14} />}
//                     {index === 1 && <Wifi size={14} />}
//                     {index === 2 && <Star size={14} />}
//                     {amenity}
//                   </span>
//                 ))}
//               </div>
//               <div className={styles.priceSection}>
//                 <span className={styles.priceLabel}>Best Price Guaranteed</span>
//                 {room.room_rates_info.avg_per_night_after_discount > 0 && (
//                   <span className={styles.actualPrice}>
//                     {room.currency_sign || "$"}
//                     {room.room_rates_info.avg_per_night_after_discount.toFixed(
//                       2
//                     )}
//                     <span className={styles.perNight}>/night</span>
//                   </span>
//                 )}
//               </div>
//               {/* {quantity > 0 ? (
//                 <>
//                   <button
//                     className={styles.quantityButton}
//                     onClick={handleDecrementRoom}
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className={styles.quantityDisplay}>{quantity}</span>
//                   <button
//                     className={styles.quantityButton}
//                     onClick={handleAddRoom}
//                     disabled={quantity >= minAvaRooms}
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   className={styles.bookNowButton}
//                   onClick={handleAddRoom}
//                 >
//                   Book Now
//                   <ChevronRight size={18} />
//                 </button>
//               )} */}
//   {/* {quantity > 0 ? (
//                 <>
//                   <button
//                     className={styles.quantityButton}
//                     onClick={handleAddRoom}
//                     disabled={quantity >= minAvaRooms}
//                   >
//                     Selected
//                   </button>
//                    <button
//                   className={styles.bookNowButtonDisabled}
//                   onClick={handleAddRoom}
//                   disabled={true}
//                 >
//                   Selected
//                   <ChevronRight size={18} />
//                 </button>
//                 </>
//               ) : (
//                 <button
//                   className={styles.bookNowButton}
//                   onClick={handleAddRoom}
//                 >
//                   Book Now
//                   <ChevronRight size={18} />
//                 </button>
//               )} */}



//                 <button
//                   className={styles.bookNowButton}
//                   onClick={handleAddRoom}
//                 >
//                   Book Now
//                   <ChevronRight size={18} />
//                 </button>
              




//               {/* </Link> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default RoomSingleCard2;
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Moon,
  Coffee,
  Wifi,
  Star,
} from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Make sure this is imported
import styles from "./RoomSingleCard2.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addBooking,
  removeBooking,
  removeCoupon,
} from "@/redux/slices/bookingSlice";
import { RootState } from "@/redux/store";
import { useRouter, useSearchParams } from 'next/navigation';
import moment from "moment";

const CustomArrow = ({ onClick, direction }: any) => (
  <button
    onClick={onClick}
    className={`${styles.carouselArrow} ${
      direction === "prev" ? styles.carouselArrowPrev : styles.carouselArrowNext
    }`}
  >
    {direction === "prev" ? (
      <ChevronLeft size={16} />
    ) : (
      <ChevronRight size={16} />
    )}
  </button>
);

const RoomSingleCard2 = ({ room, className, tourWrapperClass, id }: any) => {
  console.log(room, "roomabcd");
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const bookings = useSelector((state: RootState) => state.booking.bookings);

  // Add availability state
  const [isAvailable, setIsAvailable] = useState(true);
  const [availabilityMessage, setAvailabilityMessage] = useState("");

  useEffect(() => {
    checkAvailability();
  }, [room, searchParams]);

  const checkAvailability = () => {
    const checkInDate = searchParams.get('checkIn');
    const checkOutDate = searchParams.get('checkOut');
    
    // If no dates selected, room is available
    if (!checkInDate || !checkOutDate) {
      setIsAvailable(true);
      setAvailabilityMessage("");
      return;
    }

    // Format dates to match API format (YYYY-MM-DD)
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    };

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    
    let isUnavailable = false;
    let currentDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    endDate.setDate(endDate.getDate() - 1); // Subtract one day from checkout date
    
    while (currentDate <= endDate) { // Check until the day before checkout
      const dateKey = formatDate(currentDate.toISOString());
      console.log('Checking availability for date:', dateKey);
      const availability = room.available_rooms[dateKey];
      
      // Convert to number, handling both string and number types
      const roomCount = availability ? 
        (typeof availability === 'string' ? parseInt(availability) : availability) 
        : 0;
      
      console.log('Date:', dateKey, 'Availability:', roomCount);
      
      if (roomCount <= 0) {
        isUnavailable = true;
        break;
      }
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    setIsAvailable(!isUnavailable);
    if (isUnavailable) {
      setAvailabilityMessage("Not available for selected dates");
    } else {
      setAvailabilityMessage("");
    }
};

  const handleBookNow = () => {
    if (!isAvailable) return;

    dispatch(removeBooking(bookings[0]?.Package_Id));
    dispatch(removeCoupon());

    const currentBooking = {
      city: searchParams.get('city') || '',
      checkIn: searchParams.get('checkIn') || '',
      checkOut: searchParams.get('checkOut') || '',
      room: parseInt(searchParams.get('room') || '0'),
      adult: parseInt(searchParams.get('adult') || '0'),
      children: parseInt(searchParams.get('children') || '0')
    };

    const bookingData = {
      ...room,
      hotelId: id,
      currentBooking,
    };

    dispatch(addBooking(bookingData));
    router.push('/checkout');
  };

  const discount = room.deals ? parseInt(room.deals.split("|")[1]) : 0;
  const maxGuests = Math.max(room.max_adult_occupancy, room.Room_Max_adult) || "N/A";
  const minNights = room.Avg_min_nights || 1;
  const amenities = room.specialhighlightinclusion.split(",").map((item: any) => item.trim());

  return (
    <>
      {room?.RoomImages && room.RoomImages.length > 0 && (
        <div className={`${className} ${styles.roomCard}`}>
          <div className={`${tourWrapperClass} ${styles.roomCardInner}`}>
            <div className={styles.imageContainer}>
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                interval={3000}
                renderArrowPrev={(onClickHandler, hasPrev) =>
                  hasPrev && (
                    <CustomArrow onClick={onClickHandler} direction="prev" />
                  )
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                  hasNext && (
                    <CustomArrow onClick={onClickHandler} direction="next" />
                  )
                }
              >
                {room?.RoomImages && room.RoomImages.length > 0 ? (
                  room.RoomImages.map((img: any, index: any) => (
                    <div key={index} className={styles.carouselImageWrapper}>
                      <Image
                        src={img.image}
                        alt={`${room.Room_Name} - Image ${index + 1}`}
                        width={800}
                        height={500}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        priority={index === 0}
                        onError={(e: any) => {
                          e.target.src = "/assets/images/tour/tour-1.jpg";
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className={styles.carouselImageWrapper}>
                    <Image
                      src="/assets/images/tour/tour-1.jpg"
                      alt={room.Room_Name}
                      width={800}
                      height={500}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      priority
                    />
                  </div>
                )}
              </Carousel>
              {discount > 0 && (
                <div className={styles.discountBadge}>{discount}% OFF</div>
              )}
            </div>
            <div className={styles.contentContainer}>
              <h3 className={styles.roomTitle}>
                <Link href={`/room-details/${room.Package_Id}`}>
                  {room.Room_Name}
                </Link>
              </h3>
              <div className={styles.roomDetails}>
                <div className={styles.detailItem}>
                  <Users size={16} />
                  <span>{maxGuests} guests</span>
                </div>
                <div className={styles.detailItem}>
                  <Moon size={16} />
                  <span>Min {minNights} night{minNights > 1 ? "s" : ""}</span>
                </div>
              </div>
              <div className={styles.amenities}>
                {amenities.slice(0, 3).map((amenity: any, index: any) => (
                  <span key={index} className={styles.amenity}>
                    {index === 0 && <Coffee size={14} />}
                    {index === 1 && <Wifi size={14} />}
                    {index === 2 && <Star size={14} />}
                    {amenity}
                  </span>
                ))}
              </div>
              <div className={styles.priceSection}>
                <span className={styles.priceLabel}>Best Price Guaranteed</span>
                {room.room_rates_info.avg_per_night_after_discount > 0 && (
                  <span className={styles.actualPrice}>
                    {room.currency_sign || "$"}
                    {room.room_rates_info.avg_per_night_after_discount.toFixed(2)}
                    <span className={styles.perNight}>/night</span>
                  </span>
                )}
              </div>

              {!isAvailable && (
                <div className={styles.unavailableMessage}>
                  {availabilityMessage}
                </div>
              )}

              <button
                className={`${styles.bookNowButton} ${!isAvailable ? styles.bookNowButtonDisabled : ''}`}
                onClick={handleBookNow}
                disabled={!isAvailable}
              >
                {isAvailable ? 'Book Now' : 'Not Available'}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomSingleCard2;