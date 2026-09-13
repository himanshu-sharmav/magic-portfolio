import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, projects } from "@/resources";
import { Projects } from "@/components/work/Projects";
import styles from "@/components/work/ProjectCollection.module.css";

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    baseURL: baseURL,
    image: `${baseURL}/images/og/home.jpg`,
    path: projects.path,
  });
}

export default function ProjectsPage() {
  return (
    <main id="main-content" className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projects.path}
        title={projects.title}
        description={projects.description}
        image={`${baseURL}/images/og/home.jpg`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <header className={styles.pageHeader}>
        <div><p className={styles.eyebrow}>Selected engineering work</p><h1>Built.<br /><span>Then made better.</span></h1></div>
        <p className={styles.intro}>Company products and independent builds. The problems I worked on, the parts I owned, and the engineering decisions behind them.</p>
      </header>
      <Projects />
    </main>
  );
}
