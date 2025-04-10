// components/ProductGallery.js
"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "../styles/ProductGallery.module.css";

export default function ProductGallery({ products = [], isFilterVisible, sortMethod }) {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortMethod) {
      case "price_asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price_desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "popular":
        return sorted.sort((a, b) => b.rating?.rate - a.rating?.rate);
      case "newest":
        return sorted.reverse(); // assuming last = newest
      default:
        return sorted;
    }
  }, [products, sortMethod]);

  if (!sortedProducts || sortedProducts.length === 0) {
    return (
      <div className={styles.emptyResultBox}>
        <p>No products found. Please try a different filter or check back later.</p>
      </div>
    );
  }

  return (
    <div className={isFilterVisible ? styles.gridWithSidebarAlt : styles.gridWithoutSidebarAlt}>
      {sortedProducts.map((item) => (
        <div key={item.id} className={styles.productTile} style={{ backgroundColor: item.backgroundColor || "#fff" }}>
          <div className={styles.imageWrap}>
            <div className={styles.imageContainer}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className={styles.productImage}
                  priority={item.id <= 8}
                />
              ) : (
                <div className={styles.imageFallback}>
                  <span>{item.title.charAt(0)}</span>
                </div>
              )}
            </div>
            {item.onSale && <div className={styles.saleFlag}>SALE</div>}
          </div>

          <h2 className={styles.productName}>{item.title}</h2>

          <div className={styles.metaSection}>
            <p className={styles.signInPrompt}>
              <span className={styles.signInLink}>Sign in </span>
              or Create an account to see pricing
            </p>
          </div>

          <button
            className={`${styles.heartIcon} ${likedItems[item.id] ? styles.active : ""}`}
            onClick={() => toggleLike(item.id)}
            aria-label="Toggle wishlist"
          >
            {likedItems[item.id] ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </div>
      ))}
    </div>
  );
}
