import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/styles.scss";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

import Restaurants from "./pages/restaurants";
import New from "./pages/restaurants/New";
import Edit from "./pages/restaurants/Edit";
import View from "./pages/restaurants/View";

import Livreurs from "./pages/livreurs";
import NewL from "./pages/livreurs/New";
import EditL from "./pages/livreurs/Edit";
import ViewL from "./pages/livreurs/View";

import Clients from "./pages/clients";
import NewC from "./pages/clients/New";
import EditC from "./pages/clients/Edit";
import ViewC from "./pages/clients/View";

import Reclamations from "./pages/reclamations";
import Evaluations from "./pages/evaluations";
import Navbar2 from "./components/Navbar2";

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
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div
                className="card card-body mt-5 shadow border"
                style={{ borderRadius: "15px" }}
              >
                <h1 className="text-center m-5">
                  <i className="fas fa-sign-in-altmt"></i> Connexion Super Admin
                </h1>
                <form>
                  <div className="form-group m-4">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Entrer votre email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group m-4">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Entrer votre mot de passe"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
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
                      <Route path="restaurants">
                        <Route index element={<Restaurants />} />
                        <Route
                          path="new"
                          element={<New title="Add New Restaurant" />}
                        />
                        <Route
                          path="edit/:id"
                          element={<Edit title="edit Restaurant" />}
                        />
                        <Route
                          path="view/:id"
                          element={<View title="View Restaurant" />}
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
                          element={<ViewL title="view livreur" />}
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
