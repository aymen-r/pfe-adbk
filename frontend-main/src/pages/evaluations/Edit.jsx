import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";


const Edit = (props) => {

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

    const id = useParams().id;
    useEffect(async () => {
        await API.get(`/api/livreur/${id}`)
            .then(res => {
                setNom(res.data.nom);
                setPrenom(res.data.prenom);
                setDate_de_naissance(res.data.date_de_naissance);
                setSexe(res.data.sexe);
                setLieu(res.data.lieu);
                setN_cin(res.data.n_cin);
                setTelephone(res.data.telephone);
                setMatricule_fiscale(res.data.matricule_fiscale);
                setDate_de_convention(res.data.date_de_convention);
                setType_de_vehicule(res.data.type_de_vehicule);
                setZone_de_livraison(res.data.zone_de_livraison);
                setDisponibilite(res.data.disponibilite);
                setBanque(res.data.banque);
                setRib(res.data.rib);
                setCredit(res.data.credit);
                setEvaluation_livreur(res.data.evaluation_livreur);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.put(`/api/livreur/${id}`, {
            nom,
            prenom,
            date_de_naissance,
            sexe,
            lieu,
            n_cin,
            telephone,
            matricule_fiscale,
            date_de_convention,
            type_de_vehicule,
            zone_de_livraison,
            disponibilite,
            banque,
            rib,
            credit,
            evaluation_livreur
        })
            .then(res => {
                console.log(res);
                window.location.href = "/livreurs";
            })
            .catch(err => console.log(err));
    }


    return (
        <React.Fragment>
            <div>
                <div className="d-flex justify-content-center">
                    <h1>Edit Livreur</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <h4> {id} </h4>
                </div>
            </div>
            <div className="mx-3 d-flex">
                <button className="btn" onClick={() => window.location.href = "/livreurs"}><i class="bi bi-arrow-90deg-up"></i> Back</button>
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
                        <label htmlFor="matricule_fiscale">Matricule fiscale</label>
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
                        <label htmlFor="rib">RIB</label>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </React.Fragment>
    )
}


export default Edit;