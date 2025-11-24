import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import SectionHeader from "../common/section-header";
import { ACCENT_COLOR, projectsData } from "../common/config";

// ProjectCard component remains the same
const ProjectCard = ({ name, category, description, imageUrl }) => (
  <Card
    sx={{
      bgcolor: "slate.800",
      borderRadius: "12px",
      boxShadow: 3,
      overflow: "hidden",
      position: "relative",
      border: "1px solid #334155",
      transition: "all 0.5s",
      "&:hover .overlay": { opacity: 1 },
      "&:hover img": { opacity: 0.5 },
      "&:hover": { boxShadow: `0 10px 20px -5px ${ACCENT_COLOR}40` },
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
      }}
    >
      <Button
        variant="outlined"
        sx={{
          borderColor: ACCENT_COLOR,
          color: ACCENT_COLOR,
          borderRadius: 50,
          fontWeight: "bold",
          py: 1,
          px: 3,
          textTransform: "none",
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
);

const Projects = () => (
  <Box
    component="section"
    id="projects"
    sx={{ py: { xs: 8, md: 12 }, bgcolor: "slate.800" }}
  >
    <SectionHeader title="Showcase of Innovation" subtitle="Projects" />
    <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3, mt: 4 }}>
      {/* Replaced Grid container with a Flex Box container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // Allows the cards to wrap to the next line
          gap: 4, // Spacing between items (equivalent to Grid spacing)
          justifyContent: "flex-start",
        }}
      >
        {projectsData.map((project, index) => (
          // Replaced Grid item with a Box item
          <Box
            key={index}
            sx={{
              // Responsive width calculation based on original Grid setup: xs=12, md=4
              width: {
                xs: "100%", // 100% width on extra-small screens (1 card per row)
                md: "calc(33.333% - 24px)", // 33.333% width minus adjustment for 4-unit gap (3 cards per row)
              },
              mb: 0, // Gap handles vertical spacing
            }}
          >
            <ProjectCard {...project} />
          </Box>
        ))}
      </Box>
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Button
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
            "&:hover": {
              bgcolor: ACCENT_COLOR + "1A",
              borderColor: ACCENT_COLOR,
            },
          }}
        >
          View All Projects
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Projects;
