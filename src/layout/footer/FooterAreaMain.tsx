"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./FooterArea.module.css";

const FooterArea = () => {
  return (
    <footer className={`ss-footer ${styles.footerArea}`}>
      <div className="container">
        <div className={`top-footer ${styles.topSection}`}>
          <div className={`leftside-footer 7${styles.brandSection}`}>
            <div className={styles.logoWrapper}>
              <h2 className={styles.logoText}>
                <img src="/index/footer-logo.svg" alt="Saltstayz Logo" width={380} height={120} className="ms-md-5 ms-0"/>
              </h2>
            </div>
            <p className={styles.brandDescription}>
              SALTSTAYZ offers elegant, versatile spaces for
              social, corporate, and wedding events, from
              intimate gatherings to grand celebrations.
            </p>
          </div>

          <div className={`rightside-footer ${styles.footerColumns}`}>
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
            <div className="luggage-icon">
                  <img src="/index/trollybag-white.png" alt="" className="vec-lines" />

                </div>
            {/* </div> */}
          </div>
        </div>

        <div className={`divider ${styles.divider}`}></div>

        <div className={`${styles.bottomSection} footer-bottom`}>
          
          <div className={`policy ${styles.policyLinks}`}>
          <p className="m-0">©2025 Saltstayz</p>
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