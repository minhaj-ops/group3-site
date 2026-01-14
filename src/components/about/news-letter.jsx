import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  InputAdornment,
  SvgIcon,
} from "@mui/material";

import { motion } from "framer-motion";
import { ACCENT_COLOR } from "../common/config";
import { sendNewsletterSubscription } from "../../services/emailService";

const DARK_BG_COLOR = "#0F172A";
const MEDIUM_DARK_BG_COLOR = "#1C2A4A";

const MailIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    />
  </SvgIcon>
);

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      await sendNewsletterSubscription(email);
      setMessage("Success! Thank you for subscribing.");
      setEmail("");
    } catch (error) {
      setMessage("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionBox
      component="section"
      id="newsletter"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: DARK_BG_COLOR,
        color: "white",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
      {...fadeUp(0.1)}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "600px",
          height: "600px",
          bgcolor: ACCENT_COLOR,
          borderRadius: "50%",
          filter: "blur(200px)",
          opacity: 0.05,
          zIndex: 0,
          transform: "translate(-50%, -50%)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          sx={{
            bgcolor: MEDIUM_DARK_BG_COLOR,
            borderRadius: 6,
            p: { xs: 4, md: 6, lg: 8 },
            border: `1px solid ${ACCENT_COLOR}60`,
            boxShadow: `0 15px 40px ${DARK_BG_COLOR}90`,
            textAlign: "center",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <MotionTypography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: ACCENT_COLOR,
              mb: 1,
            }}
            {...fadeUp(0.4)}
          >
            Stay Ahead
          </MotionTypography>

          <MotionTypography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
            }}
            {...fadeUp(0.5)}
          >
            Get Exclusive Tech Insights
          </MotionTypography>

          <MotionTypography
            variant="body1"
            sx={{
              color: "white",
              opacity: 0.7,
              mb: 4,
              maxWidth: 500,
              mx: "auto",
            }}
            {...fadeUp(0.6)}
          >
            Subscribe to our monthly newsletter for the latest in digital
            strategy, engineering excellence, and design thinking.
          </MotionTypography>

          <MotionBox
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mt: 4,
              maxWidth: 600,
              mx: "auto",
            }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon sx={{ color: ACCENT_COLOR }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 3,
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `${ACCENT_COLOR}80 !important`,
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: `${ACCENT_COLOR} !important`,
                  },
                },
              }}
              InputLabelProps={{
                sx: { color: `${ACCENT_COLOR} !important` },
              }}
            />

            <MotionButton
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{
                py: { xs: 1.5, sm: 0 },
                minWidth: { xs: "100%", sm: 150 },
                bgcolor: ACCENT_COLOR,
                color: DARK_BG_COLOR,
                fontWeight: 700,
                borderRadius: 3,
                textTransform: "none",
                "&:hover": {
                  bgcolor: ACCENT_COLOR,
                  boxShadow: `0 8px 20px ${ACCENT_COLOR}80`,
                },
                "&:disabled": {
                  bgcolor: `${ACCENT_COLOR}50`,
                  color: DARK_BG_COLOR,
                },
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: isSubmitting ? 0.93 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </MotionButton>
          </MotionBox>

          {message && (
            <MotionTypography
              variant="body2"
              sx={{
                mt: 3,
                color: message.startsWith("Success") ? ACCENT_COLOR : "red",
                fontWeight: 500,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {message}
            </MotionTypography>
          )}
        </MotionBox>
      </Container>
    </MotionBox>
  );
};

export default NewsletterSubscription;
