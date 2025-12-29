import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Backdrop,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ACCENT_COLOR, lucideIcons } from "./config";
import Logo from "./logo";

const { Home, Users, Briefcase, Cloud, Folder, MessageSquare, Mail, ArrowRight } = lucideIcons;

const MotionBox = motion(Box);

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Microsoft", href: "/microsoft-solutions", icon: Cloud },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Contact", href: "/contact", icon: Mail },
];

const FloatingMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const isActive = (href) => location.pathname === href;

  return (
    <>
      {/* Top Bar with Glass Effect */}
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1.5, sm: 2 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled
            ? `rgba(15, 23, 42, 0.7)`
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? `1px solid rgba(255, 99, 71, 0.2)`
            : "1px solid transparent",
          boxShadow: scrolled
            ? `0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)`
            : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Logo on Top Left */}
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Logo
            variant="default"
            size="medium"
            showText={true}
          />
        </MotionBox>

        {/* Floating Menu Button */}
        <MotionBox
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <IconButton
              onClick={toggleMenu(true)}
              sx={{
                width: { xs: 48, sm: 56 },
                height: { xs: 48, sm: 56 },
                bgcolor: scrolled 
                  ? `rgba(255, 99, 71, 0.2)` 
                  : `${ACCENT_COLOR}`,
                color: scrolled ? "white" : "#0F172A",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                boxShadow: scrolled
                  ? `0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                  : `0 8px 24px ${ACCENT_COLOR}50`,
                border: scrolled
                  ? `2px solid rgba(255, 99, 71, 0.4)`
                  : `2px solid ${ACCENT_COLOR}`,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  bgcolor: scrolled 
                    ? `rgba(255, 99, 71, 0.3)` 
                    : ACCENT_COLOR,
                  color: scrolled ? "white" : "#0F172A",
                  boxShadow: scrolled
                    ? `0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)`
                    : `0 12px 32px ${ACCENT_COLOR}70`,
                  transform: "translateY(-2px)",
                  borderColor: scrolled
                    ? `rgba(255, 99, 71, 0.6)`
                    : ACCENT_COLOR,
                },
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
            </IconButton>
          </motion.div>
        </MotionBox>
      </MotionBox>

      {/* Full Page Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <Backdrop
              open={menuOpen}
              onClick={toggleMenu(false)}
              sx={{
                zIndex: 1299,
                bgcolor: "rgba(15, 23, 42, 0.95)",
                backdropFilter: "blur(12px)",
              }}
            />
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100vw",
                height: "100vh",
                background: `
                  linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%),
                  radial-gradient(circle at 20% 30%, ${ACCENT_COLOR}08 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, #4ECDC4 0%, transparent 50%)
                `,
                color: "white",
                zIndex: 1300,
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <MotionBox
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
          {/* Enhanced Background decorative elements */}
          <MotionBox
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              top: "-10%",
              right: "-10%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${ACCENT_COLOR}20 0%, transparent 70%)`,
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />
          <MotionBox
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            sx={{
              position: "absolute",
              bottom: "-15%",
              left: "-15%",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: `radial-gradient(circle, #4ECDC4 15 0%, transparent 70%)`,
              filter: "blur(90px)",
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${ACCENT_COLOR}05 0%, transparent 70%)`,
              filter: "blur(100px)",
              pointerEvents: "none",
            }}
          />

          {/* Header Section */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              p: { xs: 2, sm: 2.5, md: 3 },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: `linear-gradient(180deg, rgba(255, 99, 71, 0.12) 0%, rgba(255, 99, 71, 0.04) 50%, transparent 100%)`,
              borderBottom: `1px solid ${ACCENT_COLOR}20`,
              backdropFilter: "blur(20px)",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${ACCENT_COLOR}40, transparent)`,
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Logo
                variant="default"
                size="medium"
                showText={true}
                onClick={handleNavClick}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={toggleMenu(false)}
                sx={{
                  width: { xs: 40, sm: 44 },
                  height: { xs: 40, sm: 44 },
                  color: "white",
                  bgcolor: `rgba(255, 99, 71, 0.2)`,
                  border: `2px solid ${ACCENT_COLOR}40`,
                  backdropFilter: "blur(20px)",
                  boxShadow: `0 4px 24px ${ACCENT_COLOR}40, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                  "&:hover": {
                    bgcolor: ACCENT_COLOR,
                    color: "#0F172A",
                    boxShadow: `0 8px 32px ${ACCENT_COLOR}70, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <CloseIcon sx={{ fontSize: { xs: 20, sm: 22 } }} />
              </IconButton>
            </motion.div>
          </Box>

          {/* Navigation List */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              position: "relative",
              zIndex: 2,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              px: { xs: 3, sm: 4, md: 5 },
              py: { xs: 2, sm: 2.5, md: 3 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "640px", md: "720px" },
                pt: { xs: 1, sm: 1.5 },
              }}
            >
              <List sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, sm: 1.2 } }}>
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: index * 0.06,
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                      }}
                    >
                      <ListItem disablePadding>
                        <ListItemButton
                          component={Link}
                          to={link.href}
                          onClick={handleNavClick}
                          sx={{
                            py: { xs: 1.8, sm: 2.2, md: 2.5 },
                            px: { xs: 3, sm: 3.5, md: 4 },
                            borderRadius: "24px",
                            mb: 0.5,
                            border: active
                              ? `2px solid ${ACCENT_COLOR}60`
                              : `2px solid rgba(255, 255, 255, 0.08)`,
                            bgcolor: active
                              ? `rgba(255, 99, 71, 0.18)`
                              : `rgba(255, 255, 255, 0.04)`,
                            backdropFilter: "blur(20px)",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            boxShadow: active
                              ? `0 10px 40px ${ACCENT_COLOR}30, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                              : "0 6px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: active
                                ? `linear-gradient(135deg, ${ACCENT_COLOR}25 0%, transparent 100%)`
                                : `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%)`,
                              opacity: active ? 1 : 0,
                              transition: "opacity 0.4s ease",
                            },
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: active ? "0" : "-100%",
                              width: "5px",
                              height: "100%",
                              background: `linear-gradient(180deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}80, transparent)`,
                              borderRadius: "0 4px 4px 0",
                              transition: "left 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                              boxShadow: `2px 0 8px ${ACCENT_COLOR}50`,
                            },
                            "&:hover": {
                              bgcolor: `rgba(255, 99, 71, 0.15)`,
                              transform: "translateX(8px) scale(1.01)",
                              borderColor: `${ACCENT_COLOR}70`,
                              boxShadow: `0 14px 48px ${ACCENT_COLOR}35, inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
                              "&::before": {
                                opacity: 1,
                              },
                              "&::after": {
                                left: "0",
                              },
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: { xs: 2.5, sm: 3, md: 3.5 },
                              width: "100%",
                              position: "relative",
                              zIndex: 1,
                            }}
                          >
                            <MotionBox
                              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                              transition={{ duration: 0.3 }}
                              sx={{
                                p: { xs: 1.4, sm: 1.8, md: 2 },
                                borderRadius: "16px",
                                bgcolor: active
                                  ? `${ACCENT_COLOR}40`
                                  : `rgba(255, 99, 71, 0.15)`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s ease",
                                boxShadow: active
                                  ? `0 6px 20px ${ACCENT_COLOR}40, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                                  : `0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                                border: `1px solid ${active ? `${ACCENT_COLOR}50` : "rgba(255, 255, 255, 0.1)"}`,
                              }}
                            >
                              <Icon
                                size={24}
                                color={active ? ACCENT_COLOR : "#A0B3D9"}
                              />
                            </MotionBox>
                            <ListItemText
                              primary={link.name}
                              primaryTypographyProps={{
                                sx: {
                                  fontWeight: active ? 700 : 600,
                                  fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.3rem" },
                                  fontFamily: "'DM Sans', sans-serif",
                                  color: active ? ACCENT_COLOR : "white",
                                  transition: "all 0.3s ease",
                                  letterSpacing: "0.01em",
                                  textShadow: active ? `0 0 20px ${ACCENT_COLOR}30` : "none",
                                },
                              }}
                            />
                            {active && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                              >
                                <Box
                                  sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    bgcolor: ACCENT_COLOR,
                                    boxShadow: `0 0 24px ${ACCENT_COLOR}80, 0 0 12px ${ACCENT_COLOR}60`,
                                  }}
                                />
                              </motion.div>
                            )}
                            {!active && (
                              <motion.div
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ArrowRight
                                  size={18}
                                  color="#A0B3D9"
                                  style={{ opacity: 0.6 }}
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
          </Box>

              </MotionBox>
            </MotionBox>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMenu;

