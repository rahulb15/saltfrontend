// components/RoomCategory.tsx
import React from 'react';
import Image from 'next/image';
import { RoomCategory as RoomCategoryType } from '../types/types';
import styles from './HotelCategories.module.css';

interface RoomCategoryProps {
  category: RoomCategoryType;
}

const RoomCategory: React.FC<RoomCategoryProps> = ({ category }) => {
  return (
    <div className={styles.categorySection}>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryBadge}>
          <span className={styles.categoryType}>{category.type}</span>
        </div>
        <div className={styles.roomImageContainer}>
          <Image
            src={category.image}
            alt={`${category.type} Room`}
            className={styles.roomImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>
      </div>

      {category.amenities.length > 0 && (
        <div className={styles.amenitiesContainer}>
          {category.amenities.map((amenity, index) => (
            <div key={index} className={styles.amenityItem}>
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
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomCategory;