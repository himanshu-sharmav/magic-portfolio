import { person } from "@/resources";
export const Footer = () => <footer className="studio-footer"><span>© {new Date().getFullYear()} {person.name}</span><a href="https://github.com/himanshu-sharmav/magic-portfolio">Explore this site’s code</a><a href="#main-content">Back to the top</a></footer>;
