const SORT_ORDER = {
  CHEAPEST_FIRST: "PRICE(LOW - HIGH)",
  MOST_EXPENSIVE_FIRST: "PRICE(HIGH - LOW)",
  POPULAR: "POPULAR",
};

export const sortGoods = (data, sorting) => {
  switch (sorting) {
    case SORT_ORDER.MOST_EXPENSIVE_FIRST:
      return [...data].sort((a, b) => b.price - a.price);
    case SORT_ORDER.POPULAR:
      return [...data].sort((a, b) => b.rating - a.rating);
    default:
      return [...data].sort((a, b) => a.price - b.price);
  }
};

export const genericFilter = (arr, filters, type) => {
  if (!filters.length) return arr;
  return arr.filter((item) => filters.includes(item[type]));
};

export const searchFilter = (arr, term) =>
  arr.filter(
    (item) =>
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.description.toLowerCase().includes(term.toLowerCase())
  );

export const compose =
  (...functions) =>
  (data) =>
    functions.reduce((result, f) => f(result), data);
