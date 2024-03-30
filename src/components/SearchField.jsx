import React from "react";
import styles from "../styles/SearchField.module.css";

const SearchField = ({ value, onInput }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={value}
        onChange={(e) => onInput(e.target.value)}
        className={styles.input}
        placeholder="search"
      />
    </div>
  );
};

export default React.memo(SearchField);
