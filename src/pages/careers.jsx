import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ACCENT_COLOR, lucideIcons } from "../components/common/config";

const { Briefcase, MapPin, Clock, ArrowRight, Users, Award } = lucideIcons;

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const CareersHero = () => {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          background: `
            radial-gradient(circle at 20% 30%, ${ACCENT_COLOR} 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #0078D4 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center", py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Chip
            icon={<Briefcase size={16} />}
            label="Join Our Team"
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
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Build Your Career
            <Box
              component="span"
              sx={{
                display: "block",
                background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              With Us
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
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Join a team of passionate innovators building the future of technology. We're looking for talented individuals who share our vision and drive for excellence.
          </MotionTypography>
        </motion.div>
      </Container>

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

const JobCard = ({ job, index }) => {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      sx={{
        bgcolor: "#1E293B",
        borderRadius: "16px",
        border: "1px solid #334155",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: ACCENT_COLOR,
          transform: "translateY(-8px)",
          boxShadow: `0 20px 40px -12px ${ACCENT_COLOR}30`,
        },
      }}
    >
      <CardContent sx={{ p: 4, flex: 1, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "start", justifyContent: "space-between", mb: 2 }}>
          <Chip
            label={job.type}
            sx={{
              bgcolor: `${ACCENT_COLOR}20`,
              color: ACCENT_COLOR,
              fontWeight: 600,
              fontSize: "0.75rem",
            }}
          />
          <Chip
            label={job.location}
            icon={<MapPin size={14} />}
            sx={{
              bgcolor: "#334155",
              color: "#A0B3D9",
              fontSize: "0.75rem",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 2,
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {job.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#A0B3D9",
            mb: 3,
            flex: 1,
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {job.description}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          {job.skills.map((skill, idx) => (
            <Chip
              key={idx}
              label={skill}
              size="small"
              sx={{
                bgcolor: "#334155",
                color: "#A0B3D9",
                fontSize: "0.7rem",
                height: "24px",
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#A0B3D9" }}>
            <Clock size={16} />
            <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
              {job.posted}
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/contact"
            endIcon={<ArrowRight size={18} />}
            sx={{
              color: ACCENT_COLOR,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                bgcolor: `${ACCENT_COLOR}10`,
              },
            }}
          >
            Apply Now
          </Button>
        </Box>
      </CardContent>
    </MotionCard>
  );
};

const JobsGrid = () => {
  const jobs = [
    {
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Remote",
      posted: "2 days ago",
      description:
        "We're looking for an experienced full-stack developer to join our team. You'll work on cutting-edge web applications using React, Node.js, and cloud technologies.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Hybrid",
      posted: "5 days ago",
      description:
        "Join our design team to create beautiful, intuitive user experiences. You'll collaborate with developers and product managers to bring designs to life.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      posted: "1 week ago",
      description:
        "We need a DevOps engineer to help us scale our infrastructure and improve our CI/CD pipelines. Experience with Kubernetes, Docker, and cloud platforms required.",
      skills: ["Kubernetes", "Docker", "AWS", "CI/CD", "Terraform"],
    },
    {
      title: "Product Manager",
      type: "Full-time",
      location: "New York",
      posted: "3 days ago",
      description:
        "Lead product strategy and work with cross-functional teams to deliver exceptional products. Strong analytical skills and experience with agile methodologies required.",
      skills: ["Product Strategy", "Agile", "Analytics", "Roadmapping", "Stakeholder Management"],
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      posted: "4 days ago",
      description:
        "Build responsive, performant web applications using modern frontend technologies. You'll work closely with designers to implement pixel-perfect UIs.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote",
      posted: "1 week ago",
      description:
        "Design and implement scalable backend systems and APIs. Experience with microservices architecture and database optimization is essential.",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#0F172A",
      }}
    >
      <Container maxWidth="lg" sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Chip
            label="Open Positions"
            sx={{
              mb: 2,
              bgcolor: `${ACCENT_COLOR}20`,
              color: ACCENT_COLOR,
              fontWeight: 600,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 800,
              mb: 2,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Current Openings
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#A0B3D9",
              maxWidth: "600px",
              mx: "auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Explore our open positions and find the perfect role for you
          </Typography>
        </MotionBox>

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
          {jobs.map((job, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                minHeight: "100%",
                width: "100%",
              }}
            >
              <JobCard job={job} index={index} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented, passionate people in a supportive environment.",
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear paths for advancement.",
    },
    {
      icon: Briefcase,
      title: "Flexible Work",
      description: "Remote and hybrid options to fit your lifestyle and preferences.",
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Health insurance, retirement plans, and generous time off.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#1E293B",
      }}
    >
      <Container maxWidth="lg" sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 800,
              mb: 2,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Why Join Us?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#A0B3D9",
              maxWidth: "600px",
              mx: "auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            We offer more than just a job - we offer a career with purpose
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
          }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  minHeight: "100%",
                  width: "100%",
                }}
              >
                <MotionCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  sx={{
                    bgcolor: "#0F172A",
                    borderRadius: "16px",
                    border: "1px solid #334155",
                    p: 4,
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: ACCENT_COLOR,
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "16px",
                      bgcolor: `${ACCENT_COLOR}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    <Icon size={32} color={ACCENT_COLOR} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      mb: 2,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#A0B3D9",
                      lineHeight: 1.7,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </MotionCard>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

const Careers = () => {
  return (
    <>
      <CareersHero />
      <JobsGrid />
      <WhyJoinUs />
    </>
  );
};

export default Careers;

