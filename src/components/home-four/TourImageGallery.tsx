import React, { useState, useEffect } from "react";
import styles from "./TourImageGallery.module.css";

interface TourImageGalleryProps {
  images: string[];
  alt: string;
}

const TourImageGallery: React.FC<TourImageGalleryProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Handle image navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Auto rotate images every 5 seconds
    const interval = setInterval(() => {
      if (images.length > 1) {
        goToNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.galleryContainer}>
      {isLoading && (
        <div className={styles.loadingPlaceholder}></div>
      )}
      
      <img
        src={images[currentIndex]}
        alt={alt}
        className={styles.galleryImage}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
      
      {/* Image navigation dots */}
      {images.length > 1 && (
        <div className={styles.galleryDots}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.galleryDot} ${index === currentIndex ? styles.active : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TourImageGallery;