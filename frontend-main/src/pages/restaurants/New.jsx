import React from "react";
import { useState } from "react";
import API from "../../API";


const New = (props) => {
    const [nom_resto, setNom_resto] = useState("");
    const [nom_gerant, setNom_gerant] = useState("");
    const [matricule_fiscale, setMatricule_fiscale] = useState("");
    const [adresse, setAdresse] = useState("");
    const [position_gps, setPosition_gps] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date_de_convention, setDate_de_convention] = useState("");
    const [evaluation_restaurant, setEvaluation_restaurant] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        API.post("/api/restaurant", {
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
            .then(async (res) => {
                await API.post("/api/menu", {
                    id_resto: res.data.restaurant._id,
                })
                    .then(res => {
                        console.log(res);
                        window.location.href = "/restaurants";
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    }

    return (
        <React.Fragment>
            <div className="m-2 d-flex justify-content-center">
                <h1>Restaurants</h1>
            </div>
            {/* butin back tyo back on Restaurants page  */}
            <div className="mx-3 d-flex">
                <button className="btn" onClick={() => window.location.href = "/restaurants"}>Back</button>
            </div>
            <div className="mx-3 d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="w-75">
                    <div className="form-group">
                        <label htmlFor="nom_resto">nom_resto</label>
                        <input type="text" className="form-control" id="nom_resto" aria-describedby="nom_resto" placeholder="Enter nom_resto" value={nom_resto} onChange={(event) => setNom_resto(event.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nom_gerant">nom_gerant</label>
                        <input type="text" className="form-control" id="nom_gerant" aria-describedby="nom_gerant" placeholder="Enter nom_gerant" value={nom_gerant} onChange={(event) => setNom_gerant(event.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="matricule_fiscale">matricule_fiscale</label>
                        <input type="text" className="form-control" id="matricule_fiscale" aria-describedby="matricule_fiscale" placeholder="Enter matricule_fiscale" value={matricule_fiscale} onChange={(event) => setMatricule_fiscale(event.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adresse">adresse</label>
                        <input type="text" className="form-control" id="adresse" aria-describedby="adresse" placeholder="Enter adresse" value={adresse} onChange={(event) => setAdresse(event.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position_gps">position_gps</label>
                        <input type="text" className="form-control" id="position_gps" aria-describedby="position_gps" placeholder="Enter position_gps" value={position_gps} onChange={(event) => setPosition_gps(event.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input type="text" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">telephone</label>
                        <input type="text" className="form-control" id="telephone" aria-describedby="telephone" placeholder="Enter telephone" value={telephone} onChange={(event) => setTelephone(event.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_de_convention">date_de_convention</label>
                        <input type="date" className="form-control" id="date_de_convention" aria-describedby="date_de_convention" placeholder="Enter date_de_convention" value={date_de_convention} onChange={(event) => setDate_de_convention(event.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="evaluation_restaurant">evaluation_restaurant</label>
                        <input type="number" className="form-control" id="evaluation_restaurant" aria-describedby="evaluation_restaurant" placeholder="Enter evaluation_restaurant" value={evaluation_restaurant} onChange={(event) => setEvaluation_restaurant(event.target.value)} required />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </React.Fragment>
    );
}


export default New;