import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

// Helper function to get the correct image path based on environment
// With custom domain, no prefix needed
const getImagePath = (path: string) => {
  return path; // No prefix needed with custom domain
};

const person: Person = {
  firstName: "Himanshu",
  lastName: "Sharma",
  name: "Himanshu Sharma",
  role: "Full Stack Developer",
  avatar: getImagePath("/images/avatar.jpeg"),
  email: "himanshusharma.dev80@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
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
  image: getImagePath("/images/og/home.jpg"),
  label: "Home",
  title: `${person.name} – Full Stack Developer`,
  description: `Crafting scalable digital solutions with modern technologies. Specializing in Django, React.js, and cloud architecture.`,
  headline: <>Transforming ideas into <strong>scalable digital experiences</strong></>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">EpiphAI Platform</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest Project
        </Text>
      </Row>
    ),
    href: "/projects/epiphai-ai-automation-platform",
  },
  subline: (
    <>
      I'm <strong>Himanshu Sharma</strong>, a passionate Full Stack Developer with expertise in building robust backend systems and intuitive user interfaces.
      <br />
      <br />
      Currently contributing to cutting-edge AI platforms while pursuing my B.Tech in Computer Science. 
      I specialize in <strong>Django</strong>, <strong>React.js</strong>, and <strong>cloud technologies</strong>, 
      with a proven track record of improving application performance by up to 35% and handling 10,000+ daily requests.
    </>
  ),
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
    display: true,
    link: "https://cal.com/himanshu-sharma-tygyy8",
  },
  intro: {
    display: true,
    title: "My Journey",
    description: (
      <>
        <strong>Passionate about creating digital solutions that make a difference.</strong>
        <br />
        <br />
        As a detail-oriented Full Stack Developer, I've gained hands-on experience through impactful internships and challenging academic projects. 
        My expertise spans <strong>Python</strong>, <strong>Django</strong>, <strong>Flask</strong>, and <strong>React.js</strong>, with a proven track record of:
        <br />
        <br />
        • <strong>35% faster server response times</strong> through optimization
        <br />
        • <strong>99.9% uptime</strong> during traffic peaks
        <br />
        • <strong>10,000+ daily requests</strong> handled efficiently
        <br />
        • <strong>20% higher user engagement</strong> through feature development
        <br />
        <br />
        I thrive on applying agile methodologies to deliver robust digital solutions that drive user engagement and system efficiency. 
        Currently pursuing my B.Tech in Computer Science while contributing to cutting-edge AI platforms.
      </>
    ),
  },
  work: {
    display: false, // Moved to work page
    title: "Work Experience",
    experiences: [
      {
        company: "Digital Alpha",
        timeframe: "Jan 2025 - Present",
        role: "Full-Stack Engineer Intern",
        link: "https://www.digital-alpha.com/",
        achievements: [
          "Spearheaded development of 12+ new chatbot features for EpiphAI platform (advanced query handling, multilingual support, UI redesign, Markdown rendering, streaming optimization), resulting in 20% higher user engagement and 25% faster message rendering.",
          "Built scalable alert system for email, Slack, and third-party notifications using AWS SQS and SES, ensuring reliable asynchronous message delivery.",
          "Implemented extensive credit-based system with Celery for real-time chat interaction billing across multiple organizational tiers, handling concurrent sessions accurately.",
          "Improved Django application processing 10,000+ daily requests, achieving 35% faster server response time and maintaining 99.9% uptime during traffic peaks.",
          "Refactored entire codebase to class-based views and modular architecture, improving code quality and maintainability.",
          "Created comprehensive OpenAPI documentation for all API endpoints, standardizing integration processes.",
        ],
        images: [
          {
            src: getImagePath("/images/companies/digitalalpha_logo.jpeg"),
            alt: "Digital Alpha",
            width: 8,
            height: 4,
          },
        ],
      },
      {
        company: "Alemeno",
        timeframe: "Nov 2024 - Dec 2024",
        role: "Backend Engineer Intern",
        link: "https://alemeno.com/",
        achievements: [
          "Managed and scaled Django backend handling 10K+ API hits/day, sustaining 95% same-day bug resolution and improving endpoint efficiency by 18% through caching and logging upgrades.",
          "Reinforced backend security and performance by 60% across HRMS & EdTech modules using Dockerized microservices and CI/CD deployment, reducing downtime incidents by 30%.",
        ],
        images: [
          {
            src: getImagePath("/images/companies/alemeno.jpeg"),
            alt: "Alemeno",
            width: 8,
            height: 4,
          },
        ],
      },
      {
        company: "Across The Globe (ATG.World)",
        timeframe: "Jun 2024 - Oct 2024",
        role: "Backend Engineer Intern",
        link: "https://atg.world/",
        achievements: [
          "Engineered and enhanced RESTful & serverless APIs (AWS Lambda) improving integration reliability 40%, reducing AWS resource cost 20%, and accelerating API throughput 25%.",
          "Collaborated in Agile teams to raise code-review compliance by 30%, improve sprint velocity by 20%, and deliver 100% of sprint goals consistently over 4 cycles.",
        ],
        images: [
          {
            src: getImagePath("/images/companies/across_the_globe_atg__logo.jpeg"),
            alt: "ATG.World",
            width: 8,
            height: 4,
          },
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
        description: <>B.Tech in Computer Science (Nov 2022 - May 2026 Expected)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Backend Development",
        description: "Expert in building scalable backend systems with Django, Flask, and RESTful APIs. Proficient in Django REST Framework, Celery, WebSockets, and serverless architectures.",
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
        description: "Building modern, responsive web applications with React.js, HTML, CSS, and Tailwind CSS.",
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
        description: "Experience with AWS services (Lambda, S3, EC2, CloudWatch), Docker containerization, CI/CD pipelines with GitHub Actions, and deployment on Railway and Firebase.",
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
        description: "Proficient in relational and NoSQL databases including MySQL, PostgreSQL, MongoDB, and Redis for caching and message queuing.",
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
  title: `Work Experience – ${person.name}`,
  description: `Professional work experience and internships by ${person.name}`,
};

const projects: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
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
