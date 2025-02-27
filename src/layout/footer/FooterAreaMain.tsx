"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./FooterArea.module.css";

const FooterArea = () => {
  return (
    <footer className={styles.footerArea}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <div className={styles.logoWrapper}>
              <h2 className={styles.logoText}>
                <img src="/assets/logo/Logo_White.webp" alt="Saltstayz Logo" />
              </h2>
            </div>
            <p className={styles.brandDescription}>
              SALTSTAYZ offers elegant, versatile spaces for
              social, corporate, and wedding events, from
              intimate gatherings to grand celebrations.
            </p>
          </div>

          <div className={styles.footerColumns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Explore</h3>
              <ul className={styles.footerLinks}>
                <li><Link href="/business">Business</Link></li>
                <li><Link href="/family">Family</Link></li>
                <li><Link href="/leisure">Leisure</Link></li>
                <li><Link href="/premier">Premier</Link></li>
                <li><Link href="/select">Select</Link></li>
                <li><Link href="/staycation">Staycation</Link></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Important Links</h3>
              <ul className={styles.footerLinks}>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/career">Career</Link></li>
                <li><Link href="/loyalty">Loyalty Program</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
              </ul>
            </div>

            {/* <div className={styles.luggageIcon}> */}
              <Image 
                src="/svgs/SVGs (7).svg" 
                alt="Luggage icon"
                width={160}
                height={150}
                priority
              />
            {/* </div> */}
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p>©2025 Saltstayz</p>
          </div>
          <div className={styles.policyLinks}>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/cancellation">Cancellation Policy</Link>
            <Link href="/privacy-cookie">Privacy & Cookie Policy</Link>
            <span className={styles.companyName}>Imperativ Hospitality Pvt Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArea;