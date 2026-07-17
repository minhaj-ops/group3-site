// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ACCENT_COLOR,
  BACKGROUND_IMAGE_URL,
  FLOATING_LETTERS,
} from "../common/config";

const generateLetterPositions = (text) => {
  return text.split("").map((letter, index) => ({
    letter,
    key: index,
    top: `${5 + Math.random() * 90}vh`,
    left: `${2 + Math.random() * 94}vw`,
    opacity: 0.06 + Math.random() * 0.14,
    fontSize: `${1.8 + Math.random() * 3}rem`,
    rotation: Math.random() * 360,
    floatOffset: Math.random() * 18 + 6, // px vertical float amplitude
    delay: Math.random() * 2, // staggered animation delay
  }));
};

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

const HeroSection = ({ onNavClick }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(generateLetterPositions(FLOATING_LETTERS));
  }, []);

  // reusable variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: customDelay },
    }),
  };

  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        pt: "64px",
      }}
    >
      {/* Animated overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(180deg, rgba(15,23,42,0.94) 0%, ${ACCENT_COLOR}33 50%, rgba(15,23,42,0.94) 100%)`,
        }}
      />

      {/* Floating letters (large, decorative) - hidden on small screens */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          display: { xs: "none", lg: "block" },
          pointerEvents: "none",
        }}
      >
        {letters.map(
          ({ letter, key, top, left, opacity, fontSize, rotation, floatOffset, delay }) => (
            <MotionTypography
              key={key}
              component="div"
              sx={{
                position: "absolute",
                color: "#fff",
                top,
                left,
                fontSize,
                opacity,
                fontWeight: 800,
                fontFamily: "monospace",
                transformOrigin: "center center",
                userSelect: "none",
                textShadow: `0 2px 12px rgba(0,0,0,0.6)`,
                zIndex: 0,
              }}
              initial={{ y: 0, rotate: rotation }}
              animate={{
                y: [0, -floatOffset / 2, 0], // float up and down
                rotate: [rotation - 6, rotation + 6, rotation - 6], // slow rotation swing
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                delay,
              }}
            >
              {letter}
            </MotionTypography>
          )
        )}
      </Box>

      {/* Content container */}
      <Container maxWidth="md" sx={{ zIndex: 2, textAlign: "center", px: 3 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionBox
            custom={0.1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              border: `1px solid ${ACCENT_COLOR}40`,
              borderRadius: 50,
              bgcolor: `${ACCENT_COLOR}10`,
              mb: 4,
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                px: 2.5,
                py: 1,
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: ACCENT_COLOR,
              }}
            >
              Group3
            </Typography>
            <Box sx={{ width: "1px", alignSelf: "stretch", bgcolor: `${ACCENT_COLOR}40` }} />
            <Typography
              sx={{
                px: 2.5,
                py: 1,
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#A0B3D9",
              }}
            >
              AI Products for Founders &amp; Companies
            </Typography>
          </MotionBox>

          <MotionTypography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3.4rem", md: "4.5rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              color: "white",
              mb: 3,
            }}
            custom={0.2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            We are the{" "}
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                fontFamily: "'Playfair Display', serif",
                color: ACCENT_COLOR,
              }}
            >
              engine
            </Box>{" "}
            behind other people's AI products.
          </MotionTypography>

          <MotionTypography
            variant="h6"
            sx={{
              maxWidth: "620px",
              mx: "auto",
              mb: 5,
              color: "#A0B3D9",
              fontWeight: 400,
              lineHeight: 1.7,
            }}
            custom={0.35}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            We design, build, and launch full AI-powered products — websites,
            apps, and dashboards, with the AI already working inside them. Not
            a slide deck, not a prototype: a real product your customers can
            use, trusted by founders and companies ever since.
          </MotionTypography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <MotionButton
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: ACCENT_COLOR,
                color: "#0F172A",
                borderRadius: 50,
                fontWeight: "bold",
                padding: "12px 32px",
                fontSize: "1.125rem",
                textTransform: "none",
                boxShadow: `0 8px 15px 5px ${ACCENT_COLOR}40`,
                textDecoration: "none",
              }}
              whileHover={{ scale: 1.04, boxShadow: `0 14px 30px -6px ${ACCENT_COLOR}60` }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              Book a Free Call
            </MotionButton>

            <MotionButton
              component={Link}
              to="/projects"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#334155",
                color: "white",
                borderRadius: 50,
                fontWeight: "bold",
                padding: "12px 32px",
                fontSize: "1.125rem",
                textTransform: "none",
                textDecoration: "none",
                "&:hover": {
                  borderColor: ACCENT_COLOR,
                  bgcolor: `${ACCENT_COLOR}10`,
                },
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              See What We Build
            </MotionButton>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
