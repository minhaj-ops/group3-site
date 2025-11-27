import React from "react";
import { Box, Typography, Container, Paper, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import { ACCENT_COLOR } from "../common/config";

const DARK_BG_COLOR = "#0F172A";
const MEDIUM_DARK_BG_COLOR = "#1C2A4A";

const CodeIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M14.6 16.6L19.2 12l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z"
    />
  </SvgIcon>
);

const TargetIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 8a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m0-16a10 10 0 0 0-10 10a10 10 0 0 0 10 10a10 10 0 0 0 10-10a10 10 0 0 0-10-10z"
    />
  </SvgIcon>
);

const HandshakeIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M11 11.5L9 9.5a.5.5 0 0 0-.85.34l-.15.46a.5.5 0 0 0 .91.43l.59-.59c.2-.2.53-.2.73 0l1.42 1.42c.2.2.2.53 0 .73l-1.35 1.35a2 2 0 0 0-.41 1.76l.16.48a.5.5 0 0 0 .93.36l.73-.73c.3-.3.8-.3 1.1 0l.9.9c.3.3.3.8 0 1.1L12.7 17a2 2 0 0 0 0 2.83l.85.85a.5.5 0 0 0 .7.03l1.8-1.8c.2-.2.53-.2.73 0l.73.73c.3.3.8.3 1.1 0l.9-.9c.3-.3.3-.8 0-1.1L16.27 15l1.63-1.63a.5.5 0 0 0 .1-.55l-.32-1.07a2 2 0 0 0-1.64-1.3l-1.28-.15a.5.5 0 0 0-.48.42l-.33 1.32c-.07.26.04.53.25.7l.73.72M8 17.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M10 5l4 4l.8-.8a.5.5 0 0 0 0-.7L12.5 5.5a.5.5 0 0 0-.7 0L10.5 7.3a.5.5 0 0 0 0 .7L11.5 9l-4 4l-1.41-1.41l4-4l-1.09-1.09a.5.5 0 0 0-.7 0L4.5 9.8a.5.5 0 0 0 0 .7L5.5 12l-4 4l1.4 1.4L11 11.5z"
    />
  </SvgIcon>
);

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const variants = {
  left: { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
  up: { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 } },
};

const FeatureCard = ({ icon: Icon, title, description, delay, direction }) => (
  <MotionBox
    variants={variants[direction]}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, delay }}
    sx={{
      width: {
        xs: "100%",
        sm: "calc(50% - 16px)",
        md: "calc(33.333% - 21.333px)",
      },
      mb: { xs: 4, md: 0 },
    }}
  >
    <MotionPaper
      elevation={10}
      sx={{
        p: 4,
        bgcolor: MEDIUM_DARK_BG_COLOR,
        borderRadius: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        border: `1px solid ${ACCENT_COLOR}60`,
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at top left, ${ACCENT_COLOR}10 0%, transparent 70%)`,
          zIndex: -1,
          opacity: 0,
          transition: "opacity 0.4s ease-in-out",
        },
        transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: `0 20px 40px -8px ${ACCENT_COLOR}90`,
          "&:before": {
            opacity: 1,
          },
        },
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Box
        sx={{
          bgcolor: ACCENT_COLOR,
          p: 2,
          borderRadius: "50%",
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 5px 15px ${ACCENT_COLOR}60`,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "rotate(10deg) scale(1.1)",
          },
        }}
      >
        <Icon sx={{ color: DARK_BG_COLOR, fontSize: 48 }} />
      </Box>

      <Typography
        variant="h5"
        component="h3"
        sx={{ color: "white", mb: 1.5, fontWeight: 700 }}
      >
        {title}
      </Typography>

      <Typography variant="body1" sx={{ color: "white", opacity: 0.8 }}>
        {description}
      </Typography>
    </MotionPaper>
  </MotionBox>
);

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: CodeIcon,
      title: "Expert Engineering",
      description:
        "Our dedicated team of senior developers delivers clean, scalable, and performance-optimized code that stands the test of time.",
    },
    {
      icon: TargetIcon,
      title: "Strategy-First Approach",
      description:
        "We don't just build, we plan. Every feature is tied directly to your business goals, ensuring maximum ROI.",
    },
    {
      icon: HandshakeIcon,
      title: "True Partnership",
      description:
        "We embed with your team, offering full transparency and iterative feedback loops to ensure alignment from concept to launch.",
    },
  ];

  return (
    <MotionBox
      component="section"
      id="why-choose-us"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: DARK_BG_COLOR,
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          position: "absolute",
          top: "10%",
          left: "0%",
          width: "400px",
          height: "400px",
          backgroundColor: ACCENT_COLOR,
          borderRadius: "50%",
          filter: "blur(150px)",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 0.06, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "0%",
          width: "450px",
          height: "450px",
          backgroundColor: ACCENT_COLOR,
          borderRadius: "50%",
          filter: "blur(170px)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          "@media (min-width: 1200px)": {
            maxWidth: "1280px",
          },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: ACCENT_COLOR,
              mb: 1,
            }}
          >
            Our Difference
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2.5rem", md: "3.8rem" },
              lineHeight: 1.1,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Why Visionary Leaders Choose{" "}
            <Box component="span" sx={{ color: ACCENT_COLOR }}>
              Group3 Co
            </Box>
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: { xs: 4, md: 5 },
            alignItems: { xs: "center", md: "stretch" },
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 + index * 0.15}
              direction={index === 0 ? "left" : index === 2 ? "right" : "up"}
            />
          ))}
        </Box>
      </Container>
    </MotionBox>
  );
};

export default WhyChooseUsSection;
