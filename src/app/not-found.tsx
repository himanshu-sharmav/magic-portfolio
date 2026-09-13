import Link from "next/link";
import styles from "./case-study.module.css";

export default function NotFound() {
  return <main id="main-content" className={styles.notFound}>
    <span>404 / PAGE NOT FOUND</span>
    <h1>A loose end.</h1>
    <p>This address does not lead to a page. There is plenty of working software to explore elsewhere.</p>
    <nav aria-label="Find your way back"><Link href="/">Back home</Link><Link href="/projects">Explore the projects</Link></nav>
  </main>;
}
