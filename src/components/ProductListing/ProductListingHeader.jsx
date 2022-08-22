import React from "react";
import { Placeholder } from "react-bootstrap";
function ProductListingHeader({ category, itemsLoading }) {
  return itemsLoading ? (
    <div className="category-page-header">
      <Placeholder as={"h2"} animation="wave">
        <Placeholder
          xs={12}
          className="category-page-header-text primary-text h2"
        />
      </Placeholder>
      <div className="category-page-img-placeholder">
        <Placeholder as={"div"} animation="wave">
          <Placeholder
            xs={12}
            className="carousel-placeholder d-block w-100 img-responsive"
          />
        </Placeholder>
      </div>
    </div>
  ) : (
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
