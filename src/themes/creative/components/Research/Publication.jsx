import { useState } from "react";
import { LuArrowUpRight, LuCheck, LuCopy, LuFileText } from "react-icons/lu";
import { name } from "../../../../assets/data/about";
import { useCopy } from "../../../../shared/hooks/useCopy";
import { collapseAuthors, formatCitation, typeLabel } from "../../../../shared/utils/citation";
import styles from "./Research.module.css";

export default function Publication({ paper, index }) {
  const [showAll, setShowAll] = useState(false);
  const [copied, copy] = useCopy();

  const { collapsible, short } = collapseAuthors(paper.authors, name);
  const authors = showAll ? paper.authors : short;

  return (
    <li className={styles.publication}>
      <div className={styles.marker}>
        <span className={styles.index} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <span className={styles.year}>{paper.year}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.tags}>
          <span className={styles.type}>{typeLabel(paper.type)}</span>
          <span className={styles.venue}>{paper.venue}</span>
          <span className={styles.year}>{paper.year}</span>
          {paper.status && <span className={styles.status}>{paper.status}</span>}
        </div>

        <h4 className={styles.title}>{paper.title}</h4>

        <p className={styles.authors}>
          {authors.map((author, i) => (
            <span key={author}>
              {author === name ? <strong>{author}</strong> : author}
              {(i < authors.length - 1 || (collapsible && !showAll)) && ", "}
            </span>
          ))}
          {collapsible && (
            <button
              type="button"
              className={styles.more}
              onClick={() => setShowAll((open) => !open)}
              aria-expanded={showAll}
              aria-label={showAll ? "Show fewer authors" : `Show all ${paper.authors.length} authors`}
            >
              {showAll ? "show less" : "et al."}
            </button>
          )}
        </p>

        <div className={styles.actions}>
          {paper.link && (
            <a className={styles.action} href={paper.link} target="_blank" rel="noopener noreferrer">
              View {typeLabel(paper.type).toLowerCase()} <LuArrowUpRight aria-hidden="true" />
            </a>
          )}
          {paper.file && (
            <a className={styles.action} href={paper.file} target="_blank" rel="noopener noreferrer">
              <LuFileText aria-hidden="true" /> {typeLabel(paper.type)} PDF
            </a>
          )}
          <button
            type="button"
            className={`${styles.action} ${styles.cite}`}
            onClick={() => copy(formatCitation(paper))}
          >
            {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
            {copied ? "Copied" : "Cite"}
          </button>
          <span className={styles.srOnly} aria-live="polite">{copied ? "Citation copied" : ""}</span>
        </div>
      </div>
    </li>
  );
}
