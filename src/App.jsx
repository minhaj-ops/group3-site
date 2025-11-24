import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/home";
import { ACCENT_COLOR } from "./components/common/config";
import Header from "./components/common/header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: ACCENT_COLOR,
    },
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${ACCENT_COLOR} #1E293B`,
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: ACCENT_COLOR,
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#1E293B",
          },
        },
      },
    },
    MuiBox: {
      defaultProps: {
        sx: (theme) => ({
          "&.slate\\.900": { bgcolor: theme.palette.background.default },
          "&.slate\\.800": { bgcolor: theme.palette.background.paper },
          "&.slate\\.700": { bgcolor: "#334155" },
        }),
      },
    },
  },
});

export default function App() {
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 64;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight + 1,
        behavior: "smooth",
      });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Home handleNavClick={handleNavClick} />
    </ThemeProvider>
  );
}
