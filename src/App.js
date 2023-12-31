import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    readCats();
  }, []);

  const [cats, setCats] = useState([]);

  const url=`https://cat-tinder-backend-gy12.onrender.com`

  const readCats = () => {
    fetch(`${url}/cats`)
      .then((response) => response.json())
      .then((payload) => setCats(payload))
      .catch((errors) => console.log("Cat read errors:", errors));
  };

  const createCat = (createdCat) => {
    fetch(`${url}/cats`, {
      body: JSON.stringify(createdCat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readCats())
      .catch((errors) => console.log("Cat create errors:", errors));
  };

  const updateCat = (cat, id) => {
    fetch(`${url}/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readCats())
      .catch((errors) => console.log("Cat update errors:", errors));
  };

  const deleteCat = (id) => {
    fetch(`${url}/cats/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readCats())
      .catch((errors) => console.log("Cat delete errors:", errors));
  };

  return (
    <>
      <Header />
      <div className="app-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catindex" element={<CatIndex cats={cats} />} />
          <Route
            path="/catshow/:id"
            element={<CatShow cats={cats} deleteCat={deleteCat} />}
          />
          <Route path="/catnew" element={<CatNew createCat={createCat} />} />
          <Route
            path="/catedit/:id"
            element={<CatEdit cats={cats} updateCat={updateCat} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
