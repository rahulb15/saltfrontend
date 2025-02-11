// "use client";
// import ErrorMessage from "@/elements/error-message/ErrorMessage";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { toast } from "sonner";
// interface FormData {
//   email: string;
//   password: string;
// }

// const SignInForm = () => {
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
//       <form className="form" onSubmit={handleSubmit(onSubmit)}>
//         <div className="input-box mb-15">
//           <input
//             type="email"
//             className="input"
//             id="username"
//             placeholder="Email Address"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: "Invalid email address",
//               },
//             })}
//           />
//           {errors.email && (
//             <ErrorMessage message={errors.email.message as string} />
//           )}
//         </div>
//         <div className="input-box mb-20">
//           <input
//             type="password"
//             className="input"
//             id="password"
//             placeholder="Type Password Here"
//             {...register("password", {
//               required: "Password is required",
//               minLength: {
//                 value: 6,
//                 message: "Password must be at least 6 characters",
//               },
//               maxLength: {
//                 value: 15,
//                 message: "Password cannot exceed 15 characters",
//               },
//             })}
//           />
//           {errors.password && (
//             <ErrorMessage message={errors.password.message as string} />
//           )}
//         </div>
//         <div className="sign-meta d-flex justify-content-between mb-20">
//           <div className="sign-remember">
//             <label className="footer-form-check-label signing-page cursor">
//               <input type="checkbox" />
//               <svg viewBox="0 0 64 64" height="2em" width="2em">
//                 <path
//                   d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
//                   pathLength="575.0541381835938"
//                   className="path"
//                 ></path>
//               </svg>{" "}
//               Remember me
//             </label>
//           </div>
//           <div className="sign-forgot">
//             <Link href="/forgot" className="sign-link">
//               Forgot Password?
//             </Link>
//           </div>
//         </div>
//         <div className="sign-btn">
//           <button
//             type="submit"
//             className="bd-primary-btn btn-style is-bg radius-60"
//           >
//             <span className="bd-primary-btn-text">Log in</span>
//             <span className="bd-primary-btn-circle"></span>
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default SignInForm;



"use client";
import ErrorMessage from "@/elements/error-message/ErrorMessage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/services/authAPI';
import { setCredentials } from '@/redux/slices/authSlice';

interface FormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading("Signing in...");
    try {
      setIsLoading(true);
      
      const result = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      // Store user data and token in Redux
      dispatch(setCredentials({
        user: result.data,
        token: result.token
      }));

      toast.success("Logged in successfully!", { id: toastId });
      reset();
      router.push("/");
    } catch (error: any) {
      toast.error(error?.data?.message || "Login failed", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box mb-15">
          <input
            type="email"
            className="input"
            id="username"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <ErrorMessage message={errors.email.message as string} />
          )}
        </div>
        <div className="input-box mb-20">
          <input
            type="password"
            className="input"
            id="password"
            placeholder="Type Password Here"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 15,
                message: "Password cannot exceed 15 characters",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage message={errors.password.message as string} />
          )}
        </div>
        <div className="sign-meta d-flex justify-content-between mb-20">
          <div className="sign-remember">
            <label className="footer-form-check-label signing-page cursor">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>{" "}
              Remember me
            </label>
          </div>
          <div className="sign-forgot">
            <Link href="/forgot" className="sign-link">
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="sign-btn">
          <button
            type="submit"
            disabled={isLoading}
            className={`bd-primary-btn btn-style is-bg radius-60 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="bd-primary-btn-text">
              {isLoading ? "Signing in..." : "Log in"}
            </span>
            <span className="bd-primary-btn-circle"></span>
          </button>
        </div>
      </form>
    </>
  );
};

export default SignInForm;