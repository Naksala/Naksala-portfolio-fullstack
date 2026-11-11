import { useRef } from "react";

// A card that tilts in 3D towards the mouse, then settles back when the mouse leaves.
export default function TiltCard({ className = "", style, children }) {
  const ref = useRef(null);

  function handleMove(event) {
    const box = ref.current.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;  // -0.5 (left) to 0.5 (right)
    const y = (event.clientY - box.top) / box.height - 0.5;  // -0.5 (top) to 0.5 (bottom)
    ref.current.style.transform =
      `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  }

  function handleLeave() {
    ref.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      className={`card tilt ${className}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
