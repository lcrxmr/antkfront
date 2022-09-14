import * as React from "react";
import { Routes, Route, Link, HashRouter} from "react-router-dom";
import "./App.css";
import French from './french'
import English from './english'
import Test from './responsiveTest'
import Lovefr from "./lovefr"
import Findfr from "./findfr"
import Keepfr from "./keepfr"
import Playfr from "./playfr"
import LoveEn from "./loveen"
import FindEn from "./finden";
import KeepEn from "./keepen";
import PlayEn from "./playen";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<French />} />
        <Route path="/eng" element={<English />} />
        <Route path="/love-fr" element={<Lovefr />} />
        <Route path="/find-fr" element={<Findfr />} />
        <Route path="/keep-fr" element={<Keepfr />} />
        <Route path="/play-fr" element={<Playfr />} />
        <Route path="/love-en" element={<LoveEn />} />
        <Route path="/find-en" element={<FindEn />} />
        <Route path="/keep-en" element={<KeepEn />} />
        <Route path="/play-en" element={<PlayEn />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}