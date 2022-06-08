import React from "react";
import RestaurantListing from "./restaurantListing/Table";
import { useEffect, useState } from "react";
import API from "../../API";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(async () => {
    await API.get("/api/restaurant").then((res) => {
      console.log(res.data);
      setRestaurants(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="m-2 d-flex justify-content-center">
        <h1>Restaurants</h1>
      </div>
      {/* button in flex div in the end of : create new */}
      <div className="mx-3 d-flex justify-content-end">
        <button
          className="btn btn-secondary"
          onClick={() => (window.location.href = "/restaurants/new")}
        >
          Ajouter Nouveau
        </button>
      </div>
      {/* table of restaurants */}
      <div className="mx-3 d-flex justify-content-center">
        <RestaurantListing data={restaurants} />
      </div>
    </React.Fragment>
  );
};

export default Restaurants;
