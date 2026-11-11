import { useEffect, useRef } from "react";

// Wraps every section: adds a numbered heading and a gentle fade-in when it scrolls into view.
export default function Section({ id, number, title, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="section fade-in">
      <h2 className="section-title">
        <span className="section-number">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
