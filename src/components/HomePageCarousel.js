import React from "react";
import { Carousel } from "react-bootstrap";

export const HomePageCarousel = ({ carousels }) => {
  return (
    <Carousel variant="dark">
      {carousels.map((carousel) => (
        <Carousel.Item key={carousel.image}>
          <img
            className="d-block w-100 img-responsive"
            src={carousel.image}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
