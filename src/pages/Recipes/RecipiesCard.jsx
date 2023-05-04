import { Rating } from "@smastrom/react-rating";
import React from "react";

const RecipiesCard = ({ re }) => {
  console.log(re);
  const { cooking_method, ingredients, rating, recipe_name } = re;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl font-medium text-center mb-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white  py-2 px-2 border border-red-600 rounded-lg shadow-md transition duration-300 ease-in-out">
          {recipe_name}
        </h2>
        <h2 className="text-xl font-medium">Ingredients: </h2>
        <div className="mb-4">
          {" "}
          {ingredients.map((ing) => (
            <li>{ing}</li>
          ))}
        </div>
        <p className="text-xl font-medium">Cooking Method</p>
        <p>{cooking_method}</p>

        <div className="flex items-center">
          <div className="flex-1">
            {rating}
          </div>
          <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white  py-2 px-2 border border-red-600 rounded-lg shadow-md transition duration-300 ease-in-out font-semibold">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipiesCard;
