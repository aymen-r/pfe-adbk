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

function ProductItem(params) {
  const [data, setData] = useState([]);
  useEffect(() => {
    API.get("/api/produit/" + params.id).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [params.id]);
  return (
    <>
      <TableCell className="tableCell">{data.id}</TableCell>
      <TableCell className="tableCell">{data.nom}</TableCell>
      <TableCell className="tableCell">{data.categorie}</TableCell>
      <TableCell className="tableCell">{data.prix}</TableCell>
      <TableCell className="tableCell">
        {data.en_promo ? "true" : "false"}
      </TableCell>
      <TableCell className="tableCell">{data.discount}</TableCell>
      {/* {params.id} */}
    </>
  );
}

const MenuListing = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(props.data);
    setData(props.data);
  }, [props.data]);

  function deletemenuProduit(id) {
    API.delete("/api/menu-produit/" + id).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
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
            <TableCell className="tableCell">Prix</TableCell>
            <TableCell className="tableCell">en_promo</TableCell>
            <TableCell className="tableCell">discount</TableCell>

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
              <ProductItem id={r.id_produit} />
              {/* edit and delete with rounded buttons */}
              <TableCell className="tableCell">
                <button
                  className="btn btn-danger rounded-circle"
                  onClick={() => deletemenuProduit(r._id)}
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

export default MenuListing;
