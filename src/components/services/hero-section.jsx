import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { ACCENT_COLOR } from "../common/config";

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80";

const FLOATING_LETTERS = "SERVICES DESIGN DEV STRATEGY SOLUTIONS";

const generateLetterPositions = (text) => {
  return text.split("").map((letter, index) => ({
    letter,
    key: index,
    top: `${5 + Math.random() * 90}vh`,
    left: `${2 + Math.random() * 94}vw`,
    opacity: 0.04 + Math.random() * 0.15,
    fontSize: `${1.8 + Math.random() * 3}rem`,
    rotation: Math.random() * 360,
    floatOffset: Math.random() * 18 + 6,
    delay: Math.random() * 2,
  }));
};

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const ServicesHeroSection = ({ onNavClick = () => {} }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(generateLetterPositions(FLOATING_LETTERS));
  }, []);

  const { scrollY } = useScroll();
  const blurAmount = useTransform(scrollY, [0, 400], ["0px", "8px"]);

  return (
    <Box
      id="services-hero"
      sx={{
        width: "100%",
        minHeight: "70vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      <MotionBox
        style={{ filter: blurAmount }}
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(180deg, rgba(15,23,42,0.94) 0%, ${ACCENT_COLOR}33 50%, rgba(15,23,42,0.94) 100%)`,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0px 0px 200px 80px rgba(0,0,0,0.8)", // Vignette
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Floating Letters */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          display: { xs: "none", lg: "block" },
          zIndex: 2,
        }}
      >
        {letters.map(
          ({
            letter,
            key,
            top,
            left,
            opacity,
            fontSize,
            rotation,
            floatOffset,
            delay,
          }) => (
            <MotionTypography
              key={key}
              component="div"
              sx={{
                position: "absolute",
                color: "white",
                top,
                left,
                opacity,
                fontSize,
                fontWeight: 800,
                fontFamily: "monospace",
                userSelect: "none",
              }}
              initial={{ y: 0, rotate: rotation }}
              animate={{
                y: [0, -floatOffset / 2, 0],
                rotate: [rotation - 6, rotation + 6, rotation - 6],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
              }}
            >
              {letter}
            </MotionTypography>
          )
        )}
      </Box>

      {/* TEXT CONTENT */}
      <Container maxWidth="md" sx={{ zIndex: 3, textAlign: "center", px: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: ACCENT_COLOR,
              mb: 2,
            }}
          >
            Our Services
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.2rem" },
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              mb: 3,
              textShadow: "0 3px 15px rgba(0,0,0,0.8)",
            }}
          >
            Empowering Businesses
            <br />
            <Box component="span" sx={{ color: ACCENT_COLOR }}>
              Through Technology
            </Box>
          </Typography>
          {/* 
          <MotionButton
            variant="contained"
            size="large"
            onClick={() => onNavClick("services-list")}
            sx={{
              bgcolor: ACCENT_COLOR,
              color: "#0F172A",
              fontWeight: "bold",
              borderRadius: 50,
              px: 5,
              py: 1.7,
              textTransform: "none",
              fontSize: "1.1rem",
              boxShadow: `0 8px 20px 5px ${ACCENT_COLOR}55`,
              "&:hover": { bgcolor: ACCENT_COLOR },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Services
          </MotionButton> */}
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesHeroSection;
