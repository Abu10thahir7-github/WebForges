import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import NavBarSidebar from "./Componets/HomePages/NavBarSidebar";
import Cursor from "./Componets/Animations/CursorAnimation/Cursor";
// import GradientCursor from "./Componets/Animations/CursorAnimation/GradientCursor";

// Lazy loaded pages
const Home = lazy(() => import("./Componets/HomePages/Home"));
const Services = lazy(() => import("./Componets/Pages/Services"));
const Projects = lazy(() => import("./Componets/Pages/Projects"));
const Contact = lazy(() => import("./Componets/Pages/Contact"));
const Blog = lazy(() => import("./Componets/Pages/Blog"));
const AboutUs = lazy(() => import("./Componets/Pages/AboutUs"));
const FreeTools = lazy(() => import("./Componets/Pages/FreeTools"));

const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Cursor isActive={isActive} />
      {/* <GradientCursor isActive={isActive} /> */}
      <NavBarSidebar />

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/freetools" element={<FreeTools />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
