// "use client";
// import useGlobalContext from "@/hooks/use-context";
// import React, { useState } from "react";
// import ReactDatePicker from "react-datepicker";
// import NiceSelect from "../NiceSelect";
// import { selectAgeData } from "@/data/nice-select-data";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { booking_product } from "@/redux/slices/bookingSlice";
// import { formatDate } from "@/hooks/dateFormater";
// import { toast } from "sonner";
// const BookingFormModal = () => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;
//   const { modalData, niceSelectData } = useGlobalContext();
//   const [adultCount, setAdultCount] = useState(0);
//   const [infant, setInfant] = useState(0);
//   const decressCount = () => {
//     if (adultCount === 1) {
//       setAdultCount(1);
//     } else {
//       setAdultCount(adultCount - 1);
//     }
//   };
//   const incressCount = () => {
//     setAdultCount(adultCount + 1);
//   };

//   const decressInfantCount = () => {
//     if (infant === 1) {
//       setInfant(1);
//     } else {
//       setInfant(infant - 1);
//     }
//   };
//   const incressInfantCount = () => {
//     setInfant(infant + 1);
//   };

//   const handleBooking = () => {
//     const myData = {
//       ...modalData,
//       startDate: formatDate(startDate),
//       endDate: formatDate(endDate),
//       adult: adultCount,
//       infant,
//       infantAge: niceSelectData,
//     };
//     if (
//       dateRange[0] == null ||
//       dateRange[1] == null ||
//       niceSelectData == "no-data" ||
//       adultCount === 0 ||
//       infant === 0
//     ) {
//       const toastId = toast.loading("");
//       toast.error(`Select Date Range And Age`, { id: toastId, duration: 1000 });
//     } else {
//       dispatch(booking_product(myData));
//       router.push("/booking");
//     }
//   };

//   const selectHandler = () => {};

//   return (
//     <>
//       <div className="booking-model">
//         <div className="modal fade" id="popUpBookingForm" tabIndex={-2}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="staticBackdropLabel">
//                   Booking Form
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <div className="modal-body-top mb-20">
//                   <div className="d-flex gap-24 justify-content-between align-items-center mb-30">
//                     <h6 className="guest-title small">Adult</h6>
//                     <div className="guest-number">
//                       <span
//                         className="guest-number-minus"
//                         onClick={decressCount}
//                       >
//                         <i className="fa-sharp fa-regular fa-minus"></i>
//                       </span>
//                       <input
//                         className="guest-number-input"
//                         type="text"
//                         value={adultCount}
//                         readOnly
//                       />
//                       <span
//                         className="guest-number-plus"
//                         onClick={incressCount}
//                       >
//                         <i className="fa-sharp fa-regular fa-plus"></i>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="d-flex gap-24 justify-content-between align-items-center mb-30">
//                     <h6 className="guest-title small">Infant</h6>
//                     <div className="guest-number">
//                       <span
//                         className="guest-number-minus"
//                         onClick={decressInfantCount}
//                       >
//                         <i className="fa-sharp fa-regular fa-minus"></i>
//                       </span>
//                       <input
//                         className="guest-number-input"
//                         type="text"
//                         value={infant}
//                         readOnly
//                       />
//                       <span
//                         className="guest-number-plus"
//                         onClick={incressInfantCount}
//                       >
//                         <i className="fa-sharp fa-regular fa-plus"></i>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="d-flex gap-10 justify-content-between align-items-center">
//                     <h6 className="guest-title small">Date</h6>
//                     <div className="booking-modal-form-input">
//                       <ReactDatePicker
//                         selectsRange={true}
//                         startDate={startDate}
//                         endDate={endDate}
//                         onChange={(date: any) => {
//                           setDateRange(date);
//                         }}
//                         isClearable={true}
//                         placeholderText="Select Start - End Date"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="modal-body-bottom">
//                   <h6 className="mb-10">Add {`Infant's`} Ages</h6>
//                   <div className="shop-selector">
//                     <NiceSelect
//                       options={selectAgeData}
//                       defaultCurrent={0}
//                       onChange={selectHandler}
//                       name="years"
//                       className="select-age"
//                       placeholder="Select Age"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 {dateRange[0] == null ||
//                 dateRange[1] == null ||
//                 niceSelectData == "no-data" ||
//                 adultCount === 0 ||
//                 infant === 0 ? (
//                   <>
//                     {" "}
//                     <button
//                       onClick={handleBooking}
//                       className="bd-primary-btn btn-style is-bg radius-60"
//                     >
//                       <span className="bd-primary-btn-text">Continue</span>
//                       <span className="bd-primary-btn-circle"></span>
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={handleBooking}
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                       className="bd-primary-btn btn-style is-bg radius-60"
//                     >
//                       <span className="bd-primary-btn-text">Continue</span>
//                       <span className="bd-primary-btn-circle"></span>
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookingFormModal;


"use client";
import useGlobalContext from "@/hooks/use-context";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import NiceSelect from "../NiceSelect";
import { selectAgeData } from "@/data/nice-select-data";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/slices/bookingSlice";
import { formatDate } from "@/hooks/dateFormater";
import { toast } from "sonner";

const BookingFormModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const { modalData, niceSelectData } = useGlobalContext();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleBooking = () => {
    if (dateRange[0] == null || dateRange[1] == null || niceSelectData == "no-data") {
      toast.error("Please select date range and age");
      return;
    }

    const bookingData = {
      ...modalData,
      Package_Id: modalData.Package_Id || Date.now().toString(), // Fallback if Package_Id is not provided
      Room_Name: modalData.Room_Name || "Default Room",
      Room_Image: modalData.Room_Image,
      Price: modalData.Price || 0,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      quantity: quantity,
      infantAge: niceSelectData,
    };

    dispatch(addBooking(bookingData));
    toast.success("Booking added successfully");
    router.push("/booking");
  };

  const selectHandler = () => {};

  return (
    <>
      <div className="booking-model">
        <div className="modal fade" id="popUpBookingForm" tabIndex={-2}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Booking Form
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal-body-top mb-20">
                  <div className="d-flex gap-24 justify-content-between align-items-center mb-30">
                    <h6 className="guest-title small">Quantity</h6>
                    <div className="guest-number">
                      <span
                        className="guest-number-minus"
                        onClick={() => handleQuantityChange(-1)}
                      >
                        <i className="fa-sharp fa-regular fa-minus"></i>
                      </span>
                      <input
                        className="guest-number-input"
                        type="text"
                        value={quantity}
                        readOnly
                      />
                      <span
                        className="guest-number-plus"
                        onClick={() => handleQuantityChange(1)}
                      >
                        <i className="fa-sharp fa-regular fa-plus"></i>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 justify-content-between align-items-center">
                    <h6 className="guest-title small">Date</h6>
                    <div className="booking-modal-form-input">
                      <ReactDatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(date: any) => {
                          setDateRange(date);
                        }}
                        isClearable={true}
                        placeholderText="Select Start - End Date"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-body-bottom">
                  <h6 className="mb-10">Add Age (if applicable)</h6>
                  <div className="shop-selector">
                    <NiceSelect
                      options={selectAgeData}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="years"
                      className="select-age"
                      placeholder="Select Age"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={handleBooking}
                  className="bd-primary-btn btn-style is-bg radius-60"
                >
                  <span className="bd-primary-btn-text">Continue</span>
                  <span className="bd-primary-btn-circle"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingFormModal;
