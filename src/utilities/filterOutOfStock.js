const getStockFilteredData = (productList, filterState) => {
  return productList.filter(({ isAvailable }) =>
    filterState.includeOutOfStock ? true : isAvailable
  );
};

export default getStockFilteredData;
