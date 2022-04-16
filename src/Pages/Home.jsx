import React from "react";
import { HomePageCarousel } from "../components/HomePage/HomePageCarousel";
import { ShopByCategory } from "../components/HomePage/ShopByCategory";
import { FeaturedCategory } from "../components/HomePage/FeaturedCategory";
import { carousels } from "../FakeData/data";
import { categories } from "../FakeData/data";
import { featuredCategories } from "../FakeData/data";

export const Home = () => {
  return (
    <>
      <HomePageCarousel carousels={carousels} />
      <ShopByCategory categories={categories} />
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
