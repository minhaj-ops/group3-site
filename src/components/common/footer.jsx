import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  TextField,
  Button,
  Divider,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import {
  ACCENT_COLOR,
  BACKGROUND_DEFAULT,
  COMPANY_NAME,
  COMPANY_SLOGAN,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  lucideIcons,
} from "./config";
import Logo from "./logo";

const { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } =
  lucideIcons;

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setSnackbarMessage("Please enter a valid email address.");
      setSnackbarSeverity("error");
    } else {
      console.log("Subscribing:", email);
      setSnackbarMessage(`Thank you for subscribing, ${email}!`);
      setSnackbarSeverity("success");
      setEmail("");
    }
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <MotionBox
      variants={itemVariants}
      sx={{
        p: 4,
        bgcolor: "rgba(255, 99, 71, 0.05)",
        borderRadius: "16px",
        border: `1px solid ${ACCENT_COLOR}30`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${ACCENT_COLOR}, transparent)`,
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          fontWeight: 700,
          color: TEXT_PRIMARY,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Stay in the Loop
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 3,
          color: TEXT_SECONDARY,
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.6,
        }}
      >
        Get exclusive insights, updates, and industry trends delivered to your
        inbox.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          fullWidth
          size="medium"
          placeholder="Enter your email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: TEXT_PRIMARY,
              borderRadius: "12px",
              bgcolor: "rgba(15, 23, 42, 0.6)",
              fontFamily: "'DM Sans', sans-serif",
              "& fieldset": { borderColor: `${TEXT_SECONDARY}30` },
              "&:hover fieldset": { borderColor: ACCENT_COLOR },
              "&.Mui-focused fieldset": {
                borderColor: ACCENT_COLOR,
                borderWidth: "2px",
              },
            },
            "& .MuiOutlinedInput-input::placeholder": {
              fontFamily: "'DM Sans', sans-serif",
              opacity: 0.7,
            },
          }}
        />
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubscribe}
            endIcon={<ArrowRight size={18} />}
            sx={{
              bgcolor: ACCENT_COLOR,
              color: "#0F172A",
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              px: 3,
              py: 1.5,
              fontSize: "0.95rem",
              boxShadow: `0 4px 15px ${ACCENT_COLOR}40`,
              "&:hover": {
                bgcolor: ACCENT_COLOR,
                boxShadow: `0 6px 20px ${ACCENT_COLOR}60`,
              },
            }}
          >
            Subscribe Now
          </Button>
        </motion.div>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%", borderRadius: "12px" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </MotionBox>
  );
};

const quickLinks = {
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  Services: [
    { name: "Product Strategy", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "Full-Stack Dev", href: "/services" },
    { name: "Microsoft", href: "/microsoft-solutions" },
  ],
  Resources: [
    { name: "Case Studies", href: "/projects" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const Footer = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0a101f",
        color: TEXT_PRIMARY,
        pt: 10,
        pb: 4,
        borderTop: `1px solid ${ACCENT_COLOR}20`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${ACCENT_COLOR}50, transparent)`,
        },
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT_COLOR}08 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT_COLOR}05 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        sx={{
          maxWidth: "1280px",
          width: "100%",
          mx: "auto",
          px: { xs: 3, md: 4 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.5fr 2fr 1.5fr",
            },
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Brand Column */}
          <MotionBox variants={itemVariants}>
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Logo
                variant="footer"
                size="large"
                showText={true}
                sx={{
                  "& .MuiBox-root": {
                    justifyContent: "flex-start",
                  },
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: TEXT_SECONDARY,
                lineHeight: 1.8,
                maxWidth: "280px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {COMPANY_SLOGAN}
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 4 }}>
              {[
                {
                  icon: Mail,
                  text: "hello@group3co.com",
                  href: "mailto:hello@group3co.com",
                },
                {
                  icon: Phone,
                  text: "(123) 456-7890",
                  href: "tel:+1234567890",
                },
                {
                  icon: MapPin,
                  text: "123 Digital Blvd, Suite 400\nInnovation City, CA 90210",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: item.text.includes("\n")
                        ? "flex-start"
                        : "center",
                      mb: 2,
                      transition: "transform 0.2s",
                      "&:hover": { transform: "translateX(5px)" },
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: "8px",
                        bgcolor: `${ACCENT_COLOR}15`,
                        mr: 1.5,
                        display: "flex",
                      }}
                    >
                      <item.icon size={18} color={ACCENT_COLOR} />
                    </Box>
                    {item.href ? (
                      <Link
                        href={item.href}
                        color="inherit"
                        underline="hover"
                        variant="body2"
                        sx={{
                          color: TEXT_SECONDARY,
                          "&:hover": { color: ACCENT_COLOR },
                        }}
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <Typography
                        variant="body2"
                        color={TEXT_SECONDARY}
                        sx={{ whiteSpace: "pre-line" }}
                      >
                        {item.text}
                      </Typography>
                    )}
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* Social Links */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href={social.href}
                    aria-label={social.label}
                    sx={{
                      bgcolor: `${ACCENT_COLOR}15`,
                      color: ACCENT_COLOR,
                      border: `1px solid ${ACCENT_COLOR}30`,
                      "&:hover": {
                        bgcolor: ACCENT_COLOR,
                        color: "#0F172A",
                      },
                    }}
                  >
                    <social.icon size={20} />
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </MotionBox>

          {/* Quick Links */}
          <MotionBox variants={itemVariants}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" },
                gap: { xs: 4, sm: 3 },
              }}
            >
              {Object.keys(quickLinks).map((title, colIndex) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: colIndex * 0.1 }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: TEXT_PRIMARY,
                      fontWeight: 700,
                      mb: 2.5,
                      fontSize: "1rem",
                      fontFamily: "'Outfit', sans-serif",
                      position: "relative",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "30px",
                        height: "2px",
                        bgcolor: ACCENT_COLOR,
                        borderRadius: "2px",
                      },
                    }}
                  >
                    {title}
                  </Typography>
                  {quickLinks[title].map((link, index) => (
                    <motion.div
                      key={link.name}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        component={RouterLink}
                        to={link.href}
                        color={TEXT_SECONDARY}
                        display="block"
                        variant="body2"
                        underline="none"
                        sx={{
                          py: 0.8,
                          fontFamily: "'DM Sans', sans-serif",
                          transition: "color 0.2s",
                          "&:hover": {
                            color: ACCENT_COLOR,
                          },
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </Box>
          </MotionBox>

          {/* Newsletter */}
          <NewsletterSubscription />
        </Box>

        {/* Bottom Bar */}
        <Divider
          sx={{
            mt: 8,
            mb: 4,
            borderColor: `${ACCENT_COLOR}15`,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "1px",
              background: ACCENT_COLOR,
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typography
              variant="body2"
              color={TEXT_SECONDARY}
              sx={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
              reserved.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Typography
              variant="body2"
              color={TEXT_SECONDARY}
              sx={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Crafted with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                style={{ display: "inline-block", color: ACCENT_COLOR }}
              >
                ♥
              </motion.span>{" "}
              by{" "}
              <Box
                component="span"
                sx={{
                  color: ACCENT_COLOR,
                  fontWeight: 600,
                }}
              >
                Minhaj Alvi
              </Box>
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
