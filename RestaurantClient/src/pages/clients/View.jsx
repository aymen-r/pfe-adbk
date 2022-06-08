import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";


const View = (props) => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, setAdresse] = useState("");
    const [date_de_naissance, setDate_de_naissance] = useState("");
    const [sexe, setSexe] = useState("");
    const [telephone, setTelephone] = useState("");
    const [fonction, setFonction] = useState("");
    const [bio, setBio] = useState("");
    const [reseau, setReseau] = useState("");
    const [banque, setBanque] = useState("");
    const [rib, setRib] = useState("");
    const [credit, setCredit] = useState(0);

    const id = useParams().id;
    useEffect(async () => {
        await API.get(`/api/client/${id}`)
            .then(res => {
                setNom(res.data.nom);
                setPrenom(res.data.prenom);
                setEmail(res.data.email);
                setAdresse(res.data.adresse);
                setDate_de_naissance(res.data.date_de_naissance);
                setSexe(res.data.sexe);
                setTelephone(res.data.telephone);
                setFonction(res.data.fonction);
                setBio(res.data.bio);
                setReseau(res.data.reseau);
                setBanque(res.data.banque);
                setRib(res.data.rib);
                setCredit(res.data.credit);
            })
            .catch(err => console.log(err));
    }, [id]);



    return (
        <React.Fragment>
            <div>
                <div className="d-flex justify-content-center">
                    <h1>View client</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <h4> {id} </h4>
                </div>
            </div>
            <div className="mx-3 d-flex">
                <button className="btn" onClick={() => window.location.href = "/clients"}><i class="bi bi-arrow-90deg-up"></i> Back</button>
            </div>
            <div className="container m-3">
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nom"
                            value={nom}
                            disabled
                            onChange={event => setNom(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prenom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="prenom"
                            value={prenom} disabled
                            onChange={event => setPrenom(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email" disabled
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adresse">Adresse</label>
                        <input
                            type="text"
                            className="form-control"
                            id="adresse"
                            value={adresse} disabled
                            onChange={event => setAdresse(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_de_naissance">Date de naissance</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date_de_naissance"
                            value={date_de_naissance} disabled
                            onChange={event => setDate_de_naissance(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sexe">Sexe</label>
                        <select
                            className="form-control"
                            id="sexe"
                            value={sexe} disabled
                            onChange={event => setSexe(event.target.value)}
                        >
                            <option value="M">Homme</option>
                            <option value="F">Femme</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Telephone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="telephone"
                            value={telephone} disabled
                            onChange={event => setTelephone(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction">Fonction</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fonction"
                            value={fonction} disabled
                            onChange={event => setFonction(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            className="form-control"
                            id="bio"
                            value={bio} disabled
                            onChange={event => setBio(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reseau">Reseau</label>
                        <input
                            type="text"
                            className="form-control"
                            id="reseau"
                            value={reseau} disabled
                            onChange={event => setReseau(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="banque">Banque</label>
                        <input
                            type="text"
                            className="form-control"
                            id="banque"
                            value={banque} disabled
                            onChange={event => setBanque(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rib">Rib</label>
                        <input
                            type="text"
                            className="form-control"
                            id="rib"
                            value={rib} disabled
                            onChange={event => setRib(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="credit">Credit</label>
                        <input
                            type="number"
                            className="form-control"
                            id="credit"
                            value={credit} disabled
                            onChange={event => setCredit(event.target.value)}
                        />
                    </div>
            </div>
        </React.Fragment>
    );
}

export default View;