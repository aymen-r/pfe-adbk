
const express = require("express");
const cors = require("cors");
const app = express();
require('./config/db');

// import all routes from routes folder
const menuProduitRoutes = require("./routes/menu-produit.route");
const menuRoutes = require("./routes/menu.route");
const produitRoutes = require("./routes/produit.route");
const reclamationRoutes = require("./routes/reclamation.route");
const commandeRoutes = require("./routes/commande.route");
const clientRoutes = require("./routes/client.route");
const restaurantRoutes = require("./routes/restaurant.route");
const livreurRoutes = require("./routes/livreur.route");
const evaluationRoutes = require("./routes/evaluation.route");

const corsOptions = { origin: ["http://localhost:3000","http://localhost:3001"], credentials: true };

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/menu-produit", menuProduitRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/produit", produitRoutes);
app.use("/api/reclamation", reclamationRoutes);
app.use("/api/commande", commandeRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/livreur", livreurRoutes);
app.use("/api/evaluation", evaluationRoutes);


// simple route
app.get("/", (req, res) => { res.json({ message: "welcome to my project." }); });

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});