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
  Phone,
  MapPin,
  Twitter,
  ArrowRight,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Database,
  Smartphone,
  Palette,
  Settings,
  Clock,
  CheckCircle,
  Star,
  Quote,
  Heart,
  Send,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Brain,
  Network,
  Workflow,
  Folder,
  House,
} from "lucide-react";

export const ACCENT_COLOR = "#FF6347";
export const BACKGROUND_IMAGE_URL =
  "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
export const FLOATING_LETTERS = "group3studiodigital";

export const BACKGROUND_DEFAULT = "slate.900";
export const BACKGROUND_PAPER = "#1E293B";
export const TEXT_PRIMARY = "#E0E7FF";
export const TEXT_SECONDARY = "#A0B3D9";

export const COMPANY_NAME = "Group3 Co";
export const COMPANY_SLOGAN =
  "We engineer future-ready digital products with excellence and impact.";

// Enhanced custom data with more details
export const customData = [
  {
    title: "Product Strategy",
    icon: LayoutDashboard,
    description:
      "Defining MVPs, target audience, and business goals to ensure market success.",
    details: [
      "Market Research & Analysis",
      "Competitive Landscape Mapping",
      "User Persona Development",
      "Roadmap Planning",
      "Go-to-Market Strategy",
    ],
    color: "#FF6347",
  },
  {
    title: "UI/UX Design",
    icon: SwatchBook,
    description:
      "Crafting intuitive, accessible, and visually stunning digital interfaces that convert.",
    details: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Interaction Design",
      "Accessibility Compliance",
    ],
    color: "#4ECDC4",
  },
  {
    title: "Full-Stack Development",
    icon: Code,
    description:
      "Building scalable, high-performance applications using modern React, Node, and TypeScript stacks.",
    details: [
      "React & Next.js Applications",
      "Node.js & Express APIs",
      "Database Architecture",
      "Real-time Features",
      "Third-party Integrations",
    ],
    color: "#9B59B6",
  },
  {
    title: "Cloud Architecture",
    icon: Cloud,
    description:
      "Designing secure, resilient, and cost-effective cloud infrastructure (AWS/GCP/Azure).",
    details: [
      "Cloud Migration Strategy",
      "Serverless Architecture",
      "CI/CD Pipeline Setup",
      "Security & Compliance",
      "Cost Optimization",
    ],
    color: "#3498DB",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    details: [
      "React Native Development",
      "iOS & Android Native",
      "App Store Optimization",
      "Push Notifications",
      "Offline-First Architecture",
    ],
    color: "#E74C3C",
  },
  {
    title: "DevOps & Automation",
    icon: Settings,
    description:
      "Streamlining development workflows with automated testing, deployment, and monitoring.",
    details: [
      "Infrastructure as Code",
      "Automated Testing Suites",
      "Container Orchestration",
      "Performance Monitoring",
      "Incident Response",
    ],
    color: "#27AE60",
  },
];

// Enhanced projects data
export const projectsData = [
  {
    name: "SynapseAI",
    category: "B2B SaaS",
    description:
      "An intelligent platform leveraging machine learning for automated data synthesis and reporting.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["AI/ML", "React", "Python", "AWS"],
    stats: { users: "50K+", uptime: "99.9%", satisfaction: "4.9/5" },
    link: "#",
  },
  {
    name: "EcoTrack Mobile",
    category: "Consumer App",
    description:
      "A gamified application encouraging sustainable habits and tracking carbon footprint.",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Node.js", "MongoDB"],
    stats: { downloads: "1M+", rating: "4.8", engagement: "85%" },
    link: "#",
  },
  {
    name: "Quantum-X API",
    category: "FinTech Infrastructure",
    description:
      "High-frequency trading API providing real-time market data and secured transaction endpoints.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    tags: ["Go", "PostgreSQL", "Redis", "Kubernetes"],
    stats: { requests: "10M/day", latency: "<5ms", uptime: "99.99%" },
    link: "#",
  },
  {
    name: "HealthSync Pro",
    category: "Healthcare Tech",
    description:
      "HIPAA-compliant patient management system with telehealth integration and real-time analytics.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "WebRTC"],
    stats: { clinics: "500+", patients: "2M+", compliance: "100%" },
    link: "#",
  },
  {
    name: "PropertyFlow",
    category: "Real Estate",
    description:
      "AI-powered property valuation and market analysis platform for real estate professionals.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Python", "TensorFlow", "GCP"],
    stats: { valuations: "100K+", accuracy: "97%", cities: "50+" },
    link: "#",
  },
  {
    name: "EduVerse",
    category: "EdTech",
    description:
      "Immersive learning platform with VR capabilities and adaptive learning algorithms.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    tags: ["Three.js", "React", "WebXR", "Node.js"],
    stats: { students: "300K+", courses: "1000+", completion: "92%" },
    link: "#",
  },
];

