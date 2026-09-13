"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import styles from "./SystemsScene.module.css";

const layers = [
  { name: "Interface", number: "01", title: "The part people use.", text: "React and Next.js interfaces, built around the person on the other side of the screen." },
  { name: "Backend", number: "02", title: "The logic underneath.", text: "Python APIs, background jobs, permissions, and the connections that make a product work." },
  { name: "Data", number: "03", title: "A solid foundation.", text: "PostgreSQL, Redis, and the patient work of making messy data useful." },
];

export default function SystemsScene() {
  const [active, setActive] = useState(1);
  const [assembled, setAssembled] = useState(false);
  const [paused, setPaused] = useState(false);
  const scene = useRef<HTMLDivElement>(null);
  useEffect(() => { setPaused(document.documentElement.dataset.motion === "paused"); }, []);
  // Perspective response follows the interaction demonstrated by Aceternity's 3D Card.
  // Original SVG and implementation; constrained movement, no motion on touch/reduced-motion.
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!scene.current || event.pointerType !== "mouse" || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    scene.current.style.setProperty("--tilt-y", `${((event.clientX - box.left) / box.width - .5) * 9}deg`);
    scene.current.style.setProperty("--tilt-x", `${-((event.clientY - box.top) / box.height - .5) * 7}deg`);
  };
  const reset = () => { scene.current?.style.setProperty("--tilt-y", "0deg"); scene.current?.style.setProperty("--tilt-x", "0deg"); };
  const toggleMotion = () => {
    const next = !paused;
    setPaused(next);
    document.documentElement.dataset.motion = next ? "paused" : "running";
    reset();
  };
  return <div className={styles.system}>
    <div className={styles.scene} onPointerMove={move} onPointerLeave={reset}>
      <div className={styles.aura} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.drawing} ref={scene} data-assembled={assembled} data-active={active}>
        <svg viewBox="0 0 600 610" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="system-plate" x1="60" y1="0" x2="530" y2="330" gradientUnits="userSpaceOnUse"><stop stopColor="#484541" /><stop offset=".5" stopColor="#222221" /><stop offset="1" stopColor="#111313" /></linearGradient>
            <linearGradient id="system-edge" x1="60" y1="170" x2="530" y2="170" gradientUnits="userSpaceOnUse"><stop stopColor="#584139" /><stop offset=".5" stopColor="#ff6947" /><stop offset="1" stopColor="#8b4d39" /></linearGradient>
            <linearGradient id="system-glass" x1="70" y1="30" x2="540" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#fad4b7" stopOpacity=".2" /><stop offset=".5" stopColor="#ffffff" stopOpacity=".025" /><stop offset="1" stopColor="#ff754f" stopOpacity=".17" /></linearGradient>
            <radialGradient id="system-core"><stop stopColor="#fff1d7" /><stop offset=".5" stopColor="#ff9c6a" /><stop offset="1" stopColor="#ff563b" /></radialGradient>
          </defs>
          <ellipse cx="300" cy="548" rx="239" ry="42" fill="#000" opacity=".22" />
          <g className={styles.guides} stroke="#a39a8f" strokeDasharray="3 9" opacity=".25"><path d="M70 179v282M530 179v282M300 310v250M300 44v220" /></g>
          {[2, 1, 0].map((layer) => <g key={layer} className={`${styles.layer} ${styles[`layer${layer}`]}`} data-selected={active === layer}>
            <path d="m60 170 240 137 240-137v14L300 322 60 184Z" fill={layer === 1 ? "url(#system-edge)" : "#3c3a36"} stroke="#766658" strokeWidth=".6" />
            <path d="M300 32 540 170 300 307 60 170Z" fill="url(#system-plate)" stroke="#8d8173" strokeWidth="1" />
            <path d="m300 49 211 121-211 120L89 170Z" fill="url(#system-glass)" stroke={layer === 1 ? "#ff9775" : "#b1a18d"} strokeOpacity=".35" />
            {layer === 2 && <g stroke="#7bddd5" strokeWidth="1.5"><path d="m167 171 130 74 136-77M232 133l64 37 67-38M297 170v75m-98-55 131-76m-66 113 137-76" opacity=".6" />{[0,1,2].map(i=><g key={i} transform={`translate(${174+i*63} ${149+i*36})`}><path d="M0 0 30-17 60 0 30 17Z" fill="#2f5551"/><path d="M0 0v19l30 18 30-18V0L30 17Z" fill="#173e3b"/><path d="m0 9 30 17 30-17"/><path d="M30 17v20"/></g>)}</g>}
            {layer === 1 && <g><path d="m300 105 116 65-116 65-116-65Z" stroke="#ffac86" strokeOpacity=".6" /><path d="m300 81 158 89-158 89-158-89Z" stroke="#ffac86" strokeOpacity=".2" /><path d="M150 170h62m176 0h64M300 71v48m0 103v46" stroke="#ff936e" strokeWidth="2" /><path d="m300 119 87 50-87 51-87-51Z" fill="#4d3026" stroke="#ff9971" /><path d="m300 131 66 38-66 39-66-39Z" fill="url(#system-core)" /><text x="300" y="179" textAnchor="middle" fill="#4d1c10" fontSize="25" fontFamily="monospace" fontWeight="bold">HS</text></g>}
            {layer === 0 && <g transform="matrix(.86 .49 -.86 .49 291 86)"><rect x="0" y="0" width="156" height="137" rx="7" fill="#1b1d1c" stroke="#bbb3a4" strokeWidth="1.2"/><path d="M0 25h156" stroke="#716c63"/><circle cx="12" cy="13" r="3" fill="#ff805c"/><circle cx="23" cy="13" r="3" fill="#e5c798"/><circle cx="34" cy="13" r="3" fill="#7bddd5"/><rect x="12" y="37" width="36" height="87" rx="3" fill="#343632"/><rect x="60" y="38" width="80" height="33" rx="3" fill="#7bddd5" fillOpacity=".7"/><path d="M61 86h65m-65 10h80m-80 10h47m-47 10h65" stroke="#a6a89b" strokeWidth="3"/><path d="M20 49h20m-20 12h14m-14 12h20" stroke="#929d8b" strokeWidth="2"/></g>}
            <circle cx="300" cy="306" r="3" fill={layer === 1 ? "#ffc3a2" : "#b7b7a5"}/>
          </g>)}
        </svg>
      </div>
      <span className={styles.sceneLabel}>A little look under the surface</span>
      <button className={styles.explode} onClick={() => setAssembled(!assembled)} aria-pressed={assembled}>{assembled ? "Take it apart" : "Put it together"}<span aria-hidden="true">{assembled ? "+" : "−"}</span></button>
    </div>
    <div className={styles.inspector}>
      <div className={styles.layerTabs} role="group" aria-label="Explore the software layers">{layers.map((layer, i) => <button key={layer.name} onClick={() => setActive(i)} aria-pressed={active === i} aria-controls="system-layer-detail" aria-label={`${layer.name} layer`}><span>{layer.number}</span>{layer.name}</button>)}</div>
      <div id="system-layer-detail" className={styles.detail} aria-live="polite" aria-atomic="true"><strong>{layers[active].title}</strong><p>{layers[active].text}</p></div>
      <button className={styles.motion} onClick={toggleMotion} aria-pressed={!paused}>{paused ? "Motion off" : "Motion on"}</button>
    </div>
  </div>;
}
