import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import icon from "./restaurantIcon.jpg";
import API from "../../../API";

function Info(params) {
  const [data, setData] = useState(params.data);
  const [client, setClient] = useState([]);
  const [livreur, setLivreur] = useState([]);
  useEffect(() => {
    API.get("/api/client/" + data.id_client).then((res) => {
      console.log(res.data);
      setClient(res.data ? res.data : {});
    });
    API.get("/api/livreur/" + data.id_livreur).then((res) => {
      console.log(res.data);
      setLivreur(res.data || {});
    });
  }, [data.id_client]);
  return (
    <>
      <TableCell className="tableCell">
        {client.nom + " " + client.prenom}
      </TableCell>
      <TableCell className="tableCell">
        {data.date_de_lancemnt_de_la_commande}
      </TableCell>
      <TableCell className="tableCell">{data.prix_totale}</TableCell>
      <TableCell className="tableCell">
        {livreur.nom + " " + livreur.prenom}
      </TableCell>
      <TableCell className="tableCell">{data.attente_resto}</TableCell>
      <TableCell className="tableCell">{data.attente_livreur}</TableCell>
      <TableCell className="tableCell">{data.estimation_livreur}</TableCell>
    </>
  );
}

const CommandesListing = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(props.data);
    setData(props.data);
  }, [props.data]);

  function deletecommande(id) {
    API.delete(`/api/commande/${id}`)
      .then((res) => {
        console.log(res);
        window.location.href = "/commandes";
      })
      .catch((err) => console.log(err));
  }
  return (
    <TableContainer component={Paper} className="table container">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"></TableCell>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Nom & Prenom</TableCell>
            <TableCell className="tableCell">date de commande</TableCell>
            <TableCell className="tableCell">prix</TableCell>
            <TableCell className="tableCell">id_livreur</TableCell>
            <TableCell className="tableCell">attente_resto</TableCell>
            <TableCell className="tableCell">attente_livreur</TableCell>
            <TableCell className="tableCell">estimation_livreur</TableCell>

            {/* edit and delete */}
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((r) => (
              <TableRow key={r._id}>
                {/* tablecell with image icon insode */}
                <TableCell className="tableCell">
                  <img
                    src={icon}
                    alt="restaurant"
                    className="img-fluid"
                    style={{ width: "20px", height: "20px" }}
                  />
                </TableCell>
                <TableCell className="tableCell">{r._id}</TableCell>
                <Info data={r} />
                {/* edit and delete with rounded buttons */}
                <TableCell className="tableCell actions">
                  <button
                    className="btn btn-primary mx-2 rounded-circle"
                    onClick={() =>
                      (window.location.href = `/commandes/view/${r._id}`)
                    }
                  >
                    <i class="bi bi-eye-fill"></i>
                  </button>
                  <button
                    className="btn btn-primary mx-2 rounded-circle"
                    onClick={() =>
                      (window.location.href = `/commandes/edit/${r._id}`)
                    }
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  {/* <button className="btn btn-danger rounded-circle" onClick={() => deletecommande(r._id)}>
                  <i class="bi bi-trash3-fill"></i>
                </button> */}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CommandesListing;
