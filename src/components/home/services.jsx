import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import SectionHeader from "../common/section-header";
import { ACCENT_COLOR, servicesData } from "../common/config";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <MotionCard
      elevation={0}
      whileHover={{
        scale: 1.04,
        rotateX: 0.5,
        rotateY: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 },
      }}
      whileTap={{ scale: 0.99 }}
      sx={{
        bgcolor: "slate.800",
        borderRadius: "12px",
        p: 2,
        height: "100%",
        border: "1px solid #334155",
        transformStyle: "preserve-3d",
        boxShadow: "0 6px 18px rgba(2,6,23,0.6)",
        willChange: "transform",
        cursor: "pointer",
      }}
    >
      <CardContent>
        {/* icon + subtle floating */}
        <MotionBox
          initial={{ y: 0 }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: index * 0.15,
          }}
          sx={{ color: ACCENT_COLOR, mb: 2, display: "inline-flex" }}
        >
          <Icon size={36} />
        </MotionBox>

        <MotionTypography
          layout
          variant="h5"
          component="h4"
          sx={{ fontWeight: 700, color: "white", mb: 1.5 }}
        >
          {title}
        </MotionTypography>

        <MotionTypography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {description}
        </MotionTypography>

        {/* glowing accent bar that expands on hover */}
        <Box
          sx={{
            height: 6,
            mt: 3,
            borderRadius: 2,
            background:
              "linear-gradient(90deg, rgba(255,122,89,0.12), rgba(255,122,89,0.06))",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <MotionBox
            initial={{ width: "10%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            sx={{
              height: "100%",
              bgcolor: `${ACCENT_COLOR}AA`,
              boxShadow: `0 6px 18px -8px ${ACCENT_COLOR}66`,
            }}
          />
        </Box>
      </CardContent>
    </MotionCard>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const Services = () => (
  <Box
    component="section"
    id="services"
    sx={{ py: { xs: 8, md: 12 }, bgcolor: "slate.900" }}
  >
    <SectionHeader title="Our Core Offerings" subtitle="Services" />

    <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3, mt: 4 }}>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "flex-start",
        }}
      >
        {servicesData.map((service, index) => (
          <MotionBox
            key={index}
            variants={cardVariants}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                lg: "calc(25% - 24px)",
              },
            }}
          >
            <ServiceCard {...service} index={index} />
          </MotionBox>
        ))}
      </MotionBox>
    </Box>
  </Box>
);

export default Services;
