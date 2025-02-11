// "use client";
// import { selectLocationData } from "@/data/nice-select-data";
// import ErrorMessage from "@/elements/error-message/ErrorMessage";
// import NiceSelect from "@/elements/NiceSelect";
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { toast } from "sonner";
// import DifferentShippingAddress from "./DifferentShippingAddress";
// import CreateAccountInCheckout from "./CreateAccountInCheckout";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// interface FormData {
//   fName: string;
//   lName: string;
//   companyName: string;
//   country: string;
//   streetAddress: string;
//   addressTwo: string;
//   city: string;
//   zip: string;
//   phone: string;
//   email: string;
//   note: string;
// }

// const CheckoutForm = () => {
//   const bookings = useSelector((state: RootState) => state.booking.bookings);
//   console.log(bookings);
//   const selectHandler = () => {};
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     const toastId = toast.loading("");
//     toast.success("Message Send Successfully", { id: toastId, duration: 1000 });
//     reset();
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="checkout-bill-inner">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="checkout-input">
//                 <label>
//                   First Name <span>*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   {...register("fName", {
//                     required: "Name is required",
//                     minLength: {
//                       value: 2,
//                       message: "First Name must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "First Name cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//                 {errors.fName && (
//                   <ErrorMessage message={errors.fName.message as string} />
//                 )}
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="checkout-input">
//                 <label>
//                   Last Name <span>*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   {...register("lName", {
//                     required: "Last Name is required",
//                     minLength: {
//                       value: 2,
//                       message: "Last Name must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "Last Name cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//                 {errors.lName && (
//                   <ErrorMessage message={errors.lName.message as string} />
//                 )}
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="checkout-input">
//                 <label>Company name (optional)</label>
//                 <input
//                   type="text"
//                   placeholder="Example LTD."
//                   {...register("companyName", {
//                     minLength: {
//                       value: 2,
//                       message: "companyName must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "companyName cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="checkout-input">
//                 <label>Country / Region </label>
//                 <input
//                   type="text"
//                   placeholder="United States (US)"
//                   {...register("country", {
//                     minLength: {
//                       value: 2,
//                       message: "Country must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "Country cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="checkout-input">
//                 <label>Street address</label>
//                 <input
//                   type="text"
//                   placeholder="House number and street name"
//                   {...register("streetAddress", {
//                     minLength: {
//                       value: 2,
//                       message: "Street address must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "Street address cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//               </div>

//               <div className="checkout-input">
//                 <input
//                   type="text"
//                   placeholder="Apartment, suite, unit, etc. (optional)"
//                   {...register("addressTwo", {
//                     minLength: {
//                       value: 2,
//                       message: "Address must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "Address cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="checkout-input">
//                 <label>Town / City</label>
//                 <input
//                   type="text"
//                   placeholder="Town / City"
//                   {...register("city", {
//                     minLength: {
//                       value: 2,
//                       message: "City must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "City cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="checkout-input">
//                 <label>State / County</label>
//                 <NiceSelect
//                   options={selectLocationData}
//                   defaultCurrent={0}
//                   onChange={selectHandler}
//                   name="country"
//                   className="checkout-country country-list"
//                   placeholder="Select Country"
//                 />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="checkout-input">
//                 <label>Postcode / ZIP</label>
//                 <input
//                   type="text"
//                   placeholder="Postcode / ZIP"
//                   {...register("zip", {
//                     minLength: {
//                       value: 3,
//                       message: "Postcode / ZIP must be at least 3 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "Postcode / ZIP cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="checkout-input">
//                 <label>
//                   Phone <span>*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Phone"
//                   {...register("phone", {
//                     required: "Phone is required",
//                     minLength: {
//                       value: 8,
//                       message: "Phone must be at least 8 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "Phone cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//                 {errors.phone && (
//                   <ErrorMessage message={errors.phone.message as string} />
//                 )}
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="checkout-input">
//                 <label>
//                   Email address <span>*</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: "Invalid email address",
//                     },
//                   })}
//                 />
//                 {errors.email && (
//                   <ErrorMessage message={errors.email.message as string} />
//                 )}
//               </div>
//             </div>

//             <CreateAccountInCheckout />
//             <DifferentShippingAddress />
//             <div className="col-md-12">
//               <div className="checkout-input">
//                 <label>Order notes (optional)</label>
//                 <textarea
//                   placeholder="Notes about your order, e.g. special notes for delivery."
//                   {...register("note")}
//                 ></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default CheckoutForm;

