import { Canvas } from "@react-three/fiber";
import { AvatarModel } from "./AvatarModel";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return <Html>{progress} %</Html>;
};

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 10 }}>
      <ambientLight intensity={1.5} />
      <directionalLight intensity={4} position={[-5, 5, 5]} />
      <Suspense fallback={<Loader />}>
        <AvatarModel />
      </Suspense>
    </Canvas>
  );
};
