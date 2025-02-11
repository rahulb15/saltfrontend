// "use client";
// import ErrorMessage from "@/elements/error-message/ErrorMessage";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { toast } from "sonner";
// interface FormData {
//   name: string;
//   userName: string;
//   email: string;
//   phone: string;
//   password: string;
//   confirmPassword: string;
// }
// const SignUpForm = () => {
//   const router = useRouter();
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
//     router.push("/");
//   };

//   return (
//     <>
//       <form className="sign-up-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
//         <div className="row gy-24 align-items-center justify-content-between">
//           <div className="col-12">
//             <div className="from-input-box">
//               <div className="form-input-title">
//                 <label htmlFor="name">
//                   Name<span>*</span>
//                 </label>
//               </div>
//               <div className="form-input">
//                 <input
//                   id="name"
//                   type="text"
//                   placeholder=" Name"
//                   {...register("name", {
//                     required: "Name is required",
//                     minLength: {
//                       value: 2,
//                       message: "Name must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "Name cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//                 {errors.name && (
//                   <ErrorMessage message={errors.name.message as string} />
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="col-12">
//             <div className="from-input-box">
//               <div className="form-input-title">
//                 <label htmlFor="userName">
//                   User Name<span>*</span>
//                 </label>
//               </div>
//               <div className="form-input">
//                 <input
//                   id="userName"
//                   type="text"
//                   placeholder="User Name"
//                   {...register("userName", {
//                     required: "User Name is required",
//                     minLength: {
//                       value: 2,
//                       message: "User Name must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "User Name cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//                 {errors.userName && (
//                   <ErrorMessage message={errors.userName.message as string} />
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="col-12">
//             <div className="from-input-box">
//               <div className="form-input-title">
//                 <label htmlFor="email">
//                   Email<span>*</span>
//                 </label>
//               </div>
//               <div className="form-input">
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Enter Address"
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
//           </div>

//           <div className="col-12">
//             <div className="from-input-box">
//               <div className="form-input-title">
//                 <label htmlFor="phone">
//                   Phone<span>*</span>
//                 </label>
//               </div>
//               <div className="form-input">
//                 <input
//                   id="phone"
//                   type="text"
//                   placeholder="Phone"
//                   {...register("phone", {
//                     required: "Phone is required",
//                     minLength: {
//                       value: 2,
//                       message: "Phone must be at least 2 characters",
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
//           </div>
//           <div className="col-12">
//             <div className="from-input-box">
//               <div className="form-input-title">
//                 <label htmlFor="password">
//                   Password<span>*</span>
//                 </label>
//               </div>
//               <div className="form-input">
//                 <input
//                   id="password"
//                   type="password"
//                   placeholder="Password"
//                   {...register("password", {
//                     required: "  Password is required",
//                     minLength: {
//                       value: 2,
//                       message: "  Password must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "  Password cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//                 {errors.password && (
//                   <ErrorMessage message={errors.password.message as string} />
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="col-12">
//             <div className="from-input-box">
//               <div className="form-input-title">
//                 <label htmlFor="confirmPassword">
//                   Confirm Password<span>*</span>
//                 </label>
//               </div>
//               <div className="form-input">
//                 <input
//                   id="confirmPassword"
//                   type="password"
//                   placeholder="Confirm Password"
//                   {...register("confirmPassword", {
//                     required: "Confirm Password is required",
//                     minLength: {
//                       value: 2,
//                       message: "Confirm Password must be at least 2 characters",
//                     },
//                     maxLength: {
//                       value: 15,
//                       message: "Confirm Password cannot exceed 15 characters",
//                     },
//                   })}
//                 />
//                 {errors.confirmPassword && (
//                   <ErrorMessage
//                     message={errors.confirmPassword.message as string}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="sign-btn mt-20">
//           <button
//             type="submit"
//             className="bd-primary-btn btn-style is-bg radius-60"
//           >
//             <span className="bd-primary-btn-text">Sign Up</span>
//             <span className="bd-primary-btn-circle"></span>
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default SignUpForm;


"use client";
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ErrorMessage from "@/elements/error-message/ErrorMessage";
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/redux/slices/authSlice';
import { useRegisterMutation } from '@/services/authAPI';

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [register] = useRegisterMutation();
  
  const {
    register: registerField,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const password = watch("password");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading("Creating your account...");
    try {
      setIsLoading(true);
  
      if (data.password !== data.confirmPassword) {
        toast.error("Passwords do not match", { id: toastId });
        return;
      }
  
      const result = await register({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      }).unwrap();
  
      dispatch(setCredentials({
        user: result.data,
        token: result.token
      }));
  
      toast.success("Account created successfully!", { id: toastId });
      reset();
      router.push("/"); // Change this to redirect to home page instead of login
    } catch (error: any) {
      toast.error(error?.data?.message || "Registration failed", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="sign-up-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div className="row gy-24 align-items-center justify-content-between">
        {/* Name field */}
        <div className="col-12">
          <div className="from-input-box">
            <div className="form-input-title">
              <label htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="form-input">
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
                {...registerField("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name cannot exceed 50 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Name can only contain letters and spaces",
                  },
                })}
              />
              {errors.name && <ErrorMessage message={errors.name.message as string} />}
            </div>
          </div>
        </div>

        {/* Email field */}
        <div className="col-12">
          <div className="from-input-box">
            <div className="form-input-title">
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="form-input">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
                {...registerField("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <ErrorMessage message={errors.email.message as string} />}
            </div>
          </div>
        </div>

        {/* Phone field */}
        <div className="col-12">
          <div className="from-input-box">
            <div className="form-input-title">
              <label htmlFor="phone">
                Phone Number<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="form-input">
              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                className="w-full p-2 border rounded"
                {...registerField("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                })}
              />
              {errors.phone && <ErrorMessage message={errors.phone.message as string} />}
            </div>
          </div>
        </div>

        {/* Password field */}
        <div className="col-12">
          <div className="from-input-box">
            <div className="form-input-title">
              <label htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="form-input">
              <input
                id="password"
                type="password"
                placeholder="Create a strong password"
                className="w-full p-2 border rounded"
                {...registerField("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
                  },
                })}
              />
              {errors.password && <ErrorMessage message={errors.password.message as string} />}
            </div>
          </div>
        </div>

        {/* Confirm Password field */}
        <div className="col-12">
          <div className="from-input-box">
            <div className="form-input-title">
              <label htmlFor="confirmPassword">
                Confirm Password<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="form-input">
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full p-2 border rounded"
                {...registerField("confirmPassword", {
                  required: "Please confirm your password",
                  validate: value => value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && <ErrorMessage message={errors.confirmPassword.message as string} />}
            </div>
          </div>
        </div>
      </div>

      <div className="sign-btn mt-20">
        <button
          type="submit"
          disabled={isLoading}
          className={`bd-primary-btn btn-style is-bg radius-60 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span className="bd-primary-btn-text">
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </span>
          <span className="bd-primary-btn-circle"></span>
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;