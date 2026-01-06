import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../common/section-header";
import { ACCENT_COLOR, projectsData } from "../common/config";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each card
    },
  },
};

// Variants for individual cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    scale: 1.05,
    boxShadow: `0 15px 25px -5px ${ACCENT_COLOR}40`,
    transition: { duration: 0.3 },
  },
};

const ProjectCard = ({ name, category, description, imageUrl }) => (
  <motion.div variants={cardVariants} whileHover="hover">
    <Card
      sx={{
        bgcolor: "slate.800",
        borderRadius: "12px",
        boxShadow: 3,
        overflow: "hidden",
        position: "relative",
        border: "1px solid #334155",
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={imageUrl}
        alt={name}
        sx={{
          objectFit: "cover",
          transition: "opacity 0.5s",
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x250/1e293b/FFFFFF?text=Project";
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.7)",
          opacity: 0,
          transition: "opacity 0.5s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": { opacity: 1 },
        }}
      >
        <Button
          component={Link}
          to="/projects"
          variant="outlined"
          sx={{
            borderColor: ACCENT_COLOR,
            color: ACCENT_COLOR,
            borderRadius: 50,
            fontWeight: "bold",
            py: 1,
            px: 3,
            textTransform: "none",
            textDecoration: "none",
            "&:hover": {
              bgcolor: ACCENT_COLOR,
              color: "#0F172A",
              borderColor: ACCENT_COLOR,
            },
          }}
        >
          View Case Study
        </Button>
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="caption"
          sx={{
            color: ACCENT_COLOR,
            fontWeight: "semibold",
            textTransform: "uppercase",
            mb: 0.5,
            display: "block",
          }}
        >
          {category}
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          sx={{ fontWeight: "bold", color: "white", mb: 1 }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const Projects = () => (
  <Box
    component="section"
    id="projects"
    sx={{ py: { xs: 8, md: 12 }, bgcolor: "slate.800" }}
  >
    <SectionHeader title="Showcase of Innovation" subtitle="Projects" />
    <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3, mt: 4 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "35px",
          justifyContent: "flex-start",
        }}
      >
        {projectsData.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                md: "calc(33.333% - 24px)",
              },
            }}
          >
            <ProjectCard {...project} />
          </Box>
        ))}
      </motion.div>

      <Box sx={{ textAlign: "center", mt: 8 }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            sx={{
              borderColor: ACCENT_COLOR,
              color: ACCENT_COLOR,
              borderRadius: 50,
              fontWeight: "bold",
              py: 1.5,
              px: 4,
              textTransform: "none",
              fontSize: "1rem",
              textDecoration: "none",
              "&:hover": {
                bgcolor: ACCENT_COLOR + "1A",
                borderColor: ACCENT_COLOR,
              },
            }}
          >
            View All Projects
          </Button>
        </motion.div>
      </Box>
    </Box>
  </Box>
);

export default Projects;
