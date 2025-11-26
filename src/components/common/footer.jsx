import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  Divider,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  ACCENT_COLOR,
  BACKGROUND_DEFAULT,
  COMPANY_NAME,
  COMPANY_SLOGAN,
  quickLinks,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  lucideIcons,
} from "./config";

const { Mail, Phone, MapPin, Github, Linkedin } = lucideIcons;

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setSnackbarMessage("Please enter a valid email address.");
      setSnackbarSeverity("error");
    } else {
      console.log("Subscribing:", email);
      setSnackbarMessage(`Thank you for subscribing, ${email}!`);
      setSnackbarSeverity("success");
      setEmail("");
    }
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "#101F33",
        borderRadius: "4px",
        borderLeft: `5px solid ${ACCENT_COLOR}`,
        mt: { xs: 4, md: 0 },
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 1, fontWeight: 600, color: TEXT_PRIMARY }}
      >
        Stay Updated
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: TEXT_SECONDARY }}>
        Get the latest news and insights delivered to your inbox.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: "row",
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="Your Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            sx: {
              color: TEXT_PRIMARY,
              borderRadius: "4px",
              bgcolor: BACKGROUND_DEFAULT,
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: TEXT_SECONDARY + "30" },
              "&:hover fieldset": { borderColor: ACCENT_COLOR },
              "&.Mui-focused fieldset": {
                borderColor: ACCENT_COLOR,
                borderWidth: "1px",
              },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSubscribe}
          sx={{
            minWidth: "auto",
            bgcolor: ACCENT_COLOR,
            color: TEXT_PRIMARY,
            borderRadius: "4px",
            textTransform: "none",
            fontWeight: "bold",
            flexShrink: 0,
            "&:hover": {
              bgcolor: ACCENT_COLOR,
              opacity: 0.9,
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: BACKGROUND_DEFAULT,
        color: TEXT_PRIMARY,
        pt: 8,
        pb: 2,
        borderTop: "1px solid #1f3d61",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Container
        disableGutters
        sx={{
          maxWidth: "1280px",
          width: "100%",
          mx: "auto",
          px: { xs: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 8 },
          }}
        >
          <Box sx={{ flexGrow: 1, minWidth: { md: "300px" } }}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 800, color: ACCENT_COLOR }}
            >
              {COMPANY_NAME}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 3, color: TEXT_SECONDARY, maxWidth: "300px" }}
            >
              {COMPANY_SLOGAN}
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Mail
                  size={20}
                  color={ACCENT_COLOR}
                  style={{ marginRight: "8px" }}
                />
                <Link
                  href="mailto:info@group3co.com"
                  color="inherit"
                  underline="hover"
                  variant="body2"
                >
                  info@group3co.com
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Phone
                  size={20}
                  color={ACCENT_COLOR}
                  style={{ marginRight: "8px" }}
                />
                <Link
                  href="tel:+1234567890"
                  color="inherit"
                  underline="none"
                  variant="body2"
                >
                  (123) 456-7890
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                <MapPin
                  size={20}
                  color={ACCENT_COLOR}
                  style={{ marginRight: "8px", marginTop: "4px" }}
                />
                <Typography variant="body2" color={TEXT_SECONDARY}>
                  123 Digital Blvd, Suite 400
                  <br />
                  Innovation City, CA 90210
                </Typography>
              </Box>
            </Box>

            <Box>
              <IconButton
                aria-label="github"
                sx={{
                  color: ACCENT_COLOR,
                  mr: 1,
                  "&:hover": { bgcolor: ACCENT_COLOR + "15" },
                }}
              >
                <Github size={24} />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                sx={{
                  color: ACCENT_COLOR,
                  mr: 1,
                  "&:hover": { bgcolor: ACCENT_COLOR + "15" },
                }}
              >
                <Linkedin size={24} />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 2, minWidth: { md: "300px" } }}>
            <Grid container spacing={{ xs: 3, sm: 4 }}>
              {Object.keys(quickLinks).map((title) => (
                <Grid item xs={6} sm={4} key={title}>
                  <Typography
                    variant="h6"
                    sx={{ color: TEXT_PRIMARY, fontWeight: 600, mb: "1rem" }}
                  >
                    {title}
                  </Typography>
                  {quickLinks[title].map((link) => (
                    <Link
                      href={link.href}
                      color={TEXT_SECONDARY}
                      display="block"
                      variant="body2"
                      underline="none"
                      key={link.name}
                      sx={{
                        mt: 1,
                        "&:hover": {
                          color: ACCENT_COLOR,
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              minWidth: { md: "300px" },
              pt: { xs: 4, md: 0 },
            }}
          >
            <NewsletterSubscription />
          </Box>
        </Box>

        <Divider sx={{ mt: 6, mb: 2, borderColor: "#1f3d61" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color={TEXT_SECONDARY}>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </Typography>
          <Typography
            variant="caption"
            color={TEXT_SECONDARY}
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            Developed by{" "}
            <span style={{ color: ACCENT_COLOR }}> Minhaj Alvi &#9829;</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
