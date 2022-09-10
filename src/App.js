import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import French from './french'
import English from './english'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<French />} />
        <Route path="/eng" element={<English />} />
      </Routes>
    </div>
  );
}