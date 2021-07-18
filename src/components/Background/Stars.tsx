import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import React, { useMemo } from "react";

export default function Stars({ count = 1000 }) {
  const { camera } = useThree();
  const positions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const r = 4000;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x =
        r * Math.cos(theta) * Math.sin(phi) + (-2000 + Math.random() * 4000);
      const y =
        r * Math.sin(theta) * Math.sin(phi) + (-2000 + Math.random() * 4000);
      const z = r * Math.cos(phi) + (-1000 + Math.random() * 2000);

      positions.push(x);
      positions.push(y);
      positions.push(z);
    }
    return new Float32Array(positions);
  }, [count]);

  useFrame(() => {
    // camera.rotation.y = r;
    // camera.fov += 0.1;
    // console.log(camera.fov);
    // camera.far -= 10;
    // console.log(camera.far);
    camera.rotation.x += 0.001;
    camera.rotation.y += 0.002;

    // console.dir(camera.quaternion);
    camera.updateProjectionMatrix();
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={15} sizeAttenuation color="white" fog={false} />
    </points>
  );
}
