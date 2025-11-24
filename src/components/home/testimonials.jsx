import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SectionHeader from "../common/section-header";
import { testimonialsData, ACCENT_COLOR, lucideIcons } from "../common/config";

const { MessageSquare } = lucideIcons;

const TestimonialCard = ({ quote, author, title }) => (
  <Card
    sx={{
      bgcolor: "slate.800",
      borderRadius: "16px",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #334155",
      transition: "transform 0.3s ease-in-out",
    }}
  >
    <CardContent sx={{ p: { xs: 4, sm: 8 }, flexGrow: 1 }}>
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
          "&:hover .MuiCard-root": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box sx={{ overflow: "hidden", borderRadius: "16px", boxShadow: 8 }}>
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentTestimonial * 100}%)`,
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <Box
                key={index}
                sx={{ flexShrink: 0, width: "100%", p: { xs: 1, sm: 2 } }}
              >
                <TestimonialCard {...testimonial} />
              </Box>
            ))}
          </Box>
        </Box>

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
            "&:hover": {
              bgcolor: ACCENT_COLOR,
              color: "slate.900",
            },
            zIndex: 10,
            p: 1.5,
          }}
          aria-label="Previous testimonial"
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
            "&:hover": {
              bgcolor: ACCENT_COLOR,
              color: "slate.900",
            },
            zIndex: 10,
            p: 1.5,
          }}
          aria-label="Next testimonial"
        >
          <KeyboardArrowRight fontSize="large" />
        </IconButton>

        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 3 }}
        >
          {testimonialsData.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor:
                  index === currentTestimonial
                    ? ACCENT_COLOR
                    : "text.secondary",
                opacity: index === currentTestimonial ? 1 : 0.4,
                transition: "all 0.3s",
                cursor: "pointer",
                "&:hover": { bgcolor: ACCENT_COLOR, opacity: 0.8 },
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
