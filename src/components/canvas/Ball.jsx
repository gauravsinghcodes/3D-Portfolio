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
  const [decal] = useTexture([imgUrl || "/tech/javascript.png"]); // Safety fallback

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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      camera={{ position: [0, 0, isMobile ? 70 : 30], fov: isMobile ? 45 : 45 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        {technologies.map((tech, i) => {
          // Responsive honeycomb layout
          const columns = isMobile ? 4 : 5;
          const row = Math.floor(i / columns);
          const col = i % columns;

          // Optimized spacing for mobile to see all 20 skills
          const xGap = isMobile ? 6 : 7;
          const yGap = isMobile ? -8 : -6;
          const xStart = isMobile ? -10.5 : -14;
          const yStart = isMobile ? 20 : 9;

          const xOffset = row % 2 === 0 ? 0 : (isMobile ? 3 : 3.5);
          const x = (col * xGap) + xStart + xOffset;
          const y = (row * yGap) + yStart;

          return (
            <Ball
              key={tech.name}
              imgUrl={tech.icon}
              position={[x, y, 0]}
              scale={isMobile ? 2.4 : 2.75}
            />
          );
        })}
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;