import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";



function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
