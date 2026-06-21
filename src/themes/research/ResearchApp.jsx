import './tokens.css'

import styles from './ResearchApp.module.css'

import Nav from './components/Nav/Nav'
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/About/About'
import Education from './components/Education/Education'
import Research from './components/Research/Research'
import Work from './components/Work/Work'
import Publications from './components/Publications/Publications'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { name, lastUpdated } from '../../assets/data/about'

export default function ResearchApp() {
  return (
    <>
      <Nav />
      <main className={styles.layout}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <div className={styles.main}>
          <About />
          <Education />
          <Research />
          <Work />
          {/* <Publications /> */}
          <Projects />
          <Contact />
          <footer className={styles.footer}>
            <span>© {new Date().getFullYear()} {name}. All rights reserved.</span>
            <span>Last updated: {lastUpdated}</span>
          </footer>
        </div>
      </main>
    </>
  )
}
