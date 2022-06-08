import React from "react";
import LivreursListing from "./LivreursListing/Table";
import { useEffect, useState } from "react";
import API from "../../API";

const Livreurs = () => {
  const [livreurs, setLivreurs] = useState([]);

  useEffect(async () => {
    await API.get("/api/livreur").then((res) => {
      console.log(res.data);
      setLivreurs(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="m-2 d-flex justify-content-center">
        <h1>Livreurs</h1>
      </div>
      {/* button in flex div in the end of : create new */}
      <div className="mx-3 d-flex justify-content-end">
        <button
          className="btn btn-secondary"
          onClick={() => (window.location.href = "/livreurs/new")}
        >
          Ajouter livreur
        </button>
      </div>
      {/* table of restaurants */}
      <div className="mx-3 d-flex justify-content-center">
        <LivreursListing data={livreurs} />
      </div>
    </React.Fragment>
  );
};

export default Livreurs;
