// import React, { useState } from 'react';
// import { MapPin, Star, Calendar } from 'lucide-react';
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import styles from './HotelDetail.module.css';

// const HotelDetailHeader = ({ hotel }:any) => {
//     console.log(hotel);
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;

//   return (
//     <div className={styles.hotelHeader}>
//       <div className={styles.hotelInfo}>
//         <div>
//           <h1 className={styles.hotelName}>{hotel.Room_Name}</h1>
//           <div className={styles.hotelLocation}>
//             <MapPin className={styles.icon} />
//             <p>{hotel.localfolder}</p>
//             {/* <p>{"Gurugram"}</p> */}
//           </div>
//         </div>
//         <div className={styles.hotelRating}>
//           <Star className={styles.icon} />
//           <span>{hotel.rating}</span>
//         </div>
//       </div>
//       <div className={styles.hotelBooking}>
//         <div className={styles.hotelPrice}>
//           <p className={styles.price}>₹ {hotel.price}</p>
//           <p className={styles.perNight}>/ night</p>
//           <p className={styles.taxes}>Incl. taxes</p>
//         </div>
//         <div className={styles.datePickerWrapper}>
//           <Calendar className={styles.calendarIcon} />
//           <ReactDatePicker
//             selectsRange={true}
//             startDate={startDate}
//             endDate={endDate}
//             onChange={(update:any) => {
//               setDateRange(update);
//             }}
//             isClearable={true}
//             placeholderText="Select Check-in & Check-out"
//             className={styles.datePicker}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const HotelDetailTabs = () => {
//   const tabs = ['Rooms', 'Amenities', 'Reviews', 'Location', 'Highlights', 'FAQs'];
//   const [activeTab, setActiveTab] = useState('Rooms');

//   return (
//     <div className={styles.hotelTabs}>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
//           onClick={() => setActiveTab(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// };

// const HotelDetailNew = (roomData:any) => {
//     console.log(roomData.rooms[1]);

//   return (
//     <div className={styles.hotelDetail}>
//       <HotelDetailHeader hotel={roomData.rooms[1]} />
//       <HotelDetailTabs />
//       {/* <div className={styles.hotelContent}>
//         <p>Tab content goes here.</p>
//       </div> */}
//     </div>
//   );
// };

// export default HotelDetailNew;

import React, { useState,useEffect } from "react";
import axios from "axios";
import { MapPin, Star, Calendar, Users, Clock } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./HotelDetail.module.css";
import HotelOverviewArea from "../hotel-detail-component/HotelOverviewArea";
import HotelAmenitiesArea from "../hotel-amenities/HotelAmenitiesArea";
import HotelLocationArea from "../hotel-location/HotelLocationArea";
import HotelFaqArea from "../hotel-faq/HotelFaqArea";
import { useRouter, useSearchParams } from 'next/navigation';
import { useGetRoomListingsQuery } from "@/services/roomAPI";
import { setRooms } from "@/redux/slices/roomSlice";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";

// const HotelDetailHeader = ({ hotel }: any) => {
//   console.log(hotel);
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;

//   return (
//     <div className={styles.hotelHeader}>
//       <div className={styles.hotelInfo}>
//         <div className={styles.hotelMainInfo}>
//           <h1 className={styles.hotelName}>{hotel.Room_Name}</h1>
//           <div className={styles.hotelLocation}>
//             <MapPin className={styles.icon} />
//             <p>{hotel.localfolder}</p>
//           </div>
//           {/* <div className={styles.hotelRating}>
//             <Star className={styles.icon} />
//             <span>4.5</span>
//           </div> */}
//         </div>
//         <div className={styles.hotelDetails}>
//           <div className={styles.detailItem}>
//             <Users className={styles.icon} />
//             <span>
//               Max Occupancy: {hotel.Room_Max_adult} Adults,{" "}
//               {hotel.Room_Max_child} Children
//             </span>
//           </div>
//           <div className={styles.detailItem}>
//             <Clock className={styles.icon} />
//             <span>
//               Check-in: {hotel.check_in_time}, Check-out: {hotel.check_out_time}
//             </span>
//           </div>
//           <div className={styles.detailItem}>
//             <span>
//               Size:{" "}
//               {hotel.Room_Description.match(/Size: (.*?)<br>/)?.[1] ||
//                 "Not specified"}
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className={styles.hotelBooking}>
//         <div className={styles.hotelPrice}>
//           {/* <p className={styles.price}>₹ {hotel.room_rates_info.totalprice_inclusive_all.toFixed(2)}/ night</p> */}
//           <p className={styles.perNight}>
//             ₹ {hotel.room_rates_info.totalprice_inclusive_all.toFixed(2)}/ night
//           </p>
//           <p className={styles.taxes}>Incl. taxes</p>
//         </div>
//         <div className={styles.datePickerWrapper}>
//           <Calendar className={styles.calendarIcon} />
//           <ReactDatePicker
//             selectsRange={true}
//             startDate={startDate}
//             endDate={endDate}
//             onChange={(update: any) => {
//               setDateRange(update);
//             }}
//             isClearable={true}
//             placeholderText="Select Check-in & Check-out"
//             customInput={
//               <input
//                 style={{
//                   border: "none",
//                   padding: "0.5rem",
//                   width: "100%",
//                   textAlign: "center",
                  
