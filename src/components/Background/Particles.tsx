import React from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";

const Particles: React.FC = () => {
  return (
    <Canvas
      style={{ position: "fixed", width: "100%", height: "100%" }}
      linear
      // camera={{
      //   far: 10000,
      //   fov: 75,
      //   near: 0.05,
      //   position: [0, 0, 2000],
      //   isPerspectiveCamera: true,
      // }}
      // dpr={[1, 1.5]}
      // mode="concurrent"
    >
      <Stars />
    </Canvas>
  );
};

export default Particles;
