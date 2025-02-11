// // "use client";
// // import { imageLoader } from "@/hooks/image-loader";
// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useState, useEffect } from "react";
// // import { useAppSelector } from "@/redux/hooks";
// // import { Button } from "reactstrap";
// // import { Star, Calendar, Users, DollarSign, Heart, Share2 } from 'lucide-react';
// // import { toast } from "react-toastify";
// // import Swal from "sweetalert2";
// // import { RootState } from "@/redux/store";
// // import { Carousel } from 'react-responsive-carousel';
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import axios from "axios";
// // import HotelDetailArea from "../hotel-detail-area/HotelDetailArea";

// // const Card = ({ children, className }:any) => (
// //   <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
// //     {children}
// //   </div>
// // );

// // const CardHeader = ({ children }:any) => (
// //   <div className="px-6 py-4 border-b border-gray-200">
// //     {children}
// //   </div>
// // );

// // const CardBody = ({ children }:any) => (
// //   <div className="px-6 py-4">
// //     {children}
// //   </div>
// // );

// // const CardFooter = ({ children }:any) => (
// //   <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
// //     {children}
// //   </div>
// // );

// // const HotelDetails = ({ id }: { id: string | number }) => {
// //   const [selectedRoomType, setSelectedRoomType] = useState<any>(null);
// //   const [isInWishList, setIsInWishList] = useState(false);
// //   const [checkIn, setCheckIn] = useState("");
// //   const [checkOut, setCheckOut] = useState("");
// //   const [adult, setAdult] = useState(1);
// //   const [children, setChildren] = useState(0);

// //   const { rooms } = useAppSelector((state: RootState) => state.room);
// //   console.log(rooms);
// //   const { bookings } : any = useAppSelector((state: RootState) => state.app);

// //   useEffect(() => {
// //     if (bookings && bookings[0]) {
// //       setCheckIn(bookings[0].checkIn);
// //       setCheckOut(bookings[0].checkOut);
// //       setAdult(bookings[0].adult);
// //       setChildren(bookings[0].children);
// //     }
// //   }, [bookings]);

// //   const wishListHandle = () => {
// //     setIsInWishList(!isInWishList);
// //     toast.success(isInWishList ? "Deleted from wishlist" : "Saved to wishlist");
// //   };

// //   const handleChangeBooking = async (firstName:any, lastName:any, email:any, phone:any) => {
// //     try {
// //       const queryParams = new URLSearchParams({
// //         request_type: "InsertBooking",
// //         HotelCode: "35554",
// //         APIKey: "1189076249bb54f995-cd1c-11ed-b",
// //       }).toString();

// //       // const bookingData = {
// //       //   Room_Details: {
// //       //     Room_1: {
// //       //       Rateplan_Id: rooms[0].roomrateunkid,
// //       //       Ratetype_Id: rooms[0].roomrateunkid,
// //       //       Roomtype_Id: rooms[0].roomtypeunkid,
// //       //       baserate: rooms[0].room_rates_info.avg_per_night_after_discount,
// //       //       extradultrate: "500",
// //       //       extrachildrate: "500",
// //       //       number_adults: adult.toString(),
// //       //       number_children: children.toString(),
// //       //       ExtraChild_Age: "2",
// //       //       Title: "",
// //       //       First_Name: firstName,
// //       //       Last_Name: lastName,
// //       //       Gender: "",
// //       //       SpecialRequest: "",
// //       //     },
// //       //   },
// //       //   check_in_date: checkIn,
// //       //   check_out_date: checkOut,
// //       //   Booking_Payment_Mode: "0",
// //       //   Email_Address: email,
// //       //   Source_Id: "",
// //       //   MobileNo: "",
// //       //   Address: "",
// //       //   State: "",
// //       //   Country: "",
// //       //   City: "",
// //       //   Zipcode: "",
// //       //   Fax: "",
// //       //   Device: "",
// //       //   Languagekey: "",
// //       //   paymenttypeunkid: "",
// //       // };

