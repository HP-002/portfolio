import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import ThemeToggle from "../../../../shared/components/ThemeToggle/ThemeToggle";
import styles from "./Nav.module.css";

const sections = [
  { id: "about", label: "Intro" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Toolkit" },
];

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
    sections.forEach(({ id }) => {
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
    const media = window.matchMedia("(min-width: 901px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a
          className={styles.brand}
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Het Patel, home"
        >
          hp<span>.</span>
        </a>
        <div
          id="creative-navigation"
          className={`${styles.links} ${open ? styles.open : ""}`}
        >
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className={styles.contact}
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <LuArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className={styles.actions}>
          <ThemeToggle />
          <button
            ref={menuButton}
            className={styles.menu}
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="creative-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
