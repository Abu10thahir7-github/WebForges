import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';

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
import Header from './Componets/header';
import ServiceDetails from './Componets/subPages/ServiceDetails';
import AdminPage from './Componets/Pages/AdminPage';
import ArticlesPage from './Componets/Pages/ArticlesPage';
import ArticleDetailPage from './Componets/Pages/ArticleDetailPage';
const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return (
      <div className="flex justify-center items-center">
        <LogoLoader />
      </div>
    );
  }

  return (
    <>
      <Cursor className="" isActive={isActive} />
      <div className="navbar-postion-setup">
        <Header />
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
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticleDetailPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
