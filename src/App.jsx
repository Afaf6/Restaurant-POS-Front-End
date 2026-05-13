import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Pos from "./components/Pos/Pos";
import BottomNavbar from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

export default function App() {
  const [activeTab, setActiveTab] = useState("POS");

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
        <Route path="/*" element={
          <>
            <Header />
            <Pos activeTab={activeTab} />
            <BottomNavbar active={activeTab} onChange={setActiveTab} />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );

  
}

