import {BrowserRouter, Routes, Route} from "react-router-dom";

import Main from "./containers/main/main.js";
import Blusas from "./containers/blusas/blusas.js";
import Calcas from "./containers/calcas/calcas.js";
import Roupas from "./containers/roupas/blusabranca/blusabranca.js";


import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/blusas" element={<Blusas/>}></Route>
        <Route path="/calcas" element={<Calcas/>}></Route>
        <Route path="/roupas/blusabranca" element={<Roupas/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
