import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import icon from "./restaurantIcon.jpg";
import API from "../../../API";


function Info(params) {
  const { data } = params;
  const [client, setClient] = useState({});

  async function ff() {
    await API.get(`/api/client/${data.id_client}`)
      .then(res => {
        setClient(res.data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    ff();
  }, [params.data]);

  return (
    <React.Fragment>
      {client && (
        <>
          <TableCell className="tableCell">{data._id}</TableCell>
          <TableCell className="tableCell">{data.id_client}</TableCell>
          <TableCell className="tableCell">{client.nom + " " + client.prenom || ""}</TableCell>
          <TableCell className="tableCell">{data.createdAt}</TableCell>
          <TableCell className="tableCell">{data.id_commande}</TableCell>
          <TableCell className="tableCell">{data.score_livreur}</TableCell>
          <TableCell className="tableCell">{data.score_resto}</TableCell>
        </>
      )}
    </React.Fragment>
  );

}


const ReclamationListing = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("RestaurantListing");
    console.log(props.data);
    setData(props.data);
  }, [props.data]);

  function deleteevaluation(id) {
    API.delete(`/api/evaluation/${id}`)
      .then(res => {
        console.log(res);
        window.location.href = "/evaluations";
      })
      .catch(err => console.log(err));
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"></TableCell>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">ID Client</TableCell>
            <TableCell className="tableCell">Nom & Prenom</TableCell>
            <TableCell className="tableCell">date</TableCell>
            <TableCell className="tableCell">id_commande</TableCell>
            <TableCell className="tableCell">score_livreur</TableCell>
            <TableCell className="tableCell">score_resto</TableCell>
            {/* edit and delete */}
            <TableCell className="tableCell"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((r) => (
            <TableRow key={r._id}>
              {/* tablecell with image icon insode */}
              <TableCell className="tableCell"><img src={icon} alt="restaurant" className="img-fluid" style={{ width: "20px", height: "20px" }} /></TableCell>
              <Info data={r} />
              {/* edit and delete with rounded buttons */}
              <TableCell className="tableCell">
                <button className="btn btn-danger rounded-circle" onClick={() => deleteevaluation(r._id)}>
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReclamationListing;