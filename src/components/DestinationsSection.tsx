"use client";
import React from 'react';
import Image from 'next/image';
import styles from './DestinationsSection.module.css';

const DestinationsSection: React.FC = () => {
  const destinations = [
    { name: "Delhi", row: 1, col: 1 },
    { name: "Noida", row: 2, col: 1 },
    { name: "Mohali", row: 1, col: 2 },
    { name: "Rishikesh", row: 2, col: 2 },
    { name: "Bangalore", row: 1, col: 3 },
    { name: "Ahemdabad", row: 2, col: 3 },
    { name: "Punjab", row: 1, col: 4 },
    { name: "Chandigarh", row: 2, col: 4 },
    { name: "Lucknow", row: 1, col: 5 },
    { name: "Mumbai", row: 2, col: 5 },
  ];

  return (
    <div className={styles.destinationsContainer}>
      {/* Left curved lines decoration */}
      <div className={styles.leftCurveDecoration}>
        <Image 
          src="/svgs/SVGs (10).svg" 
          alt="Curved decoration" 
          width={150} 
          height={300}
          className={styles.curveImage}
        />
      </div>

      {/* Main content */}
      <div className={styles.contentSection}>
        {/* Header with title and lightbulb */}
        <div className={styles.headerSection}>
          <div className={styles.titleWrapper}>
            {/* Oval around title */}
            <div className={styles.ovalContainer}>
              <Image 
                src="/svgs/SVGs (26).svg" 
                alt="Oval outline" 
                width={260} 
                height={60}
                className={styles.ovalImage}
              />
              <h2 className={styles.destinationsTitle}>DESTINATIONS</h2>
            </div>
          </div>

          {/* Lightbulb with green line */}
          <div className={styles.lightBulbSection}>
            <div className={styles.lightBulbIcon}>
              <Image 
                src="/svgs/SVGs (11).svg" 
                alt="Lightbulb" 
                width={45} 
                height={45}
                priority
              />
            </div>
            <div className={styles.greenLine}></div>
          </div>
        </div>

        {/* Destinations grid */}
        <div className={styles.destinationsGrid}>
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className={styles.destinationItem}
              style={{ 
                gridRow: destination.row, 
                gridColumn: destination.col 
              }}
            >
              {destination.name}
            </div>
          ))}
        </div>
      </div>

      {/* Right luggage decoration */}
      <div className={styles.rightLuggageDecoration}>
        <Image 
          src="/svgs/SVGs (7).svg" 
          alt="Luggage" 
          width={170} 
          height={200}
          className={styles.luggageImage}
        />
      </div>
    </div>
  );
};

export default DestinationsSection;