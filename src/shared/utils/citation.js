// Presentation helpers for entries in assets/data/publications.js, shared by both themes.

const TYPE_LABELS = { paper: 'Paper', poster: 'Poster' }

export const typeLabel = (type) => TYPE_LABELS[type] ?? type ?? ''

// "Tanmay Anishkumar Master" -> "T. A. Master"
const abbreviate = (author) => {
  const parts = author.trim().split(/\s+/)
  const last = parts.pop()
  return [...parts.map((p) => `${p[0]}.`), last].join(' ')
}

// IEEE-style citation; uses the entry's own `citation` when provided.
export function formatCitation(paper) {
  if (paper.citation) return paper.citation
  const names = paper.authors.map(abbreviate)
  const authors = names.length > 6 ? `${names.slice(0, 3).join(', ')}, et al.` : names.join(', ')
  const status = paper.status && paper.status.toLowerCase() !== 'published' ? ` (${paper.status})` : ''
  return `${authors}, “${paper.title},” ${paper.venue}, ${paper.year}.${status}`
}

const AUTHOR_LIMIT = 5

// Collapsed author list for display; always keeps `owner` visible.
export function collapseAuthors(authors, owner) {
  const visibleCount = Math.max(AUTHOR_LIMIT, authors.indexOf(owner) + 1)
  const collapsible = authors.length > visibleCount + 1
  return { collapsible, short: collapsible ? authors.slice(0, visibleCount) : authors }
}