"use client";
import React, { useEffect,useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setFormData, FormData } from "@/redux/slices/formDataSlice";
import ErrorMessage from "@/elements/error-message/ErrorMessage";
import NiceSelect from "@/elements/NiceSelect";
import { selectLocationData, selectCountryData } from "@/data/nice-select-data";
import CreateAccountInCheckout from "./CreateAccountInCheckout";

interface NiceSelectType {
  id: number;
  option: string;
}

const indianStates: NiceSelectType[] = [
  { id: 1, option: "Andhra Pradesh" },
  { id: 2, option: "Arunachal Pradesh" },
  { id: 3, option: "Assam" },
  { id: 4, option: "Bihar" },
  { id: 5, option: "Chhattisgarh" },
  { id: 6, option: "Goa" },
  { id: 7, option: "Gujarat" },
  { id: 8, option: "Haryana" },
  { id: 9, option: "Himachal Pradesh" },
  { id: 10, option: "Jharkhand" },
  { id: 11, option: "Karnataka" },
  { id: 12, option: "Kerala" },
  { id: 13, option: "Madhya Pradesh" },
  { id: 14, option: "Maharashtra" },
  { id: 15, option: "Manipur" },
  { id: 16, option: "Meghalaya" },
  { id: 17, option: "Mizoram" },
  { id: 18, option: "Nagaland" },
  { id: 19, option: "Odisha" },
  { id: 20, option: "Punjab" },
  { id: 21, option: "Rajasthan" },
  { id: 22, option: "Sikkim" },
  { id: 23, option: "Tamil Nadu" },
  { id: 24, option: "Telangana" },
  { id: 25, option: "Tripura" },
  { id: 26, option: "Uttar Pradesh" },
  { id: 27, option: "Uttarakhand" },
  { id: 28, option: "West Bengal" },
];

const titleOptions: NiceSelectType[] = [
  { id: 1, option: "Mr." },
  { id: 2, option: "Mrs." },
  { id: 3, option: "Ms." },
  { id: 4, option: "Dr." },
  { id: 5, option: "Prof." },
];

const genderOptions: NiceSelectType[] = [
  { id: 1, option: "Male" },
  { id: 2, option: "Female" },
  { id: 3, option: "Non-binary" },
  { id: 4, option: "Prefer not to say" },
];

