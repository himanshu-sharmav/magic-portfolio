"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "@once-ui-system/core";

export const Header = () => {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.getAttribute("data-theme") === "dark"); }, [theme]);
  return <header className="studio-header"><Link className="studio-wordmark" href="/" aria-label="Himanshu Sharma home">HS<span>.</span></Link><nav aria-label="Main navigation"><Link href="/work" aria-current={path === "/work" ? "page" : undefined}>Work</Link><Link href="/projects" aria-current={path.startsWith("/projects") ? "page" : undefined}>Projects</Link><Link href="/#technology">Tools</Link><Link href="/about" aria-current={path === "/about" ? "page" : undefined}>About</Link><a href="/resume/Himanshu_Sharma_SDE1.pdf">Resume</a><button onClick={() => setTheme(dark ? "light" : "dark")} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>{dark ? "Light" : "Dark"}</button></nav></header>;
};
