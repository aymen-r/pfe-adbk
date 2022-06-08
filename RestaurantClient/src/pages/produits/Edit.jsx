import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";


const Edit = (props) => {
    const [nom, setNom] = useState("");
    const [categorie, setCategorie] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [taille, setTaille] = useState("");
    const [prix, setPrix] = useState("");
    const [temps_de_preparation, setTemps_de_preparation] = useState("");
    const [en_promo, setEn_promo] = useState(false);
    const [discount, setDiscount] = useState("");

    const id = useParams().id;
    useEffect(async () => {
        await API.get(`/api/produit/${id}`)
            .then(res => {
                console.log(res.data);
                setNom(res.data.nom);
                setCategorie(res.data.categorie);
                setDescription(res.data.description);
                setIngredients(res.data.ingredients);
                setTaille(res.data.taille);
                setPrix(res.data.prix);
                setTemps_de_preparation(res.data.temps_de_preparation);
                setEn_promo(res.data.en_promo);
                setDiscount(res.data.discount);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.put(`/api/produit/${id}`, {
            nom,
            categorie,
            description,
            ingredients,
            taille,
            prix,
            temps_de_preparation,
            en_promo,
            discount

        })
            .then(res => {
                console.log(res);
                window.location.href = "/produits";
            })
            .catch(err => console.log(err));
    }


    return (
        <React.Fragment>
            <div>
                <div className="d-flex justify-content-center">
                    <h1>Edit Produit</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <h4> {id} </h4>
                </div>
            </div>
            <div className="mx-3 d-flex">
                <button className="btn" onClick={() => window.location.href = "/produits"}><i class="bi bi-arrow-90deg-up"></i> Back</button>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nom"
                            value={nom}
                            onChange={event => setNom(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="categorie">Categorie</label>
                        <input
                            type="text"
                            className="form-control"
                            id="categorie"
                            value={categorie}
                            onChange={event => setCategorie(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ingredients">Ingredients</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ingredients"
                            value={ingredients}
                            onChange={event => setIngredients(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taille">Taille</label>
                        <input
                            type="text"
                            className="form-control"
                            id="taille"
                            value={taille}
                            onChange={event => setTaille(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prix">Prix</label>
                        <input
                            type="text"
                            className="form-control"
                            id="prix"
                            value={prix}
                            onChange={event => setPrix(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="temps_de_preparation">Temps de preparation</label>
                        <input
                            type="text"
                            className="form-control"
                            id="temps_de_preparation"
                            value={temps_de_preparation}
                            onChange={event => setTemps_de_preparation(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="en_promo">En promo</label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="en_promo"
                                value={en_promo}
                                onChange={event => setEn_promo(event.target.value)}
                            />


                            <label className="form-check-label" htmlFor="en_promo">
                                {en_promo ? "Oui" : "Non"}
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="discount">Discount</label>
                        <input
                            type="text"
                            className="form-control"
                            id="discount"
                            value={discount}
                            onChange={event => setDiscount(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                </form>
            </div>

        </React.Fragment>
    )
}


export default Edit;