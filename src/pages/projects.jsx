import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  IconButton,
  Avatar,
  Rating,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ACCENT_COLOR,
  projectsData,
  testimonialsData,
  lucideIcons,
} from "../components/common/config";

const {
  ExternalLink,
  ArrowRight,
  Zap,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} = lucideIcons;

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

// Get unique categories
const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

// Hero Section
const ProjectsHero = () => {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)`,
      }}
    >
      {/* Animated grid background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${ACCENT_COLOR}10 1px, transparent 1px),
            linear-gradient(90deg, ${ACCENT_COLOR}10 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />

      {/* Floating cards preview */}
      {[...Array(5)].map((_, i) => (
        <MotionBox
          key={i}
          initial={{
            opacity: 0,
            y: 100,
            rotateX: 45,
            rotateY: i % 2 === 0 ? -15 : 15,
          }}
          animate={{
            opacity: 0.2 + i * 0.1,
            y: [0, -20, 0],
            rotateX: [45, 50, 45],
            rotateY: i % 2 === 0 ? [-15, -10, -15] : [15, 10, 15],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          sx={{
            position: "absolute",
            width: 150 + i * 30,
            height: 100 + i * 20,
            borderRadius: "16px",
            border: `2px solid ${ACCENT_COLOR}40`,
            bgcolor: `${ACCENT_COLOR}10`,
            top: `${15 + i * 10}%`,
            left: i % 2 === 0 ? `${5 + i * 3}%` : "auto",
            right: i % 2 !== 0 ? `${5 + i * 3}%` : "auto",
            transformStyle: "preserve-3d",
            pointerEvents: "none",
          }}
        />
      ))}

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, textAlign: "center", py: 8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Chip
            icon={<Star size={16} />}
            label="Our Portfolio"
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
            Showcasing Our
            <Box
              component="span"
              sx={{
                display: "block",
                background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Best Work
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
              mb: 5,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.7,
            }}
          >
            Explore our portfolio of innovative digital solutions that have
            helped businesses transform and thrive.
          </MotionTypography>
        </motion.div>
      </Container>

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

// Project Card
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      sx={{
        bgcolor: "#1E293B",
        borderRadius: "24px",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #334155",
        cursor: "pointer",
        transition: "all 0.4s ease",
        "&:hover": {
          borderColor: ACCENT_COLOR,
          transform: "translateY(-10px)",
          boxShadow: `0 25px 50px -12px ${ACCENT_COLOR}30`,
        },
      }}
    >
      {/* Image Container */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          component={motion.img}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
          src={project.imageUrl}
          alt={`${project.name} - ${project.category}`}
          sx={{
            height: 260,
            width: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Overlay on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to top, ${ACCENT_COLOR}90, transparent)`,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<ExternalLink size={16} />}
                  sx={{
                    bgcolor: "white",
                    color: "#0F172A",
                    borderRadius: "50px",
                    fontWeight: 600,
                    textTransform: "none",
                    px: 3,
                    "&:hover": {
                      bgcolor: "white",
                    },
                  }}
                >
                  View Project
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Badge */}
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
          }}
        >
          <Chip
            label={project.category}
            size="small"
            sx={{
              bgcolor: "rgba(15, 23, 42, 0.9)",
              color: ACCENT_COLOR,
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              border: `1px solid ${ACCENT_COLOR}40`,
            }}
          />
        </Box>
      </Box>

      {/* Content */}
      <CardContent
        sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "white",
            mb: 1.5,
          }}
        >
          {project.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#A0B3D9",
            mb: 3,
            lineHeight: 1.7,
            flexGrow: 1,
          }}
        >
          {project.description}
        </Typography>

        {/* Tags */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          {project.tags.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Chip
                label={tag}
                size="small"
                sx={{
                  bgcolor: "#0F172A",
                  color: "#E0E7FF",
                  fontSize: "0.75rem",
                  border: "1px solid #334155",
                }}
              />
            </motion.div>
          ))}
        </Box>

        {/* Stats */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 3,
            borderTop: "1px solid #334155",
          }}
        >
          {Object.entries(project.stats).map(([key, value], i) => (
            <Box key={key} sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: ACCENT_COLOR, fontWeight: 700 }}
              >
                {value}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#A0B3D9", textTransform: "capitalize" }}
              >
                {key}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </MotionCard>
  );
};

// Projects Grid Section
const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#0F172A",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}
      >
        {/* Category Filter */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 8,
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setActiveCategory(category)}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: "50px",
                  fontWeight: 600,
                  textTransform: "none",
                  bgcolor:
                    activeCategory === category ? ACCENT_COLOR : "transparent",
                  color: activeCategory === category ? "#0F172A" : "#A0B3D9",
                  border: `2px solid ${
                    activeCategory === category ? ACCENT_COLOR : "#334155"
                  }`,
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor:
                      activeCategory === category
                        ? ACCENT_COLOR
                        : `${ACCENT_COLOR}15`,
                    borderColor: ACCENT_COLOR,
                  },
                }}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </MotionBox>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "15+", label: "Industries Served" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "#1E293B",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(90deg, ${ACCENT_COLOR}10 0%, transparent 50%, ${ACCENT_COLOR}10 100%)`,
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
          {stats.map((stat, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{ textAlign: "center" }}
            >
              <MotionTypography
                variant="h2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                sx={{
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1,
                }}
              >
                {stat.value}
              </MotionTypography>
              <Typography
                variant="body1"
                sx={{ color: "#A0B3D9", fontWeight: 500 }}
              >
                {stat.label}
              </Typography>
            </MotionBox>
          ))}
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
            radial-gradient(circle at 20% 50%, ${ACCENT_COLOR}15 0%, transparent 40%),
            radial-gradient(circle at 80% 50%, #4ECDC415 0%, transparent 40%)
          `,
        }}
      />

      <Container
        maxWidth="md"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Chip
            icon={<Zap size={16} />}
            label="Start Your Project"
            sx={{
              mb: 3,
              bgcolor: `${ACCENT_COLOR}20`,
              color: ACCENT_COLOR,
              fontWeight: 600,
              px: 2,
              py: 2.5,
              border: `1px solid ${ACCENT_COLOR}40`,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 3,
            }}
          >
            Have a Project in Mind?
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
            Let's collaborate and create something extraordinary together.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
                  px: 5,
                  py: 1.8,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: `0 8px 30px ${ACCENT_COLOR}50`,
                }}
              >
                Start a Project
              </Button>
            </motion.div>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

// Featured Testimonials Section
const FeaturedTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
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

// Main Projects Page
const Projects = () => {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <StatsSection />
      <CTASection />
      <FeaturedTestimonials />
    </>
  );
};

export default Projects;
