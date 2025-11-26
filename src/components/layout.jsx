import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/header";
import Footer from "./common/footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ mt: 8 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
