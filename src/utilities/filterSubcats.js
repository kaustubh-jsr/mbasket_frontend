const getSubcatFilteredData = (productList, filterState) => {
  let filterBooleans = Object.values(filterState.subcatFilter);
  if (filterBooleans.some((filterVal) => filterVal)) {
    let newProductList = [];
    for (let subcat in filterState.subcatFilter) {
      if (filterState.subcatFilter[subcat]) {
        newProductList.push(
          ...productList.filter((item) => item.subcategorySlug === subcat)
        );
      }
    }
    return newProductList;
  }
  return productList;
};

export default getSubcatFilteredData;
