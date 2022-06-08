import React from "react";
import MenuListing from "./MenuListing/Table";
import { useEffect, useState } from "react";
import API from "../../API";

const Menu = (props) => {
  const [produits, setProduits] = useState([]);
  const [idmenu, setIdmenu] = useState("");

  useEffect(async () => {
    console.log(props.id);
    await API.get("/api/menu/findbyidresto/" + props.id).then(async (res) => {
      console.log(res.data);
      setIdmenu(res.data._id);
      await API.get("/api/menu-produit/findallbymenuid/" + res.data._id).then(
        async (resn) => {
          console.log(resn.data);
          setProduits(resn.data);
        }
      );
    });
  }, [props.id]);

  useEffect(async () => {}, [props.id]);

  return (
    <React.Fragment>
      <div className="m-2 d-flex justify-content-center">
        <h1>Menu</h1>
      </div>
      {/* button in flex div in the end of : create new */}
      <div className="mx-3 d-flex justify-content-end">
        <button
          className="btn btn-secondary"
          onClick={() => (window.location.href = "/menu/new/" + idmenu)}
        >
          Ajouter nouveau
        </button>
      </div>
      {/* table of restaurants */}
      <div className="mx-3 d-flex justify-content-center">
        <MenuListing data={produits} />
      </div>
      {/* button of submit with m-3 */}
    </React.Fragment>
  );
};

export default Menu;
