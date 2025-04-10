"use client";

import { useState } from 'react';
import ProductGrid from "./ProductGallery";
import SortDropdown from "./SortSelector";
import FilterSidebar from "./SidePanel";
import styles from "../styles/Page.module.css";
import FilterToggle from "./FilterSwitcher";

export default function ProductCatalog({ products }) {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState("recommended");

  const togglePanel = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  return (
    <section className={styles.catalogWrap}>
      {/* ... */}
      <div className={styles.topToolbar}>
        <FilterToggle onToggle={togglePanel} isVisible={isPanelVisible} />
        <div className={styles.spacerLine}></div>
        <div className={styles.sortSection}>
          <SortDropdown selectedSort={selectedSort} onChange={setSelectedSort} />
        </div>
      </div>

      <div className={styles.mainLayout}>
        <FilterSidebar isVisible={isPanelVisible} />
        <ProductGrid
          isFilterVisible={isPanelVisible}
          products={products || []}
          sortMethod={selectedSort}
        />
      </div>
    </section>
  );
}
