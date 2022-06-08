
import React from "react";
import LivreursListing from "./ClientsListing/Table";
import { useEffect, useState } from "react";
import API from "../../API";


const Clients = () => {

    const [clients, setClients] = useState([]);

    useEffect(async () => {
        await API.get("/api/client")
            .then(res => {
                console.log(res.data);
                setClients(res.data);
            })
    }, []);


    return (
        <React.Fragment>
            <div className="m-2 d-flex justify-content-center">
                <h1>Clients</h1>
            </div>
            {/* button in flex div in the end of : create new */}
            <div className="mx-3 d-flex justify-content-end">
                <button className="btn btn-secondary" onClick={() => window.location.href = "/clients/new"}>Create New</button>
            </div>
            {/* table of restaurants */}
            <div className="mx-3 d-flex justify-content-center">
                <LivreursListing data={clients} />
            </div>
        </React.Fragment>
    );
}


export default Clients;