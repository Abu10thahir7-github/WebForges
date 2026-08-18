import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from './app/layout/header';

import EntryLoader from './Componets/Animations/LoadingAnimation';
import Footer from './app/layout/Footer';

// ── Public pages: lazy-loaded so first paint only ships Home's code ──
const Home = lazy(() => import('./pages/Home/Home'));
const ServicesPage = lazy(() => import('./pages/Services/ServicesPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));

const ContactPage = lazy(() => import('./pages/ContactPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));
const ServiceDetails = lazy(() => import('./pages/Services/ServiceDetails/ServiceDetails'));
// const NotFound = lazy(() => import('./Componets/Pages/NotFound'));

// ── Admin: separate chunk, never bundled with public routes, never indexed ──
const AdminPage = lazy(() => import('./admin/AdminPage'));

/**
 * Resets scroll position on every route change (the old code only did this
 * once on mount, so client-side nav between pages kept the previous
 * scroll offset — bad UX and looks broken to users/bots alike).
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Keeps /admin out of search results without needing a robots.txt hack. */
function AdminGuard({ children }) {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {children}
    </>
  );
}

const App = () => {
  return (
    <>
      <div className="navbar-postion-setup">
        <Header />
      </div>

      <ScrollToTop />

      <Suspense fallback={<EntryLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />

          <Route
            path="/admin"
            element={
              <AdminGuard>
                <AdminPage />
              </AdminGuard>
            }
          />

          {/* Catch-all: real pages should never render a client-side-only
              blank screen for bad URLs — that's a soft-404 in Google's eyes. */}
          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <meta name="robots" content="noindex, follow" />
                  <title>Page Not Found | WebForges</title>
                </Helmet>
                {/* <NotFound /> */}
              </>
            }
          />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
