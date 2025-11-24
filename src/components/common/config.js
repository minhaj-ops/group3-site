import {
  Mail,
  Briefcase,
  Users,
  Code,
  LayoutDashboard,
  SwatchBook,
  Cloud,
  Rocket,
  Award,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";

export const ACCENT_COLOR = "#FF6347";
export const BACKGROUND_IMAGE_URL =
  "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
export const FLOATING_LETTERS = "group3studiodigital";

export const servicesData = [
  {
    title: "Product Strategy",
    icon: LayoutDashboard,
    description:
      "Defining MVPs, target audience, and business goals to ensure market success.",
  },
  {
    title: "UI/UX Design",
    icon: SwatchBook,
    description:
      "Crafting intuitive, accessible, and visually stunning digital interfaces that convert.",
  },
  {
    title: "Full-Stack Development",
    icon: Code,
    description:
      "Building scalable, high-performance applications using modern React, Node, and TypeScript stacks.",
  },
  {
    title: "Cloud Architecture",
    icon: Cloud,
    description:
      "Designing secure, resilient, and cost-effective cloud infrastructure (AWS/GCP/Azure).",
  },
];

export const projectsData = [
  {
    name: "SynapseAI",
    category: "B2B SaaS",
    description:
      "An intelligent platform leveraging machine learning for automated data synthesis and reporting.",
    imageUrl: "https://placehold.co/400x250/25375e/FFFFFF/png?text=Synapse+AI",
  },
  {
    name: "EcoTrack Mobile",
    category: "Consumer App",
    description:
      "A gamified application encouraging sustainable habits and tracking carbon footprint.",
    imageUrl:
      "https://placehold.co/400x250/38761d/FFFFFF/png?text=EcoTrack+Mobile",
  },
  {
    name: "Quantum-X API",
    category: "FinTech Infrastructure",
    description:
      "High-frequency trading API providing real-time market data and secured transaction endpoints.",
    imageUrl:
      "https://placehold.co/400x250/674ea7/FFFFFF/png?text=Quantum-X+API",
  },
];

export const testimonialsData = [
  {
    quote:
      "Group3 Co transformed our abstract idea into a market-ready product in record time. Their technical depth is unmatched.",
    author: "Dr. Evelyn Reed",
    title: "CEO, InnovateX Corp",
  },
  {
    quote:
      "The design work was impeccable—modern, intuitive, and exactly what our users needed. Highly recommend their UI/UX team.",
    author: "Marcus Chen",
    title: "Product Lead, Stellar Solutions",
  },
  {
    quote:
      "We saw a 40% improvement in load times after their cloud architecture audit. True experts in scalability and performance.",
    author: "Sarah Jones",
    title: "CTO, GlobalTech",
  },
];

export const lucideIcons = {
  Mail,
  Briefcase,
  Users,
  Code,
  LayoutDashboard,
  SwatchBook,
  Cloud,
  Rocket,
  Award,
  Github,
  Linkedin,
  MessageSquare,
};

export const navItems = [
  "Services",
  "Projects",
  "About",
  "Testimonials",
  "Contact",
];
