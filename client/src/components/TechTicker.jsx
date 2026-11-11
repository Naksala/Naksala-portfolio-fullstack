import { technologies } from "../data/profile.js";

// One slow, endless line of technologies.
// The list is rendered twice and the track moves left by exactly 50%,
// so when the first copy leaves the screen the second copy is in the same spot (a seamless loop).
export default function TechTicker() {
  const loop = [...technologies, ...technologies];

  return (
    <div className="ticker" aria-label="Technologies I work with">
      <div className="ticker-track">
        {loop.map((tech, index) => (
          <span key={index} className="ticker-item">{tech}</span>
        ))}
      </div>
    </div>
  );
}
