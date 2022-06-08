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

const RestaurantListing = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("RestaurantListing");
    console.log(props.data);
    setData(props.data);
  }, [props.data]);

  function deleteproduit(id) {
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
            <TableCell className="tableCell">Nom</TableCell>
            <TableCell className="tableCell">categorie</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Prix</TableCell>
            <TableCell className="tableCell">ingredients</TableCell>
            <TableCell className="tableCell">en_promo</TableCell>
            <TableCell className="tableCell">discount</TableCell>

            {/* edit and delete */}
            <TableCell className="tableCell "></TableCell>
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
              <TableCell className="tableCell">{r.nom}</TableCell>
              <TableCell className="tableCell">{r.categorie}</TableCell>
              <TableCell className="tableCell">{r.description}</TableCell>
              <TableCell className="tableCell">{r.prix}</TableCell>
              <TableCell className="tableCell">{r.ingredients}</TableCell>
              <TableCell className="tableCell">
                {r.en_promo ? "true" : "false"}
              </TableCell>
              <TableCell className="tableCell">{r.discount || 0}</TableCell>
              {/* edit and delete with rounded buttons */}
              <TableCell className="tableCell d-flex">
                <button
                  className="btn btn-primary mx-2 rounded-circle"
                  onClick={() =>
                    (window.location.href = `/produits/view/${r._id}`)
                  }
                >
                  <i class="bi bi-eye-fill"></i>
                </button>
                <button
                  className="btn btn-primary mx-2 rounded-circle"
                  onClick={() =>
                    (window.location.href = `/produits/edit/${r._id}`)
                  }
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  className="btn btn-danger rounded-circle"
                  onClick={() => deleteproduit(r._id)}
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

export default RestaurantListing;
