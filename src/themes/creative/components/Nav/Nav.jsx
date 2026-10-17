import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import CONTACT from "../../../../assets/data/contact";
import ThemeToggle from "../../../../shared/components/ThemeToggle/ThemeToggle";
import styles from "./Nav.module.css";

const sections = [
  { id: "about", label: "Intro" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Toolkit" },
];

function Socials({ className }) {
  return (
    <ul className={className} aria-label="External links">
      <li>
        <a href={CONTACT.github} className={styles.socialLink} aria-label="GitHub" target="_blank" rel="noreferrer noopener">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href={CONTACT.linkedin} className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noreferrer noopener">
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href={CONTACT.personalEmail} className={styles.socialLink} aria-label="Email">
          <FaRegEnvelope />
        </a>
      </li>
    </ul>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    [...sections, { id: "contact" }].forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 1201px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    // The open menu covers the whole screen, so the page behind it should not scroll.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", close);
    media.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${open ? styles.headerOpen : ""}`}>
      <nav className={styles.nav} aria-label="Primary">
        <a
          className={styles.brand}
          href="#about"
          onClick={() => setOpen(false)}
          aria-label="Het Patel, home"
        >
          hp<span>.</span>
        </a>
        <div
          id="creative-navigation"
          className={`${styles.links} ${open ? styles.open : ""}`}
        >
          <div className={styles.list}>
            {sections.map(({ id, label }, index) => (
              <span key={id} className={styles.line} style={{ "--i": index }}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </span>
            ))}
          </div>
          <div className={styles.menuFoot}>
            <a
              className={styles.contact}
              href="#contact"
              aria-current={active === "contact" ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              Let’s talk <LuArrowUpRight aria-hidden="true" />
            </a>
            <Socials className={`${styles.socials} ${styles.menuSocials}`} />
          </div>
        </div>
        <div className={styles.actions}>
          <ThemeToggle />
          <Socials className={`${styles.socials} ${styles.barSocials}`} />
          <button
            ref={menuButton}
            className={styles.menu}
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="creative-navigation"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}
