import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ACCENT_COLOR, lucideIcons } from "../components/common/config";

const {
  Cloud,
  Zap,
  Brain,
  Network,
  Workflow,
  Database,
  ArrowRight,
  CheckCircle,
} = lucideIcons;

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

// Microsoft Solutions Data
const microsoftSolutions = [
  {
    title: "Azure Solutions",
    icon: Cloud,
    description:
      "Leverage Microsoft Azure's comprehensive cloud platform to build, deploy, and manage applications with enterprise-grade security and scalability.",
    features: [
      "Cloud Migration & Modernization",
      "Azure Infrastructure Setup",
      "DevOps & CI/CD Pipelines",
      "Container Orchestration (AKS)",
      "Serverless Architecture",
      "Cost Optimization & Management",
    ],
    color: "#0078D4",
  },
  {
    title: "Power Platform",
    icon: Zap,
    description:
      "Empower your organization with low-code/no-code solutions using Power Apps, Power Automate, Power BI, and Power Virtual Agents.",
    features: [
      "Power Apps Development",
      "Power Automate Workflows",
      "Power BI Dashboards & Reports",
      "Power Virtual Agents (Chatbots)",
      "Dataverse Integration",
      "Custom Connectors & Solutions",
    ],
    color: "#742774",
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    description:
      "Harness the power of Azure AI services to build intelligent applications with machine learning, cognitive services, and AI-powered insights.",
    features: [
      "Azure OpenAI Integration",
      "Computer Vision Solutions",
      "Natural Language Processing",
      "Speech Recognition & Synthesis",
      "Custom ML Model Development",
      "AI-Powered Analytics",
    ],
    color: "#00BCF2",
  },
  {
    title: "Enterprise Integration",
    icon: Network,
    description:
      "Seamlessly connect your systems, applications, and data sources using Azure Integration Services for unified business operations.",
    features: [
      "Azure Logic Apps",
      "API Management (APIM)",
      "Service Bus & Event Grid",
      "Enterprise Service Bus (ESB)",
      "Data Integration (Azure Data Factory)",
      "Hybrid Cloud Connectivity",
    ],
    color: "#5C2D91",
  },
  {
    title: "Intelligent Automation",
    icon: Workflow,
    description:
      "Automate complex business processes and workflows with intelligent automation solutions that reduce manual effort and increase efficiency.",
    features: [
      "Robotic Process Automation (RPA)",
      "Business Process Automation",
      "Workflow Orchestration",
      "Document Processing Automation",
      "Task Scheduling & Automation",
      "Integration with Legacy Systems",
    ],
    color: "#FF6B35",
  },
  {
    title: "Data & Analytics",
    icon: Database,
    description:
      "Transform your data into actionable insights with comprehensive data analytics solutions using Azure Data Services and Power BI.",
    features: [
      "Data Warehouse Solutions",
      "Real-time Analytics & Streaming",
      "Business Intelligence Dashboards",
      "Data Lake Implementation",
      "Predictive Analytics",
      "Data Governance & Security",
    ],
    color: "#F2C811",
  },
];

