import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/styles.scss";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

import Produits from "./pages/produits";
import NewP from "./pages/produits/New";
import EditP from "./pages/produits/Edit";
import ViewP from "./pages/produits/View";

import Livreurs from "./pages/livreurs";
import NewL from "./pages/livreurs/New";
import EditL from "./pages/livreurs/Edit";
import ViewL from "./pages/livreurs/View";

import Clients from "./pages/clients";
import NewC from "./pages/clients/New";
import EditC from "./pages/clients/Edit";
import ViewC from "./pages/clients/View";

import Menu from "./pages/menu";
import NewM from "./pages/menu/New";

import Commandes from "./pages/commandes";
import NewCommande from "./pages/commandes/New";
import EditCommande from "./pages/commandes/Edit";
import ViewCommande from "./pages/commandes/View";
import Navbar2 from "./components/Navbar2";

import Reclamations from "./pages/reclamations";
import Evaluations from "./pages/evaluations";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  // states of email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //isLoggedIn state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // use effect that check if the user is logged in with email and password
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    const password = JSON.parse(localStorage.getItem("password"));
    if (!email || !password) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mx-auto mt-5">
              <div
                className="card card-body mt-5"
                style={{ borderRadius: "10px", border: "1px solid orange" }}
              >
                <h1 className="text-center mb-3">
                  <i className="fas fa-sign-in-alt"></i> Connexion
                </h1>
                <form>
                  <div className="form-group m-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Entrer votre email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group m-3">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Entrer votre mot de passe"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* password loss */}
                  <div className="form-group m-3">
                    <a className="text" href="#">
                      Mot de passe oublié ?
                    </a>
                  </div>

                  <div className="d-flex justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block m-3"
                      onClick={() => {
                        localStorage.setItem("email", JSON.stringify(email));
                        localStorage.setItem(
                          "password",
                          JSON.stringify(password)
                        );
                        setIsLoggedIn(true);
                      }}
                    >
                      Connexion
                    </button>
                    <button
                      type="submit"
                      className="btn btn-danger btn-block m-3"
                    >
                      Login With Gmail
                      <i class="bi bi-forward-fill"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={darkMode ? "app dark" : "app"}>
          <Navbar2 />
          <div className="d-flex">
            <Sidebar />
            <div className="homeContainer">
              <div>
                <BrowserRouter>
                  <Routes>
                    <Route path="/">
                      <Route index element={<Home />} />
                      <Route path="produits">
                        <Route
                          index
                          element={<Produits id="6297540acea63da0a132f665" />}
                        />
                        <Route
                          path="new"
                          element={<NewP title="Add New produit" />}
                        />
                        <Route
                          path="edit/:id"
                          element={<EditP title="edit produit" />}
                        />
                        <Route
                          path="view/:id"
                          element={<ViewP title="view produit" />}
                        />
                      </Route>
                      <Route path="livreurs">
                        <Route index element={<Livreurs />} />
                        <Route
                          path="new"
                          element={<NewL title="Add New livreur" />}
                        />
                        <Route
                          path="edit/:id"
                          element={<EditL title="edit livreur" />}
                        />
                        <Route
                          path="view/:id"
                          element={<ViewL title="View livreur" />}
                        />
                      </Route>
                      <Route path="clients">
                        <Route index element={<Clients />} />
                        <Route
                          path="new"
                          element={<NewC title="Add New client" />}
                        />
                        <Route
                          path="edit/:id"
                          element={<EditC title="edit client" />}
                        />
                        <Route
                          path="view/:id"
                          element={<ViewC title="view client" />}
                        />
                      </Route>
                      <Route path="menu">
                        <Route
                          index
                          element={<Menu id="6297540acea63da0a132f665" />}
                        />
                        <Route
                          path="new/:id"
                          element={<NewM title="Add New product to Menu" />}
                        />
                      </Route>
                      <Route path="commandes">
                        <Route
                          index
                          element={<Commandes id="6297540acea63da0a132f665" />}
                        />
                        <Route
                          path="new"
                          element={
                            <NewCommande
                              id="6297540acea63da0a132f665"
                              title="Add New product to Menu"
                            />
                          }
                        />
                        <Route
                          path="edit/:id"
                          element={<EditCommande title="edit commande" />}
                        />
                        <Route
                          path="view/:id"
                          element={<ViewCommande title="view commande" />}
                        />
                      </Route>
                      <Route path="reclamations">
                        <Route index element={<Reclamations />} />
                      </Route>
                      <Route path="evaluations">
                        <Route index element={<Evaluations />} />
                      </Route>
                    </Route>
                  </Routes>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
