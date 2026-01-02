import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  Alert,
  Snackbar,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { motion } from "framer-motion";
import { ACCENT_COLOR, lucideIcons } from "../components/common/config";

const {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Zap,
} = lucideIcons;

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

// Hero Section
const ContactHero = () => {
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
      {/* Animated gradient orbs */}
      <MotionBox
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT_COLOR}30 0%, transparent 70%)`,
          top: "10%",
          left: "10%",
          filter: "blur(60px)",
        }}
      />
      <MotionBox
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, #4ECDC430 0%, transparent 70%)`,
          bottom: "10%",
          right: "15%",
          filter: "blur(50px)",
        }}
      />

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
            icon={<MessageSquare size={16} />}
            label="Get In Touch"
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
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              mb: 3,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Let's Build Something
            <Box
              component="span"
              sx={{
                display: "block",
                background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Amazing Together
            </Box>
          </MotionTypography>

          <MotionTypography
            variant="h6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              color: "#A0B3D9",
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.7,
            }}
          >
            Have a project in mind? We'd love to hear about it. Drop us a line
            and let's create something extraordinary.
          </MotionTypography>
        </motion.div>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: "linear-gradient(to top, #0F172A, transparent)",
        }}
      />
    </Box>
  );
};

// Contact Info Card
const ContactInfoCard = ({ icon: Icon, title, content, link }) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.02, y: -5 }}
      sx={{
        p: 3,
        bgcolor: "#1E293B",
        borderRadius: "20px",
        border: "1px solid #334155",
        display: "flex",
        alignItems: "flex-start",
        gap: 3,
        transition: "all 0.3s",
        "&:hover": {
          borderColor: ACCENT_COLOR,
          boxShadow: `0 10px 30px ${ACCENT_COLOR}15`,
        },
      }}
    >
      <Box
        sx={{
          p: 1.5,
          borderRadius: "12px",
          bgcolor: `${ACCENT_COLOR}20`,
          color: ACCENT_COLOR,
          flexShrink: 0,
        }}
      >
        <Icon size={24} />
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ color: "#A0B3D9", mb: 0.5, fontWeight: 500 }}
        >
          {title}
        </Typography>
        {link ? (
          <Typography
            component="a"
            href={link}
            sx={{
              color: "white",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { color: ACCENT_COLOR },
            }}
          >
            {content}
          </Typography>
        ) : (
          <Typography sx={{ color: "white", fontWeight: 600 }}>
            {content}
          </Typography>
        )}
      </Box>
    </MotionBox>
  );
};

