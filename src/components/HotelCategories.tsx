// components/HotelCategories.tsx
import React from 'react';
import Image from 'next/image';
import styles from './HotelCategories.module.css';
import { roomCategories } from '../data/hotelData';
import { Container } from 'reactstrap';

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
      <Container>
        <div className={`text-content ${styles.headerSection}`}>
          <div className="left-side">
          <div className={styles.titleContainer}>
            <h2 className={styles.mainTitle}>Comforts</h2>
            <h2 className={styles.subTitle}>designed for you</h2>
            <p className={styles.description}>Amenities enhance your experience</p>
          </div>
          <div className={`left-side ${styles.lightBulb}`}>
            <Image 
              src="/index/bulb-heading.png" 
              alt="Innovation" 
              width={60} 
              height={80} 
              priority
            />
              <img src="/index/straightline.png" alt="" className='bottom-line'/>

          </div>
          </div>
          
        </div>

        <div className={`room-container ${styles.categoriesContainer}`}>
          {roomCategories.map((category, index) => (
            <div key={index} className={`room-cate-card${styles.categorySection}`}>
              <div className={`header-room ${styles.categoryHeader}`}>
                <div className={`${styles.categoryBadge} primer-bg`}>
                  <span className={styles.categoryType}>{category.type}</span>
                </div>
                <div className={`img-container ${styles.roomImageContainer}`}>
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
                    <div key={amIndex} className={`amenity-card ${styles.amenityItem}`}>
                      <div className={`amenity-bg ${styles.amenityIcon}`}>
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
      </Container>
    </div>
  );
};

export default HotelCategories;