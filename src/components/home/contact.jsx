import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Link,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import SectionHeader from "../common/section-header";
import { lucideIcons, ACCENT_COLOR } from "../common/config";

const { Mail, Briefcase, Users, Github, Linkedin } = lucideIcons;

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    setTimeout(() => {
      setIsSending(false);
      setSendStatus("success");
      e.target.reset();
      setTimeout(() => setSendStatus(null), 5000);
    }, 2500);
  };

  const inputStyles = {
    "& .MuiInputBase-root": {
      bgcolor: "slate.900",
      color: "white",
      border: "1px solid #334155",
      borderRadius: "8px",
      "&.Mui-focused": {
        boxShadow: `0 0 0 2px ${ACCENT_COLOR}`,
        borderColor: ACCENT_COLOR,
      },
      "&:hover fieldset": {
        borderColor: ACCENT_COLOR,
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& label": {
      color: "text.secondary",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: ACCENT_COLOR,
    },
  };

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "slate.900" }}
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <SectionHeader
        title="Ready to Build Your Future?"
        subtitle="Contact Us"
      />

      <motion.div variants={containerVariants}>
        <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3, mt: 4 }}>
          <Box
            sx={{
              bgcolor: "slate.800",
              p: { xs: 4, md: 6 },
              borderRadius: "12px",
              boxShadow: 8,
              border: "1px solid #334155",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: 6,
              }}
            >
              {/* Left Contact Info */}
              <motion.div variants={itemVariants} style={{ flex: "1 1 50%" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "white", mb: 3 }}
                >
                  Let's start the conversation.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  Reach out to discuss your project. We typically respond within
                  one business day.
                </Typography>
                <Stack spacing={3}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Mail size={24} color={ACCENT_COLOR} />
                    <Link
                      href="mailto:hello@group3co.com"
                      color="text.secondary"
                      sx={{ "&:hover": { color: "white" } }}
                    >
                      hello@group3co.com
                    </Link>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Briefcase size={24} color={ACCENT_COLOR} />
                    <Typography color="text.secondary">
                      8431 252ND ST, BELLEROSE, NY 11426
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Users size={24} color={ACCENT_COLOR} />
                    <Typography color="text.secondary">
                      Available Globally
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={3} mt={5}>
                  <Link
                    href="#"
                    aria-label="Github"
                    sx={{
                      color: "text.secondary",
                      "&:hover": { color: "white" },
                    }}
                  >
                    <Github size={24} />
                  </Link>
                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    sx={{
                      color: "text.secondary",
                      "&:hover": { color: "white" },
                    }}
                  >
                    <Linkedin size={24} />
                  </Link>
                </Stack>
              </motion.div>

              {/* Right Contact Form */}
              <motion.div variants={itemVariants} style={{ flex: "1 1 50%" }}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <motion.div variants={itemVariants}>
                    <TextField
                      label="Name"
                      name="name"
                      required
                      fullWidth
                      variant="outlined"
                      sx={inputStyles}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      required
                      fullWidth
                      variant="outlined"
                      sx={inputStyles}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <TextField
                      label="Project Details"
                      name="message"
                      required
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={inputStyles}
                    />
                  </motion.div>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSending}
                    sx={{
                      bgcolor: ACCENT_COLOR,
                      color: "#0F172A",
                      py: 1.5,
                      fontSize: "1.125rem",
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": { bgcolor: ACCENT_COLOR },
                    }}
                  >
                    {isSending ? (
                      <CircularProgress size={24} sx={{ color: "#0F172A" }} />
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                  {sendStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Alert
                        severity="success"
                        sx={{ mt: 2, bgcolor: "green.700", color: "white" }}
                      >
                        Message sent successfully! We'll be in touch soon.
                      </Alert>
                    </motion.div>
                  )}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
