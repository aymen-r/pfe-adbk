
import React from "react";
import ReclamationListing from "./reclamationListing/Table";
import { useEffect, useState } from "react";
import API from "../../API";


const Reclamations = () => {

    const [reclamations , setReclamations] = useState([]);

    useEffect(async () => {
        await API.get("/api/reclamation")
            .then(res => {
                console.log(res.data);
                setReclamations(res.data);
            })
    }, []);


    return (
        <React.Fragment>
            <div className="m-2 d-flex justify-content-center">
                <h1>Reclamations</h1>
            </div>
            {/* table of restaurants */}
            <div className="mx-3 d-flex justify-content-center">
                <ReclamationListing data={reclamations} />
            </div>
        </React.Fragment>
    );
}


export default Reclamations;