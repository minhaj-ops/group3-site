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
      fontSize3: "1.05rem"
    },
    medium: { 
      width: 36, 
      height: 36, 
      fontSize: "1.1rem",
      fontSize3: "1.3rem"
    },
    large: { 
      width: 44, 
      height: 44, 
      fontSize: "1.4rem",
      fontSize3: "1.65rem"
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
      {/* Logo Icon - Geometric "3" Design */}
      <MotionBox
        sx={{
          position: "relative",
          width: { xs: dimensions.width * 0.85, sm: dimensions.width },
          height: { xs: dimensions.height * 0.85, sm: dimensions.height },
          minWidth: { xs: dimensions.width * 0.85, sm: dimensions.width },
          minHeight: { xs: dimensions.height * 0.85, sm: dimensions.height },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background circle with gradient */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
            opacity: 0.2,
            filter: "blur(8px)",
          }}
        />
        
        {/* Main geometric shape */}
        <Box
          component="svg"
          viewBox="0 0 40 40"
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={ACCENT_COLOR} />
              <stop offset="100%" stopColor="#ff8c69" />
            </linearGradient>
            <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8c69" />
              <stop offset="100%" stopColor={ACCENT_COLOR} />
            </linearGradient>
          </defs>

          {/* Geometric "3" shape - Modern tech design */}
          {/* Top curve */}
          <path
            d="M 8 12 Q 12 8, 18 10 Q 24 12, 28 16"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Middle curve */}
          <path
            d="M 8 20 Q 12 18, 18 20 Q 24 22, 28 20"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Bottom curve */}
          <path
            d="M 8 28 Q 12 26, 18 28 Q 24 30, 28 24"
            fill="none"
            stroke="url(#logoGradient2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Accent dots */}
          <circle cx="12" cy="12" r="1.5" fill={ACCENT_COLOR} opacity="0.8" />
          <circle cx="12" cy="20" r="1.5" fill={ACCENT_COLOR} opacity="0.8" />
          <circle cx="12" cy="28" r="1.5" fill={ACCENT_COLOR} opacity="0.8" />
          
          {/* Connecting lines for tech feel */}
          <line
            x1="28"
            y1="16"
            x2="32"
            y2="14"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1="28"
            y1="20"
            x2="32"
            y2="20"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1="28"
            y1="24"
            x2="32"
            y2="26"
            stroke="url(#logoGradient2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </Box>
      </MotionBox>

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
              fontSize: { xs: `calc(${dimensions.fontSize} * 0.85)`, sm: dimensions.fontSize },
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
              fontSize: { xs: `calc(${dimensions.fontSize3} * 0.85)`, sm: dimensions.fontSize3 },
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

