import React, { useState, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';
import axios from 'axios';
import styles from './HotelAmenities.module.css';

interface Amenity {
  _id: string;
  name: string;
  icon?: string;
  category: 'BASIC' | 'PREMIUM' | 'LUXURY';
  description: string;
}

interface HotelAmenitiesAreaProps {
  hotelData: any;
  loading: boolean;
  error: string | null;
  amenities: Amenity[];
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

interface GroupedAmenities {
  [key: string]: Amenity[];
}

const HotelAmenitiesArea: React.FC<HotelAmenitiesAreaProps> = ({ hotelData, amenities, loading, error }) => {
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Loader2 className={`${styles.loadingSpinner} ${styles.amenityIcon}`} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorMessage}>
        {error}
      </div>
    );
  }

  // Group amenities by category
  const groupedAmenities = amenities.reduce<GroupedAmenities>((acc, amenity) => {
    if (!acc[amenity.category]) {
      acc[amenity.category] = [];
    }
    acc[amenity.category].push(amenity);
    return acc;
  }, {});

  return (
    <div className={styles.amenitiesContainer}>
       <div className={styles.amenitiesHeader}>
    <h2 className={styles.amenitiesTitle}>Hotel Amenities</h2>
    <p className={styles.amenitiesDescription}>
      Discover our range of carefully curated amenities designed to make your stay exceptional.
    </p>
  </div>
      <div className={styles.amenitiesGrid}>
        {Object.entries(groupedAmenities).map(([category, categoryAmenities]) => (
          <div key={category} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{category}</h3>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.amenityList}>
                {categoryAmenities.map((amenity) => (
                 <li key={amenity._id} className={styles.amenityItem}>
                 {amenity.icon ? (
                   <img src={amenity.icon} alt={amenity.name} className={styles.amenityIcon} />
                 ) : (
                   <Check className={styles.amenityIcon} />
                 )}
                 <span className={styles.amenityName}>{amenity.name}</span>
                 <span className={`${styles.categoryPill} ${styles[amenity.category]}`}>
                   {amenity.category}
                 </span>
               </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.aboutSection}>
        <h3 className={styles.aboutTitle}>About Our Amenities</h3>
        <p className={styles.aboutText}>
          Our hotel offers a wide range of amenities to ensure your stay is comfortable and memorable. 
          From basic necessities to premium services, we've carefully curated these amenities to enhance your experience.
          Please note that some amenities might require prior booking or additional charges.
        </p>
      </div>
    </div>
  );
};

export default HotelAmenitiesArea;