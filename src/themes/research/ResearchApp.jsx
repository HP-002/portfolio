import './tokens.css'

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Publications from './components/Publications/Publications'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

export default function ResearchApp() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Publications />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
