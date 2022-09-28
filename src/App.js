import * as React from "react";
import { Routes, Route, Link, HashRouter} from "react-router-dom";
import "./App.css";
import French from './french'
import English from './english'
import Dapp from './components/Dapp/dapp'
import Lovefr from "../src/InfoPages/lovefr"
import Findfr from "../src/InfoPages/findfr"
import Keepfr from "../src/InfoPages/keepfr"
import Playfr from "../src/InfoPages/playfr"
import LoveEn from "../src/InfoPages/loveen"
import FindEn from "../src/InfoPages/finden";
import KeepEn from "../src/InfoPages/keepen";
import PlayEn from "../src/InfoPages/playen";

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
        {/* <Route path="/test" element={<Test />} />
        <Route path="/buy-fr" element={<BuyFr />} /> */}
        <Route path="/private" element={<Dapp />} />
      </Routes>
    </div>
  );
}