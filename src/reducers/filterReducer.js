import { useReducer } from "react";
import { useParams } from "react-router-dom";
import { subcategories } from "../FakeData/data";

const useFilterReducer = () => {
  const params = useParams();
  const categorySlug = params.categorySlug;
  const subcats = subcategories.filter(
    (subcat) => subcat.belongsToCatSlug === categorySlug
  );
  let initialSubcatFilter = {};
  for (let { subcategorySlug } of subcats) {
    initialSubcatFilter[subcategorySlug] = false;
  }

  const filterReducer = (filterState, filterAction) => {
    switch (filterAction.type) {
      case "SORT_BY":
        return { ...filterState, sortBy: filterAction.payload };
      case "TOGGLE_AVAIL_FILTER":
        return {
          ...filterState,
          includeOutOfStock: !filterState.includeOutOfStock,
        };
      case "DISCOUNT_FILTER":
        return {
          ...filterState,
          discFilter: filterAction.payload,
        };
      case "SUBCAT_FILTER":
        console.log(
          "got into subcat filter,prev filter state and payload sent is"
        );
        console.log(filterState.subcatFilter);
        console.log(filterAction.payload);
        return {
          ...filterState,
          subcatFilter: {
            ...filterState.subcatFilter,
            ...filterAction.payload,
          },
        };
      case "CLEAR_ALL":
        return {
          sortBy: null,
          subcatFilter: initialSubcatFilter,
          includeOutOfStock: false,
          discFilter: null,
        };
      default:
        return filterState;
    }
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: null,
    subcatFilter: initialSubcatFilter,
    includeOutOfStock: false,
    discFilter: null,
  });
  return [filterState, filterDispatch];
};

export default useFilterReducer;
