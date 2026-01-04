import type {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL: string = "https://devhimanshu.space";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/projects": true,
  "/blog": false,
  "/gallery": false,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
// Note: Password protection doesn't work with GitHub Pages static export
const protectedRoutes: ProtectedRoutesConfig = {};

// Import and set font for each variant
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Geist } from "next/font/google";

const heading = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const label = Inter({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style: StyleConfig = {
  theme: "system", // dark | light | system
  neutral: "slate", // sand | gray | slate | custom - slate is more modern
  brand: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom - indigo is more professional
  accent: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom - emerald for success/growth
  solid: "contrast", // color | contrast
  solidStyle: "plastic", // flat | plastic - plastic adds depth
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "105", // 90 | 95 | 100 | 105 | 110 - slightly larger for better readability
};

const dataStyle: DataStyleConfig = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: true, // Enable cursor mask for interactive feel
    x: 50,
    y: 0,
    radius: 120, // Larger radius for better effect
  },
  gradient: {
    display: true, // Enable gradient for modern look
    opacity: 60, // Subtle gradient
    x: 30,
    y: 40,
    width: 120,
    height: 80,
    tilt: 15, // Slight tilt for dynamic feel
    colorStart: "brand-background-strong",
    colorEnd: "accent-background-weak",
  },
  dots: {
    display: true,
    opacity: 30, // Slightly more subtle
    size: "3", // Larger dots for better visibility
    color: "brand-background-medium",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: true, // Enable lines for texture
    opacity: 15, // Very subtle
    color: "brand-alpha-weak",
    size: "24", // Larger spacing
    thickness: 1,
    angle: 30, // Diagonal lines for dynamic feel
  },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data
const schema: SchemaConfig = {
  logo: "",
  type: "Person",
  name: "Himanshu Sharma",
  description: home.description,
  email: "himanshusharma.dev80@gmail.com",
};

// social links
const sameAs: SameAsConfig = {
  threads: "",
  linkedin: "https://linkedin.com/in/himanshu-sharma-055265207",
  discord: "",
};

// social sharing configuration for blog posts
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};
