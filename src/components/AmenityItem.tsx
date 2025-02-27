// components/AmenityItem.tsx
import React from 'react';
import Image from 'next/image';
import { Amenity } from '../types/types';
import styles from './HotelCategories.module.css';

interface AmenityItemProps {
  amenity: Amenity;
}

const AmenityItem: React.FC<AmenityItemProps> = ({ amenity }) => {
  return (
    <div className={styles.amenityItem}>
      <div className={styles.amenityIcon}>
        <Image 
          src={amenity.icon} 
          alt={amenity.text} 
          width={30} 
          height={30}
        />
      </div>
      <p className={styles.amenityText}>{amenity.text}</p>
    </div>
  );
};

export default AmenityItem;