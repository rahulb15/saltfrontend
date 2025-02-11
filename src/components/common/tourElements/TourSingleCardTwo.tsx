import React from "react";
import Link from "next/link";
import TourImageGallery from "./TourImageGallery";
import { IFeaturedHotel } from "@/services/featuredAPI";

interface Props {
  tour: any;
  className: string;
  tourWrapperClass: string;
  isparentClass: boolean;
}

const TourSingleCardTwo = ({
  tour,
  className,
  tourWrapperClass,
  isparentClass,
}: Props) => {
  // Get all available images
  const galleryImages = [
    ...(tour.customImages || []),
    ...(tour.mainImage ? [tour.mainImage] : []),
    ...(tour.hotelId?.images || [])
  ].filter(Boolean);

  // Use default image if no images are available
  const defaultImage = "/img/default-hotel.jpg"; // Add your default image path
  const imagesToShow = galleryImages.length > 0 ? galleryImages : [defaultImage];

  const renderContent = () => (
    <div className={tourWrapperClass}>
      <div className="tour-thumb-wrapper p-relative">
        <div className="tour-thumb image-overly">
          <Link href={`/hotels/${tour._id}`}>
            <TourImageGallery
              images={imagesToShow}
              alt={tour.customTitle || tour.hotelId?.name || "Hotel image"}
            />
          </Link>
        </div>

        <div className="tour-badge">
          {/* Show highlight tags if available */}
          {tour.highlightTags?.map((tag:any, index:any) => (
            <span key={index} className="bd-badge success fw-5">
              {tag}
            </span>
          ))}
          
          {/* Show promotional offer if available */}
          {tour.promotionalOffer && Number(tour.promotionalOffer) > 0 && (
            <span className="bd-badge danger fw-5">
              {tour.promotionalOffer}% off
            </span>
          )}
        </div>
      </div>
      
      <div className="tour-content">
        {/* Location and Hotel Name */}
        <div className="tour-meta mb-10">
          <div className="tour-location">
            <i className="fa-regular fa-location-dot"></i>{" "}
            <Link href={`/hotels/${tour._id}`}>
              {tour.hotelId?.name || tour.customTitle || "Luxury Hotel"}
            </Link>
          </div>
        </div>
        
        {/* Custom Title */}
        <h5 className="tour-title fw-5 underline mb-10">
          <Link href={`/hotels/${tour._id}`}>
            {tour.customTitle}
          </Link>
        </h5>

        {/* Custom Description - Truncated */}
        {tour.customDescription && (
          <p className="tour-description mb-10" style={{ 
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            margin: '0 0 15px'
          }}>
            {tour.customDescription}
          </p>
        )}

        {/* Price Section */}
        <div className="tour-price-wrapper">
          <span className="tour-price-text b3">From </span>
          <h6 className="tour-price-title current">
            {tour.displayPrice?.currency || "INR"} {tour.displayPrice?.discountedPrice || 0}
          </h6>
          {tour.displayPrice?.basePrice > (tour.displayPrice?.discountedPrice || 0) && (
            <h6 className="tour-price-title old">
              {tour.displayPrice?.currency || "INR"} {tour.displayPrice?.basePrice}
            </h6>
          )}
        </div>

        {/* Features Section */}
        <div className="tour-rating d-flex align-items-center justify-content-between">
          {/* Amenities */}
          {tour.customAmenities && tour.customAmenities.length > 0 && (
            <div className="tour-rating-wrap d-flex align-items-center gap-10">
              <div className="tour-amenities fs-14 d-flex">
                {tour.customAmenities.slice(0, 3).map((amenity:any, index:any) => (
                  <span key={index} className="amenity-icon" title={amenity.name}>
                    <i className={amenity.icon || "fa-regular fa-check"}></i>
                  </span>
                ))}
                {tour.customAmenities.length > 3 && (
                  <span>+{tour.customAmenities.length - 3}</span>
                )}
              </div>
            </div>
          )}
          
          {/* Special Features Counter */}
          {tour.specialFeatures?.length > 0 && (
            <div className="tour-duration">
              <span>
                <i className="fa-light fa-gem"></i>
              </span>
              {tour.specialFeatures.length} Features
            </div>
          )}
        </div>
        
        <div className="tour-full-border"></div>
        
        {/* Action Buttons */}
        <div className="btn-wrap d-flex align-items-center justify-content-between">
          <div className="tour-btn">
            <Link
              href={`/hotels/${tour._id}`}
              className="bd-text-btn style-two"
            >
              View Details
              <span className="icon__box">
                <i className="fa-regular fa-arrow-right-long icon__first"></i>
                <i className="fa-regular fa-arrow-right-long icon__second"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return isparentClass ? (
    <div className={className}>{renderContent()}</div>
  ) : (
    renderContent()
  );
};

export default TourSingleCardTwo;