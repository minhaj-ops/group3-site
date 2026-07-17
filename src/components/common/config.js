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
  FileText,
  Calendar,
  User,
} from "lucide-react";

export const ACCENT_COLOR = "#FF6347";
export const BACKGROUND_IMAGE_URL =
  "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
export const FLOATING_LETTERS = "group3studiodigital";

export const BACKGROUND_DEFAULT = "slate.900";
export const BACKGROUND_PAPER = "#1E293B";
export const TEXT_PRIMARY = "#E0E7FF";
export const TEXT_SECONDARY = "#A0B3D9";

export const COMPANY_NAME = "THEGROUP3 INC";
export const COMPANY_SLOGAN =
  "We engineer future-ready digital products with excellence and impact.";

// Enhanced custom data with more details
export const customData = [
  {
    title: "Agentic AI Products",
    icon: Brain,
    description:
      "Building AI so intuitive it acts without asking. From idea to production in 30 days.",
    details: [
      "AI Model Training",
      "Autonomous Decision Systems",
      "Context Engineering",
      "Agentic Pipelines",
      "Production Deployment",
    ],
    color: "#FF6347",
  },
  {
    title: "Context Engineering",
    icon: Network,
    description:
      "If an AI acts 'unprompted,' it means the grounding and context were built so perfectly that the system already knows what to do.",
    details: [
      "Domain Knowledge Embedding",
      "System Prompt Architecture",
      "RAG & Memory Systems",
      "Behavioral Grounding",
      "Precision Tuning",
    ],
    color: "#4ECDC4",
  },
  {
    title: "Zero-Latency Automation",
    icon: Zap,
    description:
      "Seamless B2B automation monitoring and executing without human intervention.",
    details: [
      "B2B Workflow Automation",
      "Real-time Monitoring",
      "Event-Driven Pipelines",
      "API Integrations",
      "Autonomous Execution",
    ],
    color: "#9B59B6",
  },
  {
    title: "Proactive Intelligence",
    icon: Workflow,
    description:
      "Building systems that anticipate needs and execute autonomously before being asked.",
    details: [
      "Predictive Automation",
      "Intelligent Scheduling",
      "Anomaly Detection",
      "Self-Healing Systems",
      "Autonomous Reporting",
    ],
    color: "#3498DB",
  },
  {
    title: "0→1 Product Development",
    icon: Rocket,
    description:
      "Taking your vision from raw idea to a market-ready product with a 30-day delivery guarantee.",
    details: [
      "Discovery & Architecture",
      "Core AI Development",
      "Integration & Polish",
      "Production Deployment",
      "Post-Launch Monitoring",
    ],
    color: "#E74C3C",
  },
  {
    title: "Full-Stack Product Engineering",
    icon: Code,
    description:
      "Not just engineers — Product Engineers who contribute across design, business, and engineering with full-stack product thinking.",
    details: [
      "UX & Interface Design",
      "Frontend & Backend Development",
      "Business Strategy",
      "Scalable Architecture",
      "Rapid Iteration",
    ],
    color: "#27AE60",
  },
];

// Enhanced projects data
export const projectsData = [
  {
    name: "Xverse",
    category: "Bitcoin Wallet & DeFi",
    description:
      "Built a comprehensive Bitcoin wallet and DeFi platform that scaled to a $60M valuation.",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    tags: ["DeFi", "Bitcoin", "Web3", "Mobile"],
    stats: { valuation: "$60M", network: "Bitcoin", type: "DeFi" },
    link: "#",
  },
  {
    name: "BirdEatsBug",
    category: "Developer Tools",
    description:
      "Built a bug reporting and screen recording platform that developers love — acquired by BrowserStack.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["SaaS", "Developer Tools", "Screen Recording"],
    stats: { outcome: "Acquired", acquirer: "BrowserStack", users: "Global" },
    link: "#",
  },
  {
    name: "Column.us",
    category: "Public Notice Platform",
    description:
      "Delivered a public notice platform that doubled newspaper client adoption across the US.",
    imageUrl:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    tags: ["Media", "SaaS", "Public Sector"],
    stats: { growth: "2x", clients: "Newspapers", region: "US" },
    link: "#",
  },
  {
    name: "Bayut",
    category: "Property Marketplace",
    description:
      "Engineered features for the #1 property marketplace in the GCC region serving millions of users.",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tags: ["Real Estate", "Marketplace", "GCC"],
    stats: { rank: "#1 GCC", region: "Middle East", type: "Marketplace" },
    link: "#",
  },
  {
    name: "iKhokha",
    category: "Payment Gateway",
    description:
      "Scaled a payment gateway for SMBs processing over R1 billion in weekly transactions.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tags: ["FinTech", "Payments", "SMBs", "Africa"],
    stats: { transactions: "R1B+/week", market: "Africa", segment: "SMBs" },
    link: "#",
  },
  {
    name: "CarriedAI",
    category: "Autonomous Investment Engine",
    description:
      "Built an autonomous AI-powered investment engine combining AI expertise with deep financial domain knowledge.",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "FinTech", "Investment", "Autonomous"],
    stats: { type: "Autonomous AI", domain: "Finance", tech: "Agentic" },
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
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "InnovateX Corp",
  },
  {
    quote:
      "The design work was impeccable—modern, intuitive, and exactly what our users needed. Highly recommend their UI/UX team.",
    author: "Marcus Chen",
    title: "Product Lead, Stellar Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "Stellar Solutions",
  },
  {
    quote:
      "We saw a 40% improvement in load times after their cloud architecture audit. True experts in scalability and performance.",
    author: "Sarah Jones",
    title: "CTO, GlobalTech",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "GlobalTech",
  },
  {
    quote:
      "From concept to launch, they were professional, responsive, and delivered beyond expectations. A true technology partner.",
    author: "David Kim",
    title: "Founder, StartupHub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "StartupHub",
  },
  {
    quote:
      "Their team's expertise in React Native helped us launch on both iOS and Android simultaneously, saving months of development.",
    author: "Lisa Wang",
    title: "VP Engineering, MobileFirst Inc",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "MobileFirst Inc",
  },
  {
    quote:
      "Group3 Co's DevOps transformation reduced our deployment time from days to minutes. Absolutely game-changing.",
    author: "James Wilson",
    title: "Director of Operations, TechScale",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
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
  FileText,
  Calendar,
  User,
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
    { name: "Xverse", href: "/projects#xverse" },
    { name: "BirdEatsBug", href: "/projects#birdeatsb" },
    { name: "Column.us", href: "/projects#column" },
  ],
  Resources: [
    { name: "Support", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-and-conditions" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
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
    description:
      "We dive deep into understanding your vision, goals, and target audience.",
    icon: Target,
  },
  {
    step: 2,
    title: "Strategy",
    description:
      "We create a comprehensive roadmap aligned with your business objectives.",
    icon: LayoutDashboard,
  },
  {
    step: 3,
    title: "Design",
    description:
      "Our designers craft beautiful, intuitive interfaces that users love.",
    icon: Palette,
  },
  {
    step: 4,
    title: "Development",
    description:
      "Our engineers build robust, scalable solutions using cutting-edge tech.",
    icon: Code,
  },
  {
    step: 5,
    title: "Launch",
    description:
      "We deploy your product and ensure a smooth, successful launch.",
    icon: Rocket,
  },
  {
    step: 6,
    title: "Growth",
    description:
      "We continue to optimize and scale your product for long-term success.",
    icon: TrendingUp,
  },
];
