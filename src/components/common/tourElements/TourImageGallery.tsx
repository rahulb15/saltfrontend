"use client";
import React, { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import 'react-photo-view/dist/react-photo-view.css';
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  images: string[];
  imageLoader?: any;
  alt?: string;
}

const TourImageGallery = ({ 
  images, 
  imageLoader, 
  alt = "tour image"
}: Props) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // If only one image, render without Swiper
  if (images.length <= 1) {
    return (
      <PhotoProvider>
        <div className="tour-gallery-wrapper">
          <div className="image-gallery">
            <div className="tour-gallery-slide">
              <PhotoView src={images[0]}>
                <div className="image-wrapper">
                  {imageLoader ? (
                    <Image
                      loader={imageLoader}
                      src={images[0]}
                      alt={alt}
                      width={450}
                      height={300}
                      style={{ 
                        minHeight: "280px",
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "10px 10px 0 0",
                        cursor: "pointer",
                        width: "100%",
                        height: "100%"
                      }}
                    />
                  ) : (
                    <img
                      src={images[0]}
                      alt={alt}
                      style={{ 
                        minHeight: "280px",
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "10px 10px 0 0",
                        cursor: "pointer",
                        width: "100%",
                        height: "100%"
                      }}
                    />
                  )}
                </div>
              </PhotoView>
            </div>
          </div>
        </div>
      </PhotoProvider>
    );
  }

  // For multiple images, render with Swiper
  return (
    <PhotoProvider>
      <div className="tour-gallery-wrapper">
        <div className="image-gallery">
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            // Remove navigation props and handle it manually
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="tour-gallery-slide">
                  <PhotoView src={image}>
                    <div className="image-wrapper">
                      {imageLoader ? (
                        <Image
                          loader={imageLoader}
                          src={image}
                          alt={`${alt} ${index + 1}`}
                          width={450}
                          height={300}
                          style={{ 
                            minHeight: "280px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "10px 10px 0 0",
                            cursor: "pointer",
                            width: "100%",
                            height: "100%"
                          }}
                        />
                      ) : (
                        <img
                          src={image}
                          alt={`${alt} ${index + 1}`}
                          style={{ 
                            minHeight: "280px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "10px 10px 0 0",
                            cursor: "pointer",
                            width: "100%",
                            height: "100%"
                          }}
                        />
                      )}
                    </div>
                  </PhotoView>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button 
            className="gallery-prev"
            onClick={() => swiper?.slidePrev()}
          >
            <i className="fa-regular fa-angle-left"></i>
          </button>
          <button 
            className="gallery-next"
            onClick={() => swiper?.slideNext()}
          >
            <i className="fa-regular fa-angle-right"></i>
          </button>

          {/* Slide Indicators */}
          {images.length > 1 && (
            <div className="slide-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiper?.slideTo(index)}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .tour-gallery-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image-gallery {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .tour-gallery-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .gallery-prev,
        .gallery-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tour-gallery-wrapper:hover .gallery-prev,
        .tour-gallery-wrapper:hover .gallery-next {
          opacity: 1;
        }

        .gallery-prev {
          left: 20px;
        }

        .gallery-next {
          right: 20px;
        }

        .slide-indicators {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 2;
        }

        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          width: 20px;
          background: white;
        }
      `}</style>
    </PhotoProvider>
  );
};

export default TourImageGallery;