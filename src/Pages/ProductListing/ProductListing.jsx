import React from "react";
import ProductListingContainer from "../../components/ProductListing/ProductListingContainer";
import ProductListingHeader from "../../components/ProductListing/ProductListingHeader";
import "./ProductListing.css";

function ProductListing() {
  return (
    <>
      <ProductListingHeader />
      <ProductListingContainer />
    </>
  );
}

export default ProductListing;
