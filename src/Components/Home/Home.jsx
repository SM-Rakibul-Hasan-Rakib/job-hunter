import React from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryList />
      <h1 className="text-black text-4xl">This is my home</h1>
    </div>
  );
};

export default Home;
