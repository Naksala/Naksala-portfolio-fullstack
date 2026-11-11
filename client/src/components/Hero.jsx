import { profile, roles } from "../data/profile.js";
import useTyped from "../hooks/useTyped.js";

export default function Hero() {
  const role = useTyped(roles);

  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="eyebrow">Hello, I'm</p>
        <h1>{profile.name}</h1>
        <p className="hero-title">{role}<span className="caret" /></p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="button-row">
          <a className="button primary" href="#research">See my research</a>
          <a className="button" href="#contact">Contact me</a>
        </div>
      </div>
      <img className="hero-photo" src={profile.photo} alt={`Portrait of ${profile.name}`} />
    </section>
  );
}
