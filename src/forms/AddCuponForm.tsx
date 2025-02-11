// "use client";
// import React, { useState } from "react";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { useSelector, useDispatch } from "react-redux";
// import { setRooms } from "@/redux/slices/roomSlice";
// import { setDiscountedBookings } from "@/redux/slices/bookingSlice";
// import axios from "axios";
// import { toast } from "sonner";
// import { RootState } from "@/redux/store";
// interface Booking {
//   city: string;
//   checkIn: string;
//   checkOut: string;
//   room: number;
//   adult: number;
//   children: number;
// }
// const AddCuponForm = () => {
//   const dispatch = useAppDispatch();
//   const [coupon, setCoupon] = useState<string>("");
//   const bookings = useSelector((state: RootState) => state.booking.bookings);
//   console.log("bookings", bookings);
//   const bookingData: any = useSelector(
//     (state: RootState) => state.app.bookings
//   );
//   console.log("bookingData", bookingData);

//   const discountBookings = useSelector( (state: RootState) => state.booking.discountedBookings);
//   console.log("discountBookings", discountBookings);
//   const handleClick = async () => {
//     if (!bookingData || bookingData.length === 0) {
//       toast.error("Please select booking details first");
//       return;
//     }

//     try {
//       if (coupon === "") {
//         toast.error("Please enter a coupon code");
//         return;
//       }

//       const currentBooking = bookingData[0];
//       const queryParams = new URLSearchParams({
//         request_type: "RoomList",
//         HotelCode: "35554",
//         APIKey: "1189076249bb54f995-cd1c-11ed-b",
//         check_in_date: currentBooking.checkIn,
//         check_out_date: currentBooking.checkOut,
//         number_adults: currentBooking.adult.toString(),
//         number_children: currentBooking.children.toString(),
//         promotion_code: coupon,
//         num_rooms: "1",
//         show_only_available_rooms: "1",
//       }).toString();

//       const response = await axios.get(`/api/booking?${queryParams}`);

//       if (
//         Array.isArray(response.data) &&
//         response.data.length > 0 &&
//         response.data[0]["Error Details"]
//       ) {
//         const errorMessage = response.data[0]["Error Details"].Error_Message;
//         toast.error(
//           errorMessage || "An error occurred while fetching room data."
//         );
//       } else {
//         // Process successful response
//         const discountedBookings = response.data.map((room: any) => {
//           const existingBooking = bookings.find(
//             (booking) => booking.Room_Name === room.Room_Name
//           );

//           if (existingBooking) {
//             const originalPrice = existingBooking.room_rates_info.totalprice_inclusive_all;
//             console.log("originalPrice", originalPrice);
//             const discountedPrice = room.room_rates_info.totalprice_inclusive_all;
//             console.log("discountedPrice", discountedPrice);

//             if (discountedPrice < originalPrice) {
//               return {
//                 ...existingBooking,
//                 discountedPrice,
//                 couponCode: coupon,
//                 discount: originalPrice - discountedPrice,
//                 price: room.room_rates_info.avg_per_night_without_tax,
//               };
//             }
//           }
//           return null;
//         }).filter(Boolean);
//         console.log("discountedBookings", discountedBookings);

//         if (discountedBookings.length > 0) {
//           dispatch(setDiscountedBookings(discountedBookings));
//           toast.success("Coupon applied successfully!");
//         } else {
//           toast.info("No discounts available with this coupon.");
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching room data:", error);
//       toast.error("Failed to fetch room data. Please try again.");
//     }
//   };
//   return (
//     <>
//       <form
//         action="#"
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleClick();
//         }}
//       >
//         <div className="return-customer-input">
//           <label>Coupon Code :</label>
//           <input
//             type="text"
//             placeholder="Coupon"
//             value={coupon}
//             onChange={(e) => setCoupon(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bd-primary-btn btn-style is-bg radius-60"
//         >
//           <span className="bd-primary-btn-text">Apply Coupon</span>
//           <span className="bd-primary-btn-circle"></span>
//         </button>
//       </form>
//     </>
//   );
// };

// export default AddCuponForm;



// "use client";
// import React, { useState } from "react";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { useSelector } from "react-redux";
// import { setDiscountedBookings } from "@/redux/slices/bookingSlice";
// import axios from "axios";
// import { toast } from "sonner";
// import { RootState } from "@/redux/store";

// interface Booking {
//   city: string;
//   checkIn: string;
//   checkOut: string;
//   room: number;
//   adult: number;
//   children: number;
//   hotelId?: string;  // Added hotelId to interface
// }

