// "use client";
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
// import Script from "next/script";
// import { RootState } from "@/redux/store";
// import { createReservation } from "@/redux/slices/reservationSlice";
// import CheckoutForm from "@/forms/CheckoutForm";
// import OrderDetails from "./OrderDetails";
// import CheckoutLogin from "./CheckoutLogin";
// import AddCuponMain from "./AddCuponMain";
// import CustomSwal from "../swal/CustomSwal";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const CheckoutArea: React.FC = () => {
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [paymentMode, setPaymentMode] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);
//   const router = useRouter();
//   const [swalProps, setSwalProps] = useState<any>({
//     title: "",
//     text: "",
//     icon: "success" as const,
//   });
//   const [showSwal, setShowSwal] = useState(false);
//   const dispatch = useDispatch();
//   const token = useSelector((state: RootState) => state.auth.token);

//   const formData = useSelector((state: RootState) => state.formData);
//   console.log(formData);
//   const bookings = useSelector((state: RootState) => state.booking.bookings);
//   const discountedBookings = useSelector(
//     (state: RootState) => state.booking.discountedBookings
//   );

//   console.log(bookings, "bookings123");
//   console.log(discountedBookings, "discountedBookings123");

//   const handleFormValidation = (valid: boolean) => {
//     setIsFormValid(valid);
//   };

//   // const initializeRazorpay = async (orderData: any) => {
//   //   const options = {
//   //     key: orderData.key,
//   //     amount: orderData.amount,
//   //     currency: orderData.currency,
//   //     name: "Your Hotel Name",
//   //     description: "Room Booking Payment",
//   //     order_id: orderData.orderId,
//   //     handler: async (response: any) => {
//   //       try {
//   //         const verificationResponse = await fetch("http://localhost:5001/api/v1/payments/verify", {
//   //           method: "POST",
//   //           headers: { 
//   //             "Content-Type": "application/json",
//   //             "Authorization": `Bearer ${token}` // Add the token to headers
//   //           },                
//   //           body: JSON.stringify({
//   //             razorpay_payment_id: response.razorpay_payment_id,
//   //             razorpay_order_id: response.razorpay_order_id,
//   //             razorpay_signature: response.razorpay_signature,
//   //           }),
//   //         });

//   //         const verificationResult = await verificationResponse.json();

//   //         if (verificationResult.status === "success") {
//   //           // router.push("/order");
//   //           router.push(`/order?bookingNumber=${orderData.bookingNumber}`);
//   //           resolve({ success: true });
//   //         } else {
//   //           setSwalProps({
//   //             title: "Payment Failed",
//   //             text: "Payment verification failed. Please try again.",
//   //             icon: "error",
//   //           });
//   //           setShowSwal(true);
//   //         }
//   //       } catch (error) {
//   //         console.error("Payment verification error:", error);
//   //         setSwalProps({
//   //           title: "Error",
//   //           text: "Payment verification failed. Please contact support.",
//   //           icon: "error",
//   //         });
//   //         setShowSwal(true);
//   //       } finally {
//   //         setIsProcessing(false);
//   //       }
//   //     },
//   //     modal: {
//   //       ondismiss: function() {
//   //         setIsProcessing(false);
//   //       }
//   //     },
//   //     prefill: {
//   //       name: `${formData.fName} ${formData.lName}`,
//   //       email: formData.email,
//   //       contact: formData.phone,
//   //     },
//   //     notes: {
//   //       address: formData.streetAddress,
//   //     },
//   //     theme: {
//   //       color: "#3399cc",
//   //     },
//   //   };

//   //   const rzp = new window.Razorpay(options);
//   //   rzp.open();
//   // };

//   // const handleSubmit = async () => {
//   //   if (!isFormValid) {
//   //     setSwalProps({
//   //       title: "Invalid Form",
//   //       text: "Please check all required fields.",
//   //       icon: "error",
//   //     });
//   //     setShowSwal(true);
//   //     return;
//   //   }

//   //   if (paymentMode === "") {
//   //     setSwalProps({
//   //       title: "Payment Mode",
//   //       text: "Please select a payment mode.",
//   //       icon: "info",
//   //     });
//   //     setShowSwal(true);
//   //     return;
//   //   }

//   //   setIsProcessing(true);

