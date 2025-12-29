import React from "react";
import { Outlet } from "react-router-dom";
import FloatingMenu from "./common/floating-menu";
import Footer from "./common/footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <FloatingMenu />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
