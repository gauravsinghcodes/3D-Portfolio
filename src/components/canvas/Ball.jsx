import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, position, scale = 2.75 }) => {
  const [decal] = useTexture([imgUrl || "/tech/javascript.png"]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={scale} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ technologies }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      camera={{ position: [0, 0, 30], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        {technologies.map((tech, i) => {
          // Honeycomb layout logic for desktop (5 columns)
          const columns = 5;
          const row = Math.floor(i / columns);
          const col = i % columns;

          const xGap = 7;
          const yGap = -6;
          const xStart = -14;
          const yStart = 9;

          const xOffset = row % 2 === 0 ? 0 : 3.5;
          const x = (col * xGap) + xStart + xOffset;
          const y = (row * yGap) + yStart;

          return (
            <Ball
              key={tech.name}
              imgUrl={tech.icon}
              position={[x, y, 0]}
              scale={2.75}
            />
          );
        })}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;