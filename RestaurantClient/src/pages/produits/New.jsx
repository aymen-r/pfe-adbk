import React from "react";
import { useState } from "react";
import API from "../../API";

const New = (props) => {
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [taille, setTaille] = useState("");
  const [prix, setPrix] = useState("");
  const [temps_de_preparation, setTemps_de_preparation] = useState("");
  const [en_promo, setEn_promo] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [id_resto, setId_resto] = useState("6297540acea63da0a132f665");
  const [singleFile, setSingleFile] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    API.post("/api/produit", {
      id_resto,
      nom,
      categorie,
      description,
      ingredients,
      taille,
      prix,
      temps_de_preparation,
      en_promo,
      discount,
    }).then((res) => {
      console.log(res);
      window.location.href = "/produits";
    });
  };
  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };

  return (
    <React.Fragment>
      <div className="m-2 d-flex justify-content-center">
        <h1>New Product</h1>
      </div>
      <div className="mx-3 d-flex">
        <button
          className="btn"
          onClick={() => (window.location.href = "/produits")}
        >
          Back
        </button>
      </div>
      <div className="mx-3 d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="w-75">
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              value={nom}
              onChange={(event) => setNom(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="categorie">Categorie</label>
            <input
              type="text"
              className="form-control"
              id="categorie"
              value={categorie}
              onChange={(event) => setCategorie(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <input
              type="text"
              className="form-control"
              id="ingredients"
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="taille">Taille</label>
            <input
              type="text"
              className="form-control"
              id="taille"
              value={taille}
              onChange={(event) => setTaille(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prix">Prix</label>
            <input
              type="text"
              className="form-control"
              id="prix"
              value={prix}
              onChange={(event) => setPrix(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="temps_de_preparation">Temps de preparation</label>
            <input
              type="text"
              className="form-control"
              id="temps_de_preparation"
              value={temps_de_preparation}
              onChange={(event) => setTemps_de_preparation(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>photo du produit</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => SingleFileChange(e)}
            />
          </div>
        </form>
      </div>
      <div className="m-3 d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Ajouter produit
        </button>
      </div>
    </React.Fragment>
  );
};

export default New;
