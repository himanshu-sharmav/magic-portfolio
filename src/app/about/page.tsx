import Link from "next/link";
import Image from "next/image";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import TechnologyWorkbench from "@/components/TechnologyWorkbench";
import styles from "./about.module.css";

export async function generateMetadata() {
  return Meta.generate({title:about.title,description:about.description,baseURL,image:`${baseURL}/images/og/home.jpg`,path:about.path});
}

export default function About() {
  return <main id="main-content" className={styles.page}>
    <Schema as="webPage" baseURL={baseURL} title={about.title} description={about.description} path={about.path} image={`${baseURL}/images/og/home.jpg`} author={{name:person.name,url:`${baseURL}${about.path}`,image:`${baseURL}${person.avatar}`}} />
    <div className={styles.intro}>
      <aside className={styles.identity}>
        <Image src={person.avatar} alt="Himanshu Sharma" width={220} height={220} priority className={styles.portrait} />
        <p>BASED IN INDIA<br /><span>UTC +05:30</span></p>
        <div className={styles.links}><a href="https://github.com/himanshu-sharmav">GitHub</a><a href="https://linkedin.com/in/himanshu-sharma-055265207">LinkedIn</a><a href={`mailto:${person.email}`}>Email me</a></div>
      </aside>
      <section className={styles.story} aria-labelledby="about-title">
        <p className={styles.eyebrow}>THE PERSON BEHIND THE BUILDS</p>
        <h1 id="about-title">Hi, I’m Himanshu.</h1>
        <div className={styles.prose}>{about.intro.description}</div>
        <div className={styles.actions}><Link href="/work">My professional experience</Link><a href="/resume/Himanshu_Sharma_SDE1.pdf">Read my resume</a></div>
      </section>
    </div>
    <section className={styles.foundation} aria-labelledby="foundation-title"><h2 id="foundation-title">The foundation.</h2><div><span>2022—2026</span><h3>KIET Group of Institutions</h3><p>B.Tech, Computer Science · Graduated May 2026 · CGPA 7.5/10</p></div><div><span>CONTINUING TO LEARN</span><h3>AWS Academy Cloud Foundations</h3><p>Alongside practical work with cloud services, background jobs, deployment, and debugging.</p></div></section>
    <TechnologyWorkbench id="about-technologies" />
  </main>;
}
