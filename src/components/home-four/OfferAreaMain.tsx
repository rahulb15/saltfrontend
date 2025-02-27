"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./HotelDealsCarousel.module.css";

const HotelDealsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample data for deals carousel
  const deals = [
    {
      id: 1,
      discount: "30%",
      title: "Get 30% off your FIRST STAY !",
      image: "/assets/rooms/10.png", // Using image from your assets
      buttonText: "Book Now",
      type: "primary",
    },
    {
      id: 2,
      discount: "20%",
      title: "Get 30% off on FOOD",
      image: "/assets/rooms/10.png",
      buttonText: "Book Now",
      type: "primary",
    },
    {
      id: 3,
      discount: "10%",
      title: "Use Coupon & Get 10% off !",
      image: "/assets/rooms/10.png",
      buttonText: "SALT10",
      type: "secondary",
      couponCode: "SALT10"
    },
    {
      id: 4,
      discount: "10%",
      title: "Use Coupon & Get 10% off !",
      image: "/assets/rooms/10.png",
      buttonText: "Book Now",
      type: "secondary",
    },
    {
      id: 5,
      discount: "10%",
      title: "Use Coupon & Get 10% off !",
      image: "/assets/rooms/10.png",
      buttonText: "Book Now",
      type: "secondary",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === deals.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? deals.length - 1 : prev - 1));
  };

  // Calculate visible deals based on current slide
  const visibleDeals = () => {
    // Determine how many items to show based on screen size
    const itemsToShow = 5;
    
    // Get array of visible deals
    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentSlide + i) % deals.length;
      visibleItems.push(deals[index]);
    }
    return visibleItems;
  };
  
  return (
    <section className={styles.dealsSection} id="deals">
      <div className={styles.container}>
        <div className={styles.dealsHeader}>
          <div className={styles.dealsHeaderLeft}>
            <h2 className={styles.dealsTitle}>DEALS FOR YOU</h2>
            <p className={styles.dealsSubtitle}>Suggestions for you better stay</p>
          </div>
          
          {/* Using the lightbulb SVG from your SVGs folder */}
          <div className={styles.lightbulbIcon}>
            <img 
              src="/svgs/SVGs (11).svg" 
              alt="Ideas" 
              width={60}
              height={60}
            />
          </div>
          
          <div className={styles.greenLine}></div>
          
          {/* Using the curved decoration SVG from your SVGs folder */}
          <div className={styles.decorationRight}>
            <img 
              src="/svgs/SVGs (10).svg" 
              alt="Decoration" 
              width={120}
              height={150}
            />
          </div>
        </div>
        
        <div className={styles.dealsCarousel}>
          {/* Left navigation button using your arrow SVG */}
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous deals"
          >
            <img 
              src="/svgs/SVGs (1).svg" 
              alt="Previous" 
              width={20}
              height={20}
              style={{ transform: 'rotate(180deg)' }}
            />
          </button>
          
          <div className={styles.dealsContainer}>
            {visibleDeals().map((deal) => (
              <div 
                key={deal.id} 
                className={styles.dealCard}
              >
                <div className={styles.dealDiscount}>
                  <span className={styles.getLabel}>GET</span>
                  <span className={styles.discountValue}>{deal.discount}</span>
                  <span className={styles.offLabel}>OFF</span>
                </div>
                
                <div className={styles.dealImageContainer}>
                  <img
                    src={deal.image}
                    alt={`${deal.discount} off deal`}
                    className={styles.dealImage}
                  />
                </div>
                
                <div className={styles.dealContent}>
                  <h3 className={styles.dealTitle}>{deal.title}</h3>
                </div>
                
                {/* Coupon code for the SALT10 deal */}
                {deal.couponCode && (
                  <div className={styles.couponTag}>{deal.couponCode}</div>
                )}
              </div>
            ))}
          </div>
          
          {/* Right navigation button using your arrow SVG */}
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next deals"
          >
            <img 
              src="/svgs/SVGs (1).svg" 
              alt="Next" 
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelDealsCarousel;