import React, { useMemo } from "react";
import { useRef } from "react";

type CircleProps = {
  count?: number;
};

const Circle: React.FC<CircleProps> = ({ count = 1000 }) => {
  const group = useRef(null);
  const pos = useMemo(() => {
    return new Array(count)
      .fill(0)
      .map(() => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 1000 - 400,
      ]);
  }, []);
  console.log(pos);

  return (
    <group ref={group}>
      {pos.map(([p1, p2, p3], i) => {
        <mesh key={i} position={[p1, p2, p3]}>
          <sphereBufferGeometry args={[0.2, 10, 10]}>
            <pointsMaterial color="white" />
          </sphereBufferGeometry>
        </mesh>;
      })}
      {/* <mesh>
        <sphereBufferGeometry args={[0.1, 10, 10]}>
          <pointsMaterial color="white" />
        </sphereBufferGeometry>
      </mesh>
      <mesh position={[1, 1, -10]}>
        <sphereBufferGeometry args={[0.1, 10, 10]}>
          <pointsMaterial color="white" />
        </sphereBufferGeometry>
      </mesh> */}
    </group>
  );
};

export default Circle;
