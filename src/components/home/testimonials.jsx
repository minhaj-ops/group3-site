import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../common/section-header";
import { testimonialsData, ACCENT_COLOR, lucideIcons } from "../common/config";

const { MessageSquare } = lucideIcons;

const testimonialVariants = {
  enter: { opacity: 0, x: 100, scale: 0.95 },
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -100,
    scale: 0.95,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

const TestimonialCard = ({ quote, author, title }) => (
  <Card
    sx={{
      bgcolor: "slate.800",
      borderRadius: "16px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #334155",
      overflow: "hidden",
    }}
  >
    <CardContent sx={{ p: { xs: 4, sm: 6 }, flexGrow: 1 }}>
      <Box
        sx={{
          height: 3,
          width: 50,
          bgcolor: ACCENT_COLOR,
          mb: 4,
          borderRadius: 1,
        }}
      />
      <Box sx={{ color: ACCENT_COLOR, mb: 3 }}>
        <MessageSquare size={36} />
      </Box>
      <Typography
        variant="h5"
        component="blockquote"
        sx={{
          fontStyle: "italic",
          color: "white",
          lineHeight: 1.6,
          fontWeight: 300,
          flexGrow: 1,
          mb: 4,
          maxWidth: 700,
        }}
      >
        "{quote}"
      </Typography>
      <Box sx={{ pt: 3, borderTop: "1px solid #334155" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
          {author}
        </Typography>
        <Typography variant="body1" sx={{ color: ACCENT_COLOR }}>
          {title}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const maxSteps = testimonialsData.length;

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % maxSteps);
  }, [maxSteps]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + maxSteps) % maxSteps);
  }, [maxSteps]);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "slate.800" }}
    >
      <SectionHeader title="What Our Clients Say" subtitle="Client Love" />

      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          px: 3,
          mt: 4,
          position: "relative",
        }}
      >
        <Box sx={{ overflow: "hidden", borderRadius: "16px", boxShadow: 8 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <TestimonialCard {...testimonialsData[currentTestimonial]} />
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Navigation Buttons */}
        <IconButton
          onClick={prevTestimonial}
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: 0, sm: 0 },
            transform: "translateY(-50%)",
            bgcolor: "slate.700",
            color: "white",
            border: `1px solid ${ACCENT_COLOR}`,
            "&:hover": { bgcolor: ACCENT_COLOR, color: "slate.900" },
            zIndex: 10,
            p: 1.5,
          }}
        >
          <KeyboardArrowLeft fontSize="large" />
        </IconButton>

        <IconButton
          onClick={nextTestimonial}
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: 0, sm: 0 },
            transform: "translateY(-50%)",
            bgcolor: "slate.700",
            color: "white",
            border: `1px solid ${ACCENT_COLOR}`,
            "&:hover": { bgcolor: ACCENT_COLOR, color: "slate.900" },
            zIndex: 10,
            p: 1.5,
          }}
        >
          <KeyboardArrowRight fontSize="large" />
        </IconButton>

        {/* Dots */}
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 3 }}
        >
          {testimonialsData.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ scale: 1.4 }}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor:
                  index === currentTestimonial
                    ? ACCENT_COLOR
                    : "text.secondary",
                opacity: index === currentTestimonial ? 1 : 0.4,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
