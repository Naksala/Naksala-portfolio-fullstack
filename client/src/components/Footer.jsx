import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
