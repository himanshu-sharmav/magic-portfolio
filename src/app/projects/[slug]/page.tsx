import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema, Media } from "@once-ui-system/core";
import Link from "next/link";
import { slugify } from "transliteration";
import styles from "@/app/case-study.module.css";
import { baseURL, about, person, projects } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import type { Metadata } from "next";
import { Projects } from "@/components/work/Projects";

export const dynamicParams = false; // Only generate specified paths

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((p) => p.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || post.metadata.images[0] || `${baseURL}/images/og/home.jpg`,
    path: `${projects.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const allPosts = getPosts(["src", "app", "work", "projects"]);
  const post = allPosts.find((p) => p.slug === slugPath);

  if (!post) notFound();

  const headings = [...post.content.matchAll(/^## (.+)$/gm)].map((match) => ({
    label: match[1],
    id: slugify(match[1].replace(/&/g, " and "), { lowercase: true, separator: "-" }).replace(/--+/g, "-"),
  }));
  const source = post.metadata.link;

  return (
    <main id="main-content" className={styles.page}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${projects.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={post.metadata.image || post.metadata.images[0] || `${baseURL}/images/og/home.jpg`}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />
      <header className={styles.header}>
        <div className={styles.breadcrumb}><Link href="/projects">All projects</Link><span>Engineering case study</span></div>
        <div className={styles.hero}>
          <div>
            <p className={styles.category}>{post.metadata.tag}</p>
            <h1>{post.metadata.title}</h1>
            <p className={styles.intro}>{post.metadata.summary}</p>
            <div className={styles.byline}><Link href="/about">Himanshu Sharma</Link><span>Case study updated <time dateTime={post.metadata.publishedAt}>{formatDate(post.metadata.publishedAt)}</time></span></div>
          </div>
          <CaseArtwork slug={post.slug} />
        </div>
      </header>
      {post.metadata.images.length > 0 && <Media priority aspectRatio="16 / 9" radius="m" alt={`${post.metadata.title} project interface`} src={post.metadata.images[0]} />}
      <div className={styles.reading}>
        <aside className={styles.sidebar}>
          <nav aria-label="In this case study"><p>ON THIS PAGE</p>{headings.map((heading) => <a href={`#${heading.id}`} key={heading.id}>{heading.label}</a>)}</nav>
          {source && <a className={styles.source} href={source}>Explore the source code</a>}
        </aside>
        <article className={styles.article}><CustomMDX source={post.content} /></article>
      </div>
      <section className={styles.related} aria-labelledby="related-title">
        <div className={styles.relatedHeading}><h2 id="related-title">Keep exploring.</h2><Link href="/projects">All projects</Link></div>
        <Projects exclude={[post.slug]} range={[1, 2]} />
      </section>
      <ScrollToHash />
    </main>
  );
}

function CaseArtwork({ slug }: { slug: string }) {
  const kind = slug.includes("procurement") || slug.includes("shelfsense") ? "records" : slug.includes("choolha") || slug.includes("hospital") ? "schedule" : slug.includes("chat") || slug.includes("epiphai") ? "conversation" : "workflow";
  return <div className={styles.art} aria-hidden="true"><svg viewBox="0 0 240 210" fill="none">
    {kind === "records" && <g stroke="currentColor" strokeWidth="2"><path d="M27 39h147v119H27z" opacity=".2" /><path d="M44 25h147v119H44z" opacity=".4" /><rect x="61" y="48" width="147" height="119" fill="var(--studio-paper)" /><path d="M61 78h147M61 107h147M61 137h147M102 48v119M156 48v119" opacity=".5" /><path d="M160 82h43v21h-43zM160 112h43v21h-43zM160 142h43v20h-43z" fill="#dfff00" stroke="none" /><path d="M72 64h19m22 28h32m-32 30h32m-32 30h32" /><circle cx="190" cy="182" r="11" fill="currentColor" /></g>}
    {kind === "schedule" && <g stroke="currentColor" strokeWidth="2"><rect x="30" y="34" width="180" height="148" rx="4" /><path d="M30 69h180M73 34V19m94 15V19" strokeWidth="3" /><path d="M57 93h19v18H57zM111 93h19v18h-19zM57 140h19v18H57zM111 140h19v18h-19z" opacity=".35" /><circle cx="172" cy="129" r="42" fill="#dfff00" /><path d="M172 104v26l17 10" strokeWidth="3" /><circle cx="172" cy="129" r="3" fill="currentColor" /></g>}
    {kind === "conversation" && <g stroke="currentColor" strokeWidth="2"><path d="M29 35h149v84H73l-25 21v-21H29z" fill="var(--studio-paper)" /><path d="M61 60h81m-81 19h61m-61 19h39" /><path d="M92 104h120v66h-21v22l-28-22H92z" fill="#dfff00" /><circle cx="123" cy="138" r="4" fill="currentColor" /><circle cx="152" cy="138" r="4" fill="currentColor" /><circle cx="181" cy="138" r="4" fill="currentColor" /></g>}
    {kind === "workflow" && <g stroke="currentColor" strokeWidth="2"><path d="M47 51h69v53h77v56H75" /><rect x="28" y="30" width="43" height="43" fill="var(--studio-paper)" /><circle cx="116" cy="104" r="27" fill="#dfff00" /><path d="m103 104 9 9 17-19" strokeWidth="3" /><rect x="172" y="139" width="43" height="43" fill="var(--studio-paper)" /><circle cx="54" cy="160" r="20" /><path d="M45 160h18m-9-9v18" /></g>}
  </svg><span>{kind === "records" ? "FIND THE SIGNAL" : kind === "schedule" ? "KEEP THINGS IN SYNC" : kind === "conversation" ? "CONNECT THE CONVERSATION" : "MAKE THE NEXT STEP CLEAR"}</span></div>;
}
