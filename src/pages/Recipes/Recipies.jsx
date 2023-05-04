import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipiesCard from "./RecipiesCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipies = () => {
  const data = useLoaderData();
  const { id, name, experience, recipes, likes, image, bio, recipe } = data;
  return (
    <>
      {/* banner section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <LazyLoadImage
            effect="blur"
            src={image}
            className="max-w-[280px] lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            
            <h1 className="text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-2xl mb-2 lg:mb-5 lg:text-5xl font-bold text-center">{name}</h1>
            <p className="text-[#808080] lg:mb-5 lg:text-xl">{bio}</p>
            <p className="text-[#808080] lg:mb-5">Likes : {likes}</p>
            <p className="text-[#808080] lg:mb-5">Total Recipes : {recipes}</p>
            <p className="text-[#808080] mb-5">Experience : {experience}</p>
          </div>
        </div>
      </div>
      
      <h2 className="mt-10 mb-5 text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text lg:text-5xl text-3xl text-center font-bold ">Chef's Recipes</h2>

      <hr className="bg-gradient-to-r from-red-500 to-yellow-500 h-0.5 w-1/2 mx-auto"></hr>

      {/* Recipes Card Setion */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-5">
        {recipe.map((re, index) => (
          <RecipiesCard key={index} re={re}></RecipiesCard>
        ))}
      </div>
    </>
  );
};

export default Recipies;
