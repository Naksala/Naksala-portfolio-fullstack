import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const NODE_COUNT = 45;
const LINK_DISTANCE = 1.7; // nodes closer than this get connected

// Builds random points on a sphere (the nodes) and the lines between close neighbours (the edges).
function buildGraph() {
  const nodes = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 2.4 * (0.6 + 0.4 * Math.random());
    nodes.push([
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi),
    ]);
  }

  const edges = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const [ax, ay, az] = nodes[i];
      const [bx, by, bz] = nodes[j];
      if (Math.hypot(ax - bx, ay - by, az - bz) < LINK_DISTANCE) {
        edges.push(ax, ay, az, bx, by, bz);
      }
    }
  }
  return { nodes, edges: new Float32Array(edges) };
}

function Graph({ color }) {
  const group = useRef();
  const pointer = useRef({ x: 0, y: 0 });
  const { nodes, edges } = useMemo(buildGraph, []);
  const reduceMotion = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  // Track the mouse position as a value from -1 to 1 on both axes.
  useEffect(() => {
    function handleMove(event) {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Runs every frame: slow spin, plus the graph leans towards the mouse and turns as you scroll.
  useFrame((state, delta) => {
    if (reduceMotion) return;
    const g = group.current;
    g.rotation.y += delta * 0.12;
    g.rotation.x += (pointer.current.y * 0.5 + window.scrollY * 0.0008 - g.rotation.x) * 0.05;
    g.position.x += (1.2 + pointer.current.x * 0.5 - g.position.x) * 0.05;
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={edges.length / 3} array={edges} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.3} />
      </lineSegments>

      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          {/* every 9th node is a bigger "hub" */}
          <sphereGeometry args={[index % 9 === 0 ? 0.13 : 0.06, 16, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

export default function KnowledgeGraph({ color }) {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
        <Graph color={color} />
      </Canvas>
    </div>
  );
}
