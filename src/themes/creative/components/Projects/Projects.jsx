import { useState } from "react";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import projects from "../../../../assets/data/projects";
import SectionHeading from "../Section/SectionHeading";
import styles from "./Projects.module.css";
import section from "../Section/Section.module.css";

const filters = ["All work", ...new Set(projects.map((p) => p.category))];

function BlackHole() {
  return (
    <div className={styles.blackHole} aria-hidden="true">
      <div className={styles.starfield} />
      <div className={styles.disk} />
      <div className={styles.hole} />
      <span className={styles.figureLabel}>
        SCHWARZSCHILD / REAL-TIME RENDERING
      </span>
    </div>
  );
}

function Traffic() {
  return (
    <div className={styles.traffic} aria-hidden="true">
      <div className={styles.roads} />
      <div className={styles.signal}>
        <i />
        <i />
        <i />
      </div>
      <span className={styles.trafficTitle}>
        observe.
        <br />
        <em>decide.</em>
        <br />
        adapt.
      </span>
      <span className={styles.figureLabel}>RL / ADAPTIVE SIGNAL CONTROL</span>
    </div>
  );
}

function Compiler() {
  return (
    <div className={styles.compiler} aria-hidden="true">
      <span className={styles.alpha}>α</span>
      <div className={styles.code}>
        <span>01 / SOURCE → EXECUTABLE</span>
        <code>
          tokens → syntax → IR
          <br />
          <b>→ x86-64 assembly</b>
        </code>
        <span>LEX · PARSE · CHECK · GENERATE</span>
      </div>
    </div>
  );
}

const bars = [32, 54, 39, 73, 48, 90, 66, 100, 83, 120, 105, 142];

function Data() {
  return (
    <div className={styles.chart} aria-hidden="true">
      <span className={styles.figureLabel}>
        PATTERNS / PREDICTIONS / POSSIBILITIES
      </span>
      <div>
        {bars.map((height, i) => (
          <i key={i} style={{ height }} />
        ))}
      </div>
      <span>15 MODELS. ONE QUESTION.</span>
    </div>
  );
}

function Diagram({ caption, children }) {
  return (
    <div className={styles.diagram} aria-hidden="true">
      <div className={styles.grid} />
      <b>{children}</b>
      <small>{caption}</small>
    </div>
  );
}

function Kernel() {
  return (
    <Diagram caption="THREADS / MEMORY / SYNCHRONIZATION">
      user
      <br />
      <span>↓ system call ↓</span>
      <br />
      kernel
    </Diagram>
  );
}

function Learning() {
  return (
    <Diagram caption="PEER-ASSISTED LEARNING">
      learn.
      <br />
      <em>together.</em>
    </Diagram>
  );
}

function Motion() {
  return <Diagram caption="MOTION / MODELING / OPTIMIZATION">∂L / ∂x</Diagram>;
}

const visuals = {
  "black-hole": BlackHole,
  traffic: Traffic,
  compiler: Compiler,
  data: Data,
  kernel: Kernel,
  learning: Learning,
  motion: Motion,
};

function ProjectVisual({ project }) {
  if (project.image)
    return (
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        loading="lazy"
        width="800"
        height="500"
      />
    );
  const Visual = visuals[project.visual] ?? Motion;
  return <Visual />;
}

export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const [showAll, setShowAll] = useState(false);
  const filtered = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  const visible = showAll ? filtered : filtered.slice(0, 4);
  return (
    <section
      id="projects"
      className={section.section}
      aria-labelledby="projects-title"
    >
      <SectionHeading eyebrow="04 /" title="Projects" id="projects-title" />
      <div className={styles.filterRow}>
        <div
          className={styles.filters}
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((label) => (
            <button
              key={label}
              type="button"
              aria-pressed={filter === label}
              onClick={() => {
                setFilter(label);
                setShowAll(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <span className={styles.count} role="status">
          {String(visible.length).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")} projects
        </span>
      </div>
      <div
        className={`${styles.cards} ${section.dottedRows}`}
        id="creative-project-list"
      >
        {visible.map((project) => (
          <article className={styles.card} key={project.id}>
            <div className={styles.visual}>
              <ProjectVisual project={project} />
            </div>
            <div className={styles.body}>
              <div className={styles.projectMeta}>
                <p className={styles.label}>{project.label}</p>
                <span className={styles.category}>{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              {project.status && (
                <p className={styles.status}>
                  {project.status}
                </p>
              )}
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tech} aria-label="Technologies">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <details className={styles.details}>
                <summary>
                  Behind the build <span aria-hidden="true">+</span>
                </summary>
                <p>{project.note}</p>
              </details>
              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code for ${project.title}`}
                  >
                    <LuGithub aria-hidden="true" /> Source code{" "}
                    <LuArrowUpRight aria-hidden="true" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View demo of ${project.title}`}
                  >
                    View demo <LuArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {filtered.length > 4 && (
        <button
          className={styles.more}
          type="button"
          aria-expanded={showAll}
          aria-controls="creative-project-list"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? "Show fewer projects"
            : `Explore all ${filtered.length} projects`}{" "}
          <span aria-hidden="true">{showAll ? "−" : "+"}</span>
        </button>
      )}
    </section>
  );
}
