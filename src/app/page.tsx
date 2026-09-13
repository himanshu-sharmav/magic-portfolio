import Link from "next/link";
import { Meta } from "@once-ui-system/core";
import { home, baseURL, person, about } from "@/resources";
import TechnologyWorkbench from "@/components/TechnologyWorkbench";
import PacketPost from "@/components/PacketPost";
import ContactActions from "@/components/ContactActions";
import SystemsScene from "@/components/SystemsScene";
import ProjectShowcase from "@/components/ProjectShowcase";
import styles from "./studio.module.css";

export async function generateMetadata() {
  return Meta.generate({ title: home.title, description: home.description, baseURL, path: home.path, image: home.image });
}

export default function Home() {
  return <main id="main-content" className={styles.studio}>
    <section className={styles.hero} aria-labelledby="hello">
      <div className={styles.intro}>
        <p className={styles.eyebrow}><span className={styles.status} /> SOFTWARE ENGINEER · INDIA</p>
        <h1 id="hello">Himanshu <br /><span>Sharma</span><i>.</i></h1>
        <p className={styles.description}>I build the parts you see.<br /><strong>And the systems you don’t.</strong></p>
        <p className={styles.bio}>Backend and full-stack engineer at Digital Alpha Platforms. APIs, data, and everything it takes to ship the whole experience.</p>
        <div className={styles.introActions}><a href="#selected-work">Explore my work<span className={styles.buttonDot} /></a><a href="/resume/Himanshu_Sharma_SDE1.pdf">Read my resume</a></div>
        <p className={styles.note}>Open to SDE-I roles in India & internationally remote.</p>
      </div>
      <SystemsScene />
    </section>
    <div className={styles.interlude}><span>THOUGHT THROUGH.</span><span>BUILT FROM SCRATCH.</span><span>MADE TO WORK.</span></div>
    <section id="selected-work" className={styles.selected}><ProjectShowcase /></section>
    <section id="play" className={styles.playSection} aria-labelledby="play-title">
      <div className={styles.playIntro}><p className={styles.eyebrow}>PLAY SOMETHING I BUILT</p><h2 id="play-title">Some things are <br />built for <em>fun.</em></h2><p>A tiny delivery game. Five parcels, a little town, and absolutely no meetings.</p><p className={styles.playNote}>Made for your keyboard. Or your thumbs.</p></div>
      <div className={styles.arcade}><PacketPost /></div>
    </section>
    <section id="technology" className={styles.toolSection}><TechnologyWorkbench id="home-technologies" /></section>
    <section className={styles.letter} aria-labelledby="contact-title"><p className={styles.eyebrow}>YOUR NEXT ENGINEER?</p><div className={styles.contactRow}><h2 id="contact-title">Let’s make <br /><span>something work.</span></h2><ContactActions email={person.email} calendarUrl={about.calendar.link} /></div><div className={styles.contactBottom}><p>Backend & full-stack · India / remote</p><div className={styles.socials}><a href="https://github.com/himanshu-sharmav">GitHub</a><a href="https://www.linkedin.com/in/himanshu-sharma-055265207/">LinkedIn</a><Link href="/about">More about me</Link></div></div></section>
  </main>;
}
