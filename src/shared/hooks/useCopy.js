import { useEffect, useRef, useState } from 'react'

// Copies text to the clipboard; `copied` stays true for `resetMs` afterwards.
export function useCopy(resetMs = 1800) {
  const [copied, setCopied] = useState(false)
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), resetMs)
    } catch {
      setCopied(false)
    }
  }

  return [copied, copy]
}
