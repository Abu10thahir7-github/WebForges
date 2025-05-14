import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';

import NavBarSidebar from './Componets/HomePages/NavBarSidebar';
import Cursor from './Componets/Animations/CursorAnimation/Cursor';
import ProjectPage from './Componets/Pages/ProjectPage';
import ServicesPage from './Componets/Pages/ServicesPage';
import ContactPage from './Componets/Pages/ContactPage';
import Footer from './Componets/HomePages/Footer';
// import GradientCursor from "./Componets/Animations/CursorAnimation/GradientCursor";

// Lazy loaded pages
const Home = lazy(() => import('./Componets/HomePages/Home'));
const Services = lazy(() => import('./Componets/HomePages/Services'));
const Projects = lazy(() => import('./Componets/HomePages/Projects'));
const Contact = lazy(() => import('./Componets/HomePages/Contact'));
const Blog = lazy(() => import('./Componets/Pages/Blog'));
const AboutUs = lazy(() => import('./Componets/Pages/AboutUs'));
const FreeTools = lazy(() => import('./Componets/HomePages/FreeTools'));

const App = () => {
  const [isActive, setIsActive] = useState(false);



  return (
    <>
      <Cursor className="" isActive={isActive} />
      {/* <GradientCursor isActive={isActive} /> */}
      <div className="navbar-postion-setup">
        <NavBarSidebar />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:.2s]"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:.4s]"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/freetools" element={<FreeTools />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
