import { Canvas } from "@react-three/fiber";
import { AvatarModel } from "../../AvatarModel";

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 10 }}>
      <ambientLight intensity={1.5} />
      <directionalLight intensity={4} position={[-5, 5, 5]} />
      <AvatarModel />
    </Canvas>
  );
};
