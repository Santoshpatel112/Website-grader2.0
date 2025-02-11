import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lighthouse from "./components/Lighthouse.jsx";
import { PageSpeedProvider } from "./Context/context.jsx";
import PerformanceWrapper from "./components/PerformanceWrapper .jsx";
import Contact from "./components/Contact.jsx";

// import PerformanceCard from "./components/PerformanceCard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Lighthouse",
    element: <Lighthouse />,
  },
  {
    path:'/contact',
    element:<Contact/>
  }
 
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageSpeedProvider>
      <RouterProvider router={router} />
      {/* <PerformanceWrapper /> */}
    </PageSpeedProvider> 

  </StrictMode>
  
);
