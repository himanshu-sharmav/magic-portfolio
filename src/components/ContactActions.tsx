"use client";

import { useRef, useState } from "react";
import styles from "./ContactActions.module.css";

export default function ContactActions({ email, calendarUrl }: { email: string; calendarUrl?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email copied.");
    } catch {
      setCopyStatus("Select the email address above to copy it.");
    }
  };
  return <>
    <button className={styles.trigger} onClick={() => { setCopyStatus(""); dialog.current?.showModal(); }} aria-haspopup="dialog">Say hello<span aria-hidden="true">hello.</span></button>
    <dialog ref={dialog} className={styles.dialog} aria-labelledby="contact-dialog-title" onClick={(event) => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current?.close(); } }}>
      <button className={styles.close} onClick={() => dialog.current?.close()} aria-label="Close contact options">Close</button>
      <p className={styles.eyebrow}>LET’S TALK</p>
      <h2 id="contact-dialog-title">A good place<br />to start.</h2>
      <p className={styles.description}>Have a role, a project, or something interesting in mind? Pick what works for you.</p>
      {calendarUrl && <a className={styles.calendar} href={calendarUrl} target="_blank" rel="noopener noreferrer">Book a call <span>Choose a time on Cal.com</span></a>}
      <div className={styles.emailBlock}><span>Or write to me</span><a className={styles.email} href={`mailto:${email}`}>{email}</a><div className={styles.emailActions}><a href={`mailto:${email}`}>Open email app</a><button onClick={copyEmail}>Copy email</button></div></div>
      <p className={styles.feedback} role="status">{copyStatus}</p>
    </dialog>
  </>;
}
