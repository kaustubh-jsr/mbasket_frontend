import React from "react";
import { Placeholder } from "react-bootstrap";

export default function PlaceholderProductCardVertical() {
  return (
    <div className="card product-card-vertical">
      <div className="card-basic--image">
        <Placeholder as={"div"} animation="wave">
          <Placeholder
            className="placeholder-vertical-card-img card-basic--img-tag img-responsive"
            xs={12}
          />
        </Placeholder>
      </div>
      <div className="card--details">
        <header className="card--header">
          <Placeholder as={"h1"} animation="wave">
            <Placeholder xs={6} className="card--heading" />
          </Placeholder>
          <Placeholder as={"p"} animation="wave">
            <Placeholder xs={12} className="card--subheading" />
          </Placeholder>
          <div className="card--heading">
            <Placeholder as={"p"} animation="wave">
              <Placeholder xs={3} className="strikethrough grey-text" />
              {"   "}
              <Placeholder xs={7} className="discount-text primary-text" />
            </Placeholder>
          </div>
        </header>
        <div className="card--links">
          <Placeholder.Button xs={5} variant="primary" />
          <Placeholder.Button xs={5} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
