import React from 'react';
import { MapPin, Navigation, Car, Train, ParkingCircle } from 'lucide-react';
import styles from './HotelLocation.module.css';

const HotelLocationArea = ({ hotelData }:any) => {
  const { address } = hotelData;

  // Create embed URL for the map
  const getMapUrl = () => {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d${address.coordinates.longitude}!3d${address.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2s${encodeURIComponent(
      `${address.city}, ${address.state}, ${address.country}`
    )}!5e0!3m2!1sen!2sus!4v1694575134270!5m2!1sen!2sus`;
  };

  // Create Google Maps directions URL
  const getDirectionsUrl = () => {
    const { coordinates } = address;
    return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.latitude},${coordinates.longitude}`;
  };

  // Nearby attractions data
  const attractions = [
    { number: 1, name: 'City Center', duration: '10 minutes drive' },
    { number: 2, name: 'Shopping Mall', duration: '15 minutes drive' },
    { number: 3, name: 'Metro Station', duration: '5 minutes walk' }
  ];

  // Transportation options data
  const transportOptions = [
    {
      icon: <Car className={styles.icon} />,
      title: 'From Airport',
      details: ['45 minutes by taxi', 'Available 24/7']
    },
    {
      icon: <Train className={styles.icon} />,
      title: 'Public Transport',
      details: ['Metro and bus stations nearby', 'Regular service throughout day']
    },
    {
      icon: <ParkingCircle className={styles.icon} />,
      title: 'Parking',
      details: ['Free on-site parking', 'Valet service available']
    }
  ];

  return (
    <div className={styles.locationContainer}>
      {/* Map Section */}
      <div className={styles.mapWrapper}>
        <iframe
          className={styles.mapFrame}
          src={getMapUrl()}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hotel Location"
        />
      </div>

      {/* Info Cards Section */}
      <div className={styles.infoGrid}>
        {/* Address Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <MapPin className={styles.icon} />
            <h3 className={styles.cardTitle}>Address</h3>
          </div>
          <div className={styles.addressContent}>
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.zipCode}</p>
            <p>{address.country}</p>
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsButton}
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </div>
        </div>

        {/* Nearby Attractions Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Nearby Attractions</h3>
          </div>
          <ul className={styles.attractionsList}>
            {attractions.map((attraction) => (
              <li key={attraction.number} className={styles.attractionItem}>
                <div className={styles.attractionNumber}>
                  {attraction.number}
                </div>
                <div className={styles.attractionInfo}>
                  <h4>{attraction.name}</h4>
                  <p>{attraction.duration}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Transportation Section */}
      <div className={styles.transportSection}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Transportation Options</h3>
        </div>
        <div className={styles.transportGrid}>
          {transportOptions.map((option, index) => (
            <div key={index} className={styles.transportCard}>
              <h4>
                {option.icon}
                {option.title}
              </h4>
              {option.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelLocationArea;