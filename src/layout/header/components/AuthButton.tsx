// components/header/components/AuthButton.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const { user, isAuthenticated } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/sign-in');
    setShowMenu(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="header-btn d-none d-sm-block">
        <Link
          href="/sign-in"
          className="bd-primary-btn btn-style has-arrow is-bg radius-60"
        >
          <span className="bd-primary-btn-arrow arrow-right">
            <i className="fa-regular fa-arrow-right"></i>
          </span>
          <span className="bd-primary-btn-text">Sign In</span>
          <span className="bd-primary-btn-circle"></span>
          <span className="bd-primary-btn-arrow arrow-left">
            <i className="fa-regular fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="auth-menu-wrapper">
      <button 
        onClick={() => setShowMenu(!showMenu)}
        className="auth-trigger-btn"
      >
        <span className="user-initial">
          {getInitials(user?.name || '')}
        </span>
      </button>
      {showMenu && (
        <div className="auth-menu">
          <Link href="/profile" className="auth-menu-item">
            Profile
          </Link>
          <Link href="/bookings" className="auth-menu-item">
            My Bookings
          </Link>
          <button onClick={handleLogout} className="auth-menu-item text-red-500">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthButton;