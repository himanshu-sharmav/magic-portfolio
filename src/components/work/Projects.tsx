import Link from "next/link";
import { getPosts } from "@/utils/utils";
import styles from "@/app/portfolio.module.css";
import ProjectCollection, { type CollectionProject } from "./ProjectCollection";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}
export function Projects({ range, exclude = [] }: ProjectsProps) {
  const posts = getPosts(["src", "app", "work", "projects"])
    .filter((post) => !exclude.includes(post.slug))
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
    );
  const displayed = range ? posts.slice(range[0] - 1, range[1] ?? posts.length) : posts;
  if (!range) {
    const technologies = ["Python", "Django", "FastAPI", "React", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery", "Docker", "AWS", "Gemini", "SQLAlchemy", "Chroma", "SQLite", "Prisma"];
    const collection: CollectionProject[] = displayed.map((post) => ({
      slug: post.slug,
      title: post.metadata.title,
      summary: post.metadata.summary,
      tag: typeof post.metadata.tag === "string" ? post.metadata.tag : "Engineering case study",
      source: post.metadata.link || "",
      category: /DIGITAL ALPHA|HOLANI/i.test(post.metadata.tag || "") ? "company" : "independent",
      technologies: technologies.filter((technology) =>
        new RegExp(`\\b${technology.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\b|[\\s/])`, "i").test(post.content),
      ),
    }));
    return <ProjectCollection projects={collection} />;
  }
  return (
    <div className={styles.projectGrid} style={{ width: "100%", marginBottom: "2.5rem" }}>
      {displayed.map((post) => (
        <article className={styles.project} key={post.slug}>
          <p className={styles.eyebrow}>{post.metadata.tag || "ENGINEERING CASE STUDY"}</p>
          <h2 style={{ fontSize: "1.3rem", lineHeight: 1.4, margin: ".5rem 0 .75rem" }}>
            <Link href={`/projects/${post.slug}`}>{post.metadata.title}</Link>
          </h2>
          <p>{post.metadata.summary}</p>
          <div className={styles.projectLinks}>
            <Link href={`/projects/${post.slug}`}>Read case study</Link>
            {post.metadata.link && <a href={post.metadata.link}>Source code</a>}
          </div>
        </article>
      ))}
    </div>
  );
}
