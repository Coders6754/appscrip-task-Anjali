"use client";

import { useEffect, useState } from "react";
import styles from "../styles/FilterSwitcher.module.css";

export default function FilterSwitcher({ onToggle, isVisible }) {
  const mobileBreakpoint = 768;
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= mobileBreakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.containerBox}>
      <div className={styles.totalProducts}>
        <span className={styles.productText}>3425 ITEMS</span>
      </div>
      <div className={styles.toggleContainer}>
        <div>
          <span className={styles.iconDisplay}>
            {isVisible ? '<' : '>'}
          </span>
        </div>

        <button
          onClick={onToggle}
          className={styles.toggleButton}
        >
          {isMobileView ? 'OPTIONS' : (isVisible ? 'HIDE FILTER' : 'SHOW FILTER')}
        </button>
      </div>
    </div>
  );
}
