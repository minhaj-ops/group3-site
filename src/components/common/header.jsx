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
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ACCENT_COLOR, lucideIcons } from "../common/config";

const { Home, Users, Briefcase, Cloud, Folder, MessageSquare, Mail, ArrowRight } = lucideIcons;

const MotionBox = motion(Box);

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Microsoft Solutions", href: "/microsoft-solutions", icon: Cloud },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Testimonials", href: "/testimonials", icon: MessageSquare },
  { name: "Contact", href: "/contact", icon: Mail },
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
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{
        width: "100vw",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT_COLOR}15 0%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT_COLOR}10 0%, transparent 70%)`,
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      {/* Header Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: 2.5,
          pb: 1.5,
          background: `linear-gradient(135deg, ${ACCENT_COLOR}10 0%, transparent 100%)`,
          borderBottom: `1px solid ${ACCENT_COLOR}20`,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            component={Link}
            to="/"
            onClick={handleNavClick}
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              letterSpacing: ".02rem",
              background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
            }}
          >
            Group3 Co
          </Typography>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{
                color: "white",
                bgcolor: `${ACCENT_COLOR}20`,
                border: `1px solid ${ACCENT_COLOR}40`,
                "&:hover": {
                  bgcolor: ACCENT_COLOR,
                  color: "#0F172A",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </motion.div>
        </Box>
        <Typography
          variant="caption"
          sx={{
            color: "#A0B3D9",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Navigation Menu
        </Typography>
      </Box>

      {/* Navigation List */}
      <Box
        sx={{
          flex: 1,
          overflowY: "visible",
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List sx={{ px: 3, pt: 1.5, pb: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 0.5 }}>
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <ListItem
                  disablePadding
                  sx={{
                    mb: 0.5,
                  }}
                >
                  <ListItemButton
                    component={Link}
                    to={link.href}
                    onClick={handleNavClick}
                    sx={{
                      py: 1.5,
                      px: 2.5,
                      borderRadius: "16px",
                      mb: 0.3,
                      borderLeft: active
                        ? `4px solid ${ACCENT_COLOR}`
                        : "4px solid transparent",
                      bgcolor: active
                        ? `${ACCENT_COLOR}20`
                        : "transparent",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: active
                          ? `linear-gradient(135deg, ${ACCENT_COLOR}15 0%, transparent 100%)`
                          : "transparent",
                        opacity: active ? 1 : 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        bgcolor: `${ACCENT_COLOR}15`,
                        transform: "translateX(5px)",
                        "&::before": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        width: "100%",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: "12px",
                          bgcolor: active
                            ? `${ACCENT_COLOR}30`
                            : `${ACCENT_COLOR}10`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Icon
                          size={20}
                          color={active ? ACCENT_COLOR : "#A0B3D9"}
                        />
                      </Box>
                      <ListItemText
                        primary={link.name}
                        primaryTypographyProps={{
                          sx: {
                            fontWeight: active ? 700 : 500,
                            fontSize: "1rem",
                            fontFamily: "'DM Sans', sans-serif",
                            color: active ? ACCENT_COLOR : "white",
                            transition: "all 0.3s ease",
                          },
                        }}
                      />
                      {active && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: ACCENT_COLOR,
                              boxShadow: `0 0 10px ${ACCENT_COLOR}60`,
                            }}
                          />
                        </motion.div>
                      )}
                    </Box>
                  </ListItemButton>
                </ListItem>
              </motion.div>
            );
          })}
        </List>
      </Box>

      {/* Footer Section with CTA */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: 2.5,
          pt: 1.5,
          borderTop: `1px solid ${ACCENT_COLOR}20`,
          background: `linear-gradient(180deg, transparent 0%, ${ACCENT_COLOR}05 100%)`,
          flexShrink: 0,
        }}
      >
        <Divider
          sx={{
            mb: 2,
            borderColor: `${ACCENT_COLOR}20`,
          }}
        />
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
            endIcon={<ArrowRight size={18} />}
            sx={{
              bgcolor: ACCENT_COLOR,
              color: "#0F172A",
              py: 1.5,
              fontWeight: 700,
              textTransform: "none",
              borderRadius: "16px",
              fontSize: "1rem",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: `0 6px 20px ${ACCENT_COLOR}50`,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: ACCENT_COLOR,
                boxShadow: `0 8px 30px ${ACCENT_COLOR}70`,
                transform: "translateY(-2px)",
              },
            }}
          >
            Get in Touch
          </Button>
        </motion.div>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 2,
            color: "#A0B3D9",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
          }}
        >
          Let's build something amazing together
        </Typography>
      </Box>
    </MotionBox>
  );

  return (
    <>
      <AppBar
        position="fixed"
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          opacity: drawerOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
          pointerEvents: drawerOpen ? "none" : "auto",
          visibility: drawerOpen ? "hidden" : "visible",
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
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        PaperProps={{
          sx: {
            width: "100vw",
            maxWidth: "100vw",
            bgcolor: "#0F172A",
            color: "white",
            borderRight: `2px solid ${ACCENT_COLOR}40`,
            boxShadow: `-4px 0 24px rgba(0, 0, 0, 0.5), 0 0 40px ${ACCENT_COLOR}20`,
            background: `
              linear-gradient(180deg, #0F172A 0%, #1E293B 100%),
              radial-gradient(circle at top right, ${ACCENT_COLOR}10 0%, transparent 60%)
            `,
          },
        }}
        SlideProps={{
          timeout: 300,
        }}
      >
        {drawerList}
      </Drawer>
    </>
  );
};

export default Header;
