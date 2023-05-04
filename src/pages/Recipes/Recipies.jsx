import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipiesCard from "./RecipiesCard";

const Recipies = () => {
  const data = useLoaderData();
  const { id, name, experience, recipes, likes, image, bio, recipe } = data;
  return (
    <>
      {/* banner section */}
      <div
        className="hero min-h-screen mb-5"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            <p className="mb-5 text-xl">{bio}</p>
            <p className="mb-5">Likes : {likes}</p>
            <p className="mb-5">Total Recipes : {recipes}</p>
            <p className="mb-5">Experience : {experience}</p>
          </div>
        </div>
      </div>
      {/* Recipes Card Setion */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-5">
        {recipe.map((re) => (
          <RecipiesCard key={re.recipe_name} re={re}></RecipiesCard>
        ))}
      </div>
    </>
  );
};

export default Recipies;
