import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ACCENT_COLOR } from "../common/config"; // Assuming ACCENT_COLOR is defined here

// Dummy data for navigation links
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "transparent",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
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

        {/* Desktop Navigation */}
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

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiPaper-root": {
                bgcolor: "slate.800",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
              },
            }}
          >
            {navLinks.map((link) => (
              <MenuItem key={link.name} onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  component="a"
                  href={link.href}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    width: "100%",
                    "&:hover": { color: ACCENT_COLOR },
                  }}
                >
                  {link.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Group3 Co
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
  );
};

export default Header;
