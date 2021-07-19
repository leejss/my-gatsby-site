import { useFrame, useThree } from "@react-three/fiber";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Color, Group, MathUtils } from "three";

type StarsPointsProps = {
  move?: boolean;
};

const StarsPoints: React.FC<StarsPointsProps> = ({ move }) => {
  const isBrowser = typeof window !== undefined;
  const { camera } = useThree();
  const group = useRef<Group>(null);
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

  const cord = useMemo(() => {
    return new Array(700)
      .fill(0)
      .map(() => [
        MathUtils.randFloatSpread(1000),
        MathUtils.randFloatSpread(1000),
        MathUtils.randFloatSpread(2000),
      ]);
  }, []);
  const addMoveListener = useCallback(() => {
    if (isBrowser) {
      window.addEventListener("mousemove", pointerUpdate);
      window.addEventListener("wheel", wheelUpdate);
    }
  }, []);

  const removeMoveListener = useCallback(() => {
    if (isBrowser) {
      window.removeEventListener("mousemove", pointerUpdate);
      window.removeEventListener("wheel", wheelUpdate);
    }
  }, []);

  useEffect(() => {
    if (move) {
      addMoveListener();
    } else {
      removeMoveListener();
    }

    return () => removeMoveListener();
  }, [move]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const moveX = mouseX.current * 0.002;
    const moveY = mouseY.current * 0.003;
    camera.rotation.x = MathUtils.lerp(
      camera.rotation.x,
      Math.cos(t / 2) / 8 + moveY,
      0.1
    );

    camera.rotation.y = MathUtils.lerp(
      camera.rotation.y,
      Math.sin(t / 2) / 8 + moveX,
      0.1
    );

    camera.rotation.z = MathUtils.lerp(
      camera.rotation.z,
      Math.sin(t / 4) / 2,
      0.1
    );

    // camera.position.z -= deltaY.current * 0.01;
    // camera.position.y -= deltaY.current * 0.01;
    camera.updateProjectionMatrix();
  });
  return (
    <group ref={group}>
      {cord.map(([p1, p2, p3], i) => (
        <points key={i} position={[p1, p2, p3]}>
          <sphereBufferGeometry args={[0.3]}>
            <pointsMaterial color={new Color("#c87575")} />
          </sphereBufferGeometry>
        </points>
      ))}
    </group>
  );
};

export default StarsPoints;
