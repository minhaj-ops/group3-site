import React from "react";
import {
  Box,
  Typography,
  Container,
  Avatar,
  IconButton,
  SvgIcon,
} from "@mui/material";
import { motion } from "framer-motion";
import { ACCENT_COLOR } from "../common/config";

const DARK_BG_COLOR = "#0F172A";
const MEDIUM_DARK_BG_COLOR = "#1C2A4A";

const LinkedInIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.51-2.32 1.34v-.1h-.07a.27.27 0 0 1-.27-.27v-3.1h-3.57v11.1H13v-5.2c0-.28.02-.57.1-.77a1.77 1.77 0 0 1 1.6-1.61c1.17 0 1.63 1.05 1.63 2.5v5.08h3.58M6.5 7.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M13 18.5V13h-3.5V18.5H13z"
    />
  </SvgIcon>
);

const TwitterIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M22.46 6c-.8.36-1.68.6-2.6.7a4.67 4.67 0 0 0-3.22-1.35 4.7 4.7 0 0 0-4.7 4.7c0 .37.04.73.1 1.08A13.37 13.37 0 0 1 3 4.5c-.38.65-.6 1.37-.6 2.15a4.7 4.7 0 0 0 1.95 3.88C4 10.23 3.5 10.08 3 9.8v.06a4.7 4.7 0 0 0 3.78 4.6l-1.8.08c-.46 0-.9-.05-1.3-.12a4.7 4.7 0 0 0 4.38 3.2C9.55 18.33 7.8 19 6 19c-.37 0-.74-.02-1.1-.06A13.13 13.13 0 0 0 16.53 17c5.2 0 8.04-4.3 8.04-8.03c0-.12 0-.24-.01-.36A5.76 5.76 0 0 0 22.46 6z"
    />
  </SvgIcon>
);

const GithubIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.819-.258.819-.578 0-.288-.011-1.05-.017-2.062-3.337.724-4.042-1.61-4.042-1.61-.545-1.384-1.328-1.751-1.328-1.751-1.089-.743.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.999.108-.77.42-1.305.762-1.604-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23-.957-.266-1.983-.399-3.004-.404-1.021.005-2.046.138-3.004.404 2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.873.118 3.176.766.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.92-.43.37-.819 1.1-.819 2.222 0 1.604-.015 2.899-.015 3.29 0 .319.217.691.825.578C19.462 21.799 23 17.292 23 12c0-6.627-5.373-12-12-12z"
    />
  </SvgIcon>
);

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);
const MotionTypography = motion(Typography);

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const TeamMemberCard = ({ member, delay }) => {
  return (
    <MotionBox
      variants={cardVariants}
      transition={{ duration: 0.7, ease: "easeOut" }}
      sx={{
        width: {
          xs: "100%",
          sm: "calc(50% - 16px)",
          md: "calc(33.333% - 21.333px)",
          lg: "calc(25% - 18px)",
        },
        mb: { xs: 6, sm: 8, md: 0 },
        mx: { xs: "auto", md: 0 },
        maxWidth: "320px",
      }}
    >
      <MotionBox
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ duration: 0.3 }}
        sx={{
          bgcolor: MEDIUM_DARK_BG_COLOR,
          borderRadius: 4,
          p: 4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          border: `1px solid ${ACCENT_COLOR}60`,
          boxShadow: `0 8px 25px ${DARK_BG_COLOR}80`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <MotionAvatar
          whileHover={{ scale: 1.08 }}
          src={member.image}
          alt={member.name}
          sx={{
            width: 140,
            height: 140,
            mb: 3,
            border: `4px solid ${ACCENT_COLOR}`,
            boxShadow: `0 0 0 6px ${DARK_BG_COLOR}`,
          }}
        />
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          variant="h5"
          sx={{ color: "white", mb: 1, fontWeight: 700 }}
        >
          {member.name}
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          variant="subtitle1"
          sx={{ color: ACCENT_COLOR, mb: 2, fontWeight: 500 }}
        >
          {member.title}
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          variant="body2"
          sx={{ color: "white", opacity: 0.8, mb: 3 }}
        >
          {member.bio}
        </MotionTypography>

        <Box sx={{ mt: "auto", display: "flex", gap: 1 }}>
          {member.linkedin && (
            <IconButton
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: ACCENT_COLOR, "&:hover": { color: "white" } }}
            >
              <LinkedInIcon />
            </IconButton>
          )}
          {member.twitter && (
            <IconButton
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: ACCENT_COLOR, "&:hover": { color: "white" } }}
            >
              <TwitterIcon />
            </IconButton>
          )}
          {member.github && (
            <IconButton
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: ACCENT_COLOR, "&:hover": { color: "white" } }}
            >
              <GithubIcon />
            </IconButton>
          )}
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

const TeamMembersSection = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      title: "CEO & Lead Strategist",
      image:
        "https://images.unsplash.com/photo-1560250097-fb5ee4d7aee7?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Alex guides our vision, ensuring every project aligns with client goals and market trends.",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
    },
    {
      name: "Maria Rodriguez",
      title: "CTO & Principal Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194d6f7c6a?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Maria leads our engineering efforts, building robust and scalable digital solutions.",
      linkedin: "https://linkedin.com/in/mariarodriguez",
      github: "https://github.com/mariar",
    },
    {
      name: "Ben Carter",
      title: "Lead UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Ben crafts intuitive and engaging user experiences that delight our clients and their users.",
      linkedin: "https://linkedin.com/in/bencarter",
      twitter: "https://twitter.com/bencarterdesign",
    },
    {
      name: "Sarah Lee",
      title: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Sarah ensures smooth project delivery, keeping communication clear and timelines on track.",
      linkedin: "https://linkedin.com/in/sarahlee",
    },
  ];

  return (
    <Box
      id="team-members"
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: DARK_BG_COLOR,
        color: "white",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: ACCENT_COLOR,
              mb: 1,
            }}
          >
            Our Core
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2.5rem", md: "3.8rem" },
              lineHeight: 1.1,
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            Meet the Brilliant Minds Behind{" "}
            <Box component="span" sx={{ color: ACCENT_COLOR }}>
              Group3 Co
            </Box>
          </MotionTypography>
        </Box>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 4, sm: 4, md: 5, lg: 3 },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              delay={index * 0.1}
            />
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
};

export default TeamMembersSection;