// const AddCouponForm = () => {
//   const dispatch = useAppDispatch();
//   const [coupon, setCoupon] = useState<string>("");
//   const [loading, setLoading] = useState(false);
  
//   const bookings = useSelector((state: RootState) => state.booking.bookings);
//   console.log("bookings", bookings);
//   // const bookingData = useSelector((state: RootState) => state.app.bookings);
//   // console.log("bookingData", bookingData);
//   const discountBookings = useSelector((state: RootState) => state.booking.discountedBookings);

//   const handleClick = async () => {
//     // if (!bookingData || bookingData.length === 0) {
//     //   toast.error("Please select booking details first");
//     //   return;
//     // }

//     if (coupon === "") {
//       toast.error("Please enter a coupon code");
//       return;
//     }

//     // Get hotelId from the current booking
//     const hotelId = bookings[0]?.hotelId || bookings[0]?.hotelcode;

//     if (!hotelId) {
//       toast.error("Hotel information not found");
//       return;
//     }

//     setLoading(true);

//     try {
//       // hotelId: '6742265d936aec4cc41a8af2',
//       // currentBooking: {
//       //   city: 'Gurugram',
//       //   checkIn: '2024-12-29',
//       //   checkOut: '2024-12-30',
//       //   room: 1,
//       //   adult: 1,
//       //   children: 0
//       // },

//       const currentBooking :any = bookings[0]?.currentBooking;
//       console.log("currentBooking", currentBooking);
//       if (!currentBooking) {
//         toast.error("Booking information not found");
//         return;
//       }

//       // Use hotelId from the booking data for the API call
//       const compareResponse = await axios.get(`http://localhost:5001/api/v1/rooms/compare-listings/${hotelId}`, {
//         params: {
//           check_in_date: currentBooking.checkIn,
//           check_out_date: currentBooking.checkOut,
//           number_adults: currentBooking.adult.toString(),
//           number_children: currentBooking.children.toString(),
//           promotion_code: coupon
//         }
//       });

//       console.log("compareResponse", compareResponse);

//       if (compareResponse.data.status === "SUCCESS") {
//         const roomsData = compareResponse.data.data.rooms;
        
//         // Process and filter rooms with discounts
//         const discountedBookings = roomsData
//           .map((room: any) => {
//             const existingBooking = bookings.find(
//               (booking) => booking.Room_Name === room.Room_Name
//             );

//             if (existingBooking) {
//               const originalPrice = existingBooking.room_rates_info.totalprice_inclusive_all;
//               const discountedPrice = room.room_rates_info.totalprice_inclusive_all;

//               if (discountedPrice < originalPrice) {
//                 return {
//                   ...existingBooking,
//                   discountedPrice,
//                   couponCode: coupon,
//                   discount: originalPrice - discountedPrice,
//                   price: room.room_rates_info.avg_per_night_without_tax,
//                   hotelId // Include hotelId in discounted booking data
//                 };
//               }
//             }
//             return null;
//           })
//           .filter(Boolean);

//         if (discountedBookings.length > 0) {
//           dispatch(setDiscountedBookings(discountedBookings));
//           toast.success("Coupon applied successfully!");
//         } else {
//           toast.info("No discounts available with this coupon.");
//         }
//       } else {
//         toast.error("Failed to apply coupon. Please try again.");
//       }
//     } catch (error: any) {
//       console.error("Error applying coupon:", error);
//       toast.error(error?.response?.data?.message || "Failed to apply coupon. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleClick();
//       }}
//       className="space-y-4"
//     >
//       <div className="return-customer-input">
//         <label className="block text-sm font-medium mb-2">Coupon Code:</label>
//         <input
//           type="text"
//           placeholder="Enter your coupon code"
//           value={coupon}
//           onChange={(e) => setCoupon(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//           disabled={loading}
//         />
//       </div>
//       <button
//         type="submit"
//         className="bd-primary-btn btn-style is-bg radius-60 w-full"
//         disabled={loading}
//       >
//         <span className="bd-primary-btn-text">
//           {loading ? "Applying..." : "Apply Coupon"}
//         </span>
//         <span className="bd-primary-btn-circle"></span>
//       </button>
//     </form>
//   );
// };

// export default AddCouponForm;





"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSelector } from "react-redux";
import { setDiscountedBookings } from "@/redux/slices/bookingSlice";
import { toast } from "sonner";
import { RootState } from "@/redux/store";
import { useGetRoomListingsQuery } from "@/services/roomAPI";
import { useValidatePromocodeMutation } from "@/services/promoApi";

interface Booking {
  city: string;
  checkIn: string;
  checkOut: string;
  room: number;
  adult: number;
  children: number;
  hotelId?: string;
}

