import { LuBrain, LuCode, LuLayers, LuTerminal } from "react-icons/lu";
import styles from "./Skills.module.css";

const groups = [
  {
    title: "Intelligent systems",
    Icon: LuBrain,
    description: "From data to decisions.",
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "Opacus",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Interfaces & applications",
    Icon: LuLayers,
    description: "Ideas people can interact with.",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "FastAPI",
      "Express.js",
      "Expo",
      "WebSockets",
    ],
  },
  {
    title: "Closer to the machine",
    Icon: LuCode,
    description: "Understanding the foundations.",
    skills: [
      "C",
      "C++",
      "Go",
      "Java",
      "Kotlin",
      "OCaml",
      "OpenGL",
      "GLSL",
      "Flex",
      "Bison",
    ],
  },
  {
    title: "The working toolkit",
    Icon: LuTerminal,
    description: "Build. Debug. Iterate.",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "gdb",
      "CMake",
      "PostgreSQL",
      "Supabase",
      "CometML",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-title"
    >
      <div className={styles.heading}>
        <p className={styles.eyebrow}>04 / THE TOOLKIT</p>
        <h2 id="skills-title">
          Different tools.
          <br />
          <em>One curious mind.</em>
        </h2>
        <p>The technologies I use to turn questions into working systems.</p>
      </div>
      <div className={styles.groups}>
        {groups.map((group, i) => {
          const { title, Icon, description, skills } = group;
          return (
            <article key={title} className={styles.group}>
              <div className={styles.top}>
                <Icon aria-hidden="true" />
                <span>0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul aria-label={`${title} technologies`}>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
