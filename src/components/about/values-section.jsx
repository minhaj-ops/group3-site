import React from "react";
import { Box, Typography, Container, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import { ACCENT_COLOR } from "../common/config";

const DARK_BG_COLOR = "#0F172A";
const MEDIUM_DARK_BG_COLOR = "#1C2A4A";

const IntegrityIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 1L3 4v6c0 5.5 3.5 10.5 9 14s9-8.5 9-14V4l-9-3zM7 11v6H5v-6h2zm10 0v6h-2v-6h2zm-5-4l4 4-4 4-4-4 4-4z"
    />
  </SvgIcon>
);

const InnovationIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V7h2v2zm3 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
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

const GrowthIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M16 6l-4 4-4-4-6 6v2h16v-2l-6-6zM18 14h-4v2h4v-2zM4 14H2v2h2v-2zM22 14h-2v2h2v-2z"
    />
  </SvgIcon>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const textParentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const MotionBox = motion(Box);

const ValueCard = ({ icon: Icon, title, description, index }) => (
  <MotionBox
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    sx={{
      width: { xs: "100%", sm: "calc(50% - 16px)", lg: "calc(25% - 12px)" },
      mb: { xs: 4, lg: 0 },
      textAlign: { xs: "center", lg: "left" },
    }}
  >
    <Box
      sx={{
        p: { xs: 3, lg: 4 },
        bgcolor: DARK_BG_COLOR,
        borderRadius: 3,
        border: `1px solid ${MEDIUM_DARK_BG_COLOR}`,
        height: "100%",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        "&:hover": {
          border: `1px solid ${ACCENT_COLOR}`,
          boxShadow: `0 0 25px ${ACCENT_COLOR}40`,
          transform: "translateY(-4px)",
        },
      }}
    >
      <Icon
        sx={{
          color: ACCENT_COLOR,
          fontSize: 40,
          mb: 2,
        }}
      />
      <Typography variant="h6" sx={{ color: "white", fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "white", opacity: 0.7 }}>
        {description}
      </Typography>
    </Box>
  </MotionBox>
);

const OurValuesSection = () => {
  const values = [
    {
      icon: IntegrityIcon,
      title: "Integrity First",
      description:
        "We operate with absolute transparency and ethical rigor, building trust through honest communication and predictable execution.",
    },
    {
      icon: InnovationIcon,
      title: "Relentless Innovation",
      description:
        "We embrace curiosity and are constantly researching, testing, and adopting new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: HandshakeIcon,
      title: "Client Partnership",
      description:
        "Your success is our metric. We deeply embed with your organization to ensure mutual goals and seamless collaboration.",
    },
    {
      icon: GrowthIcon,
      title: "Sustainable Growth",
      description:
        "We build systems and teams designed for durability, aiming for long-term value over short-term gains for both our clients and ourselves.",
    },
  ];

  return (
    <MotionBox
      component="section"
      id="our-values"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
        bgcolor: MEDIUM_DARK_BG_COLOR,
        borderTop: `1px solid ${ACCENT_COLOR}30`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}
      >
        <motion.div
          variants={textParentVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={textItem}>
            <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                Foundation
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={textItem}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                color: "white",
                textAlign: "center",
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 6,
              }}
            >
              The Core Values That Guide Us
            </Typography>
          </motion.div>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            gap: { xs: 4, lg: 3 },
            alignItems: { xs: "center", lg: "stretch" },
          }}
        >
          {values.map((value, index) => (
            <ValueCard key={index} index={index} {...value} />
          ))}
        </Box>
      </Container>
    </MotionBox>
  );
};

export default OurValuesSection;
