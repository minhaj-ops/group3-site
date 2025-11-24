import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { ACCENT_COLOR } from "./config";

const SectionHeader = ({ id, title, subtitle }) => (
  <Box
    id={id}
    sx={{
      textAlign: "center",
      py: { xs: 8, md: 10 },
      pt: { xs: 10, md: 12 },
      maxWidth: "800px",
      mx: "auto",
    }}
  >
    <Typography
      variant="overline"
      component="h2"
      sx={{
        color: ACCENT_COLOR,
        fontWeight: "bold",
        letterSpacing: "0.2em",
        mb: 1,
      }}
    >
      {subtitle}
    </Typography>
    <Typography
      variant="h3"
      component="h3"
      sx={{ fontWeight: "800", color: "white" }}
    >
      {title}
    </Typography>
    <Divider
      sx={{
        width: "60px",
        height: "4px",
        bgcolor: ACCENT_COLOR,
        mx: "auto",
        mt: 2,
        borderRadius: "4px",
      }}
    />
  </Box>
);

export default SectionHeader;
