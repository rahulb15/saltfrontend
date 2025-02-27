"use client"
import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { selectLocationData } from "@/data/nice-select-data";
import NiceSelect from "@/elements/NiceSelect";
import { setBookings } from "@/redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation"
import moment from "moment";
import { toast } from "react-toastify";
import { setFilters, setSorting } from '@/redux/slices/filterSlice';

interface Booking {
  city: string;
  checkIn: string;
  checkOut: string;
  room: number;
  adult: number;
  children: number;
}
interface SearchFilterProps {
  bgClass: string;
}

interface GuestDropdownProps {
  adults: number;
  children: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}

const GuestDropdown: React.FC<GuestDropdownProps> = ({
  adults,
  children,
  setAdults,
  setChildren,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { bookings } = useAppSelector((state: RootState) => state.app) as { bookings: Booking[] };
  console.log(bookings);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleApply = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const booking = bookings[0];
    if (booking) {
      setAdults(booking.adult);
      setChildren(booking.children);
    }
    }, [bookings]);

  return (
    <div className="guest-dropdown">
      <div onClick={toggleDropdown}>
        {adults + children > 0
          ? `${adults + children} Guest(s)`
          : "Select Guests"}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="guest-type">
            <span>Adults</span>
            <div className="guest-controls">
              <button onClick={() => setAdults(Math.max(0, adults - 1))}>
                -
              </button>
              <span>{adults}</span>
              <button onClick={() => setAdults(adults + 1)}>+</button>
            </div>
          </div>
          <div className="guest-type">
            <span>Children</span>
            <div className="guest-controls">
              <button onClick={() => setChildren(Math.max(0, children - 1))}>
                -
              </button>
              <span>{children}</span>
              <button onClick={() => setChildren(children + 1)}>+</button>
            </div>
          </div>
          <button className="apply-button" onClick={handleApply}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

const SearchFilter: React.FC<SearchFilterProps> = ({ bgClass }) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [city, setCity] = useState<string>("");
  const { bookings } = useAppSelector((state: RootState) => state.app) as { bookings: Booking[] };
  console.log(bookings);

  useEffect(() => {
    if (bookings.length > 0) {
      const currentBooking = bookings[0];
      setCity(currentBooking.city);
      setDateRange([
        new Date(currentBooking.checkIn),
        new Date(currentBooking.checkOut),
      ]);
      setAdults(currentBooking.adult);
      setChildren(currentBooking.children);
    }
  }
  , [bookings]);
  

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleCityChange = (item: { id: number; option: string | number }, name: string) => {
    setCity(item.option.toString());
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
    };


    dispatch(setFilters({
          checkIn: searchParams.checkIn,
          checkOut: searchParams.checkOut,
          adults: searchParams.adult,
          children: searchParams.children,
          city: searchParams.city,
        }));

    // dispatch(setBookings([searchParams]));

    router.push(
      `/hotels?city=${city}&checkIn=${searchParams.checkIn}&checkOut=${searchParams.checkOut}&room=${searchParams.room}&adult=${searchParams.adult}&children=${searchParams.children}`
    );
    // router.push(`/hotels`);
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="banner-search-wrapper banner-search-style-three full-width">
            <div className={bgClass}>
              <div className="banner-search-form">
                <div className="banner-search-field has-separator d-flex align-items-center gap-10">
                  <div className="search-icon-bg">
                    <span>
                      <i className="fa-regular fa-location-dot"></i>
                    </span>
                  </div>
                  <div className="banner-search-item banner-select">
                    <p className="b2 mb-0 fw-5">Where to</p>
                    <div className="banner-search-select">
                    <NiceSelect
                        options={selectLocationData}
                        defaultCurrent={0}
                        onChange={handleCityChange}
                        name="city"
                        className=""
                        placeholder="Select Location"
                      />
                    </div>
                  </div>
                </div>
                <div className="banner-search-field has-separator d-flex align-items-center gap-10">
                  <div className="search-icon-bg">
                    <span>
                      <i className="icon-cleander"></i>
                    </span>
                  </div>
                  <div className="banner-search-item">
                    <p className="b2 mb-0 fw-5">Duration</p>
                    <div className="banner-form-input">
                      <ReactDatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(date: any) => {
                          setDateRange(date);
                        }}
                        isClearable={true}
                        placeholderText="Select Your Date"
                        minDate={new Date()}
                      />
                    </div>
                  </div>
                </div>
                <div className="banner-search-field d-flex align-items-center gap-10">
                  <div className="search-icon-bg">
                    <span>
                      <i className="fa-regular fa-user-friends"></i>
                    </span>
                  </div>
                  <div className="banner-search-item banner-select">
                    <p className="b2 mb-0 fw-5">Guests</p>
                    <div className="banner-search-select">
                      <GuestDropdown
                        adults={adults}
                        children={children}
                        setAdults={setAdults}
                        setChildren={setChildren}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-search-button">
                <button type="button" className="bd-play-btn" onClick={handleSearch}>
                  <span>
                    <i className="fa-regular fa-magnifying-glass"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
