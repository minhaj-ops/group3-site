import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
// import About from "./pages/about";

import { ACCENT_COLOR } from "./components/common/config";
import Layout from "./components/layout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: ACCENT_COLOR },
    background: { default: "#0F172A", paper: "#1E293B" },
    text: { primary: "#F8FAFC", secondary: "#94A3B8" },
  },
  typography: { fontFamily: "Roboto, Arial, sans-serif" },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${ACCENT_COLOR} #1E293B`,
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: ACCENT_COLOR,
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": { backgroundColor: "#1E293B" },
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
            {/* <Route path="about" element={<About />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
