const getDiscountFilteredData = (productList, filterState) => {
  return productList.filter((item) => {
    if (filterState.discFilter === "discFiftyPlus") {
      return item.discountPercent >= 50;
    } else if (filterState.discFilter === "discFortyPlus") {
      return item.discountPercent >= 40;
    } else if (filterState.discFilter === "discThirtyPlus") {
      return item.discountPercent >= 30;
    } else if (filterState.discFilter === "discTwentyPlus") {
      return item.discountPercent >= 20;
    } else if (filterState.discFilter === "discTenPlus") {
      return item.discountPercent >= 10;
    } else if (filterState.discFilter === "discTenMinus") {
      return item.discountPercent <= 10;
    }
    return true;
  });
};

export default getDiscountFilteredData;
