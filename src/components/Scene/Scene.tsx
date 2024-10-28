import { Canvas } from "@react-three/fiber";
import { AvatarModel } from "../../AvatarModel";
import { Suspense } from "react";
import { Html, Scroll, ScrollControls, useProgress } from "@react-three/drei";
import { Content } from "../Content/Content";

const Loader = () => {
  const { progress } = useProgress();
  return <Html>{progress} %</Html>;
};

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 10 }}>
      <ambientLight intensity={1.5} />
      <directionalLight intensity={4} position={[-5, 5, 5]} />
      <ScrollControls pages={4}>
        <Suspense fallback={<Loader />}>
          <AvatarModel />
        </Suspense>
        <Scroll html>
          <Content />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};
