import { useState } from "react";
import { LuArrowDown, LuArrowUpRight, LuPause, LuPlay } from "react-icons/lu";
import { name } from "../../../../assets/data/about";
import styles from "./Hero.module.css";

// A mathematical wire sculpture: a torus projected into two dimensions.
const rings = Array.from({ length: 36 }, (_, ring) => {
  const phi = (ring / 36) * Math.PI * 2;
  return Array.from({ length: 101 }, (_, step) => {
    const theta = (step / 100) * Math.PI * 2;
    const x = (132 + 55 * Math.cos(theta)) * Math.cos(phi);
    const y = (132 + 55 * Math.cos(theta)) * Math.sin(phi);
    const z = 55 * Math.sin(theta);
    return `${(250 + x * 0.91 + y * 0.3).toFixed(2)},${(250 + y * 0.48 - z * 0.85 - x * 0.22).toFixed(2)}`;
  }).join(" ");
});

export default function Hero() {
  const [paused, setPaused] = useState(false);
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.intro}>
        <span className={styles.dot} /> HELLO, I’M {name.toUpperCase()}{" "}
        <span className={styles.location}>BUFFALO, NY ↗</span>
      </div>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h1 id="hero-title">
            Curiosity,
            <br />
            made <em>tangible.</em>
          </h1>
          <p>
            I explore how things work.
            <br />
            Then build what comes next.
          </p>
          <p className={styles.description}>
            Researcher & developer at the intersection of machine learning,
            systems, and human-centered software.
          </p>
          <div className={styles.buttons}>
            <a className={styles.primary} href="#projects">
              Explore my work <LuArrowUpRight aria-hidden="true" />
            </a>
            <a className={styles.secondary} href="#about">
              The person behind it <LuArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className={`${styles.art} ${paused ? styles.paused : ""}`}>
          <div className={styles.artLabel}>
            <span>FIG. 01 / THE CURIOSITY LOOP</span>
            <span>↗</span>
          </div>
          <div className={styles.sculpture} aria-hidden="true">
            <svg viewBox="0 0 500 500" fill="none">
              <defs>
                <linearGradient
                  id="sculpture-gradient"
                  x1="80"
                  y1="100"
                  x2="400"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f8d3a3" />
                  <stop offset=".45" stopColor="#e5a173" />
                  <stop offset="1" stopColor="#5c765c" />
                </linearGradient>
              </defs>
              <g stroke="url(#sculpture-gradient)" strokeWidth=".7">
                {rings.map((points, i) => (
                  <polyline key={i} points={points} opacity={0.35 + i / 60} />
                ))}
              </g>
            </svg>
          </div>
          <span className={styles.orbitText}>
            OBSERVE · QUESTION · BUILD · REPEAT
          </span>
          <button
            className={styles.pause}
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused ? "Play sculpture animation" : "Pause sculpture animation"
            }
            aria-pressed={paused}
          >
            {paused ? <LuPlay /> : <LuPause />}
          </button>
          <span className={styles.coordinate}>43° N / 78° W</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>COMPUTER SCIENCE × STATISTICS</span>
        <a href="#projects">
          SCROLL TO DISCOVER <LuArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
