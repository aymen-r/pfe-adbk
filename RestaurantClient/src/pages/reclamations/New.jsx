import React from "react";
import { useState } from "react";
import API from "../../API";


const New = (props) => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [date_de_naissance, setDate_de_naissance] = useState("");
    const [sexe, setSexe] = useState("");
    const [lieu, setLieu] = useState("");
    const [n_cin, setN_cin] = useState("");
    const [telephone, setTelephone] = useState("");
    const [matricule_fiscale, setMatricule_fiscale] = useState("");
    const [date_de_convention, setDate_de_convention] = useState("");
    const [type_de_vehicule, setType_de_vehicule] = useState("");
    const [zone_de_livraison, setZone_de_livraison] = useState("");
    const [disponibilite, setDisponibilite] = useState("");
    const [banque, setBanque] = useState("");
    const [rib, setRib] = useState("");
    const [credit, setCredit] = useState("");
    const [evaluation_livreur, setEvaluation_livreur] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        API.post("/api/livreur", {
            nom, prenom, date_de_naissance, sexe, lieu, n_cin, telephone, matricule_fiscale, date_de_convention, type_de_vehicule, zone_de_livraison, disponibilite, banque, rib, credit, evaluation_livreur
        })
            .then(res => {
                console.log(res);
                window.location.href = "/livreurs";
            })
    }

    return (
        <React.Fragment>
            <div className="m-2 d-flex justify-content-center">
                <h1>New Livreur</h1>
            </div>
            <div className="mx-3 d-flex">
                <button className="btn" onClick={() => window.location.href = "/livreurs"}>Back</button>
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
                            onChange={event => setNom(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prenom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="prenom"
                            value={prenom}
                            onChange={event => setPrenom(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_de_naissance">Date de naissance</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date_de_naissance"
                            value={date_de_naissance}
                            onChange={event => setDate_de_naissance(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sexe">Sexe</label>
                        <input
                            type="text"
                            className="form-control"
                            id="sexe"
                            value={sexe}
                            onChange={event => setSexe(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lieu">Lieu</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lieu"
                            value={lieu}
                            onChange={event => setLieu(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="n_cin">N CIN</label>
                        <input
                            type="text"
                            className="form-control"
                            id="n_cin"
                            value={n_cin}
                            onChange={event => setN_cin(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Telephone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="telephone"
                            value={telephone}
                            onChange={event => setTelephone(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="matricule_fiscale">Matricule Fiscale</label>
                        <input
                            type="text"
                            className="form-control"
                            id="matricule_fiscale"
                            value={matricule_fiscale}
                            onChange={event => setMatricule_fiscale(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_de_convention">Date de convention</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date_de_convention"
                            value={date_de_convention}
                            onChange={event => setDate_de_convention(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type_de_vehicule">Type de vehicule</label>
                        <input
                            type="text"
                            className="form-control"
                            id="type_de_vehicule"
                            value={type_de_vehicule}
                            onChange={event => setType_de_vehicule(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zone_de_livraison">Zone de livraison</label>
                        <input
                            type="text"
                            className="form-control"
                            id="zone_de_livraison"
                            value={zone_de_livraison}
                            onChange={event => setZone_de_livraison(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="disponibilite">Disponibilite</label>
                        <input
                            type="text"
                            className="form-control"
                            id="disponibilite"
                            value={disponibilite}
                            onChange={event => setDisponibilite(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="banque">Banque</label>
                        <input
                            type="text"
                            className="form-control"
                            id="banque"
                            value={banque}
                            onChange={event => setBanque(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rib">Rib</label>
                        <input
                            type="text"
                            className="form-control"
                            id="rib"
                            value={rib}
                            onChange={event => setRib(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="credit">Credit</label>
                        <input
                            type="text"
                            className="form-control"
                            id="credit"
                            value={credit}
                            onChange={event => setCredit(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="evaluation_livreur">Evaluation livreur</label>
                        <input
                            type="text"
                            className="form-control"
                            id="evaluation_livreur"
                            value={evaluation_livreur}
                            onChange={event => setEvaluation_livreur(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary m-3">Ajouter Livreur</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default New;