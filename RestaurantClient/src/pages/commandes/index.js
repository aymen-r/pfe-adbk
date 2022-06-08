import React from "react";
import CommandesListing from "./CommandesListing/Table";
import { useEffect, useState } from "react";
import API from "../../API";
import { PanoramaSharp } from "@mui/icons-material";

const Commandes = (props) => {
  const [commandes, setCommandes] = useState([]);

  useEffect(async () => {
    await API.get("/api/commande/findbyidrestaurant/" + props.id).then(
      (res) => {
        console.log(res.data);
        setCommandes(res.data);
      }
    );
  }, [props.id]);

  return (
    <React.Fragment>
      <div className="m-2 d-flex justify-content-center">
        <h1>Commandes</h1>
      </div>
      {/* button in flex div in the end of : create new */}
      {/* <div className="mx-3 d-flex justify-content-end">
                <button className="btn btn-secondary" onClick={() => window.location.href = "/commandes/new"}>Create New</button>
            </div> */}
      {/* table of restaurants */}
      <div className="mx-3 d-flex justify-content-center">
        <CommandesListing data={commandes} />
      </div>
    </React.Fragment>
  );
};

export default Commandes;
