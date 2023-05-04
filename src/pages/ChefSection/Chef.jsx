import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Chef = ({ chef }) => {
  const { id, name, experience, recipes, likes, image } = chef;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mt-5">
      <figure>
        {/* <img className="h-64 object-cover object-center"  src={image} alt="chef photo" /> */}
        <LazyLoadImage
          effect="blur"
          src={image}
          className="h-64 object-cover object-center"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Years of Experience : {experience}</p>
        <p>Numbers of Recipes : {recipes}</p>
        <p>Likes : {likes}</p>
        <div className="card-actions justify-end">
          <Link to={`/recipes/${id}`}>
            {" "}
            <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 border border-red-600 rounded-lg shadow-md transition duration-300 ease-in-out">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