//                 }}
//               />
//             }
//             calendarClassName={styles.customCalendar}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };


const HotelDetailHeader = ({ hotel, id }: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const [dateRange, setDateRange] = useState<any>([null, null]);
  const [startDate, endDate] = dateRange;
  const [queryParams, setQueryParams] = useState<any>(null);

  // Get existing query parameters
  const currentBooking = {
    adult: parseInt(searchParams.get('adult') || '1'),
    children: parseInt(searchParams.get('children') || '0'),
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || ''
  };

  // Setup RTK Query hook
  const {
    data: roomListingsData,
    error: roomListingsError,
    isLoading,
    isFetching
  } = useGetRoomListingsQuery(
    queryParams || {
      hotelId: id,
      check_in_date: currentBooking.checkIn,
      check_out_date: currentBooking.checkOut,
      number_adults: currentBooking.adult,
      number_children: currentBooking.children
    },
    {
      skip: !queryParams
    }
  );

  // Handle date range changes
  const handleDateChange = (update: [Date | null, Date | null]) => {
    setDateRange(update);
    const [start, end] = update;

    if (start && end) {
      // Format dates to match API requirements (YYYY-MM-DD)
      const formattedStart = start.toISOString().split('T')[0];
      const formattedEnd = end.toISOString().split('T')[0];

      // Set query parameters to trigger API call
      setQueryParams({
        hotelId: id,
        check_in_date: formattedStart,
        check_out_date: formattedEnd,
        number_adults: currentBooking.adult,
        number_children: currentBooking.children
      });

      // Update URL with new dates
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set('checkIn', formattedStart);
      newSearchParams.set('checkOut', formattedEnd);
      router.replace(`?${newSearchParams.toString()}`);
    }
  };

  // Handle API response
  useEffect(() => {
    if (roomListingsData?.status === "success" && !isFetching) {
      // Check for API errors
      const hasApiError = roomListingsData.data.rooms?.[0]?.['Error Details'];
      if (hasApiError) {
        toast.warning("We're working on updating room availability. Please try different dates.");
        return;
      }

      // Filter valid rooms
      const validRooms = roomListingsData.data.rooms?.filter(room => 
        room.Room_Name && 
        room.roomrateunkid && 
        !room['Error Details']
      );

      if (!validRooms || validRooms.length === 0) {
        toast.error('No rooms available for selected dates');
        return;
      }

      // Update room data in Redux store
      dispatch(setRooms({ rooms: validRooms }));
    }
  }, [roomListingsData, isFetching]);

  // Initialize date range from URL params
  useEffect(() => {
    if (currentBooking.checkIn && currentBooking.checkOut) {
      setDateRange([
        new Date(currentBooking.checkIn),
        new Date(currentBooking.checkOut)
      ]);
    }
  }, []);

  return (
    <div className={styles.hotelHeader}>
      <div className={styles.hotelInfo}>
        <div className={styles.hotelMainInfo}>
          <h1 className={styles.hotelName}>{hotel.Room_Name}</h1>
          <div className={styles.hotelLocation}>
            <MapPin className={styles.icon} />
            <p>{hotel.localfolder}</p>
          </div>
        </div>
        <div className={styles.hotelDetails}>
          <div className={styles.detailItem}>
            <Users className={styles.icon} />
            <span>
              Max Occupancy: {hotel.Room_Max_adult} Adults,{" "}
              {hotel.Room_Max_child} Children
            </span>
          </div>
          <div className={styles.detailItem}>
            <Clock className={styles.icon} />
            <span>
              Check-in: {hotel.check_in_time}, Check-out: {hotel.check_out_time}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span>
              Size:{" "}
              {hotel.Room_Description.match(/Size: (.*?)<br>/)?.[1] ||
                "Not specified"}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.hotelBooking}>
        <div className={styles.hotelPrice}>
          <p className={styles.perNight}>
            ₹ {hotel.room_rates_info.totalprice_inclusive_all.toFixed(2)}/ night
          </p>
          <p className={styles.taxes}>Incl. taxes</p>
        </div>
        <div className={styles.datePickerWrapper}>
          <Calendar className={styles.calendarIcon} />
          <ReactDatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            isClearable={true}
            placeholderText="Select Check-in & Check-out"
            customInput={
              <input
                style={{
                  border: "none",
                  padding: "0.5rem",
                  width: "100%",
                  textAlign: "center",
                }}
              />
            }
            calendarClassName={styles.customCalendar}
          />
          {(isLoading || isFetching) && (
            <div className="absolute right-0 top-0 h-full flex items-center pr-3">
              <div className="w-4 h-4 border-t-2 border-b-2 border-green-500 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



const HotelDetailTabs = ({ activeTab, setActiveTab }: any) => {
  const tabs = [
    "Overview",
    "Amenities",
    "Location",
    "FAQs",
  ];

  return (
    <div className={styles.hotelTabs}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};


interface Amenity {
  _id: string;
  name: string;
  icon?: string;
  category: 'BASIC' | 'PREMIUM' | 'LUXURY';
  description: string;
}



interface AmenityResponse {
  status: string;
  data: Amenity;
}

interface HotelResponse {
  status: string;
  data: {
    amenities: string[];
  };
}

const HotelDetailNew = ({ rooms, selectedRoomType,id }: any) => {
  console.log(id);
  const [activeTab, setActiveTab] = useState("Overview");
  console.log(activeTab);
  const hotel = selectedRoomType;
  console.log(hotel);
  const [hotelData, setHotelData] = useState<any>(null);
  console.log(hotelData,"hotelData");
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);




  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        console.log('Fetching hotel details...');
        // const response = await axios.get<HotelResponse>(`http://localhost:5001/api/v1/hotels/${id}`);
        const response = await axios.get<HotelResponse>(`${process.env.NEXT_PUBLIC_API_URL}/hotels/${id}`);
        console.log(response);
        if (response.data.status === 'success') {
          setHotelData(response.data.data);
          const amenityIds = response.data.data.amenities;
          // Fetch details for each amenity
          const amenityDetails = await Promise.all(
            amenityIds.map(async (id: string) => {
              // const amenityResponse = await axios.get<AmenityResponse>(`http://localhost:5001/api/v1/amenities/${id}`);
              const amenityResponse = await axios.get<AmenityResponse>(`${process.env.NEXT_PUBLIC_API_URL}/amenities/${id}`);
              return amenityResponse.data.data;
            })
          );
          setAmenities(amenityDetails);
        }
      } catch (err) {
        setError('Failed to fetch amenities');
        console.error('Error fetching hotel details:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchHotelDetails();
    }
  }, [id]);





  return (
    <div className={styles.hotelDetail}>
<HotelDetailHeader hotel={hotel} id={id} />

<HotelDetailTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Overview" && (
        <div className={styles.hotelContent}>
          <HotelOverviewArea hotelData={hotel} rooms={rooms} id={id} />
        </div>
      )}
      {activeTab === "Amenities" && id && (
        <div className={styles.hotelContent}>
          <HotelAmenitiesArea hotelData={hotelData} amenities={amenities} loading={loading} error={error} />
        </div>
      )}

      {activeTab === "Location" && hotel && (
        <div className={styles.hotelContent}>
          <HotelLocationArea hotelData={hotelData} />
        </div>
      )}
      {activeTab === "FAQs" && (
        <div className={styles.hotelContent}>
          <HotelFaqArea />
        </div>
      )}
      


    </div>
  );
};

export default HotelDetailNew;
