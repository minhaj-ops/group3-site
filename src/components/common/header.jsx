import React, { useState } from "react";
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
import { ACCENT_COLOR } from "../common/config";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const drawerList = (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 250 }}
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
        component="a"
        href="/"
        onClick={handleNavClick}
        sx={{
          textAlign: "center",
          display: "block",
          mb: 3,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: ACCENT_COLOR,
          textDecoration: "none",
        }}
      >
        Group3 Co
      </Typography>

      <List>
        {navLinks.map((link) => (
          <ListItem key={link.name} disablePadding>
            <ListItemButton
              component="a"
              href={link.href}
              onClick={handleNavClick}
              sx={{
                py: 1.5,
                "&:hover": {
                  bgcolor: `${ACCENT_COLOR}15`,
                },
              }}
            >
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "white",
                    "&:hover": { color: ACCENT_COLOR },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ px: 2, pt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            href="#contact"
            onClick={handleNavClick}
            sx={{
              bgcolor: ACCENT_COLOR,
              color: "#0F172A",
              py: 1,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "50px",
            }}
          >
            Get in Touch
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "transparent",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1280px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "white",
              textDecoration: "none",
              "&:hover": { color: ACCENT_COLOR },
            }}
          >
            Group3 Co
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack direction="row" spacing={3}>
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  href={link.href}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      color: ACCENT_COLOR,
                      bgcolor: "transparent",
                    },
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Stack>
          </Box>

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
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Group3 Co
            </Typography>

            <Box sx={{ width: 48 }} />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              variant="contained"
              href="#contact"
              sx={{
                bgcolor: ACCENT_COLOR,
                color: "#0F172A",
                borderRadius: "50px",
                fontWeight: "bold",
                py: 1,
                px: 3,
                textTransform: "none",
                "&:hover": {
                  bgcolor: ACCENT_COLOR,
                  opacity: 0.9,
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 250,
            bgcolor: "#0F172A",
            color: "white",
            borderRight: `2px solid ${ACCENT_COLOR}`,
          },
        }}
      >
        {drawerList}
      </Drawer>
    </>
  );
};

export default Header;
