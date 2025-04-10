"use client";

import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styles from '../styles/SidePanel.module.css';

export default function SidePanel({ isVisible }) {
  const filterConfig = [
    { id: 'adjustableFilter', label: 'CUSTOMIZABLE', type: 'checkbox' },
    { id: 'targetGroup', label: 'IDEAL FOR', options: ['All'] },
    { id: 'eventType', label: 'OCCASION', options: ['All'] },
    { id: 'professionType', label: 'WORK', options: ['All'] },
    { id: 'textileType', label: 'FABRIC', options: ['All'] },
    { id: 'productClass', label: 'SEGMENT', options: ['All'] },
    { id: 'fitType', label: 'SUITABLE FOR', options: ['All'] },
    { id: 'elementList', label: 'RAW MATERIALS', options: ['All'] },
    { id: 'styleType', label: 'PATTERN', options: ['All'] },
  ];

  const [activePanels, setActivePanels] = useState({});

  const togglePanel = (key) => {
    setActivePanels((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <aside className={`${styles.panelShell} ${!isVisible ? styles.panelHidden : ''}`}>
      {filterConfig.map((filterItem) => (
        <div key={filterItem.id} className={styles.filterBlock}>
          {filterItem.type === 'checkbox' ? (
            <div className={styles.checkRow}>
              <input
                type="checkbox"
                id={filterItem.id}
                className={styles.checkBox}
              />
              <label htmlFor={filterItem.id}>{filterItem.label}</label>
            </div>
          ) : (
            <>
              <div
                className={styles.filterTitle}
                onClick={() => togglePanel(filterItem.id)}
              >
                <span>{filterItem.label}</span>
                <span className={styles.iconWrap}>
                  {activePanels[filterItem.id] ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              </div>
              <div
                className={`${styles.optionList} ${
                  activePanels[filterItem.id] ? styles.visibleOptions : ''
                }`}
              >
                {filterItem.options.map((option, idx) => (
                  <div key={idx} className={styles.optionEntry}>
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </aside>
  );
}
