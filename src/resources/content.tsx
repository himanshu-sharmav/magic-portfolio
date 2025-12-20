import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Himanshu",
  lastName: "Sharma",
  name: "Himanshu Sharma",
  role: "Full Stack Developer",
  avatar: "/portfolio/images/avatar.jpeg",
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
  image: "/portfolio/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable full-stack solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">EpiphAI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/projects/epiphai-ai-automation-platform",
  },
  subline: (
    <>
      I'm Himanshu, a Full Stack Developer specializing in Django, Flask, and React.js.
      <br /> I build robust backend systems and seamless user experiences with a focus on performance and scalability.
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
    title: "Introduction",
    description: (
      <>
        Detail-oriented Full Stack Developer with hands-on experience in backend and frontend development through academic projects and ongoing internships. 
        Proficient in Python, Django, Flask, and React.js, with a record of enhancing application performance, resolving issues rapidly, 
        and integrating cloud services and containerization. Adept at applying agile methodologies to deliver robust digital solutions that drive user engagement and system efficiency.
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
            src: "/portfolio/images/companies/digitalalpha_logo.jpeg",
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
            src: "/portfolio/images/companies/alemeno.jpeg",
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
            src: "/portfolio/images/companies/across_the_globe_atg__logo.jpeg",
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