// Hero Section
const MicrosoftSolutionsHero = () => {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)`,
      }}
    >
      {/* Animated background patterns */}
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

      {/* Floating Microsoft logo-inspired shapes */}
      {[...Array(6)].map((_, i) => (
        <MotionBox
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          sx={{
            position: "absolute",
            width: 60 + Math.random() * 100,
            height: 60 + Math.random() * 100,
            borderRadius: i % 2 === 0 ? "50%" : "20%",
            border: `2px solid ${ACCENT_COLOR}40`,
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            pointerEvents: "none",
          }}
        />
      ))}

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, textAlign: "center", py: 8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Chip
            icon={<Cloud size={16} />}
            label="Microsoft Solutions"
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
            Microsoft Cloud
            <Box
              component="span"
              sx={{
                display: "block",
                background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #0078D4 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Solutions & Services
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
            Transform your business with Microsoft's cutting-edge cloud
            technologies. From Azure infrastructure to Power Platform
            automation, we deliver enterprise-grade solutions that drive
            innovation.
          </MotionTypography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={20} />}
              href="#solutions-grid"
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
                fontFamily: "'DM Sans', sans-serif",
                "&:hover": {
                  bgcolor: ACCENT_COLOR,
                  boxShadow: `0 12px 40px ${ACCENT_COLOR}60`,
                },
              }}
            >
              Explore Solutions
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade */}
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

// Solution Card Component
const SolutionCard = ({ solution, index, isExpanded, onToggle }) => {
  const Icon = solution.icon;

  return (
    <MotionCard
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onToggle}
      sx={{
        bgcolor: "#1E293B",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        border: `1px solid ${isExpanded ? solution.color : "#334155"}`,
        transition: "border-color 0.3s",
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${solution.color}, ${solution.color}80)`,
          opacity: isExpanded ? 1 : 0,
          transition: "opacity 0.3s",
        },
      }}
    >
      <CardContent
        sx={{
          p: 4,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        {/* Icon */}
        <MotionBox
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          sx={{
            width: 70,
            height: 70,
            borderRadius: "20px",
            bgcolor: `${solution.color}20`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            border: `2px solid ${solution.color}40`,
          }}
        >
          <Icon size={32} color={solution.color} />
        </MotionBox>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "white",
            mb: 2,
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {solution.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "#A0B3D9",
            mb: 3,
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {solution.description}
        </Typography>

        {/* Expandable Features */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{ pt: 2, borderTop: "1px solid #334155" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: solution.color,
                    mb: 2,
                    fontWeight: 600,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Key Capabilities:
                </Typography>
                {solution.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1.5,
                      }}
                    >
                      <CheckCircle
                        size={18}
                        color={solution.color}
                        style={{ marginRight: 10, flexShrink: 0 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#E0E7FF",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle indicator */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            color: solution.color,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              mr: 1,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </Typography>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={18} style={{ transform: "rotate(90deg)" }} />
          </motion.div>
        </Box>
      </CardContent>
    </MotionCard>
  );
};

// Solutions Grid Section
const SolutionsGrid = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <Box
      id="solutions-grid"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#0F172A",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}
      >
        {/* Section Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: ACCENT_COLOR,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Our Microsoft Solutions
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Comprehensive Cloud Services
          </Typography>
        </MotionBox>

        {/* Solutions Grid */}
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
          {microsoftSolutions.map((solution, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                width: "100%",
                minHeight: "100%",
              }}
            >
              <SolutionCard
                solution={solution}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Why Microsoft Section
const WhyMicrosoftSection = () => {
  const benefits = [
    {
      title: "Enterprise-Grade Security",
      description:
        "Microsoft's security-first approach ensures your data and applications are protected with industry-leading compliance standards.",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Scale your solutions seamlessly from startup to enterprise with Azure's global infrastructure and flexible pricing models.",
    },
    {
      title: "Integrated Ecosystem",
      description:
        "Leverage seamless integration across Microsoft 365, Dynamics 365, and Azure for a unified business experience.",
    },
    {
      title: "Innovation & AI",
      description:
        "Access cutting-edge AI and machine learning capabilities to build intelligent, future-ready applications.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#1E293B",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          background: `radial-gradient(circle at center, ${ACCENT_COLOR}05 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: ACCENT_COLOR,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Why Microsoft
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            The Microsoft Advantage
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 4,
          }}
        >
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                width: "100%",
              }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                sx={{
                  p: 4,
                  bgcolor: "#0F172A",
                  borderRadius: "20px",
                  border: "1px solid #334155",
                  height: "100%",
                  width: "100%",
                  maxWidth: "100%",
                  minWidth: 0,
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: ACCENT_COLOR,
                    boxShadow: `0 10px 40px ${ACCENT_COLOR}20`,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    mb: 2,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#A0B3D9",
                    lineHeight: 1.7,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {benefit.description}
                </Typography>
              </MotionBox>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#0F172A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 30% 50%, ${ACCENT_COLOR}20 0%, transparent 40%),
            radial-gradient(circle at 70% 50%, #0078D420 0%, transparent 40%)
          `,
        }}
      />

      <Container
        maxWidth="md"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 3,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Ready to Transform Your Business?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#A0B3D9",
              mb: 5,
              maxWidth: "500px",
              mx: "auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Let's discuss how Microsoft solutions can accelerate your digital
            transformation.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/contact"
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
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/services"
                sx={{
                  borderColor: ACCENT_COLOR,
                  color: ACCENT_COLOR,
                  px: 5,
                  py: 1.8,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  textTransform: "none",
                  borderWidth: 2,
                  fontFamily: "'DM Sans', sans-serif",
                  "&:hover": {
                    borderWidth: 2,
                    bgcolor: `${ACCENT_COLOR}15`,
                  },
                }}
              >
                View All Services
              </Button>
            </motion.div>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

// Main Microsoft Solutions Page
const MicrosoftSolutions = () => {
  return (
    <>
      <MicrosoftSolutionsHero />
      <SolutionsGrid />
      <WhyMicrosoftSection />
      <CTASection />
    </>
  );
};

export default MicrosoftSolutions;
