import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { items, categories, subcategories } from "../../FakeData/data";
import { ProductCardVertical } from "../ProductCardVertical";
import Filters from "./Filters";
import Products from "./Products";

function ProductListingContainer() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const categorySlug = params.categorySlug;
  const category = categories.find(
    (category) => category.categorySlug === categorySlug
  );
  const subcats = subcategories.filter(
    (subcat) => subcat.belongsToCatSlug === category.categorySlug
  );

  return (
    <div className="product-listing-container">
      <Filters subcats={subcats} setSearchParams={setSearchParams} />
      <Products
        items={items}
        searchParams={searchParams}
        categorySlug={categorySlug}
      />
    </div>
  );
}

export default ProductListingContainer;
