import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { HomePageCarousel } from "../components/HomePageCarousel";
import { ShopByCategory } from "../components/ShopByCategory";
import { FeaturedCategory } from "../components/FeaturedCategory";
import { carousels } from "../FakeData/data";
import { categories } from "../FakeData/data";
import { featuredCategories } from "../FakeData/data";

export const Home = () => {
  return (
    <MainLayout>
      <HomePageCarousel carousels={carousels} />
      <ShopByCategory categories={categories} />
      {featuredCategories.map((category) => (
        <FeaturedCategory
          homeCatHeader={category.homeCatHeader}
          items={category.items}
        />
      ))}
    </MainLayout>
  );
};