// //       const bookingData = {
// //         Room_Details: {
// //           Room_1: {
// //             Rateplan_Id: rooms[0].roomrateunkid,
// //             Ratetype_Id: "3555400000000000007",
// //             Roomtype_Id: rooms[0].roomtypeunkid,
// //             baserate: "6000",
// //             extradultrate: "1000",
// //             extrachildrate: "500",
// //             number_adults: adult.toString(),
// //             number_children: children.toString(),
// //             ExtraChild_Age: "2",
// //             Title: "Mr",
// //             First_Name: firstName,
// //             Last_Name: lastName,
// //             Gender: "Male",
// //             SpecialRequest: "",
// //           },
// //         },
// //         check_in_date: checkIn,
// //         check_out_date: checkOut,
// //         Booking_Payment_Mode: "",
// //         Email_Address: email,
// //         Source_Id: "",
// //         MobileNo: "",
// //         Address: "Noida Uttar Pradesh",
// //         State: "Uttar Pradesh",
// //         Country: "India",
// //         City: "Noida",
// //         Zipcode: "395002",
// //         Fax: "",
// //         Device: "",
// //         Languagekey: "en",
// //         paymenttypeunkid: "",
// //       };

// //       // const bookingData = {
// //       //   Room_Details: {
// //       //     Room_1: {
// //       //       Rateplan_Id: "800000000000001",
// //       //       Ratetype_Id: "800000000000001",
// //       //       Roomtype_Id: "800000000000001",
// //       //       baserate: "3500",
// //       //       extradultrate: "500",
// //       //       extrachildrate: "500",
// //       //       number_adults: "2",
// //       //       number_children: "1",
// //       //       ExtraChild_Age: "2",
// //       //       Title: "",
// //       //       First_Name: "ABC",
// //       //       Last_Name: "Joy",
// //       //       Gender: "",
// //       //       SpecialRequest: "",
// //       //     },
// //       //   },
// //       //   check_in_date: "2024-07-13",
// //       //   check_out_date: "2024-07-14",
// //       //   Booking_Payment_Mode: "",
// //       //   Email_Address: "abc@gmail.com",
// //       //   Source_Id: "",
// //       //   MobileNo: "",
// //       //   Address: "",
// //       //   State: "",
// //       //   Country: "",
// //       //   City: "",
// //       //   Zipcode: "",
// //       //   Fax: "",
// //       //   Device: "",
// //       //   Languagekey: "",
// //       //   paymenttypeunkid: "",
// //       // };

// //       console.log("bookingData===", bookingData);

// //       const formData = new FormData();
// //       formData.append("BookingData", JSON.stringify(bookingData));

// //       const headers = {
// //         "Content-Type": "multipart/form-data",
// //       };

// //       const response = await axios.post(
// //         `/api/booking?${queryParams}`,
// //         formData,
// //         { headers }
// //       );
// //       console.log("130===", response.data);

// //       if (response.data.ReservationNo) {
// //         const queryParames = new URLSearchParams({
// //           request_type: "ReadBooking",
// //           HotelCode: "35554",
// //           APIKey: "1189076249bb54f995-cd1c-11ed-b",
// //           ResNo: response.data.ReservationNo,
// //         }).toString();
// //         const responseGetBookingDetails = await axios.post(
// //           `/api/booking?${queryParames}`
// //         );

// //         console.log("145===", responseGetBookingDetails.data);

// //         Swal.fire({
// //           title: "Booking successful",
// //           icon: "success",
// //           html: `
// //               <p>Thank you for booking with us. Your booking reservation number is <strong>#${response.data.ReservationNo}</strong>. We have sent you an email confirmation.</p>
// //               <p>For any queries, please contact our customer service team.</p>
// //             `,
// //           showCloseButton: true,
// //           confirmButtonColor: "#3085d6",
// //           showCancelButton: false,
// //           focusConfirm: false,
// //           confirmButtonText: "Close",
// //         });
// //       }

