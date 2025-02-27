"use client";
import React, { useState } from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import PropertyCard from './PropertyCard';
import { useGetFeaturedHotelsQuery } from "@/services/featuredAPI";
import { Hotel } from 'lucide-react';

const NoDataFound = () => (
  <div className="saltstayz-no-data-container">
    <div className="saltstayz-icon-wrapper">
      <Hotel size={48} />
    </div>
    <h3 className="saltstayz-no-data-title">
      No Properties Found
    </h3>
    <p className="saltstayz-no-data-description">
      We couldn't find any properties in this category at the moment. 
      Please check back later or explore other categories.
    </p>
    <Link href="/hotels" className="saltstayz-browse-all-btn">
      Browse All Properties
    </Link>
  </div>
);

const IntegratedTourArea = () => {
  // Location items for the carousel
  const locations = [
    { id: 'delhi', name: "Delhi", svgPath: "/svgs/SVGs (1).svg" },
    { id: 'noida', name: "Noida", svgPath: "/svgs/SVGs (2).svg" },
    { id: 'gurgaon', name: "Gurgaon", svgPath: "/svgs/SVGs (3).svg" },
    { id: 'mohali', name: "Mohali", svgPath: "/svgs/SVGs (4).svg" },
    { id: 'golfcourse', name: "Golf Course Road", svgPath: "/svgs/SVGs (5).svg" },
    { id: 'sohna', name: "Sohna Road", svgPath: "/svgs/SVGs (5).svg" },
    { id: 'extension', name: "Extension Road", svgPath: "/svgs/SVGs (6).svg" },
  ];

  const [activeTab, setActiveTab] = useState('featured');
  const [activeCity, setActiveCity] = useState('gurugram');
  const [activeLocation, setActiveLocation] = useState('gurgaon');

  // Keep the original API call with the same parameters
  const { data, error, isLoading } = useGetFeaturedHotelsQuery({
    sectionType: activeTab ? activeTab === 'city' ? activeCity : activeTab : 'featured',
    limit: 5,
    status: 'active',
  });

  const featuredHotels = data?.data?.hotels || [];

  // Handle location change
  const handleLocationChange = (locationId :any) => {
    setActiveLocation(locationId);
    
    // Map location IDs to the activeTab and activeCity values required by your API
    switch(locationId) {
      case 'delhi':
        setActiveTab('city');
        setActiveCity('delhi');
        break;
      case 'noida':
        setActiveTab('city');
        setActiveCity('noida');
        break;
      case 'gurgaon':
        setActiveTab('city');
        setActiveCity('gurugram');
        break;
      case 'mohali':
        setActiveTab('city');
        setActiveCity('mohali');
        break;
      case 'golfcourse':
        setActiveTab('featured'); // Or whatever appropriate tab you want
        setActiveCity('gurugram');
        break;
      case 'sohna':
        setActiveTab('featured'); // Or whatever appropriate tab you want
        setActiveCity('gurugram');
        break;
      case 'extension':
        setActiveTab('featured'); // Or whatever appropriate tab you want
        setActiveCity('gurugram');
        break;
      default:
        setActiveTab('featured');
        setActiveCity('gurugram');
    }
  };

  if (isLoading) {
    return (
      <section className="saltstayz-tab-container">
        <div className="saltstayz-container">
          <div className="saltstayz-loading-skeleton">
            {[1, 2, 3].map((index) => (
              <div key={index} className="saltstayz-skeleton-card" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) return null;

  return (
    <>
      {/* Location Carousel Section */}
      <section className="saltstayz-location-carousel">
        <div className="saltstayz-container">
          <div className="saltstayz-carousel-wrapper">
            <button className="saltstayz-carousel-arrow saltstayz-prev">
              <span>&lt;</span>
            </button>
            
            <div className="saltstayz-carousel-slides">
              {locations.map((location) => (
                <div 
                  key={location.id} 
                  className={`saltstayz-location-item ${activeLocation === location.id ? 'active' : ''}`}
                  onClick={() => handleLocationChange(location.id)}
                >
                  <div className="saltstayz-location-icon">
                    <img src={location.svgPath} alt={location.name} width={28} height={28} />
                  </div>
                  <span className="saltstayz-location-name">{location.name}</span>
                </div>
              ))}
            </div>
            
            <button className="saltstayz-carousel-arrow saltstayz-next">
              <span>&gt;</span>
            </button>
          </div>
          
          {/* Suitcase Icon */}
          <div className="saltstayz-suitcase-wrapper">
            {/* <div className="saltstayz-suitcase-icon"> */}
              <img src="/svgs/SVGs (7).svg" alt="Suitcase" width={80} height={80} />
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Properties Section Title */}
      <section className="saltstayz-properties-header">
        <div className="saltstayz-container">
          <h2 className="saltstayz-properties-title">
            Showing Properties in {locations.find(loc => loc.id === activeLocation)?.name || 'Gurgaon'}
            <span className="saltstayz-green-line">
              <img src="/svgs/SVGs (9).svg" alt="green line" />
            </span>
          </h2>
        </div>
      </section>

      {/* Properties Section */}
      <section className="saltstayz-properties-section">
        <div className="saltstayz-container">
          {featuredHotels.length > 0 ? (
            <div className="saltstayz-properties-grid">
              {featuredHotels.map((hotel) => (
                <PropertyCard
                  key={hotel._id}
                  tour={hotel}
                />
              ))}
            </div>
          ) : (
            <NoDataFound />
          )}
        </div>
      </section>
    </>
  );
};

export default IntegratedTourArea;