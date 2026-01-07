import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ACCENT_COLOR,
  COMPANY_NAME,
  lucideIcons,
} from "../components/common/config";

const { Shield } = lucideIcons;

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, such as when you create an account, make a purchase, request information, or contact us for support.",
        "We automatically collect certain information about your device when you access our website, including your IP address, browser type, operating system, and browsing behavior.",
        "We may use cookies and similar tracking technologies to collect information about your interactions with our website.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services and website functionality.",
        "To process transactions and send related information, including confirmations and invoices.",
        "To send you technical notices, updates, security alerts, and support messages.",
        "To respond to your comments, questions, and requests and provide customer service.",
        "To monitor and analyze trends, usage, and activities in connection with our services.",
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share your information with service providers who perform services on our behalf, such as hosting, data analysis, and customer service.",
        "We may disclose your information if required by law or in response to valid requests by public authorities.",
        "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
        "You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.",
      ],
    },
    {
      title: "Your Rights and Choices",
      content: [
        "You have the right to access, update, or delete your personal information at any time.",
        "You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages.",
        "You can control cookies through your browser settings, though this may affect the functionality of our website.",
        "If you are located in the European Economic Area (EEA), you have certain data protection rights under the GDPR.",
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.",
        "If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.",
        "We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
        "Your continued use of our services after any changes constitutes your acceptance of the new Privacy Policy.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        `If you have any questions about this Privacy Policy, please contact us at:`,
        `${COMPANY_NAME}`,
        `8431 252ND ST\nBELLEROSE, NY 11426`,
        `Email: sales@group3.io`,
      ],
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0F172A",
        pt: { xs: 10, md: 12 },
        pb: 8,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}
      >
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Chip
            icon={<Shield size={16} />}
            label="Privacy Policy"
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
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              fontWeight: 800,
              color: "white",
              mb: 2,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#A0B3D9",
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
            }}
          >
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </MotionBox>

        {/* Content */}
        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{ mb: 4 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#A0B3D9",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              At {COMPANY_NAME}, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </Typography>
          </MotionBox>

          {sections.map((section, index) => (
            <MotionCard
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              sx={{
                bgcolor: "#1E293B",
                borderRadius: "20px",
                mb: 4,
                border: `1px solid #334155`,
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: 700,
                    color: "white",
                    mb: 3,
                    fontFamily: "'Outfit', sans-serif",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: "60px",
                      height: "3px",
                      bgcolor: ACCENT_COLOR,
                      borderRadius: "2px",
                    },
                  }}
                >
                  {section.title}
                </Typography>
                <Box sx={{ mt: 4 }}>
                  {section.content.map((paragraph, pIndex) => (
                    <Typography
                      key={pIndex}
                      variant="body1"
                      sx={{
                        color: "#A0B3D9",
                        mb: 2.5,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        lineHeight: 1.8,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </MotionCard>
          ))}

          <Divider
            sx={{
              my: 6,
              borderColor: `${ACCENT_COLOR}30`,
            }}
          />

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            sx={{
              textAlign: "center",
              p: 4,
              bgcolor: "#1E293B",
              borderRadius: "20px",
              border: `1px solid ${ACCENT_COLOR}30`,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#A0B3D9",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
              }}
            >
              By using our website and services, you acknowledge that you have
              read and understood this Privacy Policy and agree to the
              collection and use of your information as described herein.
            </Typography>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
