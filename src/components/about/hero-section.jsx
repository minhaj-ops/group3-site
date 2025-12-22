import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Chip } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { ACCENT_COLOR, lucideIcons } from "../common/config";

const { Zap, ArrowRight } = lucideIcons;

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1506377190479-79a0229c669d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&h=1080";

const FLOATING_LETTERS = "MISSION PEOPLE VALUE STRATEGY VISION";

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

const AboutUsHeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)`,
      }}
    >
      {/* Animated mesh gradient background */}
      <MotionBox
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          background: `
            radial-gradient(circle at 10% 20%, ${ACCENT_COLOR} 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, #8B5CF6 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, #06B6D4 0%, transparent 50%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 10% 20%, ${ACCENT_COLOR} 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, #8B5CF6 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, #06B6D4 0%, transparent 50%)`,
            `radial-gradient(circle at 30% 40%, ${ACCENT_COLOR} 0%, transparent 40%),
            radial-gradient(circle at 70% 60%, #8B5CF6 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, #06B6D4 0%, transparent 50%)`,
            `radial-gradient(circle at 10% 20%, ${ACCENT_COLOR} 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, #8B5CF6 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, #06B6D4 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          backgroundImage: `
            linear-gradient(${ACCENT_COLOR}40 1px, transparent 1px),
            linear-gradient(90deg, ${ACCENT_COLOR}40 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      >
        <MotionBox
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(${ACCENT_COLOR}40 1px, transparent 1px),
              linear-gradient(90deg, ${ACCENT_COLOR}40 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </Box>

      {/* Flowing wave lines */}
      {[...Array(5)].map((_, i) => (
        <MotionBox
          key={i}
          sx={{
            position: "absolute",
            width: "100%",
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${ACCENT_COLOR}${Math.floor(20 + i * 10)}, transparent)`,
            top: `${20 + i * 15}%`,
            left: 0,
            pointerEvents: "none",
          }}
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating text letters */}
      {generateLetterPositions(FLOATING_LETTERS).map((letterData) => (
        <MotionTypography
          key={letterData.key}
          sx={{
            position: "absolute",
            top: letterData.top,
            left: letterData.left,
            fontSize: letterData.fontSize,
            opacity: letterData.opacity,
            color: ACCENT_COLOR,
            fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            pointerEvents: "none",
            transform: `rotate(${letterData.rotation}deg)`,
          }}
          animate={{
            y: [
              0,
              -letterData.floatOffset,
              letterData.floatOffset,
              -letterData.floatOffset / 2,
              0,
            ],
            rotate: [
              letterData.rotation,
              letterData.rotation + 10,
              letterData.rotation - 10,
              letterData.rotation + 5,
              letterData.rotation,
            ],
          }}
          transition={{
            duration: 8 + letterData.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: letterData.delay,
          }}
        >
          {letterData.letter === " " ? "\u00A0" : letterData.letter}
        </MotionTypography>
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center", py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Chip
            icon={<Zap size={16} />}
            label="About Us"
            sx={{
              mb: 3,
              bgcolor: `${ACCENT_COLOR}20`,
              color: ACCENT_COLOR,
              fontWeight: 600,
              px: 2,
              py: 2.5,
              fontSize: "0.9rem",
              border: `1px solid ${ACCENT_COLOR}40`,
            }}
          />

          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              mb: 3,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Building The Future
            <Box
              component="span"
              sx={{
                display: "block",
                background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              One Innovation At A Time
            </Box>
          </MotionTypography>

          <MotionTypography
            variant="h6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              color: "#A0B3D9",
              maxWidth: "700px",
              mx: "auto",
              mb: 5,
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.7,
            }}
          >
            We are a passionate team of innovators, designers, and developers
            dedicated to creating exceptional digital experiences that transform businesses.
          </MotionTypography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={20} />}
              href="#our-story"
              sx={{
                bgcolor: ACCENT_COLOR,
                color: "#0F172A",
                px: 5,
                py: 1.8,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: `0 8px 30px ${ACCENT_COLOR}50`,
                "&:hover": {
                  bgcolor: ACCENT_COLOR,
                  boxShadow: `0 12px 40px ${ACCENT_COLOR}60`,
                },
              }}
            >
              Learn Our Story
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: "linear-gradient(to top, #0F172A, transparent)",
        }}
      />
    </Box>
  );
};

export default AboutUsHeroSection;
