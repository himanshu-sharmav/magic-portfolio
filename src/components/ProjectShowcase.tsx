"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import Link from "next/link";
import styles from "./ProjectShowcase.module.css";

const projects = [
  {
    name: "Procurement", category: "HOLANI & CO / END-TO-END BUILD", number: "01",
    title: "A million records.\nA clearer picture.",
    description: "I built a procurement intelligence platform from scratch: turning fragmented contracts, PDFs, and buyer identities into a connected workspace for sales teams.",
    metric: "1.85M", metricLabel: "contracts in the data layer",
    detail: "99.3% office-and-state coverage across a selected 2,404-order enrichment cohort.",
    tags: ["FastAPI", "PostgreSQL", "React", "Gemini"], slug: "procurement-intelligence",
  },
  {
    name: "CompliSun", category: "DIGITAL ALPHA / WORKFLOW ENGINEERING", number: "02",
    title: "Behind every check,\na connected system.",
    description: "I built onboarding, screening, analyst review, and monitoring workflows within a larger compliance product — including the asynchronous work that holds them together.",
    metric: "6 steps", metricLabel: "one connected company onboarding flow",
    detail: "Signed webhooks, queued screening, analyst decisions, and a separate-reviewer countersignature.",
    tags: ["Django", "Celery", "AWS", "React"], slug: "complisun-compliance-workflows",
  },
  {
    name: "Choolha Chowka", category: "INDEPENDENT / BACKEND & DEVOPS", number: "03",
    title: "Good food.\nReliable plumbing.",
    description: "I owned the backend and deployment for a meal-subscription app, working with a frontend teammate. Plans, leave days, and payments stay connected even when a browser callback fails.",
    metric: "HMAC", metricLabel: "verified payment webhooks",
    detail: "Payment reconciliation activates subscriptions independently of browser confirmation; notification failures stay isolated.",
    tags: ["Django", "Redis", "Razorpay", "Docker"], slug: "choolha-chowka-saas-mess-management",
  },
];

function ProcurementScene() {
  return <div className={styles.procurement}>
    <div className={styles.recordBack}><span>CONTRACTS / SOURCE RECORDS</span><i /><i /><i /><i /><i /></div>
    <div className={styles.networkSheet}>
      <div className={styles.sheetHeader}><span>CONNECTED VIEW</span><span>01—05</span></div>
      <svg viewBox="0 0 320 210" fill="none">
        <path d="M160 105 50 50M160 105 270 42M160 105 286 152M160 105 110 182M160 105 40 137" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
        {[[50,50],[270,42],[286,152],[110,182],[40,137]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r={i===0?19:12} fill="currentColor" opacity={i===0?1:.24}/><circle cx={x} cy={y} r={4} fill="#142421" /></g>)}
        <circle cx="160" cy="105" r="35" fill="#7bddd5"/><path d="M145 117v-19l15-9 15 9v19h-30Zm10 0v-10h10v10m-18-15h4m18 0h4" stroke="#142421" strokeWidth="2"/>
      </svg>
      <div className={styles.sheetFooter}><span>BUYERS</span><span>TERRITORIES</span><span>OPPORTUNITIES</span></div>
    </div>
    <div className={styles.queryBadge}><span>DATABASE EXPORT PHASE</span><div><s>54s</s><strong>2.5s</strong></div><small>Historical state-filtered benchmark</small></div>
    <span className={styles.objectCaption}>From fragments to relationships.</span>
  </div>;
}

function ComplianceScene() {
  return <div className={styles.compliance}>
    <div className={styles.orbitOne}/><div className={styles.orbitTwo}/>
    <div className={styles.reviewBack}><span>REVIEW TRAIL</span><i/><i/><i/><i/></div>
    <div className={styles.passport}>
      <div className={styles.passportTop}><span>COMPLIANCE<br/>PASSPORT</span><svg width="29" height="33" viewBox="0 0 29 33" fill="none"><path d="m14.5 2 12 5v10c0 7-12 14-12 14S2.5 24 2.5 17V7l12-5Z" stroke="currentColor" strokeWidth="1.5"/><path d="m9 16 4 4 7-8" stroke="currentColor" strokeWidth="2"/></svg></div>
      <div className={styles.passportId}><div className={styles.idPhoto}><span/><i/></div><div><b>Company record</b><span>Identity & documents</span><span>Screening & risk</span><span>Human review</span></div></div>
      <div className={styles.passportRule}/><div className={styles.passportBottom}><span>REVIEWED</span><strong>By people.<br/>Backed by a trail.</strong></div>
    </div>
    <div className={styles.approvalSeal}><span>HUMAN</span><svg width="32" height="24" viewBox="0 0 32 24" fill="none"><path d="m3 12 8 8L29 3" stroke="currentColor" strokeWidth="3"/></svg><span>DECISION</span></div>
    <span className={styles.objectCaption}>Every step has a next step.</span>
  </div>;
}

