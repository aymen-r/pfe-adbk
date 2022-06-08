import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewListIcon from "@mui/icons-material/ViewList";
import CampaignIcon from "@mui/icons-material/Campaign";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import GroupIcon from "@mui/icons-material/Group";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const diconnect = (e) => {
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    dispatch({ type: "DARK_MODE", payload: false });
    window.location.reload();
  };

  return (
    <div className="sidebar">
      {/* <div className="top">
        <span className="logo">Foody</span>
      </div> */}
      <hr />
      <div className="center">
        <ul>
          <li onClick={() => (window.location.href = "/")}>
            <DashboardIcon className="icons" />
            <span>Tableau de board</span>
          </li>
          <li onClick={() => (window.location.href = "/commandes")}>
            <ViewListIcon className="icons" />
            <span>Gestion des commande</span>
          </li>
          <li onClick={() => (window.location.href = "/menu")}>
            <RestaurantMenuIcon className="icons" />
            <span>Gestion de Menu</span>
          </li>
          <li onClick={() => (window.location.href = "/produits")}>
            <RestaurantMenuIcon className="icons" />
            <span>Gestion des Produits</span>
          </li>
          <li onClick={() => (window.location.href = "/livreurs")}>
            <DeliveryDiningIcon className="icons" />
            <span>Gestion des livreurs</span>
          </li>
          <li onClick={() => (window.location.href = "/clients")}>
            <GroupIcon className="icons" />
            <span>Gestion des clients</span>
          </li>
          <li onClick={() => (window.location.href = "/reclamations")}>
            <SpatialAudioOffIcon className="icons" />
            <span>Gestion des réclamations</span>
          </li>
          <li onClick={() => (window.location.href = "/evaluations")}>
            <VolunteerActivismIcon className="icons" />
            <span>Gestion des évaluations</span>
          </li>
          <li onClick={diconnect}>
            <LogoutIcon className="icons" />
            <span>Deconnexion</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
