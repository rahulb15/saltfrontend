"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./InstagramSection.module.css";

const InstagramSection = () => {
  return (
    <section className={styles.instagramSection}>
      <h2 className={styles.instagramTitle}>@Saltstayz on Instagram</h2>
      
      <div className={styles.instagramGrid}>
        {/* Instagram Post 1 */}
        <div className={styles.instagramPost}>
          <div className={styles.postHeader}>
            <div className={styles.profileCircle}></div>
            <div className={styles.profileLine}></div>
            <div className={styles.menuIcon}></div>
          </div>
          <div className={styles.postImageContainer}>
            <Image 
              src="/assets/img/insta/insta-2.jpg"
              alt="Woman with flowers"
              width={250}
              height={250}
              className={styles.postImage}
            />
          </div>
          <div className={styles.postActions}>
            <div className={styles.interactionIcons}>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3L9.218 10.083M11.698 20.334L22 3.001H2L9.218 10.084L11.698 20.334Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
            <div className={styles.bookmarkContainer}>
              <button className={styles.bookmarkIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.postCaption}></div>
        </div>

        {/* Instagram Post 2 */}
        <div className={styles.instagramPost}>
          <div className={styles.postHeader}>
            <div className={styles.profileCircle}></div>
            <div className={styles.profileLine}></div>
            <div className={styles.menuIcon}></div>
          </div>
          <div className={styles.postImageContainer}>
            <Image 
              src="/assets/img/insta/insta-2.jpg" 
              alt="Woman with garland"
              width={250}
              height={250}
              className={styles.postImage}
            />
          </div>
          <div className={styles.postActions}>
            <div className={styles.interactionIcons}>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3L9.218 10.083M11.698 20.334L22 3.001H2L9.218 10.084L11.698 20.334Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
            <div className={styles.bookmarkContainer}>
              <button className={styles.bookmarkIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.postCaption}></div>
        </div>

        {/* Instagram Post 3 */}
        <div className={styles.instagramPost}>
          <div className={styles.postHeader}>
            <div className={styles.profileCircle}></div>
            <div className={styles.profileLine}></div>
            <div className={styles.menuIcon}></div>
          </div>
          <div className={styles.postImageContainer}>
            <Image 
              src="/assets/img/insta/insta-3.jpg"
              alt="Couple in yellow"
              width={250}
              height={250}
              className={styles.postImage}
            />
          </div>
          <div className={styles.postActions}>
            <div className={styles.interactionIcons}>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3L9.218 10.083M11.698 20.334L22 3.001H2L9.218 10.084L11.698 20.334Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
            <div className={styles.bookmarkContainer}>
              <button className={styles.bookmarkIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.postCaption}></div>
        </div>

        {/* Instagram Post 4 */}
        <div className={styles.instagramPost}>
          <div className={styles.postHeader}>
            <div className={styles.profileCircle}></div>
            <div className={styles.profileLine}></div>
            <div className={styles.menuIcon}></div>
          </div>
          <div className={styles.postImageContainer}>
            <Image 
              src="/assets/img/insta/insta-4.jpg"
              alt="Hotel room" 
              width={250}
              height={250}
              className={styles.postImage}
            />
          </div>
          <div className={styles.postActions}>
            <div className={styles.interactionIcons}>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3L9.218 10.083M11.698 20.334L22 3.001H2L9.218 10.084L11.698 20.334Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
            <div className={styles.bookmarkContainer}>
              <button className={styles.bookmarkIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.postCaption}></div>
        </div>
      </div>

      <div className={styles.socialLinks}>
        <Link href="https://instagram.com/" className={styles.dmButton}>
          <Image 
            src="/svgs/SVGs (23).svg" 
            alt="Instagram" 
            width={24} 
            height={24} 
          />
          DM us on Instagram
        </Link>
        
        <div className={styles.socialIcons}>
          <button className={styles.socialIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="none" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
          <button className={styles.socialIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="none" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
          <button className={styles.socialIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="1.5"/>
              <path d="M8 12L11 15L16 9" fill="none" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
          <button className={styles.socialIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="none" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
        
        <Link href="https://youtube.com/" className={styles.youtubeButton}>
          <Image 
            src="/svgs/SVGs (24).svg" 
            alt="YouTube" 
            width={24} 
            height={24} 
          />
          Subscribe us on YouTube
        </Link>
      </div>
    </section>
  );
};

export default InstagramSection;