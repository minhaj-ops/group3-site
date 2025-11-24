import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import SectionHeader from "../common/section-header";
import { ACCENT_COLOR, servicesData } from "../common/config";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <Card
    sx={{
      bgcolor: "slate.800",
      borderRadius: "12px",
      boxShadow: 3,
      p: 2,
      height: "100%",
      border: "1px solid #334155",
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: `0 10px 20px -5px ${ACCENT_COLOR}40`,
      },
    }}
  >
    <CardContent>
      <Box sx={{ color: ACCENT_COLOR, mb: 2 }}>
        <Icon size={36} />
      </Box>
      <Typography
        variant="h5"
        component="h4"
        sx={{ fontWeight: "bold", color: "white", mb: 1.5 }}
      >
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const Services = () => (
  <Box
    component="section"
    id="services"
    sx={{ py: { xs: 8, md: 12 }, bgcolor: "slate.900" }}
  >
    <SectionHeader title="Our Core Offerings" subtitle="Services" />
    <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3, mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "flex-start",
        }}
      >
        {servicesData.map((service, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                lg: "calc(25% - 24px)",
              },
              mb: 0,
            }}
          >
            <ServiceCard {...service} />
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

export default Services;
