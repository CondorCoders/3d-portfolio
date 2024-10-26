import { Canvas } from "@react-three/fiber";
import { AvatarModel } from "../../AvatarModel";
import { Suspense } from "react";
import { Html, Scroll, ScrollControls, useProgress } from "@react-three/drei";
import { Content } from "../Content/Content";

const Loader = () => {
  const { progress } = useProgress();
  return <Html>{progress} %</Html>;
};

const SnapContent = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "100vh" }}>
    {/* Agrega aquí el contenido que deseas mostrar dentro de cada "pantalla" */}
    <div style={{ scrollSnapAlign: "start" }}>
      <Content />
    </div>
    {/* Repite el patrón para cada sección si tienes varias */}
  </div>
);

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 10 }}>
      <ambientLight intensity={1.5} />
      <directionalLight intensity={4} position={[-5, 5, 5]} />
      <ScrollControls pages={4} damping={0.1}>
        <Suspense fallback={<Loader />}>
          <AvatarModel />
        </Suspense>
        <Scroll
          style={{
            scrollSnapType: "y mandatory",
            overflowY: "scroll",
            height: "100vh",
          }}
          html
        >
          <SnapContent />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};
