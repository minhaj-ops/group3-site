import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  ACCENT_COLOR,
  servicesData,
  processSteps,
  lucideIcons,
} from "../components/common/config";

const { CheckCircle, ArrowRight, Zap } = lucideIcons;

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

// Hero Section with floating elements
const ServicesHero = () => {
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
      {/* Animated background patterns */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          background: `
            radial-gradient(circle at 20% 30%, ${ACCENT_COLOR} 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #4ECDC4 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <MotionBox
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          sx={{
            position: "absolute",
            width: 60 + Math.random() * 100,
            height: 60 + Math.random() * 100,
            borderRadius: i % 2 === 0 ? "50%" : "20%",
            border: `2px solid ${ACCENT_COLOR}40`,
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            pointerEvents: "none",
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center", py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Chip
            icon={<Zap size={16} />}
            label="Our Services"
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
            Transforming Ideas Into
            <Box
              component="span"
              sx={{
                display: "block",
                background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Excellence
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
            From strategy to deployment, we provide end-to-end digital solutions
            that drive growth and create lasting impact.
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
              href="#services-grid"
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
              Explore Our Services
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

// Service Card Component
const ServiceCard = ({ service, index, isExpanded, onToggle }) => {
  const Icon = service.icon;

  return (
    <MotionCard
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onToggle}
      sx={{
        bgcolor: "#1E293B",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        border: `1px solid ${isExpanded ? service.color : "#334155"}`,
        transition: "border-color 0.3s",
        height: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`,
          opacity: isExpanded ? 1 : 0,
          transition: "opacity 0.3s",
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        {/* Icon */}
        <MotionBox
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          sx={{
            width: 70,
            height: 70,
            borderRadius: "20px",
            bgcolor: `${service.color}20`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            border: `2px solid ${service.color}40`,
          }}
        >
          <Icon size={32} color={service.color} />
        </MotionBox>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "white",
            mb: 2,
          }}
        >
          {service.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "#A0B3D9",
            mb: 3,
            lineHeight: 1.7,
          }}
        >
          {service.description}
        </Typography>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{ pt: 2, borderTop: "1px solid #334155" }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: service.color, mb: 2, fontWeight: 600 }}
                >
                  What's Included:
                </Typography>
                {service.details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1.5,
                      }}
                    >
                      <CheckCircle
                        size={18}
                        color={service.color}
                        style={{ marginRight: 10, flexShrink: 0 }}
                      />
                      <Typography variant="body2" sx={{ color: "#E0E7FF" }}>
                        {detail}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle indicator */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            color: service.color,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600, mr: 1 }}>
            {isExpanded ? "Show Less" : "Learn More"}
          </Typography>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={18} style={{ transform: "rotate(90deg)" }} />
          </motion.div>
        </Box>
      </CardContent>
    </MotionCard>
  );
};

// Services Grid Section
const ServicesGrid = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <Box
      id="services-grid"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#0F172A",
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
            What We Offer
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Comprehensive Digital Solutions
          </Typography>
        </MotionBox>

        {/* Services Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Process Section
const ProcessSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: "#1E293B",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          background: `radial-gradient(circle at center, ${ACCENT_COLOR}05 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 10 }}
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
            Our Approach
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
            }}
          >
            How We Bring Your Vision to Life
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#A0B3D9",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Our proven methodology ensures successful project delivery every time.
          </Typography>
        </MotionBox>

        {/* Process Steps */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {processSteps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                sx={{
                  p: 4,
                  bgcolor: "#0F172A",
                  borderRadius: "20px",
                  border: "1px solid #334155",
                  position: "relative",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: ACCENT_COLOR,
                    boxShadow: `0 10px 40px ${ACCENT_COLOR}20`,
                  },
                }}
              >
                {/* Step number */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -15,
                    left: 20,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: ACCENT_COLOR,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0F172A",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    boxShadow: `0 4px 15px ${ACCENT_COLOR}50`,
                  }}
                >
                  {step.step}
                </Box>

                <Box sx={{ pt: 2 }}>
                  <StepIcon size={36} color={ACCENT_COLOR} style={{ marginBottom: 16 }} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "white",
                      mb: 1.5,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#A0B3D9",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
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
            radial-gradient(circle at 30% 50%, ${ACCENT_COLOR}20 0%, transparent 40%),
            radial-gradient(circle at 70% 50%, #4ECDC420 0%, transparent 40%)
          `,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 3,
            }}
          >
            Ready to Start Your Project?
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
            Let's discuss how we can help transform your ideas into reality.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                href="/contact"
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
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                size="large"
                href="/projects"
                sx={{
                  borderColor: ACCENT_COLOR,
                  color: ACCENT_COLOR,
                  px: 5,
                  py: 1.8,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  textTransform: "none",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    bgcolor: `${ACCENT_COLOR}15`,
                  },
                }}
              >
                View Projects
              </Button>
            </motion.div>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

// Main Services Page
const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  );
};

export default Services;
