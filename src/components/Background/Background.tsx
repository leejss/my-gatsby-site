import React from "react";
import { Canvas } from "@react-three/fiber";
import Circle from "./Circle";

const Background: React.FC = () => {
  return (
    <Canvas
      camera={{
        far: 5000,
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.5,
        position: [0, 0, 1],
        isPerspectiveCamera: true,
      }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -10,
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at 34% 31%, rgba(233, 125, 25, 0.05), transparent 129%), radial-gradient(circle at 30% 81%, rgba(222, 18, 158, 0.05), transparent 114%), radial-gradient(circle at 51% 4%, rgba(186, 154, 186, 0.05), transparent 154%), radial-gradient(circle at 65% 19%, rgba(89, 131, 137, 0.05), transparent 119%), radial-gradient(circle at 29% 36%, rgba(141, 254, 227, 0.05), transparent 138%), radial-gradient(circle at 58% 67%, rgba(26, 164, 102, 0.05), transparent 156%)",
      }}
    >
      <Circle />
    </Canvas>
  );
};

export default Background;
