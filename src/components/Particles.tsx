/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type StarsProps = {
  move?: boolean;
};

const Stars: FC<StarsProps> = ({ move }) => {
  const group = useRef<THREE.Group>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const deltaX = useRef(0);
  const deltaY = useRef(0);

  const pointerUpdate = useCallback((e: MouseEvent) => {
    mouseX.current = e.clientX;
    mouseY.current = e.clientY;
  }, []);
  const wheelUpdate = useCallback((e: WheelEvent) => {
    if (e.deltaY > 0) {
      deltaY.current += 1;
    }
    if (e.deltaY < 0) {
      deltaY.current -= 1;
    }
    if (e.deltaX > 0) {
      deltaX.current += 1;
    }
    ``;
    if (e.deltaX < 0) {
      deltaX.current -= 1;
    }
  }, []);

  const addMoveListener = useCallback(() => {
    window.addEventListener("mousemove", pointerUpdate);
    window.addEventListener("wheel", wheelUpdate);
  }, []);

  const removeMoveListener = useCallback(() => {
    window.removeEventListener("mousemove", pointerUpdate);
    window.removeEventListener("wheel", wheelUpdate);
  }, []);

  useEffect(() => {
    if (move) {
      addMoveListener();
    } else {
      removeMoveListener();
    }

    return () => {
      removeMoveListener();
    };
  }, [move]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    const moveX = mouseX.current * 0.002;
    const moveY = mouseY.current * 0.003;
    group.current!.rotation.x = THREE.MathUtils.lerp(
      group.current!.rotation.x,
      Math.cos(t / 2) / 8 + moveY + deltaY.current * 0.1,
      0.1
    );

    group.current!.rotation.y = THREE.MathUtils.lerp(
      group.current!.rotation.y,
      Math.sin(t / 2) / 8 + moveX + deltaX.current * 0.1,
      0.1
    );

    group.current!.rotation.z = THREE.MathUtils.lerp(
      group.current!.rotation.z,
      Math.sin(t / 4) / 5,
      0.1
    );
  });

  const [geo, mat, coords] = useMemo(() => {
    const particles = 5000;
    const geo = new THREE.SphereBufferGeometry(0.2, 10, 10);
    const mat = new THREE.PointsMaterial({ color: new THREE.Color("white") });

    const coords = new Array(particles)
      .fill(0)
      .map(() => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 1000 - 400,
      ]);
    return [geo, mat, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
};

type ParticlesProps = {
  move?: boolean;
};

const Particles: FC<ParticlesProps> = ({ move = false }) => {
  // const { move } = useMove();

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: -10,
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at 34% 31%, rgba(233, 125, 25, 0.05), transparent 129%), radial-gradient(circle at 30% 81%, rgba(222, 18, 158, 0.05), transparent 114%), radial-gradient(circle at 51% 4%, rgba(186, 154, 186, 0.05), transparent 154%), radial-gradient(circle at 65% 19%, rgba(89, 131, 137, 0.05), transparent 119%), radial-gradient(circle at 29% 36%, rgba(141, 254, 227, 0.05), transparent 138%), radial-gradient(circle at 58% 67%, rgba(26, 164, 102, 0.05), transparent 156%)",
      }}
    >
      <Stars move={move} />
    </Canvas>
  );
};

export default Particles;
