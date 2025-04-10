"use client";

import { useState } from "react";
import styles from "../styles/SortSelector.module.css";

export default function SortSelector({ selectedSort, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const sortingChoices = [
    { label: "Recommended", value: "recommended" },
    { label: "Newest First", value: "newest" },
    { label: "Popular", value: "popular" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Price: Low to High", value: "price_asc" },
  ];

  const currentSortLabel = sortingChoices.find(
    (opt) => opt.value === selectedSort
  )?.label || "Recommended";

  return (
    <div className={styles.dropdownWrapper}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={styles.sortButton}
      >
        <span>{currentSortLabel.toUpperCase()}</span>
        <svg
          className={`${styles.arrowIcon} ${menuOpen ? styles.arrowRotated : ""
            }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {menuOpen && (
        <div className={styles.menuWrapper}>
          <ul className={styles.optionsList}>
            {sortingChoices.map((option) => (
              <li
                key={option.value}
                className={`${styles.optionItem} ${selectedSort === option.value ? styles.optionSelected : ""
                  }`}
                onClick={() => {
                  onChange(option.value);
                  setMenuOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
