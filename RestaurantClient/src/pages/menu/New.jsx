import React, { useEffect } from "react";
import { useState } from "react";
import API from "../../API";
import { useParams } from "react-router-dom";
import Select from "react-select";

const New = (props) => {
  const [id_produit, setNom] = useState("");
  const id_menu = useParams().id;

  const [produits, setProduits] = useState([]);

  useEffect(async () => {
    await API.get("/api/produit/").then((res) => {
      console.log(res.data);
      setProduits(
        res.data.map((produit) => ({
          value: produit._id,
          label: produit.nom,
        }))
      );
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    API.post("/api/menu-produit", {
      id_produit,
      id_menu,
    }).then((res) => {
      console.log(res);
      window.location.href = "/menu";
    });
  };

  return (
    <React.Fragment>
      <div className="m-2 d-flex justify-content-center">
        <h1>ajouter produit au menu</h1>
      </div>
      <div className="mx-3 d-flex">
        <button
          className="btn"
          onClick={() => (window.location.href = "/menu")}
        >
          Retour
        </button>
      </div>
      <div className="mx-3 d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="w-75">
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <Select
              options={produits}
              onChange={(event) => setNom(event.value)}
            />
          </div>
          {/* submit button with m-3 */}
          <div className="m-3 d-flex justify-content-end">
            <button className="btn btn-primary">Ajouter au menu</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default New;
