import React from "react";
import Link from "next/link";
import TourImageGallery from "./TourImageGallery";
import styles from "./PropertyCard.module.css";

const PropertyCard = ({ tour }: any) => {
  // Get all available images
  const galleryImages = [
    ...(tour.customImages || []),
    ...(tour.mainImage ? [tour.mainImage] : []),
    ...(tour.hotelId?.images || [])
  ].filter(Boolean);

  // Use default image if no images are available
  const defaultImage = "/img/default-hotel.jpg";
  const imagesToShow = galleryImages.length > 0 ? galleryImages : [defaultImage];

  // Location text or Hotel Name
  const hotelName = tour.customTitle || tour.hotelId?.name || "Luxury Location";
  
  // Property type (RESORT, AIRPORT, etc.)
  const propertyType = tour.hotelId?.type?.toUpperCase() || "RESORT";
  
  // Price calculation
  const currency = tour.displayPrice?.currency || "INR";
  const price = tour.displayPrice?.discountedPrice || 0;
  
  // Promotional offer
  const hasOffer = tour.promotionalOffer && Number(tour.promotionalOffer) > 0;

  return (
    <div className={styles.propertyCard}>
      {/* Property image container */}
      <div className={styles.imageContainer}>
        {/* Property Type Badge */}
        <div className={styles.propertyType}>
          {propertyType}
        </div>
        
        {/* Promo Badge */}
        {hasOffer && (
          <div className={styles.promoTag}>
            {tour.promotionalOffer}% OFF
          </div>
        )}
        
        <Link href={`/hotels/${tour._id}`}>
          <TourImageGallery
            images={imagesToShow}
            alt={hotelName}
          />
        </Link>
      </div>
      
      {/* Hotel name with green underline */}
      <div className={styles.hotelNameWrapper}>
        <Link href={`/hotels/${tour._id}`}>
          <div className={styles.hotelName}>{hotelName}</div>
        </Link>
        <div className={styles.greenLineContainer}>
          <img src="/svgs/SVGs (8).svg" alt="Green line" className={styles.greenLine} />
        </div>
      </div>
      
      {/* Price line */}
      <div className={styles.priceLine}>
        <p className={styles.startingPrice}>
          Starting @ <span className={styles.priceValue}>{currency} {price} /-</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;