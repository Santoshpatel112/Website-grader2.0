import React from "react";
import { Routes, Route } from "react-router-dom";
import WebsiteGrader from "./components/WebsiteGrader";
import Lighthouse from "./components/Lighthouse";
import { PageSpeedProvider } from "./Context/context";
import PerformanceWrapper from "./components/PerformanceWrapper ";
import Contact from './components/Contact'
import Services from "./components/Servicepage";
function App() {
  console.log("App Component Rendering");
  return (
    <PageSpeedProvider>
      <div>
        <Routes>
          <Route path="/" element={<WebsiteGrader />} />
          <Route path="/lighthouse" element={<Lighthouse />} />
          <Route path="/cms" element={<Services/>} />
          <Route path="/contact"  element={<Contact/>}/>
        </Routes>
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