// Enhanced testimonials data
export const testimonialsData = [
  {
    quote:
      "Group3 Co transformed our abstract idea into a market-ready product in record time. Their technical depth is unmatched.",
    author: "Dr. Evelyn Reed",
    title: "CEO, InnovateX Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "InnovateX Corp",
  },
  {
    quote:
      "The design work was impeccable—modern, intuitive, and exactly what our users needed. Highly recommend their UI/UX team.",
    author: "Marcus Chen",
    title: "Product Lead, Stellar Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "Stellar Solutions",
  },
  {
    quote:
      "We saw a 40% improvement in load times after their cloud architecture audit. True experts in scalability and performance.",
    author: "Sarah Jones",
    title: "CTO, GlobalTech",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "GlobalTech",
  },
  {
    quote:
      "From concept to launch, they were professional, responsive, and delivered beyond expectations. A true technology partner.",
    author: "David Kim",
    title: "Founder, StartupHub",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "StartupHub",
  },
  {
    quote:
      "Their team's expertise in React Native helped us launch on both iOS and Android simultaneously, saving months of development.",
    author: "Lisa Wang",
    title: "VP Engineering, MobileFirst Inc",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "MobileFirst Inc",
  },
  {
    quote:
      "Group3 Co's DevOps transformation reduced our deployment time from days to minutes. Absolutely game-changing.",
    author: "James Wilson",
    title: "Director of Operations, TechScale",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "TechScale",
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
  Phone,
  MapPin,
  Twitter,
  ArrowRight,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Database,
  Smartphone,
  Palette,
  Settings,
  Clock,
  CheckCircle,
  Star,
  Quote,
  Heart,
  Send,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Brain,
  Network,
  Workflow,
  Folder,
  Home: House,
};

export const navItems = [
  "Home",
  "About",
  "Custom",
  "Projects",
  "Testimonials",
  "Contact",
];

export const quickLinks = {
  Custom: [
    { name: "Product Strategy", href: "/services#strategy" },
    { name: "UI/UX Design", href: "/services#design" },
    { name: "Full-Stack Dev", href: "/services#development" },
    { name: "Cloud Architecture", href: "/services#cloud" },
  ],
  Projects: [
    { name: "SynapseAI", href: "/projects#synapse" },
    { name: "EcoTrack Mobile", href: "/projects#ecotrack" },
    { name: "Quantum-X API", href: "/projects#quantum" },
  ],
  Resources: [
    { name: "Support", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

// Stats for homepage
export const statsData = [
  { value: "200+", label: "Projects Delivered", icon: Rocket },
  { value: "50+", label: "Happy Clients", icon: Heart },
  { value: "99%", label: "Client Satisfaction", icon: Star },
  { value: "24/7", label: "Support Available", icon: Clock },
];

// Process steps
export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "We dive deep into understanding your vision, goals, and target audience.",
    icon: Target,
  },
  {
    step: 2,
    title: "Strategy",
    description: "We create a comprehensive roadmap aligned with your business objectives.",
    icon: LayoutDashboard,
  },
  {
    step: 3,
    title: "Design",
    description: "Our designers craft beautiful, intuitive interfaces that users love.",
    icon: Palette,
  },
  {
    step: 4,
    title: "Development",
    description: "Our engineers build robust, scalable solutions using cutting-edge tech.",
    icon: Code,
  },
  {
    step: 5,
    title: "Launch",
    description: "We deploy your product and ensure a smooth, successful launch.",
    icon: Rocket,
  },
  {
    step: 6,
    title: "Growth",
    description: "We continue to optimize and scale your product for long-term success.",
    icon: TrendingUp,
  },
];
