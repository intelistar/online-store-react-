import React from "react";
import styles from "../styles/Filters.module.css";

const Filters = ({ filters, activeFilters, setFunction, onAddFilter }) => {
  return (
    <div className={styles.wrapper}>
      {filters.map((item) => (
        <div key={item} className={styles.item}>
          <input
            type="checkbox"
            id={item}
            checked={activeFilters.includes(item)}
            onChange={(e) => onAddFilter(e.target.id, setFunction)}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Filters);
