import React, { useContext, useEffect, useState } from "react";
import Chef from "./Chef";
import { AuthContext } from "../../provider/AuthProvider";
import { GridLoader } from "react-spinners";

const ChefCard = () => {
  const [chefData, setChefData] = useState([]);
  const { loader, setLoader } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="mt-10">
      {loader ? (
        <div>
          <GridLoader
            color="#36d7b7"
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {chefData.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChefCard;
