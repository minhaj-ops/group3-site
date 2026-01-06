import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ACCENT_COLOR, lucideIcons } from "../components/common/config";

const { FileText, Calendar, User, ArrowRight, Clock } = lucideIcons;

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const BlogHero = () => {
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
            icon={<FileText size={16} />}
            label="Insights & Updates"
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
            Our Blog
            <Box
              component="span"
              sx={{
                display: "block",
                background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #ff8c69 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Latest Insights
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
            Stay updated with the latest trends, insights, and stories from our
            team of experts.
          </MotionTypography>
        </motion.div>
      </Container>

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

const BlogCard = ({ post, index }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <MotionCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      sx={{
        bgcolor: "#1E293B",
        borderRadius: "16px",
        border: "1px solid #334155",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: ACCENT_COLOR,
          transform: "translateY(-8px)",
          boxShadow: `0 20px 40px -12px ${ACCENT_COLOR}30`,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 240,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <Chip
          label={post.category}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            bgcolor: ACCENT_COLOR,
            color: "white",
            fontWeight: 600,
            fontSize: "0.75rem",
          }}
        />
      </Box>

      <CardContent
        sx={{ p: 4, flex: 1, display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
            color: "#A0B3D9",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Calendar size={14} />
            <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
              {post.date}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Clock size={14} />
            <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
              {post.readTime}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 2,
            fontFamily: "'Outfit', sans-serif",
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </Typography>

        <Box sx={{ mb: 3, flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              color: "#A0B3D9",
              mb: isExpanded && post.fullContent ? 2 : 0,
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {post.excerpt}
          </Typography>

          {isExpanded && post.fullContent && (
            <Box>
              {post.fullContent.split("\n\n").map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: "#A0B3D9",
                    mb: 2,
                    lineHeight: 1.7,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pt: 2,
            borderTop: "1px solid #334155",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              src={post.author.avatar}
              alt={post.author.name}
              sx={{ width: 32, height: 32 }}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                {post.author.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#A0B3D9",
                  fontSize: "0.75rem",
                }}
              >
                {post.author.role}
              </Typography>
            </Box>
          </Box>
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            endIcon={
              <ArrowRight
                size={18}
                style={{
                  transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              />
            }
            sx={{
              color: ACCENT_COLOR,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                bgcolor: `${ACCENT_COLOR}10`,
              },
            }}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        </Box>
      </CardContent>
    </MotionCard>
  );
};

const BlogGrid = () => {
  const posts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping web development, from AI-powered tools to new frameworks and best practices for building modern applications.",
      fullContent:
        "The web development landscape is evolving at an unprecedented pace. In 2024, we're seeing revolutionary changes that are reshaping how developers build and deploy applications.\n\nArtificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. AI-powered code assistants are helping developers write cleaner code faster, while AI-driven testing tools are catching bugs before they reach production.\n\nFramework ecosystems continue to mature, with React, Vue, and Angular all introducing significant updates. The rise of meta-frameworks like Next.js and Remix is changing how we think about full-stack development, blurring the lines between frontend and backend.\n\nPerformance remains a top priority, with Core Web Vitals becoming even more critical for SEO and user experience. Developers are adopting new techniques like edge computing, serverless architectures, and progressive web apps to deliver lightning-fast experiences.\n\nThe future belongs to developers who embrace these trends while maintaining a focus on user-centric design and accessibility.",
      category: "Development",
      date: "March 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Sarah Johnson",
        role: "Lead Developer",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
    },
    {
      title: "Building Scalable Cloud Architectures: A Complete Guide",
      excerpt:
        "Learn how to design and implement cloud architectures that scale with your business needs, covering AWS, Azure, and best practices.",
      fullContent:
        "Scalable cloud architecture is the foundation of modern applications that can grow with your business. Whether you're building a startup or scaling an enterprise solution, understanding cloud architecture principles is essential.\n\nStart with a solid foundation: choose the right cloud provider based on your specific needs. AWS offers comprehensive services, Azure integrates well with Microsoft ecosystems, and Google Cloud excels in data analytics and machine learning.\n\nDesign for scalability from day one. Implement auto-scaling groups, load balancers, and distributed databases. Use containerization with Docker and orchestration with Kubernetes to ensure your applications can scale horizontally.\n\nSecurity should never be an afterthought. Implement proper IAM policies, use encryption at rest and in transit, and regularly audit your cloud infrastructure. Consider using infrastructure as code (IaC) tools like Terraform or CloudFormation to maintain consistency and version control.\n\nCost optimization is crucial. Monitor your usage, implement cost alerts, and use reserved instances for predictable workloads. Remember, the most expensive cloud architecture is one that doesn't scale when you need it to.",
      category: "Cloud",
      date: "March 12, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Michael Chen",
        role: "Cloud Architect",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
    },
    {
      title: "UI/UX Design Principles for Modern Applications",
      excerpt:
        "Discover the fundamental principles of user interface and experience design that create engaging and intuitive digital products.",
      fullContent:
        "Great design is invisible—users shouldn't have to think about how to use your application. The best UI/UX design follows principles that prioritize user needs and create seamless experiences.\n\nStart with user research. Understand your audience's goals, pain points, and behaviors. Create user personas and journey maps to guide your design decisions. Remember, you're not designing for yourself—you're designing for your users.\n\nConsistency is key. Establish a design system with reusable components, consistent spacing, typography, and color schemes. This not only improves usability but also speeds up development and ensures brand coherence.\n\nAccessibility isn't optional. Design with WCAG guidelines in mind. Ensure proper color contrast, keyboard navigation, and screen reader compatibility. An accessible design is a better design for everyone.\n\nMobile-first thinking is essential. Most users access applications on mobile devices, so design for small screens first, then enhance for larger displays. Touch targets should be at least 44x44 pixels, and content should be easily readable without zooming.\n\nFinally, iterate based on feedback. Use analytics, user testing, and A/B testing to continuously improve your design. The best designs evolve based on real user data, not assumptions.",
      category: "Design",
      date: "March 10, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Emily Rodriguez",
        role: "UX Designer",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      },
    },
    {
      title: "React Performance Optimization: Tips and Tricks",
      excerpt:
        "Master the art of optimizing React applications for better performance, including code splitting, memoization, and lazy loading techniques.",
      fullContent:
        "React performance optimization is crucial for creating fast, responsive applications that provide excellent user experiences. Here are proven strategies to boost your React app's performance.\n\nUse React.memo() wisely. Wrap components that receive the same props frequently to prevent unnecessary re-renders. However, don't overuse it—memoization has its own overhead.\n\nImplement code splitting with React.lazy() and Suspense. Load components only when needed, reducing initial bundle size and improving time to interactive. Route-based code splitting is particularly effective for large applications.\n\nOptimize your state management. Keep state as local as possible, and use useMemo() and useCallback() to prevent expensive recalculations and function recreations. Consider using state management libraries like Zustand or Jotai for better performance than Redux in many cases.\n\nVirtualize long lists. When rendering hundreds or thousands of items, use libraries like react-window or react-virtualized to only render visible items, dramatically improving performance.\n\nProfile your app regularly. Use React DevTools Profiler to identify performance bottlenecks. Measure before and after optimizations to ensure you're making real improvements, not just adding complexity.",
      category: "Development",
      date: "March 8, 2024",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "David Kim",
        role: "Senior Developer",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    },
    {
      title: "Microservices vs Monolith: Choosing the Right Architecture",
      excerpt:
        "A comprehensive comparison of microservices and monolithic architectures to help you make the right decision for your project.",
      fullContent:
        "The microservices vs monolith debate is one of the most important architectural decisions you'll make. Both approaches have their place, and the right choice depends on your specific context.\n\nStart with a monolith if you're building an MVP or have a small team. Monoliths are simpler to develop, test, and deploy. You can always refactor to microservices later when you have clear service boundaries and the team size justifies the added complexity.\n\nConsider microservices when you have multiple teams working on different parts of the system, need independent scaling for different components, or want to use different technologies for different services. However, be prepared for increased operational complexity, network latency, and distributed system challenges.\n\nThe middle ground—modular monoliths—is often overlooked but can be the sweet spot. Organize your codebase into clear modules with well-defined interfaces, making it easier to extract services later if needed.\n\nRemember: there's no one-size-fits-all solution. The best architecture is the one that fits your team, scale, and business requirements. Don't over-engineer, but also don't ignore scalability concerns if you're expecting rapid growth.",
      category: "Architecture",
      date: "March 5, 2024",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Alex Thompson",
        role: "Tech Lead",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
      },
    },
    {
      title: "The Power of TypeScript in Modern Development",
      excerpt:
        "Explore how TypeScript enhances JavaScript development with type safety, better tooling, and improved developer experience.",
      fullContent:
        "TypeScript has transformed JavaScript development by adding static type checking without sacrificing the flexibility that makes JavaScript powerful. Here's why it's become essential for modern web development.\n\nType safety catches errors at compile time, not runtime. This means fewer bugs in production and more confidence when refactoring. Your IDE can provide better autocomplete, catch typos, and suggest fixes before you even run your code.\n\nThe developer experience is significantly improved. With proper TypeScript configuration, you get intelligent code completion, inline documentation, and refactoring tools that actually understand your codebase. This leads to faster development and fewer mistakes.\n\nTypeScript scales better with team size. As your codebase grows, types serve as living documentation. New team members can understand function signatures and data structures just by reading the types, reducing onboarding time.\n\nGradual adoption is possible. You can add TypeScript to existing JavaScript projects incrementally, using .ts files alongside .js files. Start with strict mode disabled, then gradually enable stricter checks as you add types.\n\nRemember: TypeScript is a tool, not a goal. Use it to write better code, but don't let perfect types slow you down. Sometimes 'any' is acceptable, especially during rapid prototyping. The key is finding the right balance for your project.",
      category: "Development",
      date: "March 3, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Jessica Martinez",
        role: "Full-Stack Developer",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      },
    },
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
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Chip
            label="Latest Articles"
            sx={{
              mb: 2,
              bgcolor: `${ACCENT_COLOR}20`,
              color: ACCENT_COLOR,
              fontWeight: 600,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 800,
              mb: 2,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Recent Posts
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#A0B3D9",
              maxWidth: "600px",
              mx: "auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Discover insights, tutorials, and industry news from our expert team
          </Typography>
        </MotionBox>

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
          {posts.map((post, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                minHeight: "100%",
                width: "100%",
              }}
            >
              <BlogCard post={post} index={index} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const Blog = () => {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
};

export default Blog;
