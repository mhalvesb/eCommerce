import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./containers/main/main.js";
import Blusas from "./containers/blusas/blusas.js";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/blusas" element={<Blusas/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
