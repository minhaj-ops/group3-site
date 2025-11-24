import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import {
  ACCENT_COLOR,
  BACKGROUND_IMAGE_URL,
  FLOATING_LETTERS,
} from "../common/config";

const generateLetterPositions = (text) => {
  return text.split("").map((letter, index) => ({
    letter,
    key: index,
    top: `${Math.random() * 95}vh`,
    left: `${Math.random() * 95}vw`,
    opacity: 0.1 + Math.random() * 0.1,
    fontSize: `${2.5 + Math.random() * 2.5}rem`,
    rotation: `${Math.random() * 360}deg`,
  }));
};

const HeroSection = ({ onNavClick }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(generateLetterPositions(FLOATING_LETTERS));
  }, []);

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
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, ${ACCENT_COLOR}33 50%, rgba(15, 23, 42, 0.95) 100%)`,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.2,
          display: { xs: "none", lg: "block" },
        }}
      >
        {letters.map(
          ({ letter, key, top, left, opacity, fontSize, rotation }) => (
            <Typography
              key={key}
              component="div"
              sx={{
                position: "absolute",
                color: "white",
                top: top,
                left: left,
                transform: `rotate(${rotation})`,
                fontSize: fontSize,
                opacity: opacity,
                fontWeight: "bold",
                fontFamily: "monospace",
                pointerEvents: "none",
              }}
            >
              {letter}
            </Typography>
          )
        )}
      </Box>

      <Container maxWidth="md" sx={{ zIndex: 2, textAlign: "center", px: 3 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "600",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: ACCENT_COLOR,
            mb: 2,
          }}
        >
          Digital Product Studio
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "4rem", md: "4.5rem" },
            fontWeight: "800",
            lineHeight: 1.1,
            color: "white",
            mb: 3,
          }}
        >
          We Engineer{" "}
          <Box component="span" sx={{ position: "relative", zIndex: 1 }}>
            Future-Ready
          </Box>{" "}
          Digital Products.
        </Typography>
        <Typography
          variant="h6"
          color={ACCENT_COLOR}
          sx={{ maxWidth: "600px", mx: "auto", mb: 5 }}
        >
          Group3 Co partners with visionary leaders to design, build, and scale
          transformative web and mobile applications.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => onNavClick("projects")}
          sx={{
            bgcolor: ACCENT_COLOR,
            color: "#0F172A",
            borderRadius: 50,
            fontWeight: "bold",
            padding: "12px 32px",
            fontSize: "1.125rem",
            textTransform: "none",
            boxShadow: `0 8px 15px 5px ${ACCENT_COLOR}40`,
            transition: "transform 0.3s",
            "&:hover": {
              bgcolor: ACCENT_COLOR,
              transform: "scale(1.05)",
            },
          }}
        >
          See Our Work
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
