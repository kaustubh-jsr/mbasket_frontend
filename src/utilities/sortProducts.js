const getSortedData = (items, filterState) => {
  let productList = [...items];
  if (filterState.sortBy === null) {
    return productList;
  }
  if (filterState.sortBy === "priceLowToHigh") {
    productList.sort(
      (a, b) => a.discountedSellingPrice - b.discountedSellingPrice
    );
  } else if (filterState.sortBy === "priceHighToLow") {
    productList.sort(
      (a, b) => b.discountedSellingPrice - a.discountedSellingPrice
    );
  } else if (filterState.sortBy === "discHighToLow") {
    productList.sort((a, b) => b.discountPercent - a.discountPercent);
  }
  return productList;
};

export default getSortedData;
