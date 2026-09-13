"use client";

import { useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiAmazonwebservices, SiCelery, SiDjango, SiDocker, SiFastapi,
  SiGithubactions, SiGooglegemini, SiNextdotjs, SiPostgresql,
  SiPython, SiReact, SiRedis, SiRedux, SiSqlalchemy, SiTypescript,
} from "react-icons/si";
import styles from "./TechnologyWorkbench.module.css";

type Discipline = "backend" | "data" | "interface" | "delivery";
type Tool = {
  name: string;
  discipline: Discipline;
  icon: IconType;
  use: string;
  detail: string;
  with: string[];
  project: string;
  href: string;
};

const disciplines: { id: Discipline; name: string; description: string }[] = [
  { id: "backend", name: "Backend", description: "Services & background work" },
  { id: "data", name: "Data", description: "Storage, queries & caching" },
  { id: "interface", name: "Interface", description: "The part people use" },
  { id: "delivery", name: "Delivery & AI", description: "From code to running systems" },
];

const tools: Tool[] = [
  { name: "Python", discipline: "backend", icon: SiPython, use: "Turning messy inputs into usable records.", detail: "Built document extraction, resumable ingestion, and organization matching for a procurement intelligence platform.", with: ["FastAPI", "PostgreSQL", "Gemini"], project: "Procurement intelligence", href: "/projects/procurement-intelligence" },
  { name: "Django", discipline: "backend", icon: SiDjango, use: "Business rules belong in the backend.", detail: "Implemented signed payment webhooks, subscription activation, and repeat-payment checks that recover when browser confirmation fails.", with: ["PostgreSQL", "Redis", "Celery"], project: "Choolha Chowka", href: "/projects/choolha-chowka-saas-mess-management" },
  { name: "FastAPI", discipline: "backend", icon: SiFastapi, use: "A service layer built from the ground up.", detail: "Built procurement APIs, data models, ingestion workers, and buyer and territory workflows across the new platform.", with: ["SQLAlchemy", "PostgreSQL", "React"], project: "Procurement intelligence", href: "/projects/procurement-intelligence" },
  { name: "Celery", discipline: "backend", icon: SiCelery, use: "Keep the request moving. Finish the work safely.", detail: "Built background screening, scheduled reminders, and notification workflows with delivery status in a compliance platform.", with: ["Django", "AWS"], project: "CompliSun", href: "/projects/complisun-compliance-workflows" },
  { name: "PostgreSQL", discipline: "data", icon: SiPostgresql, use: "The query plan is part of the product.", detail: "Reworked indexed contact lookups and batched exports on a data layer spanning approximately 1.85 million contracts.", with: ["FastAPI", "SQLAlchemy"], project: "Procurement intelligence", href: "/projects/procurement-intelligence" },
  { name: "Redis", discipline: "data", icon: SiRedis, use: "Give temporary state a deliberate lifetime.", detail: "Added OTP caching for meal subscriptions and 30-day caching for generated in-chat charts in an AI platform.", with: ["Django", "AWS S3"], project: "epiphAI", href: "/projects/epiphai-ai-automation-platform" },
  { name: "SQLAlchemy", discipline: "data", icon: SiSqlalchemy, use: "Model the workflow, then handle the edge cases.", detail: "Built relational models and ingestion paths with per-record savepoints, malformed-data guards, and resumable backfills.", with: ["Python", "FastAPI", "PostgreSQL"], project: "Procurement intelligence", href: "/projects/procurement-intelligence" },
  { name: "React", discipline: "interface", icon: SiReact, use: "Make complex work feel navigable.", detail: "Built buyer, competitor, pricing, and territory views, plus sales-order capture and safe bulk-merge previews.", with: ["FastAPI", "TypeScript"], project: "Procurement intelligence", href: "/projects/procurement-intelligence" },
  { name: "TypeScript", discipline: "interface", icon: SiTypescript, use: "Reliable interfaces start at the boundary.", detail: "Implemented QuickBooks read connectors for 10 accounting resources with normalized models, validation, pagination, and retries.", with: ["Nango", "Zod"], project: "epiphAI & shared integrations", href: "/projects/epiphai-ai-automation-platform" },
  { name: "Next.js", discipline: "interface", icon: SiNextdotjs, use: "A conversation should survive an interrupted stream.", detail: "Built chat history across models, streaming-state recovery, and provider-key management for an AI application.", with: ["React", "Redux Toolkit"], project: "epiphAI", href: "/projects/epiphai-ai-automation-platform" },
  { name: "Redux Toolkit", discipline: "interface", icon: SiRedux, use: "Keep the interface coherent as state changes.", detail: "Connected conversation history and streaming responses to recoverable UI states across an AI platform’s frontend.", with: ["Next.js", "React"], project: "epiphAI", href: "/projects/epiphai-ai-automation-platform" },
  { name: "Docker", discipline: "delivery", icon: SiDocker, use: "Ship the services together.", detail: "Owned backend deployment support for the meal-subscription app and its supporting database and background-worker services.", with: ["Django", "PostgreSQL", "Celery"], project: "Choolha Chowka", href: "/projects/choolha-chowka-saas-mess-management" },
  { name: "AWS", discipline: "delivery", icon: SiAmazonwebservices, use: "Storage, queues, and work beyond the request.", detail: "Connected S3 attachments and scheduled notifications using SQS, Lambda, and SES, with bulk dispatch and delivery-status tracking.", with: ["Python", "Celery"], project: "CompliSun", href: "/projects/complisun-compliance-workflows" },
  { name: "GitHub Actions", discipline: "delivery", icon: SiGithubactions, use: "Make promotion an explicit step.", detail: "Implemented staging automation and gated promotion for the procurement platform, alongside operational backup checks.", with: ["Docker", "PostgreSQL"], project: "Procurement intelligence", href: "/projects/procurement-intelligence" },
  { name: "Gemini", discipline: "delivery", icon: SiGooglegemini, use: "Use a model where simpler matches run out.", detail: "Built a five-stage organization resolver with an LLM fallback, per-call cost accounting, budget caps, and evaluation tracing.", with: ["Python", "PostgreSQL"], project: "Procurement intelligence", href: "/projects/procurement-intelligence" },
];

