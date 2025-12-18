import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ACCENT_COLOR } from "../common/config";

const MotionBox = motion(Box);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavClick = () => {
    setDrawerOpen(false);
  };

  const isActive = (href) => location.pathname === href;

  const drawerList = (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 280 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 1.5,
        }}
      >
        <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/"
        onClick={handleNavClick}
        sx={{
          textAlign: "center",
          display: "block",
          mb: 3,
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          letterSpacing: ".02rem",
          color: ACCENT_COLOR,
          textDecoration: "none",
        }}
      >
        Group3 Co
      </Typography>

      <List>
        {navLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to={link.href}
                onClick={handleNavClick}
                sx={{
                  py: 1.5,
                  borderLeft: isActive(link.href)
                    ? `3px solid ${ACCENT_COLOR}`
                    : "3px solid transparent",
                  bgcolor: isActive(link.href) ? `${ACCENT_COLOR}15` : "transparent",
                  "&:hover": {
                    bgcolor: `${ACCENT_COLOR}15`,
                  },
                }}
              >
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: isActive(link.href) ? 700 : 500,
                      fontSize: "1.1rem",
                      color: isActive(link.href) ? ACCENT_COLOR : "white",
                      "&:hover": { color: ACCENT_COLOR },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
        <ListItem sx={{ px: 2, pt: 3 }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: "100%" }}
          >
            <Button
              variant="contained"
              fullWidth
              component={Link}
              to="/contact"
              onClick={handleNavClick}
              sx={{
                bgcolor: ACCENT_COLOR,
                color: "#0F172A",
                py: 1.2,
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "50px",
                fontSize: "1rem",
                boxShadow: `0 4px 15px ${ACCENT_COLOR}40`,
              }}
            >
              Get in Touch
            </Button>
          </motion.div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={{
          bgcolor: scrolled ? "rgba(15, 23, 42, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.4)"
            : "0 4px 15px rgba(0, 0, 0, 0.2)",
          borderBottom: scrolled
            ? `1px solid ${ACCENT_COLOR}20`
            : "1px solid transparent",
          transition: "all 0.3s ease-in-out",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1280px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 3 },
            py: scrolled ? 0.5 : 1,
            transition: "padding 0.3s ease",
          }}
        >
          {/* Logo */}
          <MotionBox
            component={Link}
            to="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                letterSpacing: ".02rem",
                color: "white",
                textDecoration: "none",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  bgcolor: ACCENT_COLOR,
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
                "&:hover": { color: ACCENT_COLOR },
              }}
            >
              Group3 Co
            </Typography>
          </MotionBox>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack direction="row" spacing={1}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Button
                    component={Link}
                    to={link.href}
                    sx={{
                      my: 2,
                      px: 2,
                      color: isActive(link.href) ? ACCENT_COLOR : "white",
                      display: "block",
                      textTransform: "none",
                      fontWeight: isActive(link.href) ? 700 : 500,
                      fontSize: "0.95rem",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        bottom: 8,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: isActive(link.href) ? "60%" : "0%",
                        height: "2px",
                        bgcolor: ACCENT_COLOR,
                        borderRadius: "2px",
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        color: ACCENT_COLOR,
                        bgcolor: "transparent",
                        "&::before": {
                          width: "60%",
                        },
                      },
                    }}
                  >
                    {link.name}
                  </Button>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Mobile Layout */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              color="inherit"
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                letterSpacing: ".02rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Group3 Co
            </Typography>

            <Box sx={{ width: 48 }} />
          </Box>

          {/* CTA Button */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  bgcolor: ACCENT_COLOR,
                  color: "#0F172A",
                  borderRadius: "50px",
                  fontWeight: "bold",
                  py: 1,
                  px: 3,
                  textTransform: "none",
                  boxShadow: `0 4px 20px ${ACCENT_COLOR}50`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: ACCENT_COLOR,
                    boxShadow: `0 6px 25px ${ACCENT_COLOR}70`,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Get in Touch
              </Button>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "#0F172A",
            color: "white",
            borderRight: `2px solid ${ACCENT_COLOR}`,
            backgroundImage: `radial-gradient(circle at top right, ${ACCENT_COLOR}10 0%, transparent 50%)`,
          },
        }}
      >
        {drawerList}
      </Drawer>
    </>
  );
};

export default Header;
