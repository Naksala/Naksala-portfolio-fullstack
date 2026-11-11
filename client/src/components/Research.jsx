import Section from "./Section.jsx";
import TiltCard from "./TiltCard.jsx";
import ResearchPipeline from "./ResearchPipeline.jsx";
import { research } from "../data/profile.js";

export default function Research() {
  const { publication } = research;

  return (
    <Section id="research" number="02" title="Research">
      <TiltCard className="featured">
        <p className="status"><span className="dot" /> {research.status}</p>
        <h3>{research.title}</h3>
        <p>{research.summary}</p>
        <ul className="tags">
          {research.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p className="label">How it works</p>
        <ResearchPipeline />
      </TiltCard>

      <TiltCard>
        <p className="label">Publication</p>
        <h3 className="small">{publication.title}</h3>
        <p className="muted">{publication.publisher}</p>
        <a href={publication.link} target="_blank" rel="noopener noreferrer">Read the chapter</a>
      </TiltCard>
    </Section>
  );
}
