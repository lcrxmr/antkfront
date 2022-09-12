import * as React from "react";
import { Routes, Route, Link, HashRouter} from "react-router-dom";
import "./App.css";
import French from './french'
import English from './english'
import Test from './responsiveTest'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<French />} />
        <Route path="/eng" element={<English />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}