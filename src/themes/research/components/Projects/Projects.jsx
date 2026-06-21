import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projects from '../../../../assets/data/projects'
import styles from './Projects.module.css'

const researchProjects = projects.filter((p) => p.showInResearch)

export default function Projects() {
  return (
    <section className={styles.section} aria-label="Projects">
      <span id="projects" className={styles.anchor} aria-hidden="true" />
      <h2 className={styles.heading}>Projects</h2>

      <ul className={styles.grid}>
        {researchProjects.map((project) => (
          <li key={project.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    className={styles.iconLink}
                    aria-label={`${project.title} GitHub`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className={styles.iconLink}
                    aria-label={`${project.title} live demo`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tech.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
