import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FloatingMenu from "./common/floating-menu";
import Footer from "./common/footer";
import Header from "./common/header";
import { Box } from "@mui/material";

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

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
