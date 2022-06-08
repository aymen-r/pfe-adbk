import React, { useEffect } from "react";
import { useState } from "react";
import API from "../../API";


const NewCommande = (props) => {
    const [id_restaurant, setIdRestaurant] = useState("6297540acea63da0a132f665");
    const [id_client, setIdClient] = useState("");
    const [id_livreur, setIdLivreur] = useState("");
    const [prix_totale, setPrixTotale] = useState("");
    const [duree_estimee, setDureeEstimee] = useState("");
    const [date_de_lancemnt_de_la_commande, setDateDeLancemntDeLaCommande] = useState("");
    const [attente_resto, setAttenteResto] = useState("");
    const [attente_livreur, setAttenteLivreur] = useState("");
    const [estimation_resto, setEstimationResto] = useState("");
    const [estimation_livreur, setEstimationLivreur] = useState("");
    const [date_de_livraison, setDateDeLivraison] = useState("");

    const [livreurs, setLivreurs] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(async () => {
        await API.get("/api/livreur")
            .then(res => {
                console.log(res.data);
                setLivreurs(res.data);
            })

        await API.get("/api/client")
            .then(res => {
                console.log(res.data);
                setClients(res.data);
            })

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        API.post("/api/commande", {
            id_restaurant, id_client, id_livreur, prix_totale, duree_estimee, date_de_lancemnt_de_la_commande:Date.now(), attente_resto, attente_livreur, estimation_resto, estimation_livreur, date_de_livraison
        })
            .then(res => {
                console.log(res);
                window.location.href = "/commandes";
            })
    }

    return (
        <React.Fragment>
            <div className="m-2 d-flex justify-content-center">
                <h1>New Commande</h1>
            </div>
            <div className="mx-3 d-flex">
                <button className="btn" onClick={() => window.location.href = "/commandes"}>Back</button>
            </div>
            <div className="mx-3 d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id_client">Client</label>
                        <select className="form-control" id="id_client" value={id_client} onChange={(e) => {setIdClient(e.target.value);console.log(e.target.value)}}>
                            <option value="">Select</option>
                            {clients.map(client => (
                                <option key={client._id} value={client._id}>{client.nom + " " + client.prenom}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_livreur">Livreur</label>
                        <select className="form-control" id="id_livreur" value={id_livreur} onChange={(e) => setIdLivreur(e.target.value)}>
                            <option value="">Select</option>
                            {livreurs.map(livreur => (
                                <option key={livreur._id} value={livreur._id}>{livreur.nom + " " + livreur.prenom}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prix_totale">Prix Total</label>
                        <input type="number" className="form-control" id="prix_totale" value={prix_totale} onChange={(e) => setPrixTotale(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duree_estimee">Duree Estimee</label>
                        <input type="text" className="form-control" id="duree_estimee" value={duree_estimee} onChange={(e) => setDureeEstimee(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="attente_resto">Attente Resto</label>
                        <input type="text" className="form-control" id="attente_resto" value={attente_resto} onChange={(e) => setAttenteResto(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="attente_livreur">Attente Livreur</label>
                        <input type="text" className="form-control" id="attente_livreur" value={attente_livreur} onChange={(e) => setAttenteLivreur(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="estimation_resto">Estimation Resto</label>
                        <input type="text" className="form-control" id="estimation_resto" value={estimation_resto} onChange={(e) => setEstimationResto(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="estimation_livreur">Estimation Livreur</label>
                        <input type="text" className="form-control" id="estimation_livreur" value={estimation_livreur} onChange={(e) => setEstimationLivreur(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_de_livraison">Date De Livraison</label>
                        <input type="date" className="form-control" id="date_de_livraison" value={date_de_livraison} onChange={(e) => setDateDeLivraison(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                </form>
            </div>
        </React.Fragment>
    )
}


export default NewCommande;