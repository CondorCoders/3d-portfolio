import { Canvas } from "@react-three/fiber";
import { AvatarModel } from "./AvatarModel";
import { Suspense, useContext } from "react";
import { Html, useProgress } from "@react-three/drei";
import { ModelContext } from "../../contexts/ModelContext";
import { AvatarCreatorModel } from "./AvatarCreatorModel";

const Loader = () => {
  const { progress } = useProgress();
  return <Html>{progress} %</Html>;
};

export const Scene = () => {
  const { skin } = useContext(ModelContext);

  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 10 }}>
      <ambientLight intensity={1.5} />
      <directionalLight intensity={4} position={[-5, 5, 5]} />
      <Suspense fallback={<Loader />}>
        {skin === "creator" ? <AvatarCreatorModel /> : <AvatarModel />}
      </Suspense>
    </Canvas>
  );
};
