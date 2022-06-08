import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";

const View = (props) => {
  const [id_client, setIdClient] = useState("");
  const [id_livreur, setIdLivreur] = useState("");
  const [prix_totale, setPrixTotale] = useState("");
  const [duree_estimee, setDureeEstimee] = useState("");
  const [date_de_lancemnt_de_la_commande, setDateDeLancemntDeLaCommande] =
    useState("");
  const [attente_resto, setAttenteResto] = useState("");
  const [attente_livreur, setAttenteLivreur] = useState("");
  const [estimation_resto, setEstimationResto] = useState("");
  const [estimation_livreur, setEstimationLivreur] = useState("");
  const [date_de_livraison, setDateDeLivraison] = useState("");

  const id = useParams().id;
  useEffect(async () => {
    await API.get(`/api/commande/${id}`)
      .then((res) => {
        console.log(res.data);
        setIdClient(res.data.id_client);
        setIdLivreur(res.data.id_livreur);
        setPrixTotale(res.data.prix_totale);
        setDureeEstimee(res.data.duree_estimee);
        setDateDeLancemntDeLaCommande(res.data.date_de_lancemnt_de_la_commande);
        setAttenteResto(res.data.attente_resto);
        setAttenteLivreur(res.data.attente_livreur);
        setEstimationResto(res.data.estimation_resto);
        setEstimationLivreur(res.data.estimation_livreur);
        setDateDeLivraison(res.data.date_de_livraison);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <React.Fragment>
      <div>
        <div className="d-flex justify-content-center">
          <h1>Voir la Commande</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h4> {id} </h4>
        </div>
      </div>
      <div className="mx-3 d-flex">
        <button
          className="btn"
          onClick={() => (window.location.href = "/commandes")}
        >
          <i class="bi bi-arrow-90deg-up"></i> Retour
        </button>
      </div>
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("ok");
          }}
        >
          <div className="form-group row d-flex m-3 ">
            <label htmlFor="id_client">id_client</label>
            <input
              type="text"
              className="form-control"
              id="id_client"
              value={id_client}
              disabled
              onChange={(e) => setIdClient(e.target.value)}
            />
          </div>
          <div className="form-group row m-3">
            <label htmlFor="id_livreur" className="col-sm-2 col-form-label">
              id_livreur
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="id_livreur"
                disabled
                value={id_livreur || "--"}
                onChange={(e) => setIdLivreur(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row m-3">
            <label htmlFor="prix_totale" className="col-sm-2 col-form-label">
              prix_totale
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="prix_totale"
                disabled
                value={prix_totale}
                onChange={(e) => setPrixTotale(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row m-3">
            <label htmlFor="duree_estimee" className="col-sm-2 col-form-label">
              duree_estimee
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="duree_estimee"
                disabled
                value={duree_estimee}
                onChange={(e) => setDureeEstimee(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row m-3">
            <label
              htmlFor="date_de_lancemnt_de_la_commande"
              className="col-sm-2 col-form-label"
            >
              date_de_lancemnt_de_la_commande
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="date_de_lancemnt_de_la_commande"
                disabled
                value={date_de_lancemnt_de_la_commande}
                onChange={(e) => setDateDeLancemntDeLaCommande(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row m-3">
            <label htmlFor="attente_resto" className="col-sm-2 col-form-label">
              attente_resto
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="attente_resto"
                disabled
                value={attente_resto}
                onChange={(e) => setAttenteResto(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row m-3">
            <label
              htmlFor="attente_livreur"
              className="col-sm-2 col-form-label"
            >
              attente_livreur
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="attente_livreur"
                disabled
                value={attente_livreur}
                onChange={(e) => setAttenteLivreur(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row m-3">
            <label
              htmlFor="estimation_resto"
              className="col-sm-2 col-form-label"
            >
              estimation_resto
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="estimation_resto"
                disabled
                value={estimation_resto}
                onChange={(e) => setEstimationResto(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row m-3">
            <label
              htmlFor="estimation_livreur"
              className="col-sm-2 col-form-label"
            >
              estimation_livreur
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="estimation_livreur"
                disabled
                value={estimation_livreur}
                onChange={(e) => setEstimationLivreur(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row m-3">
            <label
              htmlFor="date_de_livraison"
              className="col-sm-2 col-form-label"
            >
              date_de_livraison
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="date_de_livraison"
                disabled
                value={date_de_livraison}
                onChange={(e) => setDateDeLivraison(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default View;
