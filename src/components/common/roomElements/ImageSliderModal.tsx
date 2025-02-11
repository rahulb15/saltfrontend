import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { X, ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react';
import { ResponsiveType } from 'react-multi-carousel';

interface CarouselSliderProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  onIndexChange
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  
  const mainCarouselRef = useRef<any>(null);
  const thumbnailCarouselRef = useRef<any>(null);

  const responsive: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const thumbnailResponsive: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsZoomed(false);
      setIsFullscreen(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (mainCarouselRef.current && thumbnailCarouselRef.current) {
      mainCarouselRef.current.goToSlide(initialIndex);
      thumbnailCarouselRef.current.goToSlide(initialIndex);
    }
  }, [initialIndex]);

  const handleSlideChange = (index: number) => {
    console.log('Slide changed to:', index);
    setCurrentIndex(index);
    onIndexChange?.(index);
    
    // Keep thumbnails in sync
    if (thumbnailCarouselRef.current) {
      thumbnailCarouselRef.current.goToSlide(index);
    }
  };

  const handleThumbnailClick = (index: number) => {
    if (mainCarouselRef.current) {
      mainCarouselRef.current.goToSlide(index);
    }
    setCurrentIndex(index);
    onIndexChange?.(index);
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Error handling fullscreen:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="slider-modal">
      <div className="slider-overlay" onClick={onClose} />
      
      <div className="slider-content">
        {/* Controls */}
        <div className="slider-controls">
          <button onClick={() => setIsZoomed(!isZoomed)} className="control-btn">
            {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </button>
          <button onClick={toggleFullscreen} className="control-btn">
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
          <button onClick={onClose} className="control-btn">
            <X size={20} />
          </button>
        </div>

        {/* Counter */}
        <div className="slider-counter">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Main Carousel */}
        <div className="main-carousel-wrapper">
          <Carousel
            ref={mainCarouselRef}
            responsive={responsive}
            infinite={false}
            draggable={true}
            swipeable={true}
            centerMode={false}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            afterChange={(_, { currentSlide }) => handleSlideChange(currentSlide)}
          >
            {images.map((image, index) => (
              <div key={index} className="main-image-container">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`main-image ${isZoomed ? 'zoomed' : ''}`}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Thumbnails */}
        <div className="thumbnail-wrapper">
          <Carousel
            ref={thumbnailCarouselRef}
            responsive={thumbnailResponsive}
            infinite={false}
            draggable={true}
            swipeable={true}
            centerMode={false}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="thumbnail-container"
            arrows={false}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`thumbnail-item ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-image"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style jsx global>{`
        .slider-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          z-index: 1001;
        }

        .slider-content {
          position: relative;
          width: 100%;
          height: 100vh;
          z-index: 1002;
          display: flex;
          flex-direction: column;
        }

        .slider-controls {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          gap: 10px;
          z-index: 1003;
        }

        .control-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          background: rgba(0, 0, 0, 0.8);
        }

        .slider-counter {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          z-index: 1003;
        }

        .main-carousel-wrapper {
          flex: 1;
          width: 100%;
          height: calc(100vh - 120px);
          margin-top: 60px;
        }

        .carousel-container {
          height: 100%;
        }

        .main-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(100vh - 120px);
          padding: 20px;
        }

        .main-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .main-image.zoomed {
          transform: scale(1.5);
        }

        .thumbnail-wrapper {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 800px;
          background: rgba(0, 0, 0, 0.5);
          padding: 10px;
          border-radius: 10px;
        }

        .thumbnail-container {
          padding: 0 10px;
        }

        .thumbnail-item {
          padding: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .thumbnail-item.active {
          transform: scale(1.1);
        }

        .thumbnail-image {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 5px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .thumbnail-item.active .thumbnail-image {
          border-color: #4caf50;
        }

        @media (max-width: 768px) {
          .control-btn {
            width: 35px;
            height: 35px;
          }

          .thumbnail-image {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .thumbnail-image {
            width: 40px;
            height: 40px;
          }

          .main-image-container {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselSlider;