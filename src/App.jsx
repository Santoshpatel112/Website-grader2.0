import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import WebsiteGrader from "./components/WebsiteGrader";
import Lighthouse from "./components/Lighthouse";
import Contact from "./components/Contact";
import Services from "./components/Servicepage";
import NavControls from "./components/NavControls";
import CursorEffect from "./components/CursorEffect";
import { useLanguage } from "./Context/LanguageContext";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <CursorEffect />
      <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
        {/* Navigation */}
        <nav className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
          <div className="container-custom">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
                  {t("title")}
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="nav-link">{t("nav_home")}</Link>
                <Link to="/lighthouse" className="nav-link">{t("nav_lighthouse")}</Link>
                <Link to="/cms" className="nav-link">{t("nav_services")}</Link>
                <Link to="/contact" className="nav-link">{t("nav_contact")}</Link>
                <NavControls />
              </div>

              {/* Mobile controls */}
              <div className="md:hidden flex items-center gap-2">
                <NavControls />
                <button
                  className="btn-secondary p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 space-y-4 animate-in slide-in-from-top duration-300">
                <Link to="/" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("nav_home")}</Link>
                <Link to="/lighthouse" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("nav_lighthouse")}</Link>
                <Link to="/cms" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("nav_services")}</Link>
                <Link to="/contact" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("nav_contact")}</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-grow">
          <div className="container-custom py-8">
            <Routes>
              <Route path="/" element={<WebsiteGrader />} />
              <Route path="/lighthouse" element={<Lighthouse />} />
              <Route path="/cms" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-card/80 backdrop-blur-lg border-t border-border">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t("title")}</h3>
                <p className="text-muted-foreground">{t("footerDesc")}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t("quickLinks")}</h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="nav-link">{t("nav_home")}</Link></li>
                  <li><Link to="/lighthouse" className="nav-link">{t("nav_lighthouse")}</Link></li>
                  <li><Link to="/cms" className="nav-link">{t("nav_services")}</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t("footerContact")}</h3>
                <p className="text-muted-foreground">{t("footerContactDesc")}</p>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  {t("contactUsBtn")}
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} {t("title")}. {t("allRights")}</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;