import { useEffect, useState } from "react";
import { research } from "../data/profile.js";

// Four clickable steps. They advance on their own until the visitor clicks one.
export default function ResearchPipeline() {
  const steps = research.pipeline;
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % steps.length), 3500);
    return () => clearInterval(timer);
  }, [autoPlay, steps.length]);

  function choose(index) {
    setActive(index);
    setAutoPlay(false);
  }

  return (
    <div className="pipeline">
      <div className="steps">
        {steps.map((step, index) => (
          <button
            key={step.name}
            className={`step ${index === active ? "active" : ""} ${index < active ? "done" : ""}`}
            onClick={() => choose(index)}
          >
            <span className="step-number">{index + 1}</span>
            {step.name}
          </button>
        ))}
      </div>
      <p className="step-text" key={active}>{steps[active].text}</p>
    </div>
  );
}
