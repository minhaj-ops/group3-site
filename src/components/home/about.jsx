import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import SectionHeader from "../common/section-header";
import { ACCENT_COLOR, lucideIcons } from "../common/config";
import { motion } from "framer-motion";

const { Rocket, Award } = lucideIcons;

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const iconPop = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "slate.900" }}
    >
      {/* Animated Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <SectionHeader title="Driven by Excellence" subtitle="About Us" />
      </motion.div>

      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: 3,
          mt: 4,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          gap: { xs: 5, md: 6 },
        }}
      >
        {/* TEXT CONTENT */}
        <MotionBox
          sx={{
            flex: "1 1 50%",
            order: { xs: 2, lg: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
        >
          <MotionTypography
            variant="h4"
            component="h4"
            sx={{ fontWeight: "bold", color: "white", mb: 3 }}
            variants={fadeUp}
          >
            We are Group3 Co, relentlessly focused on impact.
          </MotionTypography>

          <MotionTypography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, lineHeight: 1.7 }}
            variants={fadeUp}
          >
            Founded on the principle of engineering simplicity, Group3 Co is a
            collective of seasoned strategists, designers, and engineers. We
            believe that the most powerful solutions are highly functional and
            beautifully intuitive. Our process is collaborative, transparent,
            and centered on your return on innovation.
          </MotionTypography>

          {/* ICON ROW with stagger */}
          <Stack direction="row" spacing={4} mt={4}>
            <MotionBox
              custom={0}
              variants={iconPop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
            >
              <Rocket size={24} color={ACCENT_COLOR} />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "semibold", color: "white" }}
              >
                Rapid Prototyping
              </Typography>
            </MotionBox>

            <MotionBox
              custom={1}
              variants={iconPop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
            >
              <Award size={24} color={ACCENT_COLOR} />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "semibold", color: "white" }}
              >
                Quality Obsessed
              </Typography>
            </MotionBox>
          </Stack>
        </MotionBox>

        {/* IMAGE BLOCK */}
        <MotionBox
          sx={{
            flex: "1 1 50%",
            order: { xs: 1, lg: 2 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: 8,
                position: "relative",
                "&:hover img": { transform: "scale(1.06)" },
              }}
            >
              <Box
                component="img"
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 450 },
                  objectFit: "cover",
                  transition: "transform 0.7s ease",
                }}
              />

              {/* Dark overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(15,23,42,0.5)",
                }}
              />
            </Box>
          </motion.div>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default About;
