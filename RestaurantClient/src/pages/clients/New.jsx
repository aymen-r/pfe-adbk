import React from "react";
import { useState } from "react";
import API from "../../API";


const New = (props) => {

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




    const handleSubmit = (event) => {
        event.preventDefault();
        API.post("/api/client", {
            nom, prenom, email, adresse, date_de_naissance, sexe, email, telephone, fonction, bio, reseau, banque, rib
        })
            .then(res => {
                console.log(res);
                window.location.href = "/clients";
            })
    }

    return (
        <React.Fragment>
            <div className="m-2 d-flex justify-content-center">
                <h1>New Client</h1>
            </div>
            <div className="mx-3 d-flex">
                <button className="btn" onClick={() => window.location.href = "/clients"}>Back</button>
            </div>
            <div className="mx-3 d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="w-75">
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input type="text" className="form-control" id="nom" aria-describedby="emailHelp" placeholder="Enter Nom" value={nom} onChange={event => setNom(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prenom</label>
                        <input type="text" className="form-control" id="prenom" aria-describedby="emailHelp" placeholder="Enter Prenom" value={prenom} onChange={event => setPrenom(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adresse">Adresse</label>
                        <input type="text" className="form-control" id="adresse" aria-describedby="emailHelp" placeholder="Enter Adresse" value={adresse} onChange={event => setAdresse(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_de_naissance">Date de naissance</label>
                        <input type="date" className="form-control" id="date_de_naissance" aria-describedby="emailHelp" placeholder="Enter Date de naissance" value={date_de_naissance} onChange={event => setDate_de_naissance(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sexe">Sexe</label>
                        <select className="form-control" id="sexe" value={sexe} onChange={event => setSexe(event.target.value)}>
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Telephone</label>
                        <input type="text" className="form-control" id="telephone" aria-describedby="emailHelp" placeholder="Enter Telephone" value={telephone} onChange={event => setTelephone(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction">Fonction</label>
                        <input type="text" className="form-control" id="fonction" aria-describedby="emailHelp" placeholder="Enter Fonction" value={fonction} onChange={event => setFonction(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <input type="text" className="form-control" id="bio" aria-describedby="emailHelp" placeholder="Enter Bio" value={bio} onChange={event => setBio(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reseau">Reseau</label>
                        <input type="text" className="form-control" id="reseau" aria-describedby="emailHelp" placeholder="Enter Reseau" value={reseau} onChange={event => setReseau(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="banque">Banque</label>
                        <input type="text" className="form-control" id="banque" aria-describedby="emailHelp" placeholder="Enter Banque" value={banque} onChange={event => setBanque(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rib">RIB</label>
                        <input type="text" className="form-control" id="rib" aria-describedby="emailHelp" placeholder="Enter Rib" value={rib} onChange={event => setRib(event.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary m-3">Ajouter Client</button>
                </form>
            </div>
        </React.Fragment>
    )
}


export default New;