interface CheckoutFormProps {
  onValidationChange: (isValid: boolean) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onValidationChange }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.formData);
  const [debugInfo, setDebugInfo] = useState<string>("");

  const {
    register,
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid, isDirty, dirtyFields },
    trigger,
  } = useForm<FormData>({
    defaultValues: formData,
    mode: "all",
  });

  const selectedCountry = watch("country");
  console.log(selectedCountry);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      dispatch(setFormData(value as FormData));
      if (name) {
        trigger(name as keyof FormData);
      }
      updateDebugInfo();
    });
    return () => subscription.unsubscribe();
  }, [watch, dispatch, trigger]);

  useEffect(() => {
    onValidationChange(isValid);
    updateDebugInfo();
  }, [isValid, onValidationChange, errors, isDirty, dirtyFields]);

  const updateDebugInfo = () => {
    setDebugInfo(JSON.stringify({
      isValid,
      isDirty,
      dirtyFields: Object.keys(dirtyFields),
      errors: Object.keys(errors).map(key => ({ [key]: errors[key as keyof FormData]?.message })),
    }, null, 2));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValue(name as keyof FormData, value, { shouldValidate: true, shouldDirty: true });
  };

  const selectHandler = (name: keyof FormData) => (selectedOption: any) => {
    setValue(name, selectedOption.option, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div className="checkout-bill-inner">
      <div className="row">
        <div className="col-md-6">
          <div className="checkout-input">
            <label>
              Title <span>*</span>
            </label>
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <NiceSelect
                  options={titleOptions}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption.option);
                    selectHandler("title")(selectedOption);
                  }}
                  value={formData.title}
                  name="title"
                  placeholder="Select Title"
                />
              )}
            />
            {errors.title && <ErrorMessage message={errors.title.message as string} />}
          </div>
        </div>
        {/* <div className="col-md-6">
          <div className="checkout-input">
            <label>
              Gender <span>*</span>
            </label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <NiceSelect
                  options={genderOptions}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption.option);
                    selectHandler("gender")(selectedOption);
                  }}
                  value={formData.gender}
                  name="gender"
                  placeholder="Select Gender"
                />
              )}
            />
            {errors.gender && <ErrorMessage message={errors.gender.message as string} />}
          </div>
        </div> */}
        <div className="col-md-6">
          <div className="checkout-input">
            <label>
              First Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              {...register("fName", {
                required: "First Name is required",
                minLength: {
                  value: 2,
                  message: "First Name must be at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "First Name cannot exceed 50 characters",
                },
              })}
              onChange={handleInputChange}
              value={formData.fName}
            />
            {errors.fName && <ErrorMessage message={errors.fName.message as string} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="checkout-input">
            <label>
              Last Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lName", {
                required: "Last Name is required",
                minLength: {
                  value: 2,
                  message: "Last Name must be at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Last Name cannot exceed 50 characters",
                },
              })}
              onChange={handleInputChange}
              value={formData.lName}
            />
            {errors.lName && <ErrorMessage message={errors.lName.message as string} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="checkout-input">
            <label>
              Country / Region <span>*</span>
            </label>
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <NiceSelect
                  options={selectCountryData}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption.option);
                    selectHandler("country")(selectedOption);
                  }}
                  value={formData.country}
                  name="country"
                  placeholder="Select Country"
                />
              )}
            />
            {errors.country && <ErrorMessage message={errors.country.message as string} />}
          </div>
        </div>
        {/* <div className="col-md-12">
          <div className="checkout-input">
            <label>
              State / County <span>*</span>
            </label>
            <Controller
              name="state"
              control={control}
              rules={{ required: "State is required" }}
              render={({ field }) => (
                <NiceSelect
                  options={selectedCountry === "India" ? indianStates : selectLocationData}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption.option);
                    selectHandler("state")(selectedOption);
                  }}
                  value={formData.state}
                  name="state"
                  placeholder="Select State"
                />
              )}
            />
            {errors.state && <ErrorMessage message={errors.state.message as string} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="checkout-input">
            <label>
              Street address <span>*</span>
            </label>
            <input
              type="text"
              placeholder="House number and street name"
              {...register("streetAddress", {
                required: "Street address is required",
              })}
              onChange={handleInputChange}
              value={formData.streetAddress}
            />
            {errors.streetAddress && <ErrorMessage message={errors.streetAddress.message as string} />}
          </div>
          <div className="checkout-input">
            <input
              type="text"
              placeholder="Apartment, suite, unit, etc. (optional)"
              {...register("addressTwo")}
              onChange={handleInputChange}
              value={formData.addressTwo}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="checkout-input">
            <label>
              Town / City <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Town / City"
              {...register("city", {
                required: "Town / City is required",
              })}
              onChange={handleInputChange}
              value={formData.city}
            />
            {errors.city && <ErrorMessage message={errors.city.message as string} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="checkout-input">
            <label>
              Postcode / ZIP <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Postcode / ZIP"
              {...register("zip", {
                required: "Postcode / ZIP is required",
                pattern: {
                  value: /^[0-9]{6}(-[0-9]{4})?$/,
                  message: "Invalid ZIP code format",
                },
              })}
              onChange={handleInputChange}
              value={formData.zip}
            />
            {errors.zip && <ErrorMessage message={errors.zip.message as string} />}
          </div>
        </div> */}
        <div className="col-md-6">
          <div className="checkout-input">
            <label>
              Phone <span>*</span>
            </label>
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number format",
                },
              })}
              onChange={handleInputChange}
              value={formData.phone}
            />
            {errors.phone && <ErrorMessage message={errors.phone.message as string} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="checkout-input">
            <label>
              Email address <span>*</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              onChange={handleInputChange}
              value={formData.email}
            />
            {errors.email && <ErrorMessage message={errors.email.message as string} />}
          </div>
        </div>
        <CreateAccountInCheckout />
        <div className="col-md-12">
          <div className="checkout-input">
            <label>Additional notes (optional)</label>
            <textarea
              placeholder="Special Requests"
              {...register("note")}
              onChange={handleInputChange}
              value={formData.note}
            ></textarea>
          </div>
        </div>
         {/* Debug Information */}
         {/* <div className="col-md-12">
          <div className="checkout-input">
            <label>Debug Information</label>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {debugInfo}
            </pre>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CheckoutForm;