function MealScene() {
  return <div className={styles.meal}>
    <div className={styles.plate}><svg viewBox="0 0 260 260" fill="none"><circle cx="130" cy="130" r="119" fill="#e9dfcf"/><circle cx="130" cy="130" r="96" fill="#f6eee0" stroke="#c5bba9"/><path d="M88 69c20-13 66-13 87 6 31 29 31 59 7 83-27 27-50 42-75 26-26-17-51-47-41-73 4-13 13-35 22-42Z" fill="#dfb252"/>{[[106,87],[148,92],[167,123],[140,153],[102,140],[119,116]].map(([x,y],i)=><g key={i}><ellipse cx={x} cy={y} rx="16" ry="8" transform={`rotate(${i*24} ${x} ${y})`} fill="#567b47"/><circle cx={x+8} cy={y+8} r="7" fill="#c74d34"/></g>)}<path d="m106 67 4 17m39-22-2 18m34 63 19 3M75 146l16-6" stroke="#f8e9bb" strokeWidth="4" strokeLinecap="round"/></svg></div>
    <div className={styles.ticket}>
      <div className={styles.ticketTop}><span>CHOOLHA<br/>CHOWKA</span><b>CC.</b></div>
      <div className={styles.ticketDivider}/><span className={styles.ticketLabel}>THE SUBSCRIPTION LOOP</span>
      <div className={styles.ticketSteps}><span>Choose a plan</span><span>Payment verified</span><span>Subscription active</span><span>Dinner sorted.</span></div>
      <div className={styles.ticketBarcode}/><small>WEBHOOKS KEEP THE RECEIPT.</small>
    </div>
    <div className={styles.paymentChip}><span className={styles.statusDot}/><span>Payment reconciled</span></div>
    <span className={styles.objectCaption}>The good kind of recurring event.</span>
  </div>;
}

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const project = projects[active];

  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (document.documentElement.dataset.motion === "paused" || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    stage.current?.style.setProperty("--tilt-x", `${-y * 7}deg`);
    stage.current?.style.setProperty("--tilt-y", `${x * 9}deg`);
  }
  function resetTilt() {
    stage.current?.style.setProperty("--tilt-x", "0deg");
    stage.current?.style.setProperty("--tilt-y", "0deg");
  }
  function keyNavigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % projects.length;
    else if (event.key === "ArrowLeft") next = (index + projects.length - 1) % projects.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = projects.length - 1;
    else return;
    event.preventDefault(); setActive(next); resetTilt(); tabs.current[next]?.focus();
  }

  return <section className={styles.showcase} aria-labelledby="selected-work-title">
    <header className={styles.heading}><div><span className={styles.eyebrow}>SELECTED WORK / 2024—26</span><h2 id="selected-work-title">Under the <em>hood.</em></h2></div><Link href="/projects" className={styles.allProjects}>All projects <span>10</span></Link></header>
    <div className={styles.tabs} role="tablist" aria-label="Selected projects">
      {projects.map((item, index) => <button key={item.slug} type="button" role="tab" id={`project-tab-${index}`} aria-selected={active === index} aria-controls="selected-project-panel" tabIndex={active === index ? 0 : -1} ref={(node) => { tabs.current[index] = node; }} onClick={() => {setActive(index); resetTilt();}} onKeyDown={(event) => keyNavigate(event, index)}><span>{item.number}</span>{item.name}<i aria-hidden="true"/></button>)}
    </div>
    <div className={styles.panel} role="tabpanel" id="selected-project-panel" aria-labelledby={`project-tab-${active}`} tabIndex={0}>
      <figure className={styles.figure} onPointerMove={tilt} onPointerLeave={resetTilt}>
        <div className={styles.artwork} data-scene={active} key={project.slug}>
          <div className={styles.stageGrid} aria-hidden="true"/><span className={styles.sceneNumber} aria-hidden="true">{project.number}</span>
          <div ref={stage} className={styles.stage} aria-hidden="true">{active === 0 ? <ProcurementScene/> : active === 1 ? <ComplianceScene/> : <MealScene/>}</div>
        </div>
        <figcaption>Conceptual illustration · No customer data</figcaption>
      </figure>
      <div className={styles.copy} key={`copy-${active}`}>
        <p className={styles.eyebrow}>{project.category}</p><h3>{project.title}</h3><p className={styles.description}>{project.description}</p>
        <div className={styles.evidence}><strong>{project.metric}</strong><span>{project.metricLabel}</span><p>{project.detail}</p></div>
        <ul className={styles.tags} aria-label="Technologies">{project.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
        <Link className={styles.caseLink} href={`/projects/${project.slug}`}>Inside the build <span aria-hidden="true">Read case study</span></Link>
      </div>
    </div>
  </section>;
}
