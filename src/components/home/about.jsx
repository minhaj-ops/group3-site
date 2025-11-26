import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import SectionHeader from "../common/section-header";
import { ACCENT_COLOR, lucideIcons } from "../common/config";

const { Rocket, Award } = lucideIcons;

const About = () => (
  <Box
    component="section"
    id="about"
    sx={{ py: { xs: 8, md: 12 }, bgcolor: "slate.900" }}
  >
    <SectionHeader title="Driven by Excellence" subtitle="About Us" />
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
      {/* 2. Text Content Box */}
      <Box
        sx={{
          flex: "1 1 50%", // Occupy 50% of space on large screens
          order: { xs: 2, lg: 1 }, // Text second on mobile, first on desktop
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: "bold", color: "white", mb: 3 }}
        >
          We are Group3 Co, relentlessly focused on impact.
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, lineHeight: 1.7 }}
        >
          Founded on the principle of engineering simplicity, Group3 Co is a
          collective of seasoned strategists, designers, and engineers. We
          believe that the most powerful solutions are those that are both
          highly functional and beautifully intuitive. Our process is
          collaborative, transparent, and focused entirely on your return on
          innovation.
        </Typography>
        <Stack direction="row" spacing={4} mt={4}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Rocket size={24} color={ACCENT_COLOR} />
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "semibold", color: "white" }}
            >
              Rapid Prototyping
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Award size={24} color={ACCENT_COLOR} />
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "semibold", color: "white" }}
            >
              Quality Obsessed
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* 3. Image Content Box */}
      <Box
        sx={{
          flex: "1 1 50%",
          order: { xs: 1, lg: 2 },
        }}
      >
        <Box
          sx={{
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: 8,
            position: "relative",
            "&:hover img": { transform: "scale(1.05)" },
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
              transition: "transform 0.7s",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(15, 23, 42, 0.5)",
            }}
          />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default About;
