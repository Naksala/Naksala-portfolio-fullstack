import { profile } from "../data/profile.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <a href="#top" className="brand">{profile.name}</a>
      <nav>
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
        <button className="theme-button" onClick={onToggleTheme} aria-label="Switch light and dark theme">
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}
