import React, { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface SceneContainerProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  controlsEnabled?: boolean;
}

const SceneContainer = ({
  children,
  className = "h-64 w-full",
  cameraPosition = [0, 0, 5],
  controlsEnabled = true,
}: SceneContainerProps) => {
  return (
    <div className={className}>
      <Canvas shadows camera={{ position: cameraPosition }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        {children}
        {controlsEnabled && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  );
};

export default SceneContainer;
