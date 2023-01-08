import React from "react";
import "./App.css";
import DefaultLayout from "./components/layouts/DefaultLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chapter04 from "./components/chapter-04/Chpater04";

function App() {
  return (
    <DefaultLayout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter-04" element={<Chapter04 />} />
        </Routes>
      </Router>
    </DefaultLayout>
  );
}

export default App;
