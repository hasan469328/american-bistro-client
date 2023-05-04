import React, { useEffect, useState } from 'react';

const RegionalDishes = () => {
  const [regionalDishes, setRegionalDishes] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/rdishes')
    .then(res => res.json())
    .then(data => setRegionalDishes(data))
    
  },[])
  return (
    <div className="bg-gray-100 py-8 px-4 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Regional American Cuisine</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {regionalDishes.map((dish, index) => (
          <div key={dish.id} className="bg-white rounded-lg shadow-lg p-6">
            <img src={dish.img} alt="" />
            <h3 className="text-xl font-bold mb-2">{dish.dish}</h3>
            <p className="text-gray-500 mb-4">{dish.region}</p>
            <p className="text-gray-600">{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionalDishes;