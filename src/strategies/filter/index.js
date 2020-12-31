import { similarity } from '@utils/strings';

const queryText = (text, products, unFilteredProducts) => {
  if (text && text.length > 0) {
    return products?.filter((product) => similarity(product.name, text) > 0.8);
  }
  return unFilteredProducts;
};

const sortStrategies = {
  price_from_highest_to_lowest: (products) =>
    products.sort((a, b) => b.price - a.price),
  price_from_lowest_to_highest: (products) =>
    products.sort((a, b) => a.price - b.price)
};
const sort = (value, products) => {
  if (value && value.length > 0) {
    return sortStrategies[value](products).slice();
  }
  return products;
};

const strategies = {
  queryText,
  sort
};

const filterStrategy = (filters, products, unFilteredProducts) => {
  let filteredProducts = products;
  if (filters.queryText || filters.sort) {
    Object.keys(filters).forEach((filterKey) => {
      const filterValue = filters[filterKey];
      const result = strategies[filterKey](
        filterValue,
        filteredProducts,
        unFilteredProducts
      );
      filteredProducts =
        result && result.length > 0 ? result : unFilteredProducts;
    });
  } else {
    filteredProducts = unFilteredProducts;
  }
  return filteredProducts;
};

export default filterStrategy;
