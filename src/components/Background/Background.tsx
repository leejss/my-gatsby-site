import React from "react";
import { Canvas } from "@react-three/fiber";
import StarsPoints from "./StarsPoints";
import { getRandomBackground } from "../../utils/getColors";
import { useMove } from "../../contexts/useMove";

const Background: React.FC = () => {
  const { move } = useMove();
  return (
    <Canvas
      camera={{
        isPerspectiveCamera: true,
        fov: 70,
        far: 3000,
        near: 1,
      }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -10,
        backgroundColor: "#0f0f0f",
        backgroundImage: getRandomBackground(),
      }}
    >
      <StarsPoints move={move} />
    </Canvas>
  );
};

export default Background;
