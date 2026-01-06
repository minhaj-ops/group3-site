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
import { ACCENT_COLOR, COMPANY_NAME, lucideIcons } from "../components/common/config";

const { FileText } = lucideIcons;

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        `By accessing and using the website and services of ${COMPANY_NAME}, you accept and agree to be bound by the terms and provision of this agreement.`,
        "If you do not agree to abide by the above, please do not use this service.",
        "We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting on the website.",
      ],
    },
    {
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display",
        "• Attempt to decompile or reverse engineer any software contained on our website",
        "• Remove any copyright or other proprietary notations from the materials",
        "This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.",
      ],
    },
    {
      title: "Services and Products",
      content: [
        "We provide digital product development, consulting, and related services as described on our website.",
        "All services are subject to availability and we reserve the right to refuse any service request for any reason.",
        "Prices for our services are subject to change without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the service.",
        "We reserve the right to modify or discontinue any service at any time without prior notice.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of THEGROUP3 INC and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.",
        "Any unauthorized use of our intellectual property may result in legal action.",
      ],
    },
    {
      title: "User Accounts and Responsibilities",
      content: [
        "If you create an account with us, you are responsible for maintaining the security of your account and password.",
        "You are responsible for all activities that occur under your account and agree to notify us immediately of any unauthorized use.",
        "You agree not to use the service for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks.",
        "You agree not to attempt to gain unauthorized access to any portion of the service or any other accounts, computer systems, or networks connected to the service.",
      ],
    },
    {
      title: "Payment Terms",
      content: [
        "Payment terms for our services will be specified in individual service agreements or contracts.",
        "All fees are non-refundable unless otherwise stated in writing.",
        "We reserve the right to change our pricing at any time, but we will provide notice of any price changes affecting existing contracts.",
        "Late payments may result in suspension or termination of services.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "In no event shall THEGROUP3 INC, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.",
        "Our total liability for any claims arising out of or relating to the use of our services shall not exceed the amount you paid to us in the twelve (12) months prior to the action giving rise to liability.",
        "Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations may not apply to you.",
      ],
    },
    {
      title: "Indemnification",
      content: [
        "You agree to defend, indemnify, and hold harmless THEGROUP3 INC and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).",
        "This indemnification obligation will survive the termination of these Terms and your use of the service.",
      ],
    },
    {
      title: "Termination",
      content: [
        "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
        "Upon termination, your right to use the service will immediately cease.",
        "All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These Terms shall be interpreted and governed by the laws of the State of New York, United States, without regard to its conflict of law provisions.",
        "Any disputes arising out of or relating to these Terms or our services shall be resolved in the state and federal courts located in New York.",
        "You agree to submit to the personal jurisdiction of such courts for the purpose of litigating any such claim.",
      ],
    },
    {
      title: "Contact Information",
      content: [
        `If you have any questions about these Terms and Conditions, please contact us at:`,
        `${COMPANY_NAME}`,
        `8431 252ND ST\nBELLEROSE, NY 11426`,
        `Email: info@GROUP3.IO`,
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
      <Container maxWidth="lg" sx={{ "@media (min-width: 1200px)": { maxWidth: "1280px" } }}>
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Chip
            icon={<FileText size={16} />}
            label="Terms and Conditions"
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
            Terms and Conditions
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
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
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
              Please read these Terms and Conditions carefully before using our website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the service.
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
                        mb: paragraph.startsWith("•") ? 1 : 2.5,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        lineHeight: 1.8,
                        fontFamily: "'DM Sans', sans-serif",
                        pl: paragraph.startsWith("•") ? 2 : 0,
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
              By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </Typography>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;



