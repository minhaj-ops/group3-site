import React from "react";
import { Box, Container, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ACCENT_COLOR,
  caseStudiesData,
  lucideIcons,
} from "../components/common/config";

const { ChevronLeft, ArrowRight, CheckCircle, Quote, Zap } = lucideIcons;

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Hero = ({ caseStudy }) => (
  <Box
    sx={{
      position: "relative",
      overflow: "hidden",
      background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)`,
      pt: { xs: 12, md: 14 },
      pb: { xs: 6, md: 8 },
    }}
  >
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(${ACCENT_COLOR}10 1px, transparent 1px),
          linear-gradient(90deg, ${ACCENT_COLOR}10 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        opacity: 0.5,
      }}
    />

    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Button
        component={Link}
        to="/projects"
        startIcon={<ChevronLeft size={18} />}
        sx={{
          color: "#A0B3D9",
          mb: 4,
          textTransform: "none",
          "&:hover": { color: ACCENT_COLOR, bgcolor: "transparent" },
        }}
      >
        Back to all case studies
      </Button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Chip
          label={caseStudy.category}
          sx={{
            mb: 3,
            bgcolor: `${ACCENT_COLOR}20`,
            color: ACCENT_COLOR,
            fontWeight: 600,
            border: `1px solid ${ACCENT_COLOR}40`,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.75rem", sm: "3.75rem", md: "4.5rem" },
            fontWeight: 800,
            color: "white",
            lineHeight: 1.05,
            mb: 2,
          }}
        >
          {caseStudy.name}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#A0B3D9",
            fontWeight: 500,
            mb: 5,
            maxWidth: 700,
          }}
        >
          {caseStudy.tagline}
        </Typography>
      </motion.div>

      <MotionBox
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        sx={{
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid #334155",
          mb: 6,
          boxShadow: `0 25px 60px -20px ${ACCENT_COLOR}30`,
        }}
      >
        <Box
          component="img"
          src={caseStudy.heroImage}
          alt={caseStudy.name}
          sx={{ width: "100%", height: { xs: 220, sm: 320, md: 420 }, objectFit: "cover", display: "block" }}
        />
      </MotionBox>

      <Typography
        variant="h6"
        sx={{
          color: "#E0E7FF",
          fontWeight: 400,
          lineHeight: 1.8,
          maxWidth: 850,
          mb: 6,
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        {caseStudy.overview}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 4,
        }}
      >
        {caseStudy.metrics.map((metric, i) => (
          <MotionBox
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            sx={{ textAlign: "center" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 0.5,
              }}
            >
              {metric.value}
            </Typography>
            <Typography variant="body2" sx={{ color: "#A0B3D9", fontWeight: 500 }}>
              {metric.label}
            </Typography>
          </MotionBox>
        ))}
      </Box>
    </Container>
  </Box>
);

const PointList = ({ items }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    {items.map((item, i) => (
      <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
        <CheckCircle size={20} style={{ color: ACCENT_COLOR, marginTop: 2, flexShrink: 0 }} />
        <Typography variant="body1" sx={{ color: "#E0E7FF" }}>
          {item}
        </Typography>
      </Box>
    ))}
  </Box>
);

const ChallengeSolutionSection = ({ caseStudy }) => (
  <Box sx={{ bgcolor: "#0F172A", py: { xs: 8, md: 12 } }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          mb: { xs: 8, md: 12 },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="overline"
            sx={{ color: ACCENT_COLOR, fontWeight: 700, letterSpacing: "0.2em" }}
          >
            The Challenge
          </Typography>
          <Typography variant="h3" sx={{ color: "white", fontWeight: 800, mb: 3, mt: 1 }}>
            {caseStudy.challenge.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#A0B3D9", lineHeight: 1.8, mb: 4 }}>
            {caseStudy.challenge.text}
          </Typography>
          <PointList items={caseStudy.challenge.painPoints} />
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography
            variant="overline"
            sx={{ color: ACCENT_COLOR, fontWeight: 700, letterSpacing: "0.2em" }}
          >
            The Solution
          </Typography>
          <Typography variant="h3" sx={{ color: "white", fontWeight: 800, mb: 3, mt: 1 }}>
            {caseStudy.solution.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#A0B3D9", lineHeight: 1.8, mb: 4 }}>
            {caseStudy.solution.text}
          </Typography>
          <PointList items={caseStudy.solution.features} />
        </MotionBox>
      </Box>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="overline"
          sx={{ color: "#A0B3D9", fontWeight: 700, letterSpacing: "0.15em", mb: 2, display: "block" }}
        >
          Tech Stack
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
          {caseStudy.solution.techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                bgcolor: "#1E293B",
                color: "#E0E7FF",
                border: "1px solid #334155",
                fontWeight: 500,
                px: 1,
              }}
            />
          ))}
        </Box>
      </MotionBox>
    </Container>
  </Box>
);

const CodeDemoSection = ({ caseStudy }) => (
  <Box sx={{ bgcolor: "#1E293B", py: { xs: 8, md: 12 } }}>
    <Container maxWidth="md">
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        sx={{
          bgcolor: "#0F172A",
          borderRadius: "16px",
          border: "1px solid #334155",
          overflow: "hidden",
          boxShadow: `0 25px 60px -20px ${ACCENT_COLOR}20`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 3,
            py: 2,
            borderBottom: "1px solid #334155",
          }}
        >
          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#FF5F56" }} />
          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#FFBD2E" }} />
          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27C93F" }} />
          <Typography
            variant="body2"
            sx={{ color: "#A0B3D9", ml: 2, fontFamily: "monospace" }}
          >
            {caseStudy.codeDemo.agentName}
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 3, md: 4 }, fontFamily: "monospace", fontSize: "0.9rem" }}>
          {caseStudy.codeDemo.lines.map((line, i) => (
            <Box key={i} sx={{ mb: 2.5 }}>
              <Typography
                component="div"
                sx={{ color: ACCENT_COLOR, fontFamily: "monospace", mb: 0.5 }}
              >
                $ {line.cmd}
              </Typography>
              {line.output.map((out, j) => (
                <Typography
                  key={j}
                  component="div"
                  sx={{ color: "#94A3B8", fontFamily: "monospace", pl: 2 }}
                >
                  → {out}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </MotionBox>
    </Container>
  </Box>
);

const TestimonialSection = ({ caseStudy }) => {
  if (!caseStudy.testimonial) return null;

  return (
    <Box sx={{ bgcolor: "#0F172A", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          sx={{
            bgcolor: "#1E293B",
            borderRadius: "24px",
            border: `1px solid ${ACCENT_COLOR}30`,
            p: { xs: 4, md: 6 },
            position: "relative",
          }}
        >
          <Quote size={48} strokeWidth={1} style={{ color: ACCENT_COLOR, opacity: 0.6, marginBottom: 16 }} />
          <Typography
            variant="h5"
            sx={{
              fontStyle: "italic",
              color: "white",
              fontWeight: 400,
              lineHeight: 1.6,
              mb: 4,
              fontSize: { xs: "1.15rem", md: "1.4rem" },
            }}
          >
            "{caseStudy.testimonial.quote}"
          </Typography>
          <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
            {caseStudy.testimonial.author}
          </Typography>
          <Typography variant="body2" sx={{ color: ACCENT_COLOR }}>
            {caseStudy.testimonial.title}
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

const CTASection = () => (
  <Box sx={{ bgcolor: "#1E293B", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(circle at 20% 50%, ${ACCENT_COLOR}15 0%, transparent 40%),
          radial-gradient(circle at 80% 50%, #4ECDC415 0%, transparent 40%)
        `,
      }}
    />
    <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Chip
          icon={<Zap size={16} />}
          label="Want Results Like This?"
          sx={{
            mb: 3,
            bgcolor: `${ACCENT_COLOR}20`,
            color: ACCENT_COLOR,
            fontWeight: 600,
            px: 2,
            py: 2.5,
            border: `1px solid ${ACCENT_COLOR}40`,
          }}
        />
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, color: "white", fontSize: { xs: "2rem", md: "3rem" }, mb: 3 }}
        >
          Let's Build Something Autonomous
        </Typography>
        <Typography variant="h6" sx={{ color: "#A0B3D9", mb: 5, maxWidth: 500, mx: "auto" }}>
          Let's talk about building something autonomous for your business.
        </Typography>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/contact"
            endIcon={<ArrowRight size={20} />}
            sx={{
              bgcolor: ACCENT_COLOR,
              color: "#0F172A",
              px: 5,
              py: 1.8,
              fontSize: "1.1rem",
              fontWeight: 700,
              borderRadius: "50px",
              textTransform: "none",
              boxShadow: `0 8px 30px ${ACCENT_COLOR}50`,
            }}
          >
            Book Your Call
          </Button>
        </motion.div>
      </MotionBox>
    </Container>
  </Box>
);

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudiesData[slug];

  if (!caseStudy) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <Hero caseStudy={caseStudy} />
      <ChallengeSolutionSection caseStudy={caseStudy} />
      <CodeDemoSection caseStudy={caseStudy} />
      <TestimonialSection caseStudy={caseStudy} />
      <CTASection />
    </>
  );
};

export default CaseStudyDetail;
