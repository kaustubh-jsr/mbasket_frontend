import React from "react";
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

function ProductListingContainer({
  category,
  subcategories,
  items,
  itemsLoading,
}) {
  // const params = useParams();
  // // const [searchParams, setSearchParams] = useSearchParams();
  // // store items from api in state,the items are recieved as props to this component.
  // const categorySlug = params.categorySlug;
  // const category = categories.find(
  //   (category) => category.categorySlug === categorySlug
  // );
  // const subcats = subcategories.filter(
  //   (subcat) => subcat.belongsToCatSlug === category.categorySlug
  // );
  // lines 20 to 25 are not needed since both category and the subcats are coming filtered from backend
  const categorySlug = category.categorySlug;
  const subcats = subcategories;

  const [filterState, filterDispatch] = useFilterReducer({ subcats });

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
    <div
      className={
        itemsLoading
          ? "placeholder-product-listing"
          : "product-listing-container"
      }
    >
      {itemsLoading ? (
        <>
          {subcats.length ? (
            <Filters
              subcats={subcats}
              filterState={filterState}
              filterDispatch={filterDispatch}
              items={items}
            />
          ) : (
            ""
          )}
          <Products
            items={sortedData}
            categorySlug={categorySlug}
            itemsLoading={itemsLoading}
          />
        </>
      ) : !itemsLoading && !subcats.length ? (
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
      ) : (
        <>
          <Filters
            subcats={subcats}
            filterState={filterState}
            filterDispatch={filterDispatch}
            items={items}
          />
          <Products
            items={sortedData}
            categorySlug={categorySlug}
            itemsLoading={itemsLoading}
          />
        </>
      )}
    </div>
  );
}

export default ProductListingContainer;
