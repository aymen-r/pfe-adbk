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

const LivreursListing = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("RestaurantListing");
    console.log(props.data);
    setData(props.data);
  }, [props.data]);

  function deleteLivreur(id) {
    API.delete(`/api/produit/${id}`)
      .then((res) => {
        console.log(res);
        window.location.href = "/produits";
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
            <TableCell className="tableCell">CIN</TableCell>
            <TableCell className="tableCell">lieu</TableCell>
            <TableCell className="tableCell">telephone</TableCell>
            <TableCell className="tableCell">zone_de_livraison</TableCell>
            <TableCell className="tableCell">type_de_vehicule</TableCell>
            <TableCell className="tableCell">disponibilite</TableCell>
            <TableCell className="tableCell">evaluation_livreur</TableCell>

            {/* edit and delete */}
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((r) => (
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
              <TableCell className="tableCell">
                {r.nom + " " + r.prenom}
              </TableCell>
              <TableCell className="tableCell">{r.n_cin}</TableCell>
              <TableCell className="tableCell">{r.lieu}</TableCell>
              <TableCell className="tableCell">{r.telephone}</TableCell>
              <TableCell className="tableCell">{r.zone_de_livraison}</TableCell>
              <TableCell className="tableCell">{r.type_de_vehicule}</TableCell>
              <TableCell className="tableCell">{r.disponibilite}</TableCell>
              <TableCell className="tableCell">
                {r.evaluation_livreur}
              </TableCell>
              {/* edit and delete with rounded buttons */}
              <TableCell className="tableCell d-flex">
                <button
                  className="btn btn-primary mx-2 rounded-circle"
                  onClick={() =>
                    (window.location.href = `/livreurs/view/${r._id}`)
                  }
                >
                  <i class="bi bi-eye-fill"></i>
                </button>
                <button
                  className="btn btn-primary mx-2 rounded-circle"
                  onClick={() =>
                    (window.location.href = `/livreurs/edit/${r._id}`)
                  }
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  className="btn btn-danger rounded-circle"
                  onClick={() => deleteLivreur(r._id)}
                >
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

export default LivreursListing;
