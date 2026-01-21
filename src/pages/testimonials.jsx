import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Button,
  Chip,
  Rating,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ACCENT_COLOR, testimonialsData, lucideIcons, statsData } from "../components/common/config";

const { Quote, ArrowRight, ChevronLeft, ChevronRight, Star, Heart, MessageSquare } = lucideIcons;

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

// Hero Section
const TestimonialsHero = () => {
  return (
    <Box
      sx={{
        minHeight: "55vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)`,
      }}
    >
      {/* Floating quote marks */}
      {[...Array(6)].map((_, i) => (
        <MotionBox
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          sx={{
            position: "absolute",
            top: `${10 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 85}%`,
            color: ACCENT_COLOR,
            pointerEvents: "none",
          }}
        >
          <Quote size={40 + i * 15} strokeWidth={1} />
        </MotionBox>
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center", py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Chip
            icon={<Heart size={16} />}
            label="Client Stories"
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
            What Our Clients
            <Box
              component="span"
              sx={{
                display: "block",
                background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Say About Us
            </Box>
          </MotionTypography>

          <MotionTypography
            variant="h6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              color: "#A0B3D9",
              maxWidth: "650px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.7,
            }}
          >
            Real stories from real clients. See how we've helped businesses
            transform their digital presence.
          </MotionTypography>
        </motion.div>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to top, #0F172A, transparent)",
        }}
      />
    </Box>
  );
};

// Featured Testimonial Carousel
const FeaturedTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 7000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  const testimonial = testimonialsData[current];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#0F172A",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <MotionCard
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              sx={{
                bgcolor: "#1E293B",
                borderRadius: "32px",
                overflow: "visible",
                border: `1px solid ${ACCENT_COLOR}30`,
                position: "relative",
                boxShadow: `0 30px 60px -20px ${ACCENT_COLOR}20`,
              }}
            >
              {/* Decorative quote */}
              <Box
                sx={{
                  position: "absolute",
                  top: -30,
                  left: 50,
                  color: ACCENT_COLOR,
                  opacity: 0.5,
                }}
              >
                <Quote size={80} strokeWidth={1} />
              </Box>

              <CardContent sx={{ p: { xs: 4, md: 8 }, pt: { xs: 6, md: 10 } }}>
                {/* Rating */}
                <Box sx={{ mb: 4 }}>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{
                      "& .MuiRating-iconFilled": { color: ACCENT_COLOR },
                      "& .MuiRating-iconEmpty": { color: "#334155" },
                    }}
                  />
                </Box>

                {/* Quote */}
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "italic",
                    color: "white",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: 5,
                    fontSize: { xs: "1.3rem", md: "1.8rem" },
                  }}
                >
                  "{testimonial.quote}"
                </Typography>

                {/* Author Info */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    pt: 4,
                    borderTop: "1px solid #334155",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      sx={{
                        width: 80,
                        height: 80,
                        border: `3px solid ${ACCENT_COLOR}`,
                        boxShadow: `0 0 20px ${ACCENT_COLOR}40`,
                      }}
                    />
                  </motion.div>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: 700, mb: 0.5 }}
                    >
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body1" sx={{ color: ACCENT_COLOR }}>
                      {testimonial.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#A0B3D9", mt: 0.5 }}
                    >
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </MotionCard>
          </AnimatePresence>

          {/* Navigation */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              mt: 5,
            }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={prevTestimonial}
                sx={{
                  bgcolor: "#1E293B",
                  color: "white",
                  border: `2px solid ${ACCENT_COLOR}`,
                  p: 1.5,
                  "&:hover": {
                    bgcolor: ACCENT_COLOR,
                    color: "#0F172A",
                  },
                }}
              >
                <ChevronLeft size={24} />
              </IconButton>
            </motion.div>

            {/* Dots */}
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {testimonialsData.map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.3 }}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Box
                    sx={{
                      width: index === current ? 30 : 10,
                      height: 10,
                      borderRadius: "5px",
                      bgcolor: index === current ? ACCENT_COLOR : "#334155",
                      transition: "all 0.3s",
                    }}
                  />
                </motion.div>
              ))}
            </Box>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={nextTestimonial}
                sx={{
                  bgcolor: "#1E293B",
                  color: "white",
                  border: `2px solid ${ACCENT_COLOR}`,
                  p: 1.5,
                  "&:hover": {
                    bgcolor: ACCENT_COLOR,
                    color: "#0F172A",
                  },
                }}
              >
                <ChevronRight size={24} />
              </IconButton>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Testimonials Grid
const TestimonialsGrid = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#1E293B",
      }}
    >
      <Container maxWidth="lg" sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}>
        {/* Section Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: ACCENT_COLOR,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Success Stories
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            More Happy Clients
          </Typography>
        </MotionBox>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card
                sx={{
                  bgcolor: "#0F172A",
                  borderRadius: "24px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #334155",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: ACCENT_COLOR,
                    boxShadow: `0 20px 40px ${ACCENT_COLOR}15`,
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  {/* Quote icon and rating */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box sx={{ color: ACCENT_COLOR, opacity: 0.5 }}>
                      <Quote size={32} />
                    </Box>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      size="small"
                      sx={{
                        "& .MuiRating-iconFilled": { color: ACCENT_COLOR },
                        "& .MuiRating-iconEmpty": { color: "#334155" },
                      }}
                    />
                  </Box>

                  {/* Quote text */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#E0E7FF",
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      mb: 4,
                      flexGrow: 1,
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>

                  {/* Author */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      pt: 3,
                      borderTop: "1px solid #334155",
                    }}
                  >
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      sx={{
                        width: 50,
                        height: 50,
                        border: `2px solid ${ACCENT_COLOR}60`,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "white", fontWeight: 600 }}
                      >
                        {testimonial.author}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: ACCENT_COLOR }}
                      >
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Stats Section
const StatsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "#0F172A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 20% 50%, ${ACCENT_COLOR}10 0%, transparent 40%),
            radial-gradient(circle at 80% 50%, ${ACCENT_COLOR}10 0%, transparent 40%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
          }}
        >
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                sx={{
                  textAlign: "center",
                  p: 4,
                  borderRadius: "20px",
                  bgcolor: "#1E293B",
                  border: "1px solid #334155",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: ACCENT_COLOR,
                    boxShadow: `0 10px 30px ${ACCENT_COLOR}20`,
                  },
                }}
              >
                <Box sx={{ color: ACCENT_COLOR, mb: 2 }}>
                  <Icon size={36} />
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "white",
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#A0B3D9" }}
                >
                  {stat.label}
                </Typography>
              </MotionBox>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#1E293B",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, ${ACCENT_COLOR}15 0%, transparent 60%)`,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ color: ACCENT_COLOR, mb: 3 }}>
            <MessageSquare size={60} strokeWidth={1.5} />
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 3,
            }}
          >
            Ready to Become Our Next Success Story?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#A0B3D9",
              mb: 5,
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            Join hundreds of satisfied clients who have transformed their businesses with us.
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              endIcon={<ArrowRight size={20} />}
              sx={{
                bgcolor: ACCENT_COLOR,
                color: "#0F172A",
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: `0 8px 30px ${ACCENT_COLOR}50`,
              }}
            >
              Start Your Journey
            </Button>
          </motion.div>
        </MotionBox>
      </Container>
    </Box>
  );
};

// Main Testimonials Page
const Testimonials = () => {
  return (
    <>
      <TestimonialsHero />
      <FeaturedTestimonials />
      <TestimonialsGrid />
      <StatsSection />
      <CTASection />
    </>
  );
};

export default Testimonials;













