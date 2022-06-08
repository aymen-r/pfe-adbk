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

  function deleteRestaurant(id) {
    console.log("deleteRestaurant");
    console.log(id);
    API.delete(`/api/restaurant/${id}`)
      .then((res) => {
        console.log(res);
        window.location.href = "/restaurants";
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
            <TableCell className="tableCell">Gerant</TableCell>
            <TableCell className="tableCell">Matricule Fiscale</TableCell>
            <TableCell className="tableCell">Date de Creation</TableCell>
            <TableCell className="tableCell">Adresse</TableCell>
            <TableCell className="tableCell">telephone</TableCell>
            <TableCell className="tableCell">evaluation_restaurant</TableCell>
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
              <TableCell className="tableCell">{r.nom_resto}</TableCell>
              <TableCell className="tableCell">{r.nom_gerant}</TableCell>
              <TableCell className="tableCell">{r.matricule_fiscale}</TableCell>
              <TableCell className="tableCell">
                {r.date_de_convention}
              </TableCell>
              <TableCell className="tableCell">{r.adresse}</TableCell>
              <TableCell className="tableCell">{r.telephone}</TableCell>
              <TableCell className="tableCell">
                {r.evaluation_restaurant === 1
                  ? "★"
                  : r.evaluation_restaurant === 2
                  ? "★★"
                  : r.evaluation_restaurant === 3
                  ? "★★★"
                  : r.evaluation_restaurant === 4
                  ? "★★★★"
                  : r.evaluation_restaurant === 5
                  ? "★★★★★"
                  : "☆"}
              </TableCell>
              {/* edit and delete with rounded buttons */}
              <TableCell className="tableCell d-flex">
                <button
                  className="btn btn-primary mx-2 rounded-circle"
                  onClick={() =>
                    (window.location.href = `/restaurants/view/${r._id}`)
                  }
                >
                  <i class="bi bi-eye-fill"></i>
                </button>
                <button
                  className="btn btn-primary mx-2 rounded-circle"
                  onClick={() =>
                    (window.location.href = `/restaurants/edit/${r._id}`)
                  }
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  className="btn btn-secondary rounded-circle"
                  onClick={() => deleteRestaurant(r._id)}
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
