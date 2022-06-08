import "./home.scss";
import Widget from "../../components/widget/Widget";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { CategoryScale } from "chart.js";
import Chart from "../../components/chart/Chart";
// import Chart from "chart.js/auto";

const Home = () => {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  });

  return (
    <div className="home">
      <div className="widgets">
        <div className="widget">
          <div className="left">
            <span className="title">Utilisateurs</span>
            <span className="counter">1469</span>
            <span className="link"></span>
          </div>

          <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon />
              {14.5}%
            </div>
          </div>
        </div>
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>

      <div className="charts">
        <Chart title="Les derniers 6 mois (commandes)" aspect={3 / 1} />
      </div>
    </div>
  );
};

export default Home;
