import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import MicrosoftSolutions from "./pages/microsoft-solutions";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsAndConditions from "./pages/terms-and-conditions";

import { ACCENT_COLOR } from "./components/common/config";
import Layout from "./components/layout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: ACCENT_COLOR },
    background: { default: "#0F172A", paper: "#1E293B" },
    text: { primary: "#F8FAFC", secondary: "#94A3B8" },
  },
  typography: {
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${ACCENT_COLOR} #1E293B`,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { width: "10px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: ACCENT_COLOR,
            borderRadius: "5px",
            border: "2px solid #1E293B",
          },
          "&::-webkit-scrollbar-track": { 
            backgroundColor: "#1E293B",
          },
        },
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: "-0.01em",
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="microsoft-solutions" element={<MicrosoftSolutions />} />
            <Route path="projects" element={<Projects />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
