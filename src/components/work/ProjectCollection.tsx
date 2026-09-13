"use client";

import Link from "next/link";
import { useId, useState } from "react";
import {
  TbAdjustments, TbBooks, TbBowlSpoon, TbCalendarEvent, TbChartPie,
  TbChecklist, TbDatabase, TbMessageDots, TbMessages, TbSearch, TbShieldCheck,
} from "react-icons/tb";
import type { IconType } from "react-icons";
import styles from "./ProjectCollection.module.css";

export type CollectionProject = {
  slug: string;
  title: string;
  summary: string;
  tag: string;
  source: string;
  category: "company" | "independent";
  technologies: string[];
};

const illustrations: Record<string, IconType> = {
  "procurement-intelligence": TbDatabase,
  "complisun-compliance-workflows": TbShieldCheck,
  "accounting-workspace": TbChecklist,
  "investor-platform": TbChartPie,
  "epiphai-ai-automation-platform": TbMessages,
  "choolha-chowka-saas-mess-management": TbBowlSpoon,
  "hospital-management-system": TbCalendarEvent,
  "decision-engine": TbAdjustments,
  shelfsense: TbBooks,
  "chatsphere-realtime-messaging": TbMessageDots,
};

const filters = [
  { id: "all", label: "All projects" },
  { id: "company", label: "Company work" },
  { id: "independent", label: "Independent" },
] as const;

export default function ProjectCollection({ projects }: { projects: CollectionProject[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [query, setQuery] = useState("");
  const searchId = useId();
  const normalized = query.trim().toLowerCase();
  const shown = projects.filter((project) =>
    (filter === "all" || project.category === filter) &&
    `${project.title} ${project.summary} ${project.tag} ${project.technologies.join(" ")}`.toLowerCase().includes(normalized),
  );

  return <div className={styles.collection}>
    <div className={styles.controls}>
      <div className={styles.filters} role="group" aria-label="Project type">
        {filters.map((item) => <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
          {item.label}<span>{item.id === "all" ? projects.length : projects.filter((project) => project.category === item.id).length}</span>
        </button>)}
      </div>
      <div className={styles.search}>
        <TbSearch aria-hidden="true" />
        <label className={styles.srOnly} htmlFor={searchId}>Find projects by name, technology, or topic</label>
        <input id={searchId} value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Find a tool or topic" autoComplete="off" />
      </div>
    </div>
    <div className={styles.resultLine} aria-live="polite" aria-atomic="true">
      <p>{shown.length} {shown.length === 1 ? "case study" : "case studies"}{normalized ? ` matching “${query.trim()}”` : " to explore"}</p>
      {(filter !== "all" || query) && <button type="button" onClick={() => { setFilter("all"); setQuery(""); }}>Clear filters</button>}
    </div>
    <div className={styles.rows}>
      {shown.map((project) => {
        const Illustration = illustrations[project.slug] || TbDatabase;
        const [name, ...subtitle] = project.title.split(" — ");
        return <article className={styles.project} key={project.slug}>
          <div className={`${styles.art} ${project.category === "company" ? styles.companyArt : styles.independentArt}`} aria-hidden="true">
            <span className={styles.catalogNumber}>{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
            <Illustration strokeWidth={1.15} />
            <span className={styles.artCaption}>{project.category === "company" ? "PRODUCT WORK" : "INDEPENDENT BUILD"}</span>
          </div>
          <div className={styles.description}>
            <p className={styles.tag}>{project.tag}</p>
            <h2><Link href={`/projects/${project.slug}`}>{name}{subtitle.length > 0 && <span>{subtitle.join(" — ")}</span>}</Link></h2>
            <p className={styles.summary}>{project.summary}</p>
            <ul className={styles.technologies} aria-label="Technologies used">
              {project.technologies.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
          <div className={styles.links}>
            <Link href={`/projects/${project.slug}`} aria-label={`Read ${name} case study`}>Read case study</Link>
            {project.source && <a href={project.source} aria-label={`View source code for ${name}`}>Source code</a>}
          </div>
        </article>;
      })}
    </div>
    {shown.length === 0 && <div className={styles.empty}>
      <TbSearch aria-hidden="true" /><h2>No projects in this view.</h2>
      <p>Try a technology like Django or React, or clear the filters to see everything.</p>
      <button type="button" onClick={() => { setFilter("all"); setQuery(""); }}>Show all projects</button>
    </div>}
  </div>;
}
