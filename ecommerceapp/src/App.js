import {BrowserRouter, Routes, Route} from "react-router-dom";

import Main from "./containers/main/main.js";
import Blusas from "./containers/blusas/blusas.js";
import Calcas from "./containers/calcas/calcas.js";
import Login from "./containers/login/login.js";
import Singup from "./containers/singup/singup.js";
import BlusaBranca from "./containers/roupas/blusabranca/blusabranca.js";
import BlusaPreta from "./containers/roupas/blusapreta/blusapreta.js";
import CalcaPreta from "./containers/roupas/calcapreta/calcapreta.js";
import BlusaTurquesa from "./containers/roupas/blusaturquesa/blusaturquesa.js";


import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/blusas" element={<Blusas/>}></Route>
        <Route path="/calcas" element={<Calcas/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/singup" element={<Singup/>}></Route>
        <Route path="/roupas/blusabranca" element={<BlusaBranca/>}></Route>
        <Route path="/roupas/blusapreta" element={<BlusaPreta/>}></Route>
        <Route path="/roupas/calcapreta" element={<CalcaPreta/>}></Route>
        <Route path="/roupas/blusaflorturquesa" element={<BlusaTurquesa/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