const AddCouponForm = () => {
  const dispatch = useAppDispatch();
  const [coupon, setCoupon] = useState<string>("");
  const [loading, setLoading] = useState(false);
  
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  const discountBookings = useSelector((state: RootState) => state.booking.discountedBookings);
  const [validatePromocode] = useValidatePromocodeMutation();

  // Skip the query initially until we have the form submission
  const [skip, setSkip] = useState(true);
  const [queryParams, setQueryParams] = useState<any>(null);

  const { data: roomListingsData, error: roomListingsError, isFetching } = useGetRoomListingsQuery(
    queryParams,
    { 
      skip: skip,
      // Refetch when promotion code changes
      refetchOnMountOrArgChange: true 
    }
  );

  console.log("roomListingsData", roomListingsData);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon === "") {
      toast.error("Please enter a coupon code");
      return;
    }

    const hotelId = bookings[0]?.hotelId || bookings[0]?.hotelcode;
    if (!hotelId) {
      toast.error("Hotel information not found");
      return;
    }

    console.log("bookings", bookings);
    console.log("hotelId", hotelId);


    const currentBooking = bookings[0]?.currentBooking;
    if (!currentBooking) {
      toast.error("Booking information not found");
      return;
    }

    try {
      setLoading(true);

    console.log("currentBooking", currentBooking);

      const response = await validatePromocode({
        code: coupon,
        roomType: bookings[0].roomType,
        bookingAmount: bookings[0].room_rates_info.totalprice_inclusive_all
      }).unwrap();

      console.log("response", response);

       if (response.status === 'success' && response.data) {
         // Set up query parameters
    const params = {
      hotelId,
      check_in_date: currentBooking.checkIn,
      check_out_date: currentBooking.checkOut,
      number_adults: currentBooking.adult,
      number_children: currentBooking.children,
      promotion_code: coupon
    };

    console.log("params", params);

    setQueryParams(params);
    setSkip(false);
      } else {
        // toast.error(response.description || 'Invalid coupon code');
        toast.error('Invalid coupon code');
      }
  } catch (error) {
    console.error('Promocode validation error:', error);
    toast.error('Failed to validate coupon code');
  } finally {
    setLoading(false);
  }
  };

  // Handle the response from RTK Query
  React.useEffect(() => {
    if (roomListingsData && !isFetching) {
      try {
        const roomsData = roomListingsData.data.rooms;
        console.log("roomsData", roomsData);
        
        // Process and filter rooms with discounts
        const discountedBookings = roomsData
          .map((room: any) => {
            const existingBooking = bookings.find(
              (booking) => booking.Room_Name === room.Room_Name
            );

            if (existingBooking) {
              const originalPrice = existingBooking.room_rates_info.totalprice_inclusive_all;
              console.log("originalPrice", originalPrice);
              const discountedPrice = room.room_rates_info.totalprice_inclusive_all;
              console.log("discountedPrice", discountedPrice);

              if (discountedPrice < originalPrice) {
                return {
                  ...existingBooking,
                  discountedPrice,
                  couponCode: coupon,
                  discount: originalPrice - discountedPrice,
                  price: room.room_rates_info.avg_per_night_without_tax,
                  hotelId: bookings[0]?.hotelId
                };
              }
            }
            return null;
          })
          .filter(Boolean);

          console.log("discountedBookings", discountedBookings);

        if (discountedBookings.length > 0) {
          dispatch(setDiscountedBookings(discountedBookings));
          toast.success("Coupon applied successfully!");
        } else {
          toast.info("No discounts available with this coupon.");
        }

        setLoading(false);
        setSkip(true); // Reset skip after processing
      } catch (error) {
        console.error("Error processing room data:", error);
        toast.error("Failed to process room data");
        setLoading(false);
        setSkip(true);
      }
    }

    if (roomListingsError) {
      console.error("Error fetching room listings:", roomListingsError);
      toast.error("Failed to apply coupon. Please try again.");
      setLoading(false);
      setSkip(true);
    }
  }, [roomListingsData, roomListingsError, isFetching]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="return-customer-input">
        <label className="block text-sm font-medium mb-2">Coupon Code:</label>
        <input
          type="text"
          placeholder="Enter your coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={loading || isFetching}
        />
      </div>
      <button
        type="submit"
        className="bd-primary-btn btn-style is-bg radius-60 w-full"
        disabled={loading || isFetching}
      >
        <span className="bd-primary-btn-text">
          {loading || isFetching ? "Applying..." : "Apply Coupon"}
        </span>
        <span className="bd-primary-btn-circle"></span>
      </button>
    </form>
  );
};

export default AddCouponForm;