import { useState } from "react";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import projects from "../../data/projects";
import styles from "./Projects.module.css";

const filters = ["All work", "AI & ML", "Systems", "Web & Mobile"];

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
  if (project.visual === "black-hole")
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
  if (project.visual === "traffic")
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
  if (project.visual === "compiler")
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
  if (project.visual === "data")
    return (
      <div className={styles.chart} aria-hidden="true">
        <span className={styles.figureLabel}>
          PATTERNS / PREDICTIONS / POSSIBILITIES
        </span>
        <div>
          {[32, 54, 39, 73, 48, 90, 66, 100, 83, 120, 105, 142].map(
            (height, i) => (
              <i key={i} style={{ height }} />
            ),
          )}
        </div>
        <span>15 MODELS. ONE QUESTION.</span>
      </div>
    );
  return (
    <div className={styles.diagram} aria-hidden="true">
      <div className={styles.grid} />
      {project.visual === "kernel" ? (
        <>
          <b>
            user
            <br />
            <span>↓ system call ↓</span>
            <br />
            kernel
          </b>
          <small>THREADS / MEMORY / SYNCHRONIZATION</small>
        </>
      ) : project.visual === "learning" ? (
        <>
          <b>
            learn.
            <br />
            <em>together.</em>
          </b>
          <small>PEER-ASSISTED LEARNING</small>
        </>
      ) : (
        <>
          <b>∂L / ∂x</b>
          <small>MOTION / MODELING / OPTIMIZATION</small>
        </>
      )}
    </div>
  );
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
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>04 / SELECTED WORK</p>
          <h2 id="projects-title">
            Ideas in the <em>real world.</em>
          </h2>
        </div>
        <p>
          A few things I’ve built.
          <br />A lot of things I’ve learned.
        </p>
      </div>
      <div className={styles.filterRow}>
        <div
          className={styles.filters}
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
          {String(filtered.length).padStart(2, "0")} PROJECTS
        </span>
      </div>
      <div className={styles.cards}>
        {visible.map((project) => (
          <article className={styles.card} key={project.id}>
            <div className={styles.visual}>
              <ProjectVisual project={project} />
              <span className={styles.category}>{project.category}</span>
            </div>
            <div className={styles.body}>
              <p className={styles.label}>{project.label}</p>
              <h3>{project.title}</h3>
              {project.status && (
                <p className={styles.status}>
                  <span aria-hidden="true" />
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <LuGithub aria-hidden="true" /> Source code{" "}
                  <LuArrowUpRight aria-hidden="true" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} demo`}
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
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? "Show selected work"
            : `Explore all ${filtered.length} projects`}{" "}
          <span aria-hidden="true">{showAll ? "−" : "+"}</span>
        </button>
      )}
    </section>
  );
}