//   //   try {
//   //     if (paymentMode === "pay_on_visit") {
//   //       await processBooking();
//   //     } else if (paymentMode === "online_payment") {
//   //       const bookingResult:any = await processBooking();
//   //       if (bookingResult) {
//   //         // Create payment order
//   //         const booking = discountedBookings.length > 0 ? discountedBookings[0] : bookings[0];
//   //         const totalAmount = booking.price || booking.room_rates_info.avg_per_night_without_tax;
          
//   //         const orderResponse = await fetch("http://localhost:5001/api/v1/payments/create-order", {
//   //           method: "POST",
//   //           headers: { 
//   //             "Content-Type": "application/json",
//   //             "Authorization": `Bearer ${token}` // Add the token to headers
//   //           },            
//   //           body: JSON.stringify({
//   //             bookingId: bookingResult._id,
//   //             amount: totalAmount,
//   //           }),
//   //         });

//   //         const orderData = await orderResponse.json();
//   //         if (orderData.status === "success") {
//   //           await initializeRazorpay(orderData.data);
//   //         } else {
//   //           throw new Error("Failed to create payment order");
//   //         }
//   //       }
//   //     }
//   //   } catch (error) {
//   //     console.error("Payment processing error:", error);
//   //     setSwalProps({
//   //       title: "Error",
//   //       text: "Failed to process payment. Please try again.",
//   //       icon: "error",
//   //     });
//   //     setShowSwal(true);
//   //     setIsProcessing(false);
//   //   }
//   // };

