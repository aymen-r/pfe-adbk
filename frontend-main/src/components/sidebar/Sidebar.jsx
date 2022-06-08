import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CampaignIcon from "@mui/icons-material/Campaign";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import GroupIcon from "@mui/icons-material/Group";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LogoutIcon from "@mui/icons-material/Logout";

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      {/* <div className="top">
        <span className="logo">Foody</span>
      </div> */}
      {/* <hr /> */}
      <div className="center">
        <ul>
          <li onClick={() => (window.location.href = "/")}>
            <DashboardIcon className="icons" />
            <span>Tableau de board</span>
          </li>
          <li>
            <CampaignIcon className="icons" />
            <span>Gestion des publicités</span>
          </li>
          <li onClick={() => (window.location.href = "/restaurants")}>
            <RestaurantMenuIcon className="icons" />
            <span>Gestion des restaurants</span>
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
          <li
            onClick={() => {
              // logout function
              localStorage.removeItem("email");
              localStorage.removeItem("password");
              window.location.href = "/";
            }}
          >
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
