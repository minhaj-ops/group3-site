import React, { useState, useEffect } from "react";
// Import necessary Material-UI components
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ACCENT_COLOR } from "../common/config";

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1506377190479-79a0229c669d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&h=1080";

const FLOATING_LETTERS = "MISSION PEOPLE VALUE STRATEGY VISION";

const generateLetterPositions = (text) => {
  return text.split("").map((letter, index) => ({
    letter,
    key: index,
    top: `${5 + Math.random() * 90}vh`,
    left: `${2 + Math.random() * 94}vw`,
    opacity: 0.06 + Math.random() * 0.14,
    fontSize: `${1.8 + Math.random() * 3}rem`,
    rotation: Math.random() * 360,
    floatOffset: Math.random() * 18 + 6,
    delay: Math.random() * 2,
  }));
};

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

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

const AboutUsHeroSection = ({ onNavClick = () => {} }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(generateLetterPositions(FLOATING_LETTERS));
  }, []);

  return (
    <Box
      id="about-hero"
      sx={{
        width: "100%",
        minHeight: "70vh",
        backgroundColor: "#0F172A",
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
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
          zIndex: 0,
          display: { xs: "none", lg: "block" },
          pointerEvents: "none",
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
                fontSize,
                opacity,
                fontWeight: 800,
                fontFamily: "monospace",
                transformOrigin: "center center",
                userSelect: "none",
                zIndex: 0,
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
                repeatType: "loop",
                delay,
              }}
            >
              {letter}
            </MotionTypography>
          )
        )}
      </Box>

      <Container maxWidth="md" sx={{ zIndex: 2, textAlign: "center", px: 3 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionTypography
            variant="subtitle1"
            component="p"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: ACCENT_COLOR,
              mb: 2,
            }}
            custom={0.1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Our Mission, Our People
          </MotionTypography>

          <MotionTypography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: 800,
              lineHeight: 1.05,
              color: "white",
              mb: 3,
            }}
            custom={0.2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Building the Future,{" "}
            <Box component="br" sx={{ display: { sm: "none" } }} />
            <Box component="span" sx={{ position: "relative", zIndex: 2 }}>
              One Innovation
            </Box>{" "}
            at a Time.
          </MotionTypography>

          {/* <MotionTypography
            variant="h6"
            component="p"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              mb: 5,
              color: ACCENT_COLOR,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
            custom={0.35}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            We are a collective of designers, engineers, and strategists driven
            by the conviction that exceptional digital experiences transform
            businesses and lives.
          </MotionTypography> */}

          <MotionButton
            variant="contained"
            size="large"
            onClick={() => onNavClick("team")}
            sx={{
              bgcolor: ACCENT_COLOR,
              color: "#0F172A",
              borderRadius: 50,
              fontWeight: "bold",
              padding: "12px 32px",
              fontSize: "1.125rem",
              textTransform: "none",
              boxShadow: `0 8px 15px 5px ${ACCENT_COLOR}40`,
              "&:hover": {
                bgcolor: ACCENT_COLOR,
              },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: `0 14px 30px -6px ${ACCENT_COLOR}60`,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            Meet the Team
          </MotionButton>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default AboutUsHeroSection;
