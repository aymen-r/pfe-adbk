import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";


const Edit = (props) => {
    const [nom_resto, setNom_resto] = useState("");
    const [nom_gerant, setNom_gerant] = useState("");
    const [matricule_fiscale, setMatricule_fiscale] = useState("");
    const [adresse, setAdresse] = useState("");
    const [position_gps, setPosition_gps] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date_de_convention, setDate_de_convention] = useState("");
    const [photo, setPhoto] = useState("");
    const [evaluation_restaurant, setEvaluation_restaurant] = useState("");

    const id = useParams().id;
    useEffect(async () => {
        await API.get(`/api/restaurant/${id}`)
            .then(res => {
                setNom_resto(res.data.nom_resto);
                setNom_gerant(res.data.nom_gerant);
                setMatricule_fiscale(res.data.matricule_fiscale);
                setAdresse(res.data.adresse);
                setPosition_gps(res.data.position_gps);
                setEmail(res.data.email);
                setTelephone(res.data.telephone);
                setDate_de_convention(res.data.date_de_convention);
                setPhoto(res.data.photo);
                setEvaluation_restaurant(res.data.evaluation_restaurant);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.put(`/api/restaurant/${id}`, {
            nom_resto,
            nom_gerant,
            matricule_fiscale,
            adresse,
            position_gps,
            email,
            telephone,
            date_de_convention,
            evaluation_restaurant
        })
            .then(res => {
                console.log(res);
                window.location.href = "/restaurants";
            })
            .catch(err => console.log(err));
    }


    return (
        <React.Fragment>
            <div>
                <div className="d-flex justify-content-center">
                    <h1>Edit Restaurant</h1>
                </div>
                <div className="d-flex justify-content-center">
                <h4> {id} </h4>
                </div>
            </div>
            <div className="mx-3 d-flex">
                <button className="btn" onClick={() => window.location.href = "/restaurants"}><i class="bi bi-arrow-90deg-up"></i> Back</button>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nom_resto">Nom du restaurant</label>
                        <input type="text" className="form-control" id="nom_resto" name="nom_resto" value={nom_resto} onChange={(e) => setNom_resto(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nom_gerant">Nom du gérant</label>
                        <input type="text" className="form-control" id="nom_gerant" name="nom_gerant" value={nom_gerant} onChange={(e) => setNom_gerant(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="matricule_fiscale">Matricule fiscale</label>
                        <input type="text" className="form-control" id="matricule_fiscale" name="matricule_fiscale" value={matricule_fiscale} onChange={(e) => setMatricule_fiscale(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adresse">Adresse</label>
                        <input type="text" className="form-control" id="adresse" name="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position_gps">Position GPS</label>
                        <input type="text" className="form-control" id="position_gps" name="position_gps" value={position_gps} onChange={(e) => setPosition_gps(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Telephone</label>
                        <input type="text" className="form-control" id="telephone" name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_de_convention">Date de la convention</label>
                        <input type="date" className="form-control" id="date_de_convention" name="date_de_convention" value={date_de_convention} onChange={(e) => setDate_de_convention(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="evaluation_restaurant">Evaluation du restaurant</label>
                        <input type="number" className="form-control" id="evaluation_restaurant" name="evaluation_restaurant" value={evaluation_restaurant} onChange={(e) => setEvaluation_restaurant(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                </form>
            </div>
        </React.Fragment>
    );
}


export default Edit;