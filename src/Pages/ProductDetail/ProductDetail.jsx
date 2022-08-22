import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getItemDetailApi } from "../../apis";
import ProductDescription from "../../components/ProductDetail/ProductDescription";
import ProductDetailContainer from "../../components/ProductDetail/ProductDetailContainer";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { itemSlug } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState();
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    getItemDetailApi(itemSlug, setItem, setPageLoading, navigate);
  }, [itemSlug, navigate]);

  return (
    <div className="product-page-container">
      {!pageLoading ? (
        item.isAvailable ? (
          <>
            <ProductDetailContainer item={item} />
            <ProductDescription item={item} />
          </>
        ) : (
          <Navigate to="/" state={{ replace: true }} />
        )
      ) : (
        "Loading ..."
      )}
    </div>
  );
};

export default ProductDetail;
