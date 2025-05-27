import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import WebsiteGrader from "./components/WebsiteGrader";
import Lighthouse from "./components/Lighthouse";
import { PageSpeedProvider } from "./Context/context";
import Contact from './components/Contact';
import Services from "./components/Servicepage";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <PageSpeedProvider>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Navigation */}
        <nav className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
          <div className="container-custom">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
                  Website Grader
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/lighthouse" className="nav-link">
                  Lighthouse
                </Link>
                <Link to="/cms" className="nav-link">
                  Services
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  className="btn-secondary p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
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
                <Link 
                  to="/" 
                  className="nav-link block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/lighthouse" 
                  className="nav-link block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Lighthouse
                </Link>
                <Link 
                  to="/cms" 
                  className="nav-link block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/contact" 
                  className="nav-link block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
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
                <h3 className="text-xl font-semibold">Website Grader</h3>
                <p className="text-muted-foreground">
                  Analyze and improve your website's performance with our comprehensive tools.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/lighthouse" className="nav-link">
                      Lighthouse
                    </Link>
                  </li>
                  <li>
                    <Link to="/cms" className="nav-link">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact</h3>
                <p className="text-muted-foreground">
                  Have questions? Reach out to us for support and inquiries.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Contact Us
                  <svg 
                    className="ml-2 h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Website Grader. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageSpeedProvider>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WebsiteGrader from "./components/WebsiteGrader";
// import Lighthouse from "./components/Lighthouse";
// import { PageSpeedProvider } from "./Context/context";
// import Servicespage from "./components/Servicepage";

// function App() {
//   return (
//     <PageSpeedProvider>
//       <Router>  {/* Make sure Router is wrapping the Routes */}
//         <div>
//           <Routes>
//             <Route path="/" element={<WebsiteGrader />} />
//             <Route path="/lighthouse" element={<Lighthouse />} />
//             <Route path="/services" element={<Servicespage />} />
//           </Routes>
//         </div>
//       </Router>
//     </PageSpeedProvider>
//   );
// }

// export default App;