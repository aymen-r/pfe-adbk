
import React from "react";
import EvaluationsListing from "./EvaluationsListing/Table";
import { useEffect, useState } from "react";
import API from "../../API";


const Evaluations = () => {

    const [evaluations , setEvaluations] = useState([]);

    useEffect(async () => {
        await API.get("/api/evaluation")
            .then(res => {
                console.log(res.data);
                setEvaluations(res.data);
            })
    }, []);


    return (
        <React.Fragment>
            <div className="m-2 d-flex justify-content-center">
                <h1>Evaluations</h1>
            </div>
            {/* table of restaurants */}
            <div className="mx-3 d-flex justify-content-center">
                <EvaluationsListing data={evaluations} />
            </div>
        </React.Fragment>
    );
}


export default Evaluations;