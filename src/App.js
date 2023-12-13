import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import { Routes, Route } from "react-router-dom"

import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)

  const createCat = (createdCat) => {
    console.log("created cat:", createdCat)
  }

  const updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
  }

  return (
    <>
      <Header />
      <div className="app-background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats}/>} />
        <Route path="/catshow/:id" element={<CatShow cats={cats}/>} />
        <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
