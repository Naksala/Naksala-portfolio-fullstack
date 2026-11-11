import Section from "./Section.jsx";
import { experience } from "../data/profile.js";

export default function Experience() {
  return (
    <Section id="experience" number="03" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.role}>
            <div className="timeline-head">
              <h3>{job.role}</h3>
              <span className="muted">{job.period}</span>
            </div>
            <p className="muted">{job.place}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