// Contact Form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSnackbar({
      open: true,
      message:
        "Thanks for reaching out! We'll get back to you within 24 hours.",
      severity: "success",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      service: "",
      message: "",
    });
  };

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      bgcolor: "#0F172A",
      borderRadius: "14px",
      color: "white",
      "& fieldset": {
        borderColor: "#334155",
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: ACCENT_COLOR,
      },
      "&.Mui-focused fieldset": {
        borderColor: ACCENT_COLOR,
      },
    },
    "& .MuiInputLabel-root": {
      color: "#A0B3D9",
      "&.Mui-focused": {
        color: ACCENT_COLOR,
      },
    },
    "& .MuiSelect-icon": {
      color: "#A0B3D9",
    },
  };

  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{
        bgcolor: "#1E293B",
        borderRadius: "32px",
        border: `1px solid ${ACCENT_COLOR}30`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Top accent bar */}
      <Box
        sx={{
          height: "4px",
          background: `linear-gradient(90deg, ${ACCENT_COLOR}, #ff8c69, ${ACCENT_COLOR})`,
          backgroundSize: "200% 100%",
          animation: "gradient 3s linear infinite",
          "@keyframes gradient": {
            "0%": { backgroundPosition: "0% 50%" },
            "100%": { backgroundPosition: "200% 50%" },
          },
        }}
      />

      <CardContent sx={{ p: { xs: 4, md: 6 } }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ color: "white", fontWeight: 700, mb: 1 }}
          >
            Send Us a Message
          </Typography>
          <Typography variant="body1" sx={{ color: "#A0B3D9" }}>
            Fill out the form below and we'll get back to you shortly.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                sx={inputStyles}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                sx={inputStyles}
              />
            </motion.div>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TextField
                label="Company (Optional)"
                name="company"
                value={formData.company}
                onChange={handleChange}
                fullWidth
                sx={inputStyles}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              <FormControl fullWidth sx={inputStyles}>
                <InputLabel>Project Budget</InputLabel>
                <Select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  label="Project Budget"
                >
                  <MenuItem value="<10k">Less than $10,000</MenuItem>
                  <MenuItem value="10k-25k">$10,000 - $25,000</MenuItem>
                  <MenuItem value="25k-50k">$25,000 - $50,000</MenuItem>
                  <MenuItem value="50k-100k">$50,000 - $100,000</MenuItem>
                  <MenuItem value=">100k">More than $100,000</MenuItem>
                </Select>
              </FormControl>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FormControl fullWidth sx={inputStyles}>
              <InputLabel>Service Interested In</InputLabel>
              <Select
                name="service"
                value={formData.service}
                onChange={handleChange}
                label="Service Interested In"
              >
                <MenuItem value="strategy">Product Strategy</MenuItem>
                <MenuItem value="design">UI/UX Design</MenuItem>
                <MenuItem value="development">Full-Stack Development</MenuItem>
                <MenuItem value="cloud">Cloud Architecture</MenuItem>
                <MenuItem value="mobile">Mobile Development</MenuItem>
                <MenuItem value="devops">DevOps & Automation</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <TextField
              label="Project Details"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={5}
              placeholder="Tell us about your project, goals, and timeline..."
              sx={inputStyles}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={isSubmitting}
              endIcon={
                isSubmitting ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <Send size={20} />
                )
              }
              sx={{
                bgcolor: ACCENT_COLOR,
                color: "#0F172A",
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: "14px",
                textTransform: "none",
                boxShadow: `0 8px 30px ${ACCENT_COLOR}40`,
                "&:hover": {
                  bgcolor: ACCENT_COLOR,
                  boxShadow: `0 12px 40px ${ACCENT_COLOR}60`,
                },
                "&:disabled": {
                  bgcolor: `${ACCENT_COLOR}80`,
                  color: "#0F172A",
                },
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </Box>
      </CardContent>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          sx={{ borderRadius: "12px" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </MotionCard>
  );
};

// Contact Section
const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@group3co.com",
      link: "mailto:hello@group3co.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(123) 456-7890",
      link: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Digital Blvd, Suite 400, Innovation City, CA 90210",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM PST",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#0F172A",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1.2fr" },
            gap: 6,
          }}
        >
          {/* Left: Contact Info */}
          <Box>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: ACCENT_COLOR,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Contact Information
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                }}
              >
                We're Here to Help
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#A0B3D9", mb: 5, maxWidth: "400px" }}
              >
                Have questions? Our team is ready to assist you. Reach out
                through any of the channels below.
              </Typography>
            </MotionBox>

            {/* Contact Info Cards */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ContactInfoCard {...info} />
                </motion.div>
              ))}
            </Box>

            {/* Social Links */}
            <MotionBox
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: "#A0B3D9", mb: 2, fontWeight: 500 }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "14px",
                      backgroundColor: "#1E293B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: ACCENT_COLOR,
                      border: `1px solid #334155`,
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </Box>
            </MotionBox>
          </Box>

          {/* Right: Contact Form */}
          <ContactForm />
        </Box>
      </Container>
    </Box>
  );
};

// Map Section (Placeholder)
const MapSection = () => {
  return (
    <Box
      sx={{
        height: "400px",
        bgcolor: "#0F172A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: `
            linear-gradient(45deg, ${ACCENT_COLOR}10 25%, transparent 25%),
            linear-gradient(-45deg, ${ACCENT_COLOR}10 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${ACCENT_COLOR}10 75%),
            linear-gradient(-45deg, transparent 75%, ${ACCENT_COLOR}10 75%)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
        }}
      >
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          sx={{
            textAlign: "center",
            p: 6,
            bgcolor: "#1E293B",
            borderRadius: "24px",
            border: `1px solid ${ACCENT_COLOR}40`,
            boxShadow: `0 20px 60px ${ACCENT_COLOR}20`,
          }}
        >
          <Globe size={60} color={ACCENT_COLOR} style={{ marginBottom: 20 }} />
          <Typography
            variant="h5"
            sx={{ color: "white", fontWeight: 700, mb: 1 }}
          >
            We Work Globally
          </Typography>
          <Typography variant="body1" sx={{ color: "#A0B3D9", maxWidth: 400 }}>
            With team members across multiple time zones, we're available when
            you need us.
          </Typography>
        </MotionBox>
      </Box>
    </Box>
  );
};

// Main Contact Page
const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <MapSection />
    </>
  );
};

export default Contact;
