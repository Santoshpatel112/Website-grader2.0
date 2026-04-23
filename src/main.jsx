import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { PageSpeedProvider } from "./Context/context.jsx";
import { LanguageProvider } from "./Context/LanguageContext.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <PageSpeedProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PageSpeedProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
