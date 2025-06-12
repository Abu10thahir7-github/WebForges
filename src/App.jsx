import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';

import NavBarSidebar from './Componets/HomePages/NavBarSidebar';
import Cursor from './Componets/Animations/CursorAnimation/Cursor';
import ProjectPage from './Componets/Pages/ProjectPage';
import ServicesPage from './Componets/Pages/ServicesPage';
import ContactPage from './Componets/Pages/ContactPage';
import Footer from './Componets/HomePages/Footer';

import Home from './Componets/HomePages/Home';
import Services from './Componets/HomePages/Services';
import Projects from './Componets/HomePages/Projects';
import Contact from './Componets/HomePages/Contact';
import Blog from './Componets/Pages/Blog';
import AboutUs from './Componets/Pages/AboutUs';
import FreeTools from './Componets/HomePages/FreeTools';
import EntryLoader from './Componets/Animations/LoadingAnimation';
import LogoLoader from './Componets/Animations/LogoAniamtion';
import Pricing from './Componets/Pages/Pricing';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return (
      <div className="flex justify-center items-center">
       <LogoLoader/>
      </div>
    );
  }

  return (
    <>
      <Cursor className="" isActive={isActive} />
      <div className="navbar-postion-setup">
        <NavBarSidebar />
      </div>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/freetools" element={<FreeTools />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>


      <Footer />
    </>
  );
};

export default App;