// //       console.log("130====", response.data); // Handle the response as needed
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleBookNow = async () => {
// //     try {
// //       Swal.fire({
// //         title: "Enter your contact details",
// //         html: `
// //           <input type="text" id="swal-input-first-name" class="swal2-input" placeholder="Enter your first name">
// //           <input type="text" id="swal-input-last-name" class="swal2-input" placeholder="Enter your last name">
// //           <input type="email" id="swal-input-email" class="swal2-input" placeholder="Enter your email address">
// //           <input type="tel" id="swal-input-phone" class="swal2-input" placeholder="Enter your phone number">
// //         `,
// //         showCancelButton: true,
// //         cancelButtonColor: "#d33",
// //         confirmButtonText: "Submit",
// //         showLoaderOnConfirm: true,
// //         preConfirm: () => {
// //           const firstName = (
// //             document.getElementById(
// //               "swal-input-first-name"
// //             ) as HTMLInputElement
// //           ).value;
// //           const lastName = (
// //             document.getElementById(
// //               "swal-input-last-name"
// //             ) as HTMLInputElement
// //           ).value;

// //           const email = (
// //             document.getElementById("swal-input-email") as HTMLInputElement
// //           ).value;
// //           const phone = (
// //             document.getElementById("swal-input-phone") as HTMLInputElement
// //           ).value;

// //           if (!email || !phone || !firstName || !lastName) {
// //             Swal.showValidationMessage("You need to fill out both fields!");
// //           }

// //           const emailPattern =
// //             /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// //           if (!emailPattern.test(email)) {
// //             Swal.showValidationMessage("Please enter a valid email address");
// //           }

// //           const phonePattern = /^[0-9]{10}$/; // example pattern for 10-digit phone number
// //           if (!phonePattern.test(phone)) {
// //             Swal.showValidationMessage("Please enter a valid phone number");
// //           }

// //           return {
// //             email: email,
// //             phone: phone,
// //             firstName: firstName,
// //             lastName: lastName,
// //           };
// //         },
// //         allowOutsideClick: () => !Swal.isLoading(),
// //         confirmButtonColor: "#3085d6",
// //       }).then((result) => {
// //         if (result.isConfirmed) {
// //           const email = result.value.email;
// //           console.log("Email:", email);
// //           const phone = result.value.phone;
// //           console.log("Phone:", phone);
// //           console.log("First Name:", result.value.firstName);
// //           console.log("Last Name:", result.value.lastName);
// //           // setPhone(phone);
// //           // setEmail(email);
// //           // setName(result.value.firstName);
// //           // setLastName(result.value.lastName);
// //           handleChangeBooking(result.value.firstName, result.value.lastName, email, phone);

// //           // Swal.fire({
// //           //   title: "Booking successful",
// //           //   icon: "success",
// //           //   html: `
// //           //     <p>Thank you for booking with us. Your booking reference number is <strong>#123456</strong>. We have sent you an email confirmation.</p>
// //           //     <p>For any queries, please contact our customer service team.</p>
// //           //   `,
// //           //   showCloseButton: true,
// //           //   confirmButtonColor: "#3085d6",
// //           //   showCancelButton: false,
// //           //   focusConfirm: false,
// //           //   confirmButtonText: "Close",
// //           // });

// //           // console.log("Email:", result.value.email);
// //           // console.log("Phone:", result.value.phone);
// //         }
// //       });
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <>
// //     <HotelDetailArea hotelData={selectedRoomType} rooms={rooms}/>
// //     <section className="bg-gray-100 py-12">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col lg:flex-row gap-8">
// //           <div className="lg:w-2/3">

// //             <Card>
// //               <CardHeader>
// //                 <div className="flex justify-between items-center">
// //                   <h3 className="text-2xl font-bold">
// //                     {selectedRoomType?.Room_Name || "Select a Room"}
// //                   </h3>
// //                   <div className="flex gap-2">
// //                     <span className="bg-yellow-400 text-white px-2 py-1 rounded text-sm">Featured</span>
// //                     <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">Special Offer</span>
// //                   </div>
// //                 </div>
// //               </CardHeader>
// //               <CardBody>
// //                 <div className="flex justify-between items-center mb-4">
// //                   <div className="text-2xl font-bold">
// //                     ${selectedRoomType?.room_rates_info?.totalprice_inclusive_all || "---"}
// //                     <span className="text-sm font-normal">/Per Night</span>
// //                   </div>
// //                   <div className="flex items-center">
// //                     <Star className="text-yellow-400 mr-1" />
// //                     <span>{selectedRoomType?.Room_Max_adult || "N/A"} Adults</span>
// //                   </div>
// //                 </div>
// //                 <div className="mb-6">
// //                   <h4 className="font-semibold mb-2">Room Details</h4>
// //                   <p dangerouslySetInnerHTML={{ __html: selectedRoomType?.Room_Description || "Select a room to see details" }}></p>
// //                 </div>
// //               </CardBody>
// //             </Card>

// //             <div className="mt-8">
// //               <h4 className="text-xl font-semibold mb-4">Available Rooms</h4>
// //               {rooms?.map((room: any) => (
// //                 <Card key={room.Roomtype_Id} className="mb-4">
// //                   <CardBody>
// //                     <div className="flex justify-between items-center">
// //                       <div>
// //                         <h5 className="text-lg font-semibold">{room.Room_Name}</h5>
// //                         <p className="text-sm text-gray-600">{room.Specials_Desc}</p>
// //                       </div>
// //                       <Button
// //                         onClick={() => setSelectedRoomType(room)}
// //                         color={selectedRoomType?.Room_Name === room.Room_Name ? "secondary" : "primary"}
// //                       >
// //                         {selectedRoomType?.Room_Name === room.Room_Name ? "Selected" : "Select Room"}
// //                       </Button>
// //                     </div>
// //                   </CardBody>
// //                 </Card>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="lg:w-1/3">
// //             <Card>
// //               <CardHeader>
// //                 <h3 className="text-xl font-semibold">Book Your Stay</h3>
// //               </CardHeader>
// //               <CardBody>
// //                 <div className="space-y-4">
// //                   <div>
// //                     <label className="block mb-1">Check-in</label>
// //                     <div className="flex items-center">
// //                       <Calendar className="mr-2" />
// //                       <input
// //                         type="date"
// //                         className="w-full p-2 border rounded"
// //                         value={checkIn}
// //                         onChange={(e) => setCheckIn(e.target.value)}
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block mb-1">Check-out</label>
// //                     <div className="flex items-center">
// //                       <Calendar className="mr-2" />
// //                       <input
// //                         type="date"
// //                         className="w-full p-2 border rounded"
// //                         value={checkOut}
// //                         onChange={(e) => setCheckOut(e.target.value)}
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block mb-1">Guests</label>
// //                     <div className="flex items-center">
// //                       <Users className="mr-2" />
// //                       <input
// //                         type="number"
// //                         className="w-1/2 p-2 border rounded mr-2"
// //                         value={adult}
// //                         onChange={(e) => setAdult(Number(e.target.value))}
// //                         min="1"
// //                         max={selectedRoomType?.Room_Max_adult || 1}
// //                         placeholder="Adults"
// //                       />
// //                       <input
// //                         type="number"
// //                         className="w-1/2 p-2 border rounded"
// //                         value={children}
// //                         onChange={(e) => setChildren(Number(e.target.value))}
// //                         min="0"
// //                         max={selectedRoomType?.Room_Max_child || 0}
// //                         placeholder="Children"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </CardBody>
// //               <CardFooter>
// //                 <Button
// //                   color="primary"
// //                   onClick={selectedRoomType ? handleBookNow : undefined}
// //                   disabled={!selectedRoomType}
// //                   className="w-full"
// //                 >
// //                   Book Now
// //                 </Button>
// //               </CardFooter>
// //             </Card>

// //             <div className="mt-4 flex justify-between">
// //               <Button color="secondary" onClick={wishListHandle} className="flex items-center">
// //                 <Heart className={`mr-2 ${isInWishList ? 'fill-current' : ''}`} />
// //                 {isInWishList ? "Remove from Wishlist" : "Add to Wishlist"}
// //               </Button>
// //               <Button color="secondary" className="flex items-center">
// //                 <Share2 className="mr-2" />
// //                 Share
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //     </>
// //   );
// // };

// // // export default HotelDetails;
// // "use client";
// // import { imageLoader } from "@/hooks/image-loader";
// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useState, useEffect } from "react";
// // import { useAppSelector } from "@/redux/hooks";
// // import { useSelector, useDispatch } from "react-redux";
// // import { Button } from "reactstrap";
// // import { Star, Calendar, Users, DollarSign, Heart, Share2 } from "lucide-react";
// // import { toast } from "sonner";
// // import Swal from "sweetalert2";
// // import { RootState } from "@/redux/store";
// // import { useRouter } from 'next/navigation'
// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import axios from "axios";
// // import HotelDetailArea from "../hotel-detail-area/HotelDetailArea";
// // // import TourAreaTwo from "./TourAreaTwo";
// // import TourAreaTwo from "../home-two/TourAreaTwo";

// // const Card = ({ children, className }: any) => (
// //   <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
// //     {children}
// //   </div>
// // );

// // const CardHeader = ({ children }: any) => (
// //   <div className="px-6 py-4 border-b border-gray-200">{children}</div>
// // );

// // const CardBody = ({ children }: any) => (
// //   <div className="px-6 py-4">{children}</div>
// // );

// // const CardFooter = ({ children }: any) => (
// //   <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
// //     {children}
// //   </div>
// // );

// // const HotelDetails = ({ id }: { id: string | number }) => {
// //   const [selectedRoomType, setSelectedRoomType] = useState<any>(null);
// //   const [isInWishList, setIsInWishList] = useState(false);
// //   const [checkIn, setCheckIn] = useState("");
// //   const [checkOut, setCheckOut] = useState("");
// //   const [adult, setAdult] = useState(1);
// //   const [children, setChildren] = useState(0);
// //   const router = useRouter();
// //   const { rooms } = useAppSelector((state: RootState) => state.room);
// //   console.log(rooms);
// //   // const { bookings }: any = useAppSelector((state: RootState) => state.app);
// //   // console.log(bookings);
// //   const bookingData: any = useSelector(
// //     (state: RootState) => state.app.bookings
// //   );
// //   const bookings = useSelector((state: RootState) => state.booking.bookings);
// //   console.log(bookings);

// //   console.log("bookingData", bookingData);

// //   useEffect(() => {
// //     if(rooms.length === 0) {
// //       toast.error("No rooms available");
// //       router.push("/");
// //     }
// //   }, [rooms]);

// //   useEffect(() => {
// //     if (bookingData && bookingData[0]) {
// //       setCheckIn(bookingData[0].checkIn);
// //       setCheckOut(bookingData[0].checkOut);
// //       setAdult(bookingData[0].adult);
// //       setChildren(bookingData[0].children);
// //     }
// //   }, [bookingData]);

// //   const wishListHandle = () => {
// //     setIsInWishList(!isInWishList);
// //     toast.success(isInWishList ? "Deleted from wishlist" : "Saved to wishlist");
// //   };

// //   const handleChangeBooking = async (
// //     firstName: any,
// //     lastName: any,
// //     email: any,
// //     phone: any
// //   ) => {
// //     try {
// //       const queryParams = new URLSearchParams({
// //         request_type: "InsertBooking",
// //         HotelCode: "35554",
// //         APIKey: "1189076249bb54f995-cd1c-11ed-b",
// //       }).toString();

// //       // const bookingData = {
// //       //   Room_Details: {
// //       //     Room_1: {
// //       //       Rateplan_Id: rooms[0].roomrateunkid,
// //       //       Ratetype_Id: rooms[0].roomrateunkid,
// //       //       Roomtype_Id: rooms[0].roomtypeunkid,
// //       //       baserate: rooms[0].room_rates_info.avg_per_night_after_discount,
// //       //       extradultrate: "500",
// //       //       extrachildrate: "500",
// //       //       number_adults: adult.toString(),
// //       //       number_children: children.toString(),
// //       //       ExtraChild_Age: "2",
// //       //       Title: "",
// //       //       First_Name: firstName,
// //       //       Last_Name: lastName,
// //       //       Gender: "",
// //       //       SpecialRequest: "",
// //       //     },
// //       //   },
// //       //   check_in_date: checkIn,
// //       //   check_out_date: checkOut,
// //       //   Booking_Payment_Mode: "0",
// //       //   Email_Address: email,
// //       //   Source_Id: "",
// //       //   MobileNo: "",
// //       //   Address: "",
// //       //   State: "",
// //       //   Country: "",
// //       //   City: "",
// //       //   Zipcode: "",
// //       //   Fax: "",
// //       //   Device: "",
// //       //   Languagekey: "",
// //       //   paymenttypeunkid: "",
// //       // };

// //       const bookingData = {
// //         Room_Details: {
// //           Room_1: {
// //             Rateplan_Id: rooms[0].roomrateunkid,
// //             Ratetype_Id: "3555400000000000007",
// //             Roomtype_Id: rooms[0].roomtypeunkid,
// //             baserate: "6000",
// //             extradultrate: "1000",
// //             extrachildrate: "500",
// //             number_adults: adult.toString(),
// //             number_children: children.toString(),
// //             ExtraChild_Age: "2",
// //             Title: "Mr",
// //             First_Name: firstName,
// //             Last_Name: lastName,
// //             Gender: "Male",
// //             SpecialRequest: "",
// //           },
// //         },
// //         check_in_date: checkIn,
// //         check_out_date: checkOut,
// //         Booking_Payment_Mode: "",
// //         Email_Address: email,
// //         Source_Id: "",
// //         MobileNo: "",
// //         Address: "Noida Uttar Pradesh",
// //         State: "Uttar Pradesh",
// //         Country: "India",
// //         City: "Noida",
// //         Zipcode: "395002",
// //         Fax: "",
// //         Device: "",
// //         Languagekey: "en",
// //         paymenttypeunkid: "",
// //       };

// //       // const bookingData = {
// //       //   Room_Details: {
// //       //     Room_1: {
// //       //       Rateplan_Id: "800000000000001",
// //       //       Ratetype_Id: "800000000000001",
// //       //       Roomtype_Id: "800000000000001",
// //       //       baserate: "3500",
// //       //       extradultrate: "500",
// //       //       extrachildrate: "500",
// //       //       number_adults: "2",
// //       //       number_children: "1",
// //       //       ExtraChild_Age: "2",
// //       //       Title: "",
// //       //       First_Name: "ABC",
// //       //       Last_Name: "Joy",
// //       //       Gender: "",
// //       //       SpecialRequest: "",
// //       //     },
// //       //   },
// //       //   check_in_date: "2024-07-13",
// //       //   check_out_date: "2024-07-14",
// //       //   Booking_Payment_Mode: "",
// //       //   Email_Address: "abc@gmail.com",
// //       //   Source_Id: "",
// //       //   MobileNo: "",
// //       //   Address: "",
// //       //   State: "",
// //       //   Country: "",
// //       //   City: "",
// //       //   Zipcode: "",
// //       //   Fax: "",
// //       //   Device: "",
// //       //   Languagekey: "",
// //       //   paymenttypeunkid: "",
// //       // };

// //       console.log("bookingData===", bookingData);

// //       const formData = new FormData();
// //       formData.append("BookingData", JSON.stringify(bookingData));

// //       const headers = {
// //         "Content-Type": "multipart/form-data",
// //       };

// //       const response = await axios.post(
// //         `/api/booking?${queryParams}`,
// //         formData,
// //         { headers }
// //       );
// //       console.log("130===", response.data);

// //       if (response.data.ReservationNo) {
// //         const queryParames = new URLSearchParams({
// //           request_type: "ReadBooking",
// //           HotelCode: "35554",
// //           APIKey: "1189076249bb54f995-cd1c-11ed-b",
// //           ResNo: response.data.ReservationNo,
// //         }).toString();
// //         const responseGetBookingDetails = await axios.post(
// //           `/api/booking?${queryParames}`
// //         );

// //         console.log("145===", responseGetBookingDetails.data);

// //         Swal.fire({
// //           title: "Booking successful",
// //           icon: "success",
// //           html: `
// //               <p>Thank you for booking with us. Your booking reservation number is <strong>#${response.data.ReservationNo}</strong>. We have sent you an email confirmation.</p>
// //               <p>For any queries, please contact our customer service team.</p>
// //             `,
// //           showCloseButton: true,
// //           confirmButtonColor: "#3085d6",
// //           showCancelButton: false,
// //           focusConfirm: false,
// //           confirmButtonText: "Close",
// //         });
// //       }

// //       console.log("130====", response.data); // Handle the response as needed
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleBookNow = async () => {
// //     try {
// //       Swal.fire({
// //         title: "Enter your contact details",
// //         html: `
// //           <input type="text" id="swal-input-first-name" class="swal2-input" placeholder="Enter your first name">
// //           <input type="text" id="swal-input-last-name" class="swal2-input" placeholder="Enter your last name">
// //           <input type="email" id="swal-input-email" class="swal2-input" placeholder="Enter your email address">
// //           <input type="tel" id="swal-input-phone" class="swal2-input" placeholder="Enter your phone number">
// //         `,
// //         showCancelButton: true,
// //         cancelButtonColor: "#d33",
// //         confirmButtonText: "Submit",
// //         showLoaderOnConfirm: true,
// //         preConfirm: () => {
// //           const firstName = (
// //             document.getElementById("swal-input-first-name") as HTMLInputElement
// //           ).value;
// //           const lastName = (
// //             document.getElementById("swal-input-last-name") as HTMLInputElement
// //           ).value;

// //           const email = (
// //             document.getElementById("swal-input-email") as HTMLInputElement
// //           ).value;
// //           const phone = (
// //             document.getElementById("swal-input-phone") as HTMLInputElement
// //           ).value;

// //           if (!email || !phone || !firstName || !lastName) {
// //             Swal.showValidationMessage("You need to fill out both fields!");
// //           }

// //           const emailPattern =
// //             /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// //           if (!emailPattern.test(email)) {
// //             Swal.showValidationMessage("Please enter a valid email address");
// //           }

// //           const phonePattern = /^[0-9]{10}$/; // example pattern for 10-digit phone number
// //           if (!phonePattern.test(phone)) {
// //             Swal.showValidationMessage("Please enter a valid phone number");
// //           }

// //           return {
// //             email: email,
// //             phone: phone,
// //             firstName: firstName,
// //             lastName: lastName,
// //           };
// //         },
// //         allowOutsideClick: () => !Swal.isLoading(),
// //         confirmButtonColor: "#3085d6",
// //       }).then((result) => {
// //         if (result.isConfirmed) {
// //           const email = result.value.email;
// //           console.log("Email:", email);
// //           const phone = result.value.phone;
// //           console.log("Phone:", phone);
// //           console.log("First Name:", result.value.firstName);
// //           console.log("Last Name:", result.value.lastName);
// //           // setPhone(phone);
// //           // setEmail(email);
// //           // setName(result.value.firstName);
// //           // setLastName(result.value.lastName);
// //           handleChangeBooking(
// //             result.value.firstName,
// //             result.value.lastName,
// //             email,
// //             phone
// //           );

// //           // Swal.fire({
// //           //   title: "Booking successful",
// //           //   icon: "success",
// //           //   html: `
// //           //     <p>Thank you for booking with us. Your booking reference number is <strong>#123456</strong>. We have sent you an email confirmation.</p>
// //           //     <p>For any queries, please contact our customer service team.</p>
// //           //   `,
// //           //   showCloseButton: true,
// //           //   confirmButtonColor: "#3085d6",
// //           //   showCancelButton: false,
// //           //   focusConfirm: false,
// //           //   confirmButtonText: "Close",
// //           // });

// //           // console.log("Email:", result.value.email);
// //           // console.log("Phone:", result.value.phone);
// //         }
// //       });
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <>
// //       <HotelDetailArea hotelData={selectedRoomType} rooms={rooms} />
// //     </>
// //   );
// // };

// // export default HotelDetails;





// "use client";
// import { imageLoader } from "@/hooks/image-loader";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { useAppSelector } from "@/redux/hooks";
// import { useSelector, useDispatch } from "react-redux";
// import { Button } from "reactstrap";
// import { Star, Calendar, Users, DollarSign, Heart, Share2 } from "lucide-react";
// import { toast } from "sonner";
// import { RootState } from "@/redux/store";
// import { useRouter, useSearchParams } from 'next/navigation'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import HotelDetailArea from "../hotel-detail-area/HotelDetailArea";

// const HotelDetails = ({ id }: { id: string | number }) => {
//   console.log("HotelDetails===", id);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   // const { rooms } = useAppSelector((state: RootState) => state.room);
//   const [rooms , setRooms] = useState<any>([]);

//   // Get booking details from URL parameters
//   const checkIn = searchParams.get('checkIn') || '';
//   const checkOut = searchParams.get('checkOut') || '';
//   const adult = parseInt(searchParams.get('adult') || '1');
//   const children = parseInt(searchParams.get('children') || '0');

//   console.log("checkIn", checkIn);
//   console.log("checkOut", checkOut);
//   console.log("adult", adult);
//   console.log("children", children);

//   useEffect(() => {
//     if(rooms.length === 0) {
//       toast.error("No rooms available");
//       router.push("/");
//     }
//   }, [rooms]);
//   return (
//     <>
//       <HotelDetailArea rooms={rooms} id={id} />
//     </>
//   );
// };

// export default HotelDetails;




"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Home, RefreshCw } from "lucide-react";
import HotelDetailArea from "../hotel-detail-area/HotelDetailArea";
import styles from './HotelDetails.module.css';

interface RoomListingsResponse {
  status: string;
  message: string;
  data: {
    hotel: {
      id: string;
      name: string;
      code: string;
    };
    rooms: any[];
  };
}

const LoadingState = () => (
  <div className={styles.stateContainer}>
    <div className={styles.loadingContainer}>
      <Loader2 className={styles.spinner} />
      <h2 className={styles.loadingTitle}>Checking Available Rooms</h2>
      <p className={styles.loadingText}>
        We're looking for the perfect rooms for your stay. This may take a moment...
      </p>
    </div>
  </div>
);

const NoRoomsFound = ({ onGoHome }: { onGoHome: () => void }) => (
  <div className={styles.stateContainer}>
    <div className={styles.messageCard}>
      <img 
        src="/api/placeholder/200/200"
        alt="No rooms available"
        className={styles.messageImage}
      />
      <h2 className={styles.messageTitle}>
        We're Working on Something Special
      </h2>
      <p className={styles.messageText}>
        We're currently updating our room inventory for your selected dates. 
        Our team is working hard to bring you the best options for your stay. 
        Please try again later or explore our other amazing properties.
      </p>
      <div className={styles.buttonContainer}>
        <button
          onClick={onGoHome}
          className={`${styles.button} ${styles.primaryButton}`}
        >
          <Home className={styles.buttonIcon} />
          Return to Home
        </button>
        <button
          onClick={() => window.location.reload()}
          className={`${styles.button} ${styles.secondaryButton}`}
        >
          <RefreshCw className={styles.buttonIcon} />
          Try Again
        </button>
      </div>
    </div>
  </div>
);

const ErrorState = ({ message, onGoHome }: { message: string, onGoHome: () => void }) => (
  <div className={styles.stateContainer}>
    <div className={styles.messageCard}>
      <h2 className={`${styles.messageTitle} ${styles.errorTitle}`}>
        Oops! Something Went Wrong
      </h2>
      <p className={styles.messageText}>{message}</p>
      <div className={styles.buttonContainer}>
        <button
          onClick={onGoHome}
          className={`${styles.button} ${styles.primaryButton}`}
        >
          <Home className={styles.buttonIcon} />
          Return to Home
        </button>
        <button
          onClick={() => window.location.reload()}
          className={`${styles.button} ${styles.secondaryButton}`}
        >
          <RefreshCw className={styles.buttonIcon} />
          Try Again
        </button>
      </div>
    </div>
  </div>
);

const HotelDetails = ({ id }: { id: string | number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [rooms, setRooms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get booking details from URL parameters
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const adult = parseInt(searchParams.get('adult') || '1');
  const children = parseInt(searchParams.get('children') || '0');

  const handleGoHome = () => {
    router.push('/');
  };

  useEffect(() => {
    const fetchRoomListings = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(`http://localhost:5001/api/v1/room/compare-listings/${id}`, {
          params: {
            check_in_date: checkIn,
            check_out_date: checkOut,
            number_adults: adult,
            number_children: children,
            promotion_code: ''
          }
        });

        if (response.data.status === "success") {
          const validRooms = response.data.data.rooms?.filter((room: any) => 
            room.Room_Name && 
            room.roomrateunkid && 
            !room['Error Details']
          );

          if (!validRooms || validRooms.length === 0) {
            setError("no_rooms");
            return;
          }

          setRooms(validRooms);
        } else {
          throw new Error(response.data.message || "Failed to fetch room listings");
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch room listings";
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    if (id && checkIn && checkOut) {
      fetchRoomListings();
    } else {
      setError("Please select check-in and check-out dates");
    }
  }, [id, checkIn, checkOut, adult, children]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error === "no_rooms") {
    return <NoRoomsFound onGoHome={handleGoHome} />;
  }

  if (error) {
    return <ErrorState message={error} onGoHome={handleGoHome} />;
  }

  return (
    // <div className={styles.container}>
      <HotelDetailArea 
        rooms={rooms} 
        id={id}
        bookingDetails={{
          checkIn,
          checkOut,
          adult,
          children
        }}
      />
    // </div>
  );
};

export default HotelDetails;