"use client";
import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { selectLocationData } from "@/data/nice-select-data";
import NiceSelect from "@/elements/NiceSelect";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import moment from "moment";
import { toast } from "react-toastify";
import { setFilters } from '@/redux/slices/filterSlice';
import Image from "next/image";

// Interfaces
interface Booking {
  city: string;
  checkIn: string;
  checkOut: string;
  room: number;
  adult: number;
  children: number;
}

interface GuestDropdownProps {
  adults: number;
  children: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}

// Guest Dropdown Component
const GuestDropdown: React.FC<GuestDropdownProps> = ({
  adults,
  children,
  setAdults,
  setChildren,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { bookings } = useAppSelector((state: RootState) => state.app) as { bookings: Booking[] };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleApply = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const booking = bookings?.[0];
    if (booking) {
      setAdults(booking.adult);
      setChildren(booking.children);
    }
  }, [bookings]);

  return (
    <div className="saltstayz-guest-dropdown">
      <div onClick={toggleDropdown} className="saltstayz-guest-selector">
        {adults + children > 0
          ? `${adults + children} Guest(s)`
          : "Select Guests"}
      </div>
      {isOpen && (
        <div className="saltstayz-dropdown-content">
          <div className="saltstayz-guest-type">
            <span>Adults</span>
            <div className="saltstayz-guest-controls">
              <button onClick={() => setAdults(Math.max(0, adults - 1))}>
                -
              </button>
              <span>{adults}</span>
              <button onClick={() => setAdults(adults + 1)}>+</button>
            </div>
          </div>
          <div className="saltstayz-guest-type">
            <span>Children</span>
            <div className="saltstayz-guest-controls">
              <button onClick={() => setChildren(Math.max(0, children - 1))}>
                -
              </button>
              <span>{children}</span>
              <button onClick={() => setChildren(children + 1)}>+</button>
            </div>
          </div>
          <button className="saltstayz-apply-button" onClick={handleApply}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

// Main SaltStayz Home Component
const SaltStayzHome = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [city, setCity] = useState<string>("");
  const [selectedHotel, setSelectedHotel] = useState<string>("Saltstayz Premier - Cyber Hub");
  const { bookings } = useAppSelector((state: RootState) => state.app) as { bookings: Booking[] };
  
  const locationOptions = [
    { id: 1, option: "Delhi" },
    { id: 2, option: "Noida" },
    { id: 3, option: "Gurgaon" },
    { id: 4, option: "Mohali" }
  ];

  const hotelOptions = [
    { id: 1, option: "Saltstayz Premier - Cyber Hub" },
    { id: 2, option: "Saltstayz Suites - Golf Course Road" },
    { id: 3, option: "Saltstayz Express - Sohna Road" }
  ];

  useEffect(() => {
    if (bookings?.length > 0) {
      const currentBooking = bookings[0];
      setCity(currentBooking.city);
      if (currentBooking.checkIn && currentBooking.checkOut) {
        setDateRange([
          new Date(currentBooking.checkIn),
          new Date(currentBooking.checkOut),
        ]);
      }
      setAdults(currentBooking.adult);
      setChildren(currentBooking.children);
    }
  }, [bookings]);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleCityChange = (item: { id: number; option: string | number }) => {
    setCity(item.option.toString());
  };

  const handleHotelChange = (item: { id: number; option: string | number }) => {
    setSelectedHotel(item.option.toString());
  };

  const handleSearch = () => {
    if (!city) {
      toast.error("Please select a city");
      return;
    }
    if (!startDate) {
      toast.error("Please select a check-in date");
      return;
    }
    if (!endDate) {
      toast.error("Please select a check-out date");
      return;
    }
    if (moment(endDate).isBefore(moment(startDate))) {
      toast.error("Check-out date should be after check-in date");
      return;
    }
    if (adults + children < 1) {
      toast.error("Please select at least one guest");
      return;
    }

    const searchParams = {
      city,
      checkIn: moment(startDate).format("YYYY-MM-DD"),
      checkOut: moment(endDate).format("YYYY-MM-DD"),
      room: 1, // Assuming one room per search
      adult: adults,
      children: children,
      hotel: selectedHotel
    };

    dispatch(setFilters({
      checkIn: searchParams.checkIn,
      checkOut: searchParams.checkOut,
      adults: searchParams.adult,
      children: searchParams.children,
      city: searchParams.city,
    }));

    router.push(
      `/hotels?city=${city}&checkIn=${searchParams.checkIn}&checkOut=${searchParams.checkOut}&room=${searchParams.room}&adult=${searchParams.adult}&children=${searchParams.children}&hotel=${encodeURIComponent(searchParams.hotel)}`
    );
  };

  // Location buttons data with SVG file paths
  const locations = [
    { name: "Delhi", svgPath: "/svgs/SVGs (1).svg" },
    { name: "Noida", svgPath: "/svgs/SVGs (2).svg" },
    { name: "Gurgaon", svgPath: "/svgs/SVGs (3).svg" },
    { name: "Mohali", svgPath: "/svgs/SVGs (4).svg" },
    { name: "Golf Course Road", svgPath: "/svgs/SVGs (5).svg" },
    { name: "Sohna Road", svgPath: "/svgs/SVGs (5).svg" },
    { name: "Extension Road", svgPath: "/svgs/SVGs (6).svg" },
    { name: "Golf Course Road", svgPath: "/svgs/SVGs (5).svg" },
    { name: "Sohna Road", svgPath: "/svgs/SVGs (5).svg" },
    { name: "Extension Road", svgPath: "/svgs/SVGs (6).svg" },
  ];

  return (
    <div className="saltstayz-main-container">
      {/* Search Section */}
      <section className="saltstayz-search-section">
        <div className="saltstayz-container">
          <div className="saltstayz-search-box">
            <div className="saltstayz-search-field hotel-select">
              <label>Select your Hotel</label>
              <div className="saltstayz-select-wrapper">
                <select 
                  value={selectedHotel}
                  onChange={(e) => setSelectedHotel(e.target.value)}
                  className="saltstayz-select"
                >
                  {hotelOptions.map((option) => (
                    <option key={option.id} value={option.option.toString()}>
                      {option.option.toString()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="saltstayz-search-field">
              <label>Check in</label>
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setDateRange([date, endDate])}
                placeholderText="Select Check in date"
                className="saltstayz-datepicker"
                minDate={new Date()}
              />
            </div>
            
            <div className="saltstayz-search-field">
              <label>Check out</label>
              <ReactDatePicker
                selected={endDate}
                onChange={(date) => setDateRange([startDate, date])}
                placeholderText="Select Check out date"
                className="saltstayz-datepicker"
                minDate={startDate || new Date()}
              />
            </div>
            
            <button className="saltstayz-book-now-btn" onClick={handleSearch}>
              BOOK NOW
            </button>
            
            <div className="saltstayz-flash-btn">
              <div className="saltstayz-flash-icon">
                <img src="/svgs/SVGs (27).svg" alt="Flash" width={24} height={24} />
              </div>
              <div className="flash-text">
                <span>SALTSTAYZ</span>
                <span>FLASH</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaltStayzHome;