"use client";

import { useCallback, useRef, useState } from "react";
import styles from "./PacketPost.module.css";

type Point = { x: number; y: number };
type Game = { player: Point; parcel: Point; destination: Point; carrying: boolean; score: number; moves: number; status: "ready" | "playing" | "paused" | "won"; message: string };
const BLOCKS = [[2, 2], [3, 2], [7, 2], [8, 2], [2, 5], [3, 5], [7, 5], [8, 5]];
const PARCELS = [{ x: 3, y: 3 }, { x: 8, y: 6 }, { x: 1, y: 1 }, { x: 9, y: 3 }, { x: 4, y: 6 }];
const DOORS = [{ x: 9, y: 1 }, { x: 1, y: 6 }, { x: 9, y: 6 }, { x: 5, y: 1 }, { x: 1, y: 3 }];
const initial = (): Game => ({ player: { x: 1, y: 3 }, parcel: PARCELS[0], destination: DOORS[0], carrying: false, score: 0, moves: 0, status: "ready", message: "Five parcels. One very small post van." });
const same = (a: Point, b: Point) => a.x === b.x && a.y === b.y;
const cx = (x: number) => 44 + x * 40;
const cy = (y: number) => 72 + y * 40;

export default function PacketPost() {
  const [game, setGame] = useState<Game>(initial);
  const board = useRef<HTMLDivElement>(null);
  const touch = useRef<Point | null>(null);
  const move = useCallback((dx: number, dy: number) => {
    setGame((g) => {
      if (g.status !== "playing") return g;
      const next = { x: g.player.x + dx, y: g.player.y + dy };
      if (next.x < 0 || next.x > 10 || next.y < 0 || next.y > 7 || BLOCKS.some(([x, y]) => x === next.x && y === next.y)) return { ...g, message: "A garden! Take the scenic route." };
      const moved = { ...g, player: next, moves: g.moves + 1 };
      if (!g.carrying && same(next, g.parcel)) return { ...moved, carrying: true, message: "Parcel collected. Find the striped mailbox." };
      if (g.carrying && same(next, g.destination)) {
        const score = g.score + 1;
        if (score === 5) return { ...moved, score, carrying: false, status: "won", message: "All five delivered. A lovely day’s work." };
        return { ...moved, score, carrying: false, parcel: PARCELS[score], destination: DOORS[score], message: "Delivered! A new parcel is ready to collect." };
      }
      return moved;
    });
  }, []);
  const start = () => { setGame({ ...initial(), status: "playing", message: "Drive to the orange parcel to pick it up." }); board.current?.focus(); };
  const resume = () => { setGame(g => ({ ...g, status: "playing", message: "Back on the road. Your next delivery is waiting." })); board.current?.focus(); };
  const pause = () => { setGame(g => ({ ...g, status: "paused", message: "Parked. Come back whenever." })); };
  const active = game.status === "playing";
  return (
    <section className={styles.arcade} aria-label="Packet Post, a tiny delivery game">
      <button className={styles.playButton} onClick={active ? pause : game.status === "paused" ? resume : start} aria-controls="packet-post-board">
        <span className={styles.playIcon} aria-hidden="true">{active ? "Ⅱ" : "▶"}</span>
        <span>{active ? "Pause game" : game.status === "paused" ? "Keep driving" : game.status === "won" ? "Play again" : "Let’s play Packet Post"}</span>
      </button>
      <div className={styles.machine}>
        <div className={styles.topline}><span>HIMANSHU’S PLAY CORNER</span><span>NO. 001</span></div>
        <div className={styles.screenFrame}>
          <div id="packet-post-board" ref={board} style={{ touchAction: active ? "none" : "pan-y" }} className={styles.board} tabIndex={0} role="group" aria-label="Packet Post game. Use arrow keys or W A S D to drive the post van. Collect the orange parcel, then deliver it to the striped mailbox."
            onKeyDown={(e) => { const keys: Record<string, [number, number]> = { ArrowUp: [0, -1], w: [0, -1], ArrowDown: [0, 1], s: [0, 1], ArrowLeft: [-1, 0], a: [-1, 0], ArrowRight: [1, 0], d: [1, 0] }; const direction = keys[e.key.length === 1 ? e.key.toLowerCase() : e.key]; if (direction && active) { e.preventDefault(); move(...direction); } if (e.key === "Escape" && active) setGame(g => ({ ...g, status: "paused", message: "Parked. Come back whenever." })); }}
            onTouchStart={(e) => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
            onTouchEnd={(e) => { if (!touch.current || !active) return; const dx = e.changedTouches[0].clientX - touch.current.x; const dy = e.changedTouches[0].clientY - touch.current.y; if (Math.max(Math.abs(dx), Math.abs(dy)) > 12) move(Math.abs(dx) > Math.abs(dy) ? Math.sign(dx) : 0, Math.abs(dy) >= Math.abs(dx) ? Math.sign(dy) : 0); touch.current = null; }}>
            <svg className={styles.world} viewBox="0 0 488 414" aria-hidden="true">
              <defs><pattern id="paper-dot" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".55" fill="#163f3b" opacity=".12" /></pattern></defs>
              <rect width="488" height="414" fill="#e4f0fa" /><rect width="488" height="414" fill="url(#paper-dot)" />
              <text x="25" y="31" fill="#214c40" fontSize="12" fontFamily="monospace">LITTLE POST TOWN</text><text x="462" y="31" textAnchor="end" fill="#214c40" fontSize="12" fontFamily="monospace">{String(game.score).padStart(2, "0")} / 05</text>
              <rect x="20" y="48" width="448" height="328" rx="18" fill="#f5f9ff" stroke="#214c40" strokeWidth="2" />
              {Array.from({ length: 8 }, (_, y) => Array.from({ length: 11 }, (_, x) => <circle key={`${x}-${y}`} cx={cx(x)} cy={cy(y)} r="1.3" fill="#234c3e" opacity=".17" />))}
              {[[2, 2], [7, 2], [2, 5], [7, 5]].map(([x, y], i) => <g key={i} transform={`translate(${cx(x) - 18} ${cy(y) - 18})`}><rect x="0" y="1" width="77" height="36" rx="15" fill="#acd09e" stroke="#325c42" strokeWidth="2" /><path d="M16 24v-12m-6 3 6 5 6-9" stroke="#325c42" fill="none" /><circle cx="17" cy="11" r="9" fill="#6a9f72" stroke="#325c42" strokeWidth="2" /><circle cx="49" cy="16" r="12" fill={i % 2 ? "#b5dfff" : "#719578"} stroke="#325c42" strokeWidth="2" /><path d="M49 28v-13" stroke="#325c42" strokeWidth="2" /></g>)}
              <g transform={`translate(${cx(game.destination.x)} ${cy(game.destination.y)})`} opacity={game.carrying ? 1 : .45}><ellipse cy="17" rx="19" ry="5" fill="#234c3e" opacity=".18" /><path d="M-13-15h26v30h-26z" fill="#f6faff" stroke="#214c40" strokeWidth="2.5" /><path d="m-12-14 8 8m3-8 13 13M-12 0l13 13m0-27 11 11" stroke="#c45434" strokeWidth="4" /><rect x="-8" y="-4" width="16" height="6" rx="2" fill="#214c40" /></g>
              {!game.carrying && game.status !== "won" && <g className={active ? styles.parcel : ""} transform={`translate(${cx(game.parcel.x)} ${cy(game.parcel.y)})`}><ellipse cy="16" rx="17" ry="5" fill="#214c40" opacity=".15" /><rect x="-13" y="-12" width="26" height="24" rx="3" fill="#f19345" stroke="#5b3926" strokeWidth="2.5" /><path d="M-13-5h26M0-12v24" stroke="#5b3926" strokeWidth="2" /><rect x="4" y="1" width="5" height="4" fill="#fff6dd" /></g>}
              <g className={styles.van} transform={`translate(${cx(game.player.x)} ${cy(game.player.y)})`}><ellipse cy="19" rx="23" ry="5" fill="#214c40" opacity=".2" /><rect x="-20" y="-15" width="29" height="29" rx="4" fill="#426bf4" stroke="#173164" strokeWidth="2.5" /><path d="M9-8h10l6 11v11H9z" fill="#7f9eff" stroke="#173164" strokeWidth="2.5" /><path d="M12-4h6l3 7h-9z" fill="#b8dace" stroke="#173164" strokeWidth="1.5" /><circle cx="-11" cy="15" r="5" fill="#293d38" /><circle cx="17" cy="15" r="5" fill="#293d38" /><path d="M-13-6h14v10h-14z m0 0 7 5 7-5" fill="#ffffff" stroke="#173164" strokeWidth="1.5" />{game.carrying && <rect x="-12" y="-24" width="17" height="9" fill="#efbe68" stroke="#173164" strokeWidth="2" />}</g>
              <text x="244" y="400" textAnchor="middle" fill="#214c40" fontSize="11" fontFamily="monospace">{game.carrying ? "CARGO ON BOARD" : "TAKE YOUR TIME. THERE’S NO TIMER."}</text>
            </svg>
            {game.status !== "playing" && <div className={styles.overlay} data-result={game.status === "won"}><div><p>{game.status === "won" ? "SPECIAL DELIVERY" : "A TINY BROWSER GAME"}</p><h2 id="arcade-title">{game.status === "won" ? "Good things,\ndelivered." : "Packet\nPost."}</h2><span>{game.status === "won" ? `5 deliveries in ${game.moves} moves. Nicely done.` : game.status === "paused" ? "Your van is safely parked." : "Deliver five parcels. Take the scenic route."}</span></div></div>}
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.dpad} aria-label="Drive the van"><button aria-label="Drive up" disabled={!active} onClick={() => move(0, -1)}>▲</button><button aria-label="Drive left" disabled={!active} onClick={() => move(-1, 0)}>◀</button><span /><button aria-label="Drive right" disabled={!active} onClick={() => move(1, 0)}>▶</button><button aria-label="Drive down" disabled={!active} onClick={() => move(0, 1)}>▼</button></div>
          <div className={styles.controlLabel}><strong>PACKET POST</strong><span>Arrow keys / WASD / touch</span><div className={styles.smallActions}><button disabled={game.status === "ready" || game.status === "won"} onClick={() => { setGame(g => ({ ...g, status: g.status === "playing" ? "paused" : "playing" })); board.current?.focus(); }}>{game.status === "paused" ? "Resume" : "Pause"}</button><button onClick={() => { setGame(initial()); }}>Reset</button></div></div>
          <div className={styles.speaker} aria-hidden="true"><i /><i /><i /><i /></div>
        </div>
      </div>
      <p className={styles.caption} aria-live="polite">{game.message}</p>
      <details className={styles.instructions}><summary>Controls &amp; text directions</summary><p>Arrow keys or WASD to move. On touch screens, use the directional buttons or swipe the board. Pick up the orange parcel, then drive to the striped mailbox. Escape pauses. The grid has columns 1–11 and rows 1–8. Gardens occupy columns 3–4 and 8–9 in rows 3 and 6.</p><p aria-live="polite">Van: column {game.player.x + 1}, row {game.player.y + 1}. {game.carrying ? `Deliver to column ${game.destination.x + 1}, row ${game.destination.y + 1}.` : `Parcel: column ${game.parcel.x + 1}, row ${game.parcel.y + 1}.`} Delivered {game.score} of 5.</p></details>
    </section>
  );
}
