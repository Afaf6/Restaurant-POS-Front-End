import { useState } from "react";
import Header from "./components/Header/Header";
import Pos from "./components/Pos/Pos";
import BottomNavbar from "./components/Footer/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("POS");
  return (
    <>
    <Header/>
    <Pos activeTab={activeTab}/>
    <BottomNavbar active={activeTab} onChange={setActiveTab} />
    </>
  )

  
}
