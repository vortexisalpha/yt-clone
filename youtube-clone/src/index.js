import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import ReactGA from "react-ga4"

import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/YoutubeContext";

// Custom theme with YouTube Sans font
const theme = extendTheme({
  fonts: {
    heading: "'Roboto', 'YouTube Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    body: "'Roboto', 'YouTube Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#0f0f0f",
        color: "white",
        fontFamily: "'Roboto', 'YouTube Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      },
    },
  },
});

// Only initialize GA if the measurement ID is available
if (process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
