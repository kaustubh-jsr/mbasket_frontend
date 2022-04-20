import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../FakeData/data";

function ProductListingHeader() {
  const params = useParams();
  const categorySlug = params.categorySlug;
  const category = categories.find((cat) => cat.categorySlug === categorySlug);

  return (
    <div className="category-page-header">
      <div className="category-page-header-text h2">{category.name}</div>
      {category.headerImg && (
        <div className="category-page-img">
          <img
            className="img-responsive"
            src={category.headerImg}
            alt={category.categorySlug}
          />
        </div>
      )}
    </div>
  );
}

export default ProductListingHeader;