//   const initializeRazorpay = async (orderData: any) => {
//     return new Promise((resolve) => {
//       const options = {
//         key: orderData.key,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "Your Hotel Name",
//         description: "Room Booking Payment",
//         order_id: orderData.orderId,
//         handler: async (response: any) => {
//           try {
//             // const verificationResponse = await fetch("http://localhost:5001/api/v1/payments/verify", {
//             const verificationResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/verify`, {
//               method: "POST",
//               headers: { 
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`
//               },                
//               body: JSON.stringify({
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_signature: response.razorpay_signature,
//               }),
//             });
  
//             const verificationResult = await verificationResponse.json();
  
//             if (verificationResult.status === "success") {
//               router.push(`/order?bookingNumber=${orderData.bookingNumber}`);
//               resolve({ success: true });
//             } else {
//               setSwalProps({
//                 title: "Payment Failed",
//                 text: "Payment verification failed. Please try again.",
//                 icon: "error",
//               });
//               setShowSwal(true);
//               resolve({ success: false });
//             }
//           } catch (error) {
//             console.error("Payment verification error:", error);
//             setSwalProps({
//               title: "Error",
//               text: "Payment verification failed. Please contact support.",
//               icon: "error",
//             });
//             setShowSwal(true);
//             resolve({ success: false });
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         modal: {
//           ondismiss: function() {
//             setIsProcessing(false);
//             resolve({ success: false });
//           }
//         },
//         prefill: {
//           name: `${formData.fName} ${formData.lName}`,
//           email: formData.email,
//           contact: formData.phone,
//         },
//         notes: {
//           address: formData.streetAddress,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };
  
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     });
//   };

//   const handleSubmit = async () => {
//     if (!isFormValid) {
//       setSwalProps({
//         title: "Invalid Form",
//         text: "Please check all required fields.",
//         icon: "error",
//       });
//       setShowSwal(true);
//       return;
//     }
  
//     if (paymentMode === "") {
//       setSwalProps({
//         title: "Payment Mode",
//         text: "Please select a payment mode.",
//         icon: "info",
//       });
//       setShowSwal(true);
//       return;
//     }
  
//     setIsProcessing(true);
  
//     try {
//       // Always create the booking first
//       const bookingResult = await processBooking();
      
//       if (!bookingResult) {
//         setIsProcessing(false);
//         return;
//       }
  
//       if (paymentMode === "pay_on_visit") {
//         // router.push("/order");
//         router.push(`/order?bookingNumber=${bookingResult.bookingNumber}`);
//       } else if (paymentMode === "online_payment") {
//         // Get the latest booking data after creation
//         // const booking = discountedBookings.length > 0 ? discountedBookings[0] : bookings[0];
//         console.log("Discounted Bookings:", discountedBookings);
//         console.log("Bookings:", bookings);
//         const totalAmount = discountedBookings.length > 0 ? discountedBookings[0].discountedPrice : bookings[0].room_rates_info.totalprice_inclusive_all;
//         console.log("Total Amount:", totalAmount);
        
//         try {
//           // const orderResponse = await fetch("http://localhost:5001/api/v1/payments/create-order", {
//           const orderResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/create-order`, {
//             method: "POST",
//             headers: { 
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${token}`
//             },            
//             body: JSON.stringify({
//               bookingId: bookingResult._id,
//               amount: totalAmount,
//             }),
//           });
  
//           if (!orderResponse.ok) {
//             throw new Error('Failed to create payment order');
//           }
  
//           const orderData = await orderResponse.json();
//           if (orderData.status === "success") {
//             // await initializeRazorpay(orderData.data);
//             const paymentResult:any = await initializeRazorpay({
//               ...orderData.data,
//               bookingNumber: bookingResult.bookingNumber
//             });

//             if (!paymentResult.success) {
//               // Payment failed/cancelled - booking will remain pending
//               router.push(`/bookings/pending/${bookingResult.bookingNumber}`);
//               return;
//             }

//           } 
//         } catch (error) {
//           console.error("Payment order creation error:", error);
//           // If payment order creation fails, show error but don't delete booking
//           setSwalProps({
//             title: "Payment Setup Failed",
//             text: "Failed to setup payment. Please try again or contact support.",
//             icon: "error",
//           });
//           setShowSwal(true);
//           setIsProcessing(false);
//         }
//       }
//     } catch (error) {
//       console.error("Process error:", error);
//       setSwalProps({
//         title: "Error",
//         text: "Failed to process your request. Please try again.",
//         icon: "error",
//       });
//       setShowSwal(true);
//       setIsProcessing(false);
//     }
//   };
  
//   const processBooking = async () => {
//     const bookingBody = createBookingBody();
//     console.log("Creating booking with data:", bookingBody);
    
//     try {
//       const resultAction = await dispatch(
//         createReservation({
//           bookingData: bookingBody,
//           hotelId: bookings[0].hotelId,
//           roomData: bookings[0],
//           discountedBookings: discountedBookings,
//         }) as any
//       );
  
//       if (createReservation.fulfilled.match(resultAction)) {
//         console.log("Booking created successfully:", resultAction.payload.data.booking);
//         return resultAction.payload.data.booking;
//       } else if (createReservation.rejected.match(resultAction)) {
//         console.error("Booking creation failed:", resultAction.payload);
//         setSwalProps({
//           title: "Booking Failed",
//           text: resultAction.payload || "Failed to create booking",
//           icon: "error",
//         });
//         setShowSwal(true);
//         return null;
//       }
//     } catch (error) {
//       console.error("Booking creation error:", error);
//       setSwalProps({
//         title: "Error",
//         text: "An unexpected error occurred while creating the booking",
//         icon: "error",
//       });
//       setShowSwal(true);
//       return null;
//     }
//   };

//   // const processBooking = async () => {
//   //   const bookingBody = createBookingBody();
//   //   console.log("Booking Body:", bookingBody);
//   //   try {
//   //     const resultAction = await dispatch(
//   //       createReservation({
//   //         bookingData: bookingBody,
//   //         hotelId: bookings[0].hotelId,
//   //         roomData: bookings[0],
//   //       }) as any
//   //     );

//   //     console.log("Booking Result:", resultAction);
//   //     if (createReservation.fulfilled.match(resultAction)) {
//   //       if (paymentMode === "pay_on_visit") {
//   //         router.push("/order");
//   //       }
//   //       return resultAction.payload.data.booking;
//   //     } else if (createReservation.rejected.match(resultAction)) {
//   //       setSwalProps({
//   //         title: "Booking Failed",
//   //         text: resultAction.payload || "Failed to create booking",
//   //         icon: "error",
//   //       });
//   //       setShowSwal(true);
//   //       return null;
//   //     }
//   //   } catch (error) {
//   //     console.error("Booking error:", error);
//   //     setSwalProps({
//   //       title: "Error",
//   //       text: "An unexpected error occurred",
//   //       icon: "error",
//   //     });
//   //     setShowSwal(true);
//   //     return null;
//   //   }
//   // };

//   const createBookingBody = () => {
//     console.log("Discounted Bookings createBooking:", discountedBookings);
//     const booking = discountedBookings.length > 0 ? discountedBookings[0] : bookings[0];
//     const bookingData = [bookings[0].currentBooking];
//     const appBooking = bookingData[0];
//     const baseRate = discountedBookings.length > 0 
//       ? booking.price.toString()
//       : booking.room_rates_info.avg_per_night_without_tax.toString();

//       console.log("Base Rate:", baseRate);

//       // {
//       //   fName: '',
//       //   lName: '',
//       //   country: '',
//       //   streetAddress: '',
//       //   addressTwo: '',
//       //   city: '',
//       //   state: '',
//       //   zip: '',
//       //   phone: '',
//       //   email: '',
//       //   note: '',
//       //   title: '',
//       //   gender: ''
//       // }

//     return {
//       Room_Details: {
//         Room_1: {
//           Rateplan_Id: booking.roomrateunkid,
//           Ratetype_Id: booking.ratetypeunkid,
//           Roomtype_Id: booking.roomtypeunkid,
//           baserate: baseRate,
//           extradultrate: (
//             booking.extra_adult_rates_info.inclusive_tax_adjustment[
//               appBooking.checkIn
//             ] || "0"
//           ).toString(),
//           extrachildrate: (
//             booking.extra_child_rates_info.inclusive_tax_adjustment[
//               appBooking.checkIn
//             ] || "0"
//           ).toString(),
//           number_adults: appBooking.adult.toString(),
//           number_children: appBooking.children.toString(),
//           Title: formData.title,
//           First_Name: formData.fName,
//           Last_Name: formData.lName,
//           Gender: formData.gender,
//         },
//       },
//       check_in_date: appBooking.checkIn,
//       check_out_date: appBooking.checkOut,
//       Booking_Payment_Mode: paymentMode,
//       Email_Address: formData.email,
//       MobileNo: formData.phone,
//       Address: formData.streetAddress,
//       State: formData.state,
//       Country: formData.country,
//       City: formData.city,
//       Zipcode: formData.zip,
//       Languagekey: "en",
//       paymenttypeunkid: "",
//     };
//   };

//   return (
//     <>
//       <Script
//         id="razorpay-checkout-js"
//         src="https://checkout.razorpay.com/v1/checkout.js"
//       />
//       <section className="checkout-area section-space">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-7">
//               <CheckoutVerification />
//               <BillingDetails onValidationChange={handleFormValidation} />
//             </div>
//             {/* {bookings.length > 0 && (
//               <OrderDetails
//                 onSubmit={handleSubmit}
//                 isFormValid={isFormValid}
//                 paymentMode={paymentMode}
//                 setPaymentMode={setPaymentMode}
//                 // isProcessing={isProcessing}
//               />
//             )} */}

//             {discountedBookings.length > 0 ?
//               <OrderDetails
//                 onSubmit={handleSubmit}
//                 isFormValid={isFormValid}
//                 paymentMode={paymentMode}
//                 setPaymentMode={setPaymentMode}
//                 // isProcessing={isProcessing}
//               />
//               :
//               <> 
//               {bookings.length > 0 && (
//                 <OrderDetails
//                   onSubmit={handleSubmit}
//                   isFormValid={isFormValid}
//                   paymentMode={paymentMode}
//                   setPaymentMode={setPaymentMode}
//                   // isProcessing={isProcessing}
//                 />
//               )}
//               </>
//             }
//           </div>
//         </div>
//         {showSwal && <CustomSwal {...swalProps} />}
//       </section>
//     </>
//   );
// };

// const CheckoutVerification: React.FC = () => (
//   <div className="checkout-verify mb-24">
//     <CheckoutLogin />
//     <AddCuponMain />
//   </div>
// );

// const BillingDetails: React.FC<{
//   onValidationChange: (valid: boolean) => void;
// }> = ({ onValidationChange }) => (
//   <div className="checkout-bill-area">
//     <h3 className="checkout-bill-title">Billing Details</h3>
//     <div className="checkout-bill-form">
//       <CheckoutForm onValidationChange={onValidationChange} />
//     </div>
//   </div>
// );

// export default CheckoutArea;




"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { RootState } from "@/redux/store";
import { createReservation } from "@/redux/slices/reservationSlice";
import CheckoutForm from "@/forms/CheckoutForm";
import OrderDetails from "./OrderDetails";
import CheckoutLogin from "./CheckoutLogin";
import AddCuponMain from "./AddCuponMain";
import CustomSwal from "../swal/CustomSwal";
import OTPVerificationModal from "./OTPVerificationModal ";

// Type declarations
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface SwalProps {
  title: string;
  text: string;
  icon: "success" | "error" | "warning" | "info";
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Sub-components
const CheckoutVerification: React.FC = () => (
  <div className="checkout-verify mb-24">
    <CheckoutLogin />
    <AddCuponMain />
  </div>
);

const BillingDetails: React.FC<{
  onValidationChange: (valid: boolean) => void;
}> = ({ onValidationChange }) => (
  <div className="checkout-bill-area">
    <h3 className="checkout-bill-title">Billing Details</h3>
    <div className="checkout-bill-form">
      <CheckoutForm onValidationChange={onValidationChange} />
    </div>
  </div>
);

// Main component
const CheckoutArea: React.FC = () => {
  // State management
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [paymentMode, setPaymentMode] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showOTPModal, setShowOTPModal] = useState<boolean>(false);
  const [swalProps, setSwalProps] = useState<SwalProps>({
    title: "",
    text: "",
    icon: "success",
  });
  const [showSwal, setShowSwal] = useState<boolean>(false);

  // Hooks
  const router = useRouter();
  const dispatch = useDispatch();

  // Redux selectors
  const token = useSelector((state: RootState) => state.auth.token);
  const formData = useSelector((state: RootState) => state.formData);
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  const discountedBookings = useSelector(
    (state: RootState) => state.booking.discountedBookings
  );

  // Handlers
  const handleFormValidation = (valid: boolean) => {
    setIsFormValid(valid);
  };

  const handleVerificationSuccess = async (otp: string) => {
    try {
      const bookingResult = await processBooking(otp);
      if (bookingResult) {
        handlePaymentProcess(bookingResult);
      }
    } catch (error) {
      handleProcessingError(error);
    }
  };

  const handleVerificationFailed = (error: string) => {
    setSwalProps({
      title: "Verification Failed",
      text: error,
      icon: "error",
    });
    setShowSwal(true);
  };

  const handleSubmit = async () => {
    // Validate form and payment mode
    if (!validateSubmission()) return;

    // Show OTP modal
    setShowOTPModal(true);
  };

  const validateSubmission = (): boolean => {
    if (!isFormValid) {
      setSwalProps({
        title: "Invalid Form",
        text: "Please check all required fields.",
        icon: "error",
      });
      setShowSwal(true);
      return false;
    }

    if (paymentMode === "") {
      setSwalProps({
        title: "Payment Mode",
        text: "Please select a payment mode.",
        icon: "info",
      });
      setShowSwal(true);
      return false;
    }

    return true;
  };

  const handlePaymentProcess = async (bookingResult: any) => {
    setIsProcessing(true);
    try {
      if (paymentMode === "pay_on_visit") {
        router.push(`/order?bookingNumber=${bookingResult.bookingNumber}`);
      } else if (paymentMode === "online_payment") {
        await handleOnlinePayment(bookingResult);
      }
    } catch (error) {
      handleProcessingError(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleOnlinePayment = async (bookingResult: any) => {
    const totalAmount = discountedBookings.length > 0 
      ? discountedBookings[0].discountedPrice 
      : bookings[0].room_rates_info.totalprice_inclusive_all;

    try {
      const orderResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            bookingId: bookingResult._id,
            amount: totalAmount,
          }),
        }
      );

      if (!orderResponse.ok) {
        throw new Error("Failed to create payment order");
      }

      const orderData = await orderResponse.json();
      if (orderData.status === "success") {
        const paymentResult = await initializeRazorpay({
          ...orderData.data,
          bookingNumber: bookingResult.bookingNumber,
        });

        if (!paymentResult.success) {
          router.push(`/bookings/pending/${bookingResult.bookingNumber}`);
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const initializeRazorpay = async (orderData: any): Promise<{ success: boolean }> => {
    return new Promise((resolve) => {
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "SaltStayz",
        description: "Room Booking Payment",
        order_id: orderData.orderId,
        handler: async (response: RazorpayResponse) => {
          try {
            const verificationResult = await handlePaymentVerification(response, orderData);
            resolve(verificationResult);
          } catch (error) {
            handleProcessingError(error);
            resolve({ success: false });
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
            resolve({ success: false });
          },
        },
        prefill: {
          name: `${formData.fName} ${formData.lName}`,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: formData.streetAddress,
        },
        theme: {
          color: "#22c55e",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    });
  };

  const handlePaymentVerification = async (response: RazorpayResponse, orderData: any) => {
    const verificationResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/payments/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        }),
      }
    );

    const verificationResult = await verificationResponse.json();

    if (verificationResult.status === "success") {
      router.push(`/order?bookingNumber=${orderData.bookingNumber}`);
      return { success: true };
    } else {
      setSwalProps({
        title: "Payment Failed",
        text: "Payment verification failed. Please try again.",
        icon: "error",
      });
      setShowSwal(true);
      return { success: false };
    }
  };

  const handleProcessingError = (error: any) => {
    console.error("Processing error:", error);
    setSwalProps({
      title: "Error",
      text: error.message || "An unexpected error occurred. Please try again.",
      icon: "error",
    });
    setShowSwal(true);
    setIsProcessing(false);
  };

  const processBooking = async (otp: string) => {
    const bookingBody = createBookingBody();
    console.log("Creating booking with data:", bookingBody);

    try {
      const resultAction = await dispatch(
        createReservation({
          bookingData: bookingBody,
          hotelId: bookings[0].hotelId,
          roomData: bookings[0],
          discountedBookings: discountedBookings,
          otp,
        }) as any
      );

      if (createReservation.fulfilled.match(resultAction)) {
        return resultAction.payload.data.booking;
      } else if (createReservation.rejected.match(resultAction)) {
        // Handle the rejected case with proper type checking
        const errorMessage = typeof resultAction.payload === 'string' 
          ? resultAction.payload 
          : 'Failed to create booking';
        
        throw new Error(errorMessage);
      }
      
      // If neither fulfilled nor rejected, throw a default error
      throw new Error('Failed to process booking');
    } catch (error) {
      // Preserve the error if it's already an Error instance
      if (error instanceof Error) {
        throw error;
      }
      // Otherwise, create a new Error with a default message
      throw new Error('An unexpected error occurred while creating the booking');
    }
  };

  const createBookingBody = () => {
    const booking = discountedBookings.length > 0 ? discountedBookings[0] : bookings[0];
    const bookingData = [bookings[0].currentBooking];
    const appBooking = bookingData[0];
    const baseRate = discountedBookings.length > 0
      ? booking.price.toString()
      : booking.room_rates_info.avg_per_night_without_tax.toString();

    return {
      Room_Details: {
        Room_1: {
          Rateplan_Id: booking.roomrateunkid,
          Ratetype_Id: booking.ratetypeunkid,
          Roomtype_Id: booking.roomtypeunkid,
          baserate: baseRate,
          extradultrate: (
            booking.extra_adult_rates_info.inclusive_tax_adjustment[
              appBooking.checkIn
            ] || "0"
          ).toString(),
          extrachildrate: (
            booking.extra_child_rates_info.inclusive_tax_adjustment[
              appBooking.checkIn
            ] || "0"
          ).toString(),
          number_adults: appBooking.adult.toString(),
          number_children: appBooking.children.toString(),
          Title: formData.title,
          First_Name: formData.fName,
          Last_Name: formData.lName,
          Gender: formData.gender,
        },
      },
      check_in_date: appBooking.checkIn,
      check_out_date: appBooking.checkOut,
      Booking_Payment_Mode: paymentMode,
      Email_Address: formData.email,
      MobileNo: formData.phone,
      Address: formData.streetAddress,
      State: formData.state,
      Country: formData.country,
      City: formData.city,
      Zipcode: formData.zip,
      Languagekey: "en",
      paymenttypeunkid: "",
    };
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <section className="checkout-area section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <CheckoutVerification />
              <BillingDetails onValidationChange={handleFormValidation} />
            </div>

            {discountedBookings.length > 0 ? (
              <OrderDetails
                onSubmit={handleSubmit}
                isFormValid={isFormValid}
                paymentMode={paymentMode}
                setPaymentMode={setPaymentMode}
                // isProcessing={isProcessing}
              />
            ) : (
              bookings.length > 0 && (
                <OrderDetails
                  onSubmit={handleSubmit}
                  isFormValid={isFormValid}
                  paymentMode={paymentMode}
                  setPaymentMode={setPaymentMode}
                  // isProcessing={isProcessing}
                />
              )
            )}
          </div>
        </div>

        {showSwal && <CustomSwal {...swalProps} />}

        <OTPVerificationModal
          isOpen={showOTPModal}
          onClose={() => setShowOTPModal(false)}
          phoneNumber={formData.phone}
          onVerificationSuccess={handleVerificationSuccess}
          onVerificationFailed={handleVerificationFailed}
        />
      </section>
    </>
  );
};

export default CheckoutArea;
