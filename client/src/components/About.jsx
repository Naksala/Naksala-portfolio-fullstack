import Section from "./Section.jsx";
import TiltCard from "./TiltCard.jsx";
import { about, education } from "../data/profile.js";

export default function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="two-column">
        <div>
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <TiltCard>
          <p className="label">Education</p>
          <h3>{education.degree}</h3>
          <p className="muted">{education.school} · {education.years}</p>
          <p className="muted">{education.grade}</p>
          <p className="label">Thesis</p>
          <p>{education.thesis}</p>
        </TiltCard>
      </div>
    </Section>
  );
}
