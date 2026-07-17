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
    imageUrl: "/case-xverse.webp",
    tags: ["DeFi", "Bitcoin", "Web3", "Mobile"],
    stats: { valuation: "$60M", network: "Bitcoin", type: "DeFi" },
    slug: "xverse",
    link: "/case-studies/xverse",
  },
  {
    name: "BirdEatsBug",
    category: "Developer Tools",
    description:
      "Built a bug reporting and screen recording platform that developers love — acquired by BrowserStack.",
    imageUrl: "/case-birdeatsbug.jpeg",
    tags: ["SaaS", "Developer Tools", "Screen Recording"],
    stats: { outcome: "Acquired", acquirer: "BrowserStack", users: "Global" },
    slug: "birdeatsbug",
    link: "/case-studies/birdeatsbug",
  },
  {
    name: "Column.us",
    category: "Public Notice Platform",
    description:
      "Delivered a public notice platform that doubled newspaper client adoption across the US.",
    imageUrl: "/case-column.jpeg",
    tags: ["Media", "SaaS", "Public Sector"],
    stats: { growth: "2x", clients: "Newspapers", region: "US" },
    slug: "column",
    link: "/case-studies/column",
  },
  {
    name: "Bayut",
    category: "Property Marketplace",
    description:
      "Engineered features for the #1 property marketplace in the GCC region serving millions of users.",
    imageUrl: "/case-bayut.png",
    tags: ["Real Estate", "Marketplace", "GCC"],
    stats: { rank: "#1 GCC", region: "Middle East", type: "Marketplace" },
    slug: "bayut",
    link: "/case-studies/bayut",
  },
  {
    name: "iKhokha",
    category: "Payment Gateway",
    description:
      "Scaled a payment gateway for SMBs processing over R1 billion in weekly transactions.",
    imageUrl: "/case-ikhokha.webp",
    tags: ["FinTech", "Payments", "SMBs", "Africa"],
    stats: { transactions: "R1B+/week", market: "Africa", segment: "SMBs" },
    slug: "ikhokha",
    link: "/case-studies/ikhokha",
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

// Full case study detail pages
export const caseStudiesData = {
  xverse: {
    name: "Xverse",
    tagline: "Bitcoin wallet & DeFi platform",
    category: "Web3 / Cryptocurrency",
    heroImage: "/case-xverse.webp",
    overview:
      "Xverse needed to build a secure, user-friendly Bitcoin wallet that could handle complex DeFi operations while maintaining the simplicity users expect. We helped them scale from zero to a $60M valuation.",
    metrics: [
      { value: "$60M", label: "Valuation" },
      { value: "500K+", label: "Active Users" },
      { value: "0", label: "Security Incidents" },
      { value: "#1", label: "Bitcoin Wallet" },
    ],
    challenge: {
      title: "Building Trust in Web3",
      text: "The Bitcoin ecosystem lacked a wallet that combined security with usability. Users were losing funds to complex interfaces, and DeFi on Bitcoin was nearly inaccessible to mainstream users.",
      painPoints: [
        "Complex Bitcoin scripting for DeFi operations",
        "Security vulnerabilities in existing solutions",
        "Poor UX causing user drop-off",
        "No native support for Ordinals and BRC-20",
      ],
    },
    solution: {
      title: "Secure & Intuitive Wallet Architecture",
      text: "We built a wallet that abstracts away complexity while maintaining full user control. Multi-layer security with hardware wallet integration, and a DeFi interface that makes Bitcoin native apps accessible to everyone.",
      techStack: ["React Native", "TypeScript", "Bitcoin Core", "Stacks", "Rust"],
      features: [
        "Hardware wallet integration",
        "Native Ordinals & BRC-20 support",
        "One-click DeFi operations",
        "Multi-signature security",
        "Cross-chain bridging interface",
      ],
    },
    codeDemo: {
      agentName: "xverse-agent",
      lines: [
        { cmd: "wallet.init(network='bitcoin_mainnet')", output: ["Secure enclave initialized"] },
        { cmd: "wallet.connect(hardware='ledger')", output: ["Hardware wallet connected. Keys secured."] },
        {
          cmd: "wallet.swap(from='BTC', to='STX', amount=0.5)",
          output: ["Fetching best route... Found: 3 hops", "Estimated output: 12,450 STX"],
        },
        {
          cmd: "wallet.execute()",
          output: ["Transaction signed. Broadcasting...", "Confirmed in block 840,291"],
        },
      ],
    },
    testimonial: {
      quote:
        "Group3 helped us build the wallet we always envisioned. They understood both the technical complexity and the need for simplicity.",
      author: "Ken",
      title: "CEO, Xverse",
    },
  },
  birdeatsbug: {
    name: "BirdEatsBug",
    tagline: "Bug reporting & screen recording",
    category: "Developer Tools",
    heroImage: "/case-birdeatsbug.jpeg",
    overview:
      "BirdEatsBug was revolutionizing how developers report and fix bugs. We built the core recording and replay engine that made bug reports so good, BrowserStack acquired them.",
    metrics: [
      { value: "Acquired", label: "by BrowserStack" },
      { value: "90%", label: "Faster Bug Resolution" },
      { value: "50K+", label: "Teams Using" },
      { value: "4.9★", label: "Chrome Store Rating" },
    ],
    challenge: {
      title: "Capturing the Uncapturable",
      text: "Traditional bug reports missed critical context—console logs, network requests, user actions. Developers spent hours reproducing issues that users couldn't explain.",
      painPoints: [
        "80% of bug reports lacked reproduction steps",
        "Average 4 hours to reproduce a reported bug",
        "Lost context between user and developer",
        "No visibility into browser state at crash time",
      ],
    },
    solution: {
      title: "Intelligent Session Capture",
      text: "We built a lightweight recording engine that captures everything: DOM state, console logs, network requests, and user interactions. All packaged into shareable, replayable bug reports.",
      techStack: ["TypeScript", "WebRTC", "IndexedDB", "Chrome APIs", "Node.js"],
      features: [
        "Lightweight DOM recording (<1% CPU)",
        "Full network request capture",
        "Console & error state snapshotting",
        "Privacy-first data handling",
        "One-click Jira/GitHub integration",
      ],
    },
    codeDemo: {
      agentName: "birdeatsbug-agent",
      lines: [
        {
          cmd: "recorder.start(options={network: true, console: true})",
          output: ["Recording session... Capturing all events."],
        },
        { cmd: "user.click(element='#submit-button')", output: ["Captured: Click event + DOM state"] },
        { cmd: "network.request(url='/api/checkout')", output: ["Captured: 500 Internal Server Error"] },
        { cmd: "recorder.stop()", output: ["Session packaged: 2.3MB compressed"] },
        { cmd: "report.share(destination='jira')", output: ["Bug report created: BUG-1234"] },
      ],
    },
    testimonial: {
      quote:
        "The engineering quality was exceptional. They built something we couldn't have built ourselves in twice the time.",
      author: "Dan",
      title: "Co-founder, BirdEatsBug",
    },
  },
  column: {
    name: "Column.us",
    tagline: "Public notice platform for newspapers",
    category: "Legal Tech / Media",
    heroImage: "/case-column.jpeg",
    overview:
      "Column.us was modernizing how public notices are published in newspapers. We built the platform that doubled their newspaper client base and streamlined a century-old process.",
    metrics: [
      { value: "2x", label: "Newspaper Clients" },
      { value: "70%", label: "Processing Time Saved" },
      { value: "99.8%", label: "Compliance Rate" },
      { value: "$0", label: "Billing Errors" },
    ],
    challenge: {
      title: "Digitizing a Legacy Industry",
      text: "Public notices—legal requirements for government transparency—were still managed via fax and phone. Newspapers struggled with manual workflows, and governments couldn't track compliance.",
      painPoints: [
        "Manual fax/phone-based submission process",
        "No standardized formatting across papers",
        "Compliance tracking nearly impossible",
        "Revenue leakage from billing errors",
      ],
    },
    solution: {
      title: "End-to-End Notice Management",
      text: "We built a platform that handles the entire lifecycle: submission, formatting, publication scheduling, proof generation, and compliance certification. All automated, all auditable.",
      techStack: ["Next.js", "PostgreSQL", "AWS Lambda", "Stripe", "SendGrid"],
      features: [
        "Self-service notice submission",
        "Automatic newspaper formatting",
        "Multi-publication scheduling",
        "Affidavit generation & e-signing",
        "Real-time compliance dashboard",
      ],
    },
    codeDemo: {
      agentName: "column.us-agent",
      lines: [
        { cmd: "notice.submit(type='foreclosure', county='harris_tx')", output: ["Notice received. Validating format..."] },
        {
          cmd: "notice.format(publications=['houston_chronicle', 'daily_court'])",
          output: ["Formatted for 2 publications. Proofs generated."],
        },
        {
          cmd: "notice.schedule(dates=['2024-03-15', '2024-03-22'])",
          output: ["Publication scheduled. Confirmations sent."],
        },
        {
          cmd: "notice.certify()",
          output: ["Affidavit generated. E-signature requested.", "Compliance: VERIFIED ✓"],
        },
      ],
    },
    testimonial: {
      quote:
        "They understood our industry's quirks and built something that actually works for newspapers, not against them.",
      author: "Jake",
      title: "CEO, Column.us",
    },
  },
  bayut: {
    name: "Bayut",
    tagline: "Property marketplace",
    category: "Real Estate / PropTech",
    heroImage: "/case-bayut.png",
    overview:
      "Bayut needed to cement their position as the #1 property platform in the GCC. We built intelligent features that transformed how millions find their homes across the Middle East.",
    metrics: [
      { value: "#1", label: "Property Portal in GCC" },
      { value: "10M+", label: "Monthly Visitors" },
      { value: "40%", label: "Higher Engagement" },
      { value: "95%", label: "Fraud Detection Rate" },
    ],
    challenge: {
      title: "Scaling Across the GCC",
      text: "The GCC property market is unique—diverse regulations, multiple languages, and buyers from around the world. Bayut needed to serve all of them seamlessly while outpacing competitors.",
      painPoints: [
        "Multi-language, multi-currency requirements",
        "Complex property verification needs",
        "High fraud risk in listings",
        "Search relevance lagging competitors",
      ],
    },
    solution: {
      title: "Intelligent Property Platform",
      text: "We built ML-powered search ranking, automated listing verification, and a recommendation engine that understands buyer intent across cultures and languages.",
      techStack: ["Python", "Elasticsearch", "TensorFlow", "Redis", "Kafka"],
      features: [
        "ML-powered search ranking",
        "Automated listing fraud detection",
        "Multi-language semantic search",
        "Personalized recommendations",
        "Real-time market analytics",
      ],
    },
    codeDemo: {
      agentName: "bayut-agent",
      lines: [
        {
          cmd: "search.query('3BR apartment dubai marina sea view')",
          output: ["Intent: Family home, premium, view priority"],
        },
        {
          cmd: "search.rank(results=2847, user_profile=true)",
          output: ["Personalized ranking applied. Top 20 shown."],
        },
        {
          cmd: "listing.verify(id='DXB-38291')",
          output: ["Image analysis: AUTHENTIC", "Price check: MARKET RATE", "Agent verification: VERIFIED ✓"],
        },
        {
          cmd: "recommend.similar(user_history=true)",
          output: ["12 similar properties matched to preferences"],
        },
      ],
    },
    testimonial: {
      quote:
        "The features Group3 built became our competitive moat. They're why we're #1 in the region.",
      author: "Haider",
      title: "CEO, Bayut",
    },
  },
  ikhokha: {
    name: "iKhokha",
    tagline: "Payment gateway for SMBs",
    category: "FinTech / Payments",
    heroImage: "/case-ikhokha.webp",
    overview:
      "iKhokha empowers small businesses across South Africa with simple payment solutions. We built the infrastructure that now processes over R1 billion in transactions every week.",
    metrics: [
      { value: "R1B+", label: "Weekly Transactions" },
      { value: "100K+", label: "Active Merchants" },
      { value: "99.99%", label: "Uptime" },
      { value: "< 2s", label: "Settlement Time" },
    ],
    challenge: {
      title: "Payments for the Underserved",
      text: "Small merchants in South Africa were locked out of digital payments. Banks charged too much, integrations were complex, and support was non-existent for small businesses.",
      painPoints: [
        "High transaction fees eating margins",
        "Complex integration requirements",
        "Poor connectivity in rural areas",
        "Limited support for informal merchants",
      ],
    },
    solution: {
      title: "Resilient Payment Infrastructure",
      text: "We built a payment system designed for Africa: works offline, syncs when connected, supports multiple payment methods, and provides real-time business insights to merchants.",
      techStack: ["Go", "PostgreSQL", "gRPC", "Redis", "React Native"],
      features: [
        "Offline-first transaction processing",
        "Multi-method payments (card, mobile, QR)",
        "Automatic reconciliation",
        "Real-time merchant dashboard",
        "Instant settlement options",
      ],
    },
    codeDemo: {
      agentName: "ikhokha-agent",
      lines: [
        {
          cmd: "terminal.init(merchant='spaza_456')",
          output: ["Terminal online. Offline cache: 847 pending."],
        },
        {
          cmd: "payment.process(amount=R250, method='tap')",
          output: ["Card read... Authorizing...", "APPROVED. Receipt sent via WhatsApp."],
        },
        {
          cmd: "sync.batch()",
          output: ["Uploading 847 offline transactions...", "Reconciled. Merchant balance: R12,450"],
        },
        {
          cmd: "settlement.instant()",
          output: ["Funds transferred to merchant account."],
        },
      ],
    },
    testimonial: null,
  },
};

// Testimonials data — founder quotes from real client engagements
export const testimonialsData = [
  {
    quote:
      "From ideation to acquisition by BrowserStack—Group3 was instrumental in building a product that developers actually love to use.",
    author: "Dan",
    title: "Founder & CEO",
    avatar: "/founder-dan.jpeg",
    rating: 5,
    company: "BirdEatsBug (Acquired by BrowserStack)",
  },
  {
    quote:
      "The team delivered exactly what we needed for our public notice platform. Professional, fast, and they truly get the product vision.",
    author: "Jake",
    title: "Founder & CEO",
    avatar: "/founder-jake.jpg",
    rating: 5,
    company: "Column.us",
  },
  {
    quote:
      "Building autonomous investment systems requires precision. Group3 brought both the AI expertise and financial domain knowledge we needed.",
    author: "Guillem",
    title: "Founder & CEO",
    avatar: "/founder-guillem.jpg",
    rating: 5,
    company: "CarriedAI",
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
