import React, { useEffect, useState } from "react";
import Chef from "./Chef";

const ChefCard = () => {
  const [chefData, setChefData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  return <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
    {chefData.map(chef => <Chef key={chef.id} chef={chef}></Chef>)}
  </div>;
};

export default ChefCard;
