import styles from "../styles/App.module.css";
import { useCallback, useMemo, useState } from "react";
import Product from "./Product";
import Sortings from "./Sortings";
import SearchField from "./SearchField";
import Filters from "./Filters";
import { generateGoods } from "../utils/generateGoods";
import {
  sortGoods,
  genericFilter,
  searchFilter,
  compose,
} from "../utils/filterFunctions";

const goods = generateGoods(9);

const colors = [...new Set(goods.map((i) => i.color))];
const categories = [...new Set(goods.map((item) => item.category))];

const error = "According to your request Nothing found";

export default function App() {
  const [sortOrder, setSortOrder] = useState("POPULAR");
  const handleChangeSorting = useCallback(
    (sorting) => setSortOrder(() => sorting),
    []
  );

  const [searchTerm, setSearchTerm] = useState("");
  const handleSetSearch = useCallback((value) => {
    setSearchTerm(() => value);
  }, []);

  const [colorFilters, setColorFilters] = useState([]);

  const [categoryFilters, setCategoryFilters] = useState([]);

  const handleSetFilter = useCallback((filter, setFunction) => {
    setFunction((currentFilters) => {
      if (currentFilters.includes(filter))
        return currentFilters.filter((item) => item !== filter);
      else return [...currentFilters, filter];
    });
  }, []);

  const filterByColor = (data) => genericFilter(data, colorFilters, "color");
  const filterByCategory = (data) =>
    genericFilter(data, categoryFilters, "category");
  const applySorting = (data) => sortGoods(data, sortOrder);
  const applySearch = (data) => searchFilter(data, searchTerm);

  const filteredGoods = useMemo(
    () =>
      compose(
        filterByColor,
        filterByCategory,
        applySearch,
        applySorting
      )(goods),
    [colorFilters, categoryFilters, sortOrder, searchTerm]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Sortings sorting={sortOrder} onChange={handleChangeSorting} />
        <SearchField value={searchTerm} onInput={handleSetSearch} />
      </div>
      <div className={styles.body}>
        <nav className={styles.nav}>
          <div className={styles.filters}>
            <div className={styles.filter_title}>COLOR</div>
            <Filters
              filters={colors}
              activeFilters={colorFilters}
              setFunction={setColorFilters}
              onAddFilter={handleSetFilter}
            />
          </div>
          <div className={styles.filters}>
            <div className={styles.filter_title}>CATEGORY</div>
            <Filters
              filters={categories}
              activeFilters={categoryFilters}
              setFunction={setCategoryFilters}
              onAddFilter={handleSetFilter}
            />
          </div>
        </nav>
        <div className={styles.goods}>
          {filteredGoods.map((item) => (
            <Product key={item.id} product={item} />
          ))}
          {!filteredGoods.length && <div className={styles.error}>{error}</div>}
        </div>
      </div>
    </div>
  );
}
