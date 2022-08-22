import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductListingContainer from "../../components/ProductListing/ProductListingContainer";
import ProductListingHeader from "../../components/ProductListing/ProductListingHeader";
import { getCategoryItemsApi } from "../../apis";
import "./ProductListing.css";

function ProductListing() {
  const params = useParams();
  const categorySlug = params.categorySlug;
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [itemsLoading, setItemsLoading] = useState(true);

  const getCategoryItems = async (categorySlug) => {
    const resp = await getCategoryItemsApi(categorySlug);
    setCategory(resp.category);
    setSubcategories(resp.subcategories);
    setItems(resp.items);
    setItemsLoading(false);
  };

  useEffect(() => {
    getCategoryItems(categorySlug);
  }, [categorySlug]);

  return (
    <>
      <ProductListingHeader category={category} itemsLoading={itemsLoading} />
      <ProductListingContainer
        category={category}
        subcategories={subcategories}
        items={items}
        itemsLoading={itemsLoading}
      />
    </>
  );
}

export default ProductListing;
