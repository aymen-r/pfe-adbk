
import React from "react";
import RestaurantListing from "./restaurantListing/Table";
import { useEffect, useState } from "react";
import API from "../../API";


const Produits = (props) => {

    const [produits , setProduits] = useState([]);

    useEffect(async () => {
        await API.get("/api/produit/findallbyidresto/"+props.id)
            .then(res => {
                console.log(res.data);
                setProduits(res.data);
            })
    }, [props.id]);


    return (
        <React.Fragment>
            <div className="m-2 d-flex justify-content-center">
                <h1>Produits</h1>
            </div>
            {/* button in flex div in the end of : create new */}
            <div className="mx-3 d-flex justify-content-end">
                <button className="btn btn-secondary" onClick={() => window.location.href = "/produits/new"}>Create New</button>
            </div>
            {/* table of restaurants */}
            <div className="mx-3 d-flex justify-content-center">
                <RestaurantListing data={produits} />
            </div>
        </React.Fragment>
    );
}


export default Produits;