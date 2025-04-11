"use client"

import React, { useEffect, useState } from 'react';
import styles from "../styles/SiteFooter.module.css"
import gpayIcon from '../assets/google_pay.png';
import mastercardIcon from '../assets/card.png';
import paypalIcon from '../assets/paypal.png';
import amexIcon from '../assets/amex.png';
import applePayIcon from '../assets/pay.png';
import instagramIcon from '../assets/instagram_logo.png';
import linkedinIcon from '../assets/linkedin.png';
import UsaFlag from '../assets/usa.png';
import Arrow from '../assets/arrow-right.png';
import Image from 'next/image';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isResponsiveMobile, setIsResponsiveMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const screenWidthThreshold = 768;

  useEffect(() => {
    setIsMounted(true);
    const detectScreenSize = () => setIsResponsiveMobile(window.innerWidth <= screenWidthThreshold);
    detectScreenSize();
    window.addEventListener('resize', detectScreenSize);
    return () => window.removeEventListener('resize', detectScreenSize);
  }, []);


  const handleDropdownToggle = (sectionId) => {
    if (!isResponsiveMobile) return;
    setActiveDropdown(activeDropdown === sectionId ? null : sectionId);
  };

  const submitNewsletter = (e) => {
    e.preventDefault();
    console.log('Newsletter email submitted:', newsletterEmail);
    setNewsletterEmail('');
  };

  // Only render content after client-side hydration
  if (!isMounted) {
    return <footer className={styles.footerWrapper}></footer>;
  }

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.topRow}>
        <div className={styles.newsletterBox}>
          <h3 className={styles.heading}>BE THE FIRST TO KNOW</h3>
          <p className={styles.newsText}>Sign up for updates from mettā muse.</p>
          <form className={styles.formLayout} onSubmit={submitNewsletter}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.emailField}
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitButton}>
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className={styles.reachOutBox}>
          <div className={styles.phoneEmailBlock}>
            <h3 className={styles.heading}>CONTACT US</h3>
            <p className={styles.contactLine}>+44 221 133 5360</p>
            <p className={styles.contactLine}>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currencyBox}>
            <h3 className={styles.heading}>CURRENCY</h3>
            <div className={styles.flagCurrency}>
              <Image src={UsaFlag} alt="USA Flag" />
              <span className={styles.codeText}>USD</span>
            </div>
            <p className={styles.currencyTip}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>

      <div className={styles.horizontalRule}></div>

      <div className={styles.linkSections}>
        <div className={styles.brandBlock}>
          <h2 className={styles.brandHeader} onClick={() => handleDropdownToggle('brand')}>
            <p>mettā muse</p>
            <Image alt="arrow" src={Arrow}
              className={`${styles.dropdownArrow} ${activeDropdown === 'brand' ? styles.flippedArrow : ''}`} />
          </h2>
          {(isResponsiveMobile ? activeDropdown === 'brand' : true) && (
            <ul className={styles.navList}>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Stories</a></li>
              <li><a href="/">Artisans</a></li>
              <li><a href="/">Boutiques</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">EU Compliances Docs</a></li>
            </ul>
          )}
        </div>

        <div className={styles.linkBlock}>
          <h3 className={styles.heading} onClick={() => handleDropdownToggle('quicklinks')}>
            <p>QUICK LINKS</p>
            <Image alt="arrow" src={Arrow}
              className={`${styles.dropdownArrow} ${activeDropdown === 'quicklinks' ? styles.flippedArrow : ''}`} />
          </h3>
          {(isResponsiveMobile ? activeDropdown === 'quicklinks' : true) && (
            <ul className={styles.navList}>
              <li><a href="/">Orders & Shipping</a></li>
              <li><a href="/">Join/Login as a Seller</a></li>
              <li><a href="/">Payment & Pricing</a></li>
              <li><a href="/">Return & Refunds</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
            </ul>
          )}
        </div>

        <div className={styles.socialBlock}>
          <h3 className={styles.heading} onClick={() => handleDropdownToggle('social')}>
            <p>FOLLOW US</p>
            <Image alt="arrow" src={Arrow}
              className={`${styles.dropdownArrow} ${activeDropdown === 'social' ? styles.flippedArrow : ''}`} />
          </h3>
          {(isResponsiveMobile ? activeDropdown === 'social' : true) && (
            <div>
              <div className={styles.iconRow}>
                <a href="/" className={styles.iconLink}>
                  <Image width={40} height={40} src={instagramIcon} alt="Instagram" />
                </a>
                <a href="/" className={styles.iconLink}>
                  <Image width={40} height={40} src={linkedinIcon} alt="LinkedIn" />
                </a>
              </div>

              <div className={styles.paymentBlock}>
                <h3 className={styles.heading}>mettā muse ACCEPTS</h3>
                <div className={styles.paymentRow}>
                  <Image width={51} height={30} src={gpayIcon} alt="Google Pay" />
                  <Image width={51} height={30} src={mastercardIcon} alt="Mastercard" />
                  <Image width={51} height={30} src={paypalIcon} alt="PayPal" />
                  <Image width={51} height={30} src={amexIcon} alt="American Express" />
                  <Image width={51} height={30} src={applePayIcon} alt="Apple Pay" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.footerNote}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};
