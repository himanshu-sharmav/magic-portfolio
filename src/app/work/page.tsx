import Link from "next/link";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import styles from "./work.module.css";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    path: work.path,
  });
}

export default function Work() {
  return (
    <main id="main-content" className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        author={{ name: person.name, url: `${baseURL}${about.path}` }}
      />
      <section className={styles.hero}><div><p className={styles.eyebrow}>EXPERIENCE / 2024—PRESENT</p><h1>Work,<br /><span>in practice.</span></h1></div><p className={styles.lead}>From internships to a full-time engineering role: backend services, data pipelines, and interfaces across AI, compliance, finance, and procurement.</p></section>
      <div className="experience-list">
        {about.work.experiences.map((experience, index) => (
          <article
            key={experience.company}
            className={styles.entry}
          >
            <div className={styles.date}>{experience.timeframe}</div>
            <div>
              <h2>{experience.company}</h2>
              <p className={styles.role}>{experience.role}</p>
              <ul>
                {experience.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <div className={styles.links}>
                {index === 0 && (
                  <>
                    <Link href="/projects/complisun-compliance-workflows">
                      CompliSun case study
                    </Link>
                    <Link href="/projects/epiphai-ai-automation-platform">
                      epiphAI case study
                    </Link>
                    <Link href="/projects/accounting-workspace">AI Accounting Workspace case study</Link>
                    <Link href="/projects/investor-platform">Private Markets Investor Platform case study</Link>
                  </>
                )}
                {index === 1 && (
                  <Link href="/projects/procurement-intelligence">Internal Procurement Intelligence Platform case study</Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.actions}>
        <a  href="/resume/Himanshu_Sharma_SDE1.pdf">
          Read my resume
        </a>
        <a  href={`mailto:${person.email}`}>
          Get in touch
        </a>
      </div>
    </main>
  );
}
