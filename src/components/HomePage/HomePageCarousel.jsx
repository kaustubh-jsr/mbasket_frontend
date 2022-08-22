import React, { useEffect, useState } from "react";
import { Carousel, Placeholder } from "react-bootstrap";
import { getCarouselsApi } from "../../apis";
import "./HomePageCarousel.css";

export const HomePageCarousel = () => {
  const [carousels, setCarousels] = useState([]);
  const [loading, setLoading] = useState(true);

  const onGetCarousels = async () => {
    const resp = await getCarouselsApi();
    setCarousels(resp);
    setLoading(false);
  };

  useEffect(() => {
    onGetCarousels();
  }, []);
  return (
    <Carousel variant="dark">
      {loading ? (
        <Carousel.Item key="placeholder">
          <Placeholder as={"p"} animation="wave">
            <Placeholder
              xs={12}
              className="carousel-placeholder d-block w-100 img-responsive"
            />
          </Placeholder>
        </Carousel.Item>
      ) : (
        carousels.map((carousel) => (
          <Carousel.Item key={carousel.carousel_image}>
            <img
              className="d-block w-100 img-responsive"
              src={carousel.carousel_image}
              alt={carousel.carousel_image_name}
            />
          </Carousel.Item>
        ))
      )}
    </Carousel>
  );
};
