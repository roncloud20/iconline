import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Staff/Register";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/staff/register" element={<Register/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
