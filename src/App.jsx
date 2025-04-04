import { Routes, Route } from "react-router-dom";
import NavBarSidebar from "./Componets/HomePages/NavBarSidebar"; // Ensure the path is correct
import Home from "./Componets/HomePages/Home";
import Services from "./Componets/Pages/Services";
import Projects from "./Componets/Pages/Projects";
import Contact from "./Componets/Pages/Contact";
import Scene1 from "./Componets/Animations/CursorAnimation/Scene1";

import Cursor from "./Componets/Animations/CursorAnimation/Cursor";
import { useState } from "react";
import GradientCursor from "./Componets/Animations/CursorAnimation/GradientCursor";
const App = () => {
     const [isActive, setIsActive] = useState(false);
  return (
    <>
<Cursor isActive={isActive}/>
{/* <GradientCursor isActive={isActive}/> */}
 
      <NavBarSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
