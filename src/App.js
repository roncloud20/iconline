import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Staff/Register";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/staff/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
