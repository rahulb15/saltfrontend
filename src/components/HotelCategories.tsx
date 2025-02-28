// components/HotelCategories.tsx
import React from 'react';
import Image from 'next/image';
import styles from './HotelCategories.module.css';
import { roomCategories } from '../data/hotelData';


// Define types for our data structures
interface Amenity {
  icon: string;
  text: string;
}

interface RoomCategory {
  type: string;
  image: string;
  amenities: Amenity[];
}

const HotelCategories: React.FC = () => {
  return (
    <div className={`hotel-category ${styles.hotelCategoriesContainer}`}>
      <div className={`text-content ${styles.headerSection}`}>
        <div className="left-side">
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Comforts</h1>
          <h1 className={styles.subTitle}>designed for you</h1>
          <p className={styles.description}>Amenities enhance your experience</p>
        </div>
        <div className={styles.lightBulb}>
          <Image 
            src="/svgs/SVGs (11).svg" 
            alt="Innovation" 
            width={60} 
            height={60} 
            priority
          />
            <img src="/index/straightline.png" alt="" />

        </div>
        </div>
        
      </div>

      <div className={styles.categoriesContainer}>
        {roomCategories.map((category, index) => (
          <div key={index} className={`room-cate-card${styles.categorySection}`}>
            <div className={`header-room ${styles.categoryHeader}`}>
              <div className={`${styles.categoryBadge} primer-bg`}>
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
              <div className={`category-div ${styles.amenitiesContainer}`}>
                {category.amenities.map((amenity, amIndex) => (
                  <div key={amIndex} className={styles.amenityItem}>
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
        ))}
      </div>
    </div>
  );
};

export default HotelCategories;