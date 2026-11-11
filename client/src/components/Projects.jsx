import { useState } from "react";
import Section from "./Section.jsx";
import TiltCard from "./TiltCard.jsx";
import { projects } from "../data/profile.js";

const filters = [
  { value: "All", label: "All" },
  { value: "Web", label: "Web" },
  { value: "AI", label: "AI and research" },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" number="04" title="Projects">
      <div className="filters">
        {filters.map((item) => (
          <button
            key={item.value}
            className={`chip ${filter === item.value ? "on" : ""}`}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* The key includes the filter so the cards play their entrance animation again. */}
      <div className="project-grid" key={filter}>
        {visible.map((project, index) => (
          <TiltCard key={project.name} className="project" style={{ "--i": index }}>
            <h3 className="small">{project.name}</h3>
            <p>{project.text}</p>
            <ul className="tags">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">View live site</a>
            )}
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
