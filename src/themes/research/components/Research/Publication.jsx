import { useState } from 'react'
import { name } from '../../../../assets/data/about'
import { useCopy } from '../../../../shared/hooks/useCopy'
import { collapseAuthors, formatCitation, typeLabel } from '../../../../shared/utils/citation'
import styles from './Research.module.css'

export default function Publication({ paper, index }) {
  const [copied, copy] = useCopy()
  const [showAll, setShowAll] = useState(false)
  const { collapsible, short } = collapseAuthors(paper.authors, name)
  const authors = showAll ? paper.authors : short

  return (
    <li className={styles.publication}>
      <span className={styles.pubIndex} aria-hidden="true">[{index + 1}]</span>
      <div className={styles.pubBody}>
        <p className={styles.pubTitle}>{paper.title}</p>
        <p className={styles.pubAuthors}>
          {authors.map((author, i) => (
            <span key={author}>
              {author === name ? <strong>{author}</strong> : author}
              {(i < authors.length - 1 || (collapsible && !showAll)) && ', '}
            </span>
          ))}
          {collapsible && (
            <button
              type="button"
              className={styles.pubMore}
              onClick={() => setShowAll((open) => !open)}
              aria-expanded={showAll}
              aria-label={showAll ? 'Show fewer authors' : `Show all ${paper.authors.length} authors`}
            >
              {showAll ? '(show less)' : 'et al.'}
            </button>
          )}
        </p>
        <p className={styles.pubVenue}>
          <em>{paper.venue}</em>, {paper.year}
          {paper.type && <span className={styles.pubBadge}>{typeLabel(paper.type)}</span>}
          {paper.status && <span className={styles.pubBadge}>{paper.status}</span>}
        </p>
        <p className={styles.pubLinks}>
          {paper.link && (
            <a href={paper.link} className={styles.link} target="_blank" rel="noreferrer noopener">
              [{typeLabel(paper.type).toLowerCase() || 'link'}]
            </a>
          )}
          {paper.file && (
            <a href={paper.file} className={styles.link} target="_blank" rel="noreferrer noopener">
              [pdf]
            </a>
          )}
          <button type="button" className={styles.pubCite} onClick={() => copy(formatCitation(paper))}>
            {copied ? '[copied]' : '[cite]'}
          </button>
          <span className={styles.srOnly} aria-live="polite">{copied ? 'Citation copied' : ''}</span>
        </p>
      </div>
    </li>
  )
}
