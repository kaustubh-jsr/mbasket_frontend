import React from "react";
import { useState, useEffect } from "react";
import { getFeaturedCategoriesApi } from "../apis";
import { HomePageCarousel } from "../components/HomePage/HomePageCarousel";
import { ShopByCategory } from "../components/HomePage/ShopByCategory";
import { FeaturedCategory } from "../components/HomePage/FeaturedCategory";

export const Home = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const getFeaturedCategories = async () => {
    const resp = await getFeaturedCategoriesApi();
    setFeaturedCategories(resp);
  };

  useEffect(() => {
    getFeaturedCategories();
  }, []);
  return (
    <>
      <HomePageCarousel />
      <ShopByCategory />
      {featuredCategories.map((category) => (
        <FeaturedCategory
          key={category.homeCatHeader}
          homeCatHeader={category.homeCatHeader}
          items={category.items}
        />
      ))}
    </>
  );
};
