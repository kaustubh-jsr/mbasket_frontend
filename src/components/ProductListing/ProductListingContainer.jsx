import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { items, categories, subcategories } from "../../FakeData/data";
import useFilterReducer from "../../reducers/filterReducer";
import {
  getDiscountFilteredData,
  getSortedData,
  getStockFilteredData,
  getSubcatFilteredData,
} from "../../utilities";
import Filters from "./Filters";
import Products from "./Products";
import "./ProductListingContainer.css";

function ProductListingContainer() {
  const params = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  const categorySlug = params.categorySlug;
  const category = categories.find(
    (category) => category.categorySlug === categorySlug
  );
  const subcats = subcategories.filter(
    (subcat) => subcat.belongsToCatSlug === category.categorySlug
  );

  const [filterState, filterDispatch] = useFilterReducer();

  const stockFilteredData = getStockFilteredData(items, filterState);
  const discountFilteredData = getDiscountFilteredData(
    stockFilteredData,
    filterState
  );
  const subcatFilteredData = getSubcatFilteredData(
    discountFilteredData,
    filterState
  );
  const sortedData = getSortedData(subcatFilteredData, filterState);

  return (
    <div className="product-listing-container">
      {subcats.length ? (
        <>
          <Filters
            subcats={subcats}
            filterState={filterState}
            filterDispatch={filterDispatch}
          />
          <Products items={sortedData} categorySlug={categorySlug} />
        </>
      ) : (
        <div className="products-coming-soon">
          <h4>
            Products coming soon, meanwhile checkout the Fruits and Vegetables
            and Snacks categories.
          </h4>
          <img
            src="https://i.postimg.cc/QCyRCRcd/website-launching-coming-soon-2112253-1782224.png"
            alt=""
            srcset=""
            className="img-responsive"
          />
        </div>
      )}
    </div>
  );
}

export default ProductListingContainer;
