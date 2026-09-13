import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

// Helper function to get the correct image path based on environment
// With custom domain, no prefix needed
const getImagePath = (path: string) => {
  return path; // No prefix needed with custom domain
};

const person: Person = {
  firstName: "Himanshu",
  lastName: "Sharma",
  name: "Himanshu Sharma",
  role: "Software Engineer · Backend & Full-Stack",
  avatar: getImagePath("/images/avatar.jpeg"),
  email: "himanshusharma.dev80@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}’s Newsletter</>,
  description: <>Updates about full-stack development and tech insights</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/himanshu-sharmav",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/himanshu-sharma-055265207",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Software Engineer`,
  description:
    "Software engineer building backend and full-stack products across AI, compliance, fintech, and procurement. SDE I at Digital Alpha Platforms. Based in India, open to international remote roles.",
  headline: (
    <>
      Backend depth.
      <br />
      End-to-end ownership.
    </>
  ),
  featured: { display: true, title: "SDE I at Digital Alpha Platforms", href: "/work" },
  subline:
    "I build the APIs, data pipelines, and interfaces behind products people work with every day.",
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com/himanshu-sharma-tygyy8",
  },
  intro: {
    display: true,
    title: "My Journey",
    description: (
      <>
        <p>
          I’m a software engineer at Digital Alpha Platforms, working across AI, compliance, and
          fintech products. I joined as a Full Stack Intern in January 2025 and became a full-time
          SDE I in May 2026.
        </p>
        <p>
          My work spans Django and FastAPI services, PostgreSQL query optimization, asynchronous
          jobs, and React/Next.js interfaces. I like following a feature all the way through: the
          data model, the failure cases, the API contract, and the screen someone actually uses.
        </p>
        <p>
          For Holani &amp; Co, I built the internal procurement-intelligence platform from scratch, from
          document ingestion and entity resolution to territory analysis and sales workflows. I
          graduated from KIET in May 2026 and am open to backend and full-stack roles in India and
          internationally remote.
        </p>
      </>
    ),
  },
  work: {
    display: false, // Moved to work page
    title: "Work Experience",
    experiences: [
      {
        company: "Digital Alpha Platforms",
        timeframe: "Jan 2025 \u2013 Present",
        role: "SDE I \u00b7 May 2026\u2013present | Full Stack Intern \u00b7 Jan 2025\u2013May 2026",
        link: "https://www.digital-alpha.com/",
        achievements: [
          "Improved Django API response times by approximately 35% for services handling 10,000+ requests per day.",
          "CompliSun: built client onboarding, screening and risk-review workflows, compliance monitoring, and scheduled notifications using Celery and AWS SQS/Lambda/SES.",
          "epiphAI: delivered agent/configuration APIs, organization API-key access, credit-consumption logs, in-chat charts with S3 and 30-day Redis caching, and Next.js streaming-state recovery.",
          "Private Markets Investor Platform: built a four-step investor passport, subscriptions, three-level portfolio drill-down, messaging with S3 attachments, and a funding workspace with ACH activity.",
          "AI Accounting Workspace: implemented versioned client procedures, reconciliation review, scoped runtime callbacks, and an approval/release foundation using a durable outbox and receipt-based recovery.",
          "Built QuickBooks read connectors for 10 accounting resources with normalized TypeScript models, Zod validation, pagination, filters, and retries.",
        ],
      },
      {
        company: "Holani & Co",
        timeframe: "May \u2013 Aug 2026",
        role: "Backend / Full-Stack Engineer \u00b7 Project engagement",
        achievements: [
          "Built the procurement-intelligence platform from scratch with FastAPI, PostgreSQL, SQLAlchemy, React, and CI/CD, spanning tender discovery, buyer research, and government-sales workflows.",
          "Optimized data access over approximately 1.85 million contracts; reduced a state-filtered export\u2019s database phase from 54 seconds to 2.5 seconds and removed a 20,000-row export limit.",
          "Built Gemini extraction and hierarchy resolution for 2,404 relevant purchase orders from a 157k-record source dataset, reaching 99.3% office-and-state coverage at approximately $2.7 in LLM inference spend for that enrichment pass.",
          "Delivered territory intelligence, buyer/competitor dashboards, document revisions, confirmed-order ingestion, resumable backfills, and scheduled database backups.",
        ],
      },
      {
        company: "Alemeno",
        timeframe: "Nov \u2013 Dec 2024",
        role: "Backend Engineer Intern",
        link: "https://alemeno.com/",
        achievements: [
          "Improved Django endpoint performance by 18% across HRMS and education applications through caching, logging, Dockerized services, and CI/CD improvements.",
        ],
      },
      {
        company: "ATG / Across The Globe",
        timeframe: "Jun \u2013 Oct 2024",
        role: "Backend Developer Intern",
        link: "https://atg.world/",
        achievements: [
          "Built serverless REST APIs with AWS Lambda, improving integration reliability by 40% and throughput by 25%; delivered backend features and bug fixes across sprints.",
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "KIET Group of Institutions",
        description: <>B.Tech in Computer Science · Graduated May 2026 · CGPA 7.5/10</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Backend Development",
        description:
          "Python services with Django REST Framework and FastAPI; asynchronous work with Celery, data modeling with SQLAlchemy, and authorization and failure-path tests.",
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Django",
            icon: "django",
          },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description:
          "React and Next.js interfaces with TypeScript, Redux Toolkit, form workflows, streaming responses, and recoverable loading/error states.",
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description:
          "Experience with AWS services (Lambda, S3, EC2, CloudWatch), Docker containerization, CI/CD pipelines with GitHub Actions, and deployment on Railway and Firebase.",
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        images: [],
      },
      {
        title: "Databases",
        description:
          "Proficient in relational and NoSQL databases including MySQL, PostgreSQL, MongoDB, and Redis for caching and message queuing.",
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about full-stack development and tech...",
  description: `Technical insights and learnings from ${person.name}`,
  // Blog section is disabled
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Professional experience",
  description: `Professional work experience and internships by ${person.name}`,
};

const projects: Work = {
  path: "/projects",
  label: "Projects",
  title: "Selected engineering work",
  description: `Full-stack development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /projects routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project Gallery – ${person.name}`,
  description: `Project screenshots and tech stack visualizations by ${person.name}`,
  // Gallery section is disabled
  images: [],
};

export { person, social, newsletter, home, about, blog, work, projects, gallery };
