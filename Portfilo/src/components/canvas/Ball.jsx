import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  MarchingCube,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Box,
  Decal,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.10} />
      <directionalLight position={[0, 0, 5]} />
      <mesh receiveShadow scale={2.2}>
        <Box args={[1, 1]}>
          <meshBasicMaterial
            attach="material"
            map={decal}
            transparent
          />
        </Box>
      </mesh>
    </Float>
  );
};


const BallCanvas = ({ icon }) => {

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} rotateSpeed={1.5} autoRotate autoRotateSpeed={3}/>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
