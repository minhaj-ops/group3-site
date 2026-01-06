import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ACCENT_COLOR } from "./config";

const MotionBox = motion(Box);

const Logo = ({
  variant = "default", // "default" | "footer" | "mobile"
  size = "medium", // "small" | "medium" | "large"
  showText = true,
  sx,
  ...props
}) => {
  const sizeMap = {
    small: {
      width: 28,
      height: 28,
      fontSize: "0.9rem",
      fontSize3: "1.05rem",
    },
    medium: {
      width: 56,
      height: 56,
      fontSize: "1.4rem",
      fontSize3: "1.7rem",
    },
    large: {
      width: 64,
      height: 64,
      fontSize: "1.6rem",
      fontSize3: "1.9rem",
    },
  };

  const dimensions = sizeMap[size] || sizeMap.medium;

  return (
    <MotionBox
      component={Link}
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1, sm: 1.5 },
        textDecoration: "none",
        ...sx,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {/* Logo Icon - Image */}
      <MotionBox
        component="img"
        src="/logo.png"
        alt="Group 3 Logo"
        sx={{
          width: { xs: dimensions.width * 0.85, sm: dimensions.width },
          height: { xs: dimensions.height * 0.85, sm: dimensions.height },
          minWidth: { xs: dimensions.width * 0.85, sm: dimensions.width },
          minHeight: { xs: dimensions.height * 0.85, sm: dimensions.height },
          objectFit: "contain",
          flexShrink: 0,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Text */}
      {showText && (
        <MotionBox
          component="span"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          sx={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: { xs: 0.3, sm: 0.5 },
            position: "relative",
            lineHeight: 1.1,
          }}
        >
          <Box
            component="span"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: `calc(${dimensions.fontSize} * 0.85)`,
                sm: dimensions.fontSize,
              },
              letterSpacing: { xs: "0.05rem", sm: "0.08rem" },
              textTransform: "uppercase",
              color: "white",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Group
          </Box>
          <Box
            component="span"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: {
                xs: `calc(${dimensions.fontSize3} * 0.85)`,
                sm: dimensions.fontSize3,
              },
              color: ACCENT_COLOR,
              position: "relative",
              lineHeight: 1,
              whiteSpace: "nowrap",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: { xs: "-1px", sm: "-2px" },
                left: "5%",
                right: "5%",
                height: { xs: "1.5px", sm: "2px" },
                background: ACCENT_COLOR,
                opacity: 0.9,
                borderRadius: "1px",
              },
            }}
          >
            3
          </Box>
        </MotionBox>
      )}
    </MotionBox>
  );
};

export default Logo;
