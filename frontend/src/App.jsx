import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar
        content={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete/:id" element={<Delete />} />
          </Routes>
        }
      />
    </>
  );
}

export default App;
