import React from 'react';
import { format } from 'date-fns';
import { Calendar, ArrowRight } from 'lucide-react';

const ExpandedDetails = ({ bookingData, nights }:any) => {
  const checkIn = new Date(bookingData[0]?.checkIn);
  const checkOut = new Date(bookingData[0]?.checkOut);

  const styles = {
    container: {
      padding: '16px',
      background: 'linear-gradient(to right, rgb(235 255 230), rgb(230 255 238))',
      borderRadius: '8px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: '12px',
      borderRadius: '8px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    },
    dateInfo: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      color: '#3b82f6',
      marginRight: '8px',
    },
    textXs: {
      fontSize: '12px',
      color: '#6b7280',
    },
    textSm: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
    },
    textGray: {
      color: '#9ca3af',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '8px',
      fontSize: '12px',
      color: '#6b7280',
    },
  };

  return (
    <>
      <style jsx>{`
        .arrow-icon {
          color: #d1d5db;
        }
      `}</style>
      <div style={styles.container}>
        <div style={styles.header}>
          <h3 style={{ ...styles.textSm, fontWeight: '600' }}>Booking Details</h3>
          <span style={styles.textXs}>{nights} night{nights > 1 ? 's' : ''}</span>
        </div>
        <div style={styles.card}>
          <div style={styles.dateInfo}>
            <Calendar style={styles.icon} size={16} />
            <div>
              <p style={styles.textXs}>Check-in</p>
              <p style={styles.textSm}>{format(checkIn, 'EEE, MMM d')}</p>
              <p style={{ ...styles.textXs, ...styles.textGray }}>From 2:00 PM</p>
            </div>
          </div>
          <ArrowRight className="arrow-icon" size={16} />
          <div style={styles.dateInfo}>
            <Calendar style={styles.icon} size={16} />
            <div>
              <p style={styles.textXs}>Check-out</p>
              <p style={styles.textSm}>{format(checkOut, 'EEE, MMM d')}</p>
              <p style={{ ...styles.textXs, ...styles.textGray }}>Before 12:00 PM</p>
            </div>
          </div>
        </div>
        <div style={styles.footer}>
          <span>Total stay: {nights} night{nights > 1 ? 's' : ''}</span>
          <span>{format(checkIn, 'yyyy')} - {format(checkOut, 'yyyy')}</span>
        </div>
      </div>
    </>
  );
};

export default ExpandedDetails;