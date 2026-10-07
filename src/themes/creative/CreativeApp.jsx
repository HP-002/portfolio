import "./tokens.css";
import styles from "./CreativeApp.module.css";
import Nav from "./components/Nav/Nav";
import Education from "./components/Education/Education";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

export default function CreativeApp() {
  return (
    <div className={styles.app}>
      <a className={styles.skip} href="#creative-main">
        Skip to content
      </a>
      <Nav />
      <main id="creative-main">
        <div id="home">
          <About />
        </div>
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <a href="#home">
          HP<span> / </span>Het Patel
        </a>
        <p>Built with curiosity. © {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
