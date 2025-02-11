// "use client";
// import React, { useState } from "react";
// import paymentIcon from "../../../public/assets/images/icons/payment-option.png";
// import Image from "next/image";
// import Link from "next/link";
// const SelectPaymentType = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [activeNum, setActiveNum] = useState(0);

//   const handleCheckboxChange = (index: number) => {
//     setIsChecked(true);
//     setActiveNum(index);
//   };
//   return (
//     <>
//       <div className="checkout-payment-item">
//         <input
//           type="radio"
//           id="back_transfer"
//           name="payment"
//           onChange={() => handleCheckboxChange(1)}
//         />
//         <label htmlFor="back_transfer" data-bs-toggle="direct-bank-transfer">
//           Direct Bank Transfer
//         </label>
//         {isChecked && activeNum === 1 && (
//           <div
//             className="checkout-payment-desc direct-bank-transfer"
//             style={{
//               display: isChecked === true && activeNum === 1 ? "block" : "none",
//             }}
//           >
//             <p>
//               Make your payment directly into our bank account. Please use your
//               Order ID as the payment reference. Your order will not be shipped
//               until the funds have cleared in our account.
//             </p>
//           </div>
//         )}
//       </div>
//       <div className="checkout-payment-item">
//         <input
//           type="radio"
//           id="cheque_payment"
//           name="payment"
//           onChange={() => handleCheckboxChange(2)}
//         />
//         <label htmlFor="cheque_payment">Cheque Payment</label>
//         {isChecked && activeNum === 2 && (
//           <div
//             className="checkout-payment-desc cheque-payment"
//             style={{
//               display: isChecked === true && activeNum === 2 ? "block" : "none",
//             }}
//           >
//             <p>
//               Make your payment directly into our bank account. Please use your
//               Order ID as the payment reference. Your order will not be shipped
//               until the funds have cleared in our account.
//             </p>
//           </div>
//         )}
//       </div>
//       <div className="checkout-payment-item">
//         <input
//           type="radio"
//           id="cod"
//           name="payment"
//           onChange={() => handleCheckboxChange(3)}
//         />
//         <label htmlFor="cod">Cash on Delivery</label>
//         {isChecked && activeNum === 3 && (
//           <div
//             className="checkout-payment-desc cash-on-delivery"
//             style={{
//               display: isChecked === true && activeNum === 3 ? "block" : "none",
//             }}
//           >
//             <p>
//               Make your payment directly into our bank account. Please use your
//               Order ID as the payment reference. Your order will not be shipped
//               until the funds have cleared in our account.
//             </p>
//           </div>
//         )}
//       </div>
//       <div className="checkout-payment-item paypal-payment">
//         <input
//           type="radio"
//           id="paypal"
//           name="payment"
//           onChange={() => setIsChecked(false)}
//         />
//         <label htmlFor="paypal">
//           PayPal
//           <Image src={paymentIcon} alt="payment-icon" />
//           <Link href="#">What is PayPal?</Link>
//         </label>
//       </div>
//     </>
//   );
// };

// export default SelectPaymentType;


"use client";
import React from "react";
import Image from "next/image";
import paymentIcon from "../../../public/assets/images/icons/payment-option.png";

interface PaymentOption {
  id: string;
  label: string;
  description: string;
  isImageVisible: boolean;
}

interface SelectPaymentTypeProps {
  paymentMode: string;
  setPaymentMode: (mode: string) => void;
}

const paymentOptions: PaymentOption[] = [
  {
    id: "pay_on_visit",
    label: "Pay on Visit",
    description: "Make your payment when you arrive at the property. You will be provided with a booking number or asked for your mobile number to complete the payment.",
    isImageVisible: false,
  },
  {
    id: "online_payment",
    label: "Online Payment",
    description: "Securely pay online now to confirm your booking immediately.",
    isImageVisible: true,
  },
];

const SelectPaymentType: React.FC<SelectPaymentTypeProps> = ({ paymentMode, setPaymentMode }) => {
  const handlePaymentChange = (mode: string) => {
    setPaymentMode(mode);
  };

  return (
    <>
      {paymentOptions.map((option) => (
        <div key={option.id} className="checkout-payment-item">
          <input
            type="radio"
            id={option.id}
            name="payment"
            checked={paymentMode === option.id}
            onChange={() => handlePaymentChange(option.id)}
          />
          <label htmlFor={option.id}>
            {option.label}
            {option.isImageVisible && (
              <Image src={paymentIcon} alt="payment-icon" />
            )}
          </label>
          {paymentMode === option.id && (
            <div className={`checkout-payment-desc ${option.id}`}>
              <p>{option.description}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SelectPaymentType;
