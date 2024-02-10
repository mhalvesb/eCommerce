import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/header/header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
