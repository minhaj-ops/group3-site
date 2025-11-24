import React from "react";
import Box from "@mui/material/Box";
import Header from "./common/header";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#0F172A",
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
