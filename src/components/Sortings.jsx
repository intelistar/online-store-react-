import React from "react";
import styles from "../styles/Sortings.module.css";

const sortings = ["PRICE(HIGH - LOW)", "PRICE(LOW - HIGH)", "POPULAR"];

const Sortings = ({ sorting, onChange }) => {

  const SORTS={
    expensive:{
      name:"PRICE(HIGH - LOW)",
      fn:(a, b) => b.price - a.price,
    },
    cheap:{
      name:"PRICE(LOW - HIGH)",
      fn:(a, b) => a.price - b.price,
    },
    popular:{
      name: "POPULAR",
      fn:(a, b) => b.rating - a.rating,
    },
  }

  return (
    <div className={styles.wrapper}>
      {sortings.map((sortOrder, index) => (
        <div key={sortOrder}>
          <label
            htmlFor={index}
            className={`${styles.text}
        ${sorting === sortOrder ? styles.checked : " "}`}
          >
            {sortOrder}
          </label>
          <input
            type="radio"
            name="sortings"
            value={sortOrder}
            id={index}
            checked={sorting === sortOrder}
            onChange={(e) => onChange(e.target.value)}
            className={styles.radio}
          />
        </div>
      ))}
    </div>
  );
};
export default React.memo(Sortings);