// An original connection-map composition, informed by Aceternity's floating
// dock and dimensional card interaction patterns. No third-party source copied.
const connectionPositions = [
  { x: 18, y: 23 },
  { x: 82, y: 23 },
  { x: 50, y: 84 },
];

function findCompanion(name: string) {
  const canonical = name === "AWS S3" ? "AWS" : name;
  return tools.find((tool) => tool.name === canonical);
}

export default function TechnologyWorkbench({
  id = "technology-workbench", title = "Good tools. Better together.", compact = false,
}: { id?: string; title?: string; compact?: boolean }) {
  const [discipline, setDiscipline] = useState<Discipline>("backend");
  const [selected, setSelected] = useState("Django");
  const detailId = `${id}-detail`;
  const dockRef = useRef<HTMLDivElement>(null);
  const current = tools.find((tool) => tool.name === selected)!;
  const CurrentIcon = current.icon;
  const visible = tools.filter((tool) => tool.discipline === discipline);

  function selectTool(tool: Tool) {
    setDiscipline(tool.discipline);
    setSelected(tool.name);
  }

  function selectCompanion(tool: Tool) {
    selectTool(tool);
    // The chosen satellite can leave the map. Keep keyboard focus on its
    // equivalent, newly selected dock button instead of losing it to the page.
    requestAnimationFrame(() => {
      dockRef.current?.querySelector<HTMLButtonElement>('button[aria-pressed="true"]')?.focus({ preventScroll: true });
    });
  }

  function selectDiscipline(next: Discipline) {
    selectTool(tools.find((tool) => tool.discipline === next)!);
  }

  return (
    <section className={`${styles.workbench} ${compact ? styles.compact : ""}`} aria-labelledby={id}>
      <header className={styles.heading}>
        <div><p className={styles.eyebrow}>The working stack</p><h2 id={id}>{title}</h2></div>
        <p>Explore the tools. <br />Follow the connections.</p>
      </header>
      <div className={styles.chassis}>
        <div className={styles.disciplines} role="group" aria-label="Technology discipline">
          {disciplines.map((item) => (
            <button key={item.id} type="button" aria-pressed={discipline === item.id} onClick={() => selectDiscipline(item.id)}>
              <span className={styles.disciplineDot} aria-hidden="true" />{item.name}
            </button>
          ))}
        </div>
        <div className={styles.instrument}>
          <div className={styles.mapSide}>
            <div className={styles.map} key={current.name}>
              <span className={styles.mapLabel}>Used together</span>
              <div className={styles.orbit} aria-hidden="true" />
              <div className={styles.orbitOuter} aria-hidden="true" />
              <svg className={styles.wires} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {current.with.map((name, index) => {
                  const position = connectionPositions[index];
                  return <g key={name}>
                    <path d={`M 50 48 Q ${position.x} 48 ${position.x} ${position.y}`} />
                    <path className={styles.signal} d={`M 50 48 Q ${position.x} 48 ${position.x} ${position.y}`} pathLength="100" />
                  </g>;
                })}
              </svg>
              <div className={styles.hub}>
                <div className={styles.hubFace}><CurrentIcon aria-hidden="true" focusable="false" /></div>
                <span>{current.name}</span>
              </div>
              {current.with.map((name, index) => {
                const companion = findCompanion(name);
                const Logo = companion?.icon;
                const position = connectionPositions[index];
                const style = { left: `${position.x}%`, top: `${position.y}%` };
                const content = <><span className={styles.satelliteLogo}>{Logo ? <Logo aria-hidden="true" focusable="false" /> : <span aria-hidden="true">{name[0]}</span>}</span><span>{name}</span></>;
                return companion ? <button className={styles.satellite} key={name} style={style} type="button" onClick={() => selectCompanion(companion)} aria-label={`Explore ${name}`} aria-controls={detailId}>{content}</button>
                  : <div className={styles.satellite} key={name} style={style}>{content}</div>;
              })}
            </div>
            <div className={styles.dock} ref={dockRef} role="group" aria-label={`${discipline} technologies`}>
              {visible.map((tool) => {
                const Logo = tool.icon;
                return <button type="button" key={tool.name} aria-pressed={selected === tool.name} aria-controls={detailId} onClick={() => selectTool(tool)}>
                  <span className={styles.dockLogo}><Logo aria-hidden="true" focusable="false" /></span>
                  <span>{tool.name}</span>
                  <span className={styles.dockIndicator} aria-hidden="true" />
                </button>;
              })}
            </div>
          </div>
          <div className={styles.readout} id={detailId} aria-live="polite" aria-atomic="true">
            <div className={styles.readoutContent} key={current.name}>
              <div className={styles.toolIdentity}><span className={styles.activeDot} aria-hidden="true" />{current.name}<span className={styles.inUse}>In practice</span></div>
              <h3>{current.use}</h3>
              <p className={styles.detail}>{current.detail}</p>
              <div className={styles.projectLink}>
                <span>See the work</span>
                <a href={current.href}>{current.project}<span className={styles.linkLine} aria-hidden="true" /></a>
              </div>
            </div>
            <p className={styles.readoutNote}>{disciplines.find((item) => item.id === discipline)!.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
