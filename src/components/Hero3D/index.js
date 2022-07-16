import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Shadow } from '@react-three/drei'
import { Suspense } from "react";

import DanielHead from "../DanielHead";
import Sphere from '../Sphere';

import styles from './styles.module.css';

function Hero3D() {

  return (
    <div className={styles.hero3DContainer}>
      <Canvas camera={{ fov: 75, position: [0, 0, 6] }}>
        <Suspense fallback={null}>
          <ambientLight />

          <OrbitControls
            enablePan={false} 
            enableZoom={false} 
            enableRotate={true} 
            minAzimuthAngle={-Math.PI / 3.5}
            maxAzimuthAngle={Math.PI / 3.5}
            minPolarAngle={Math.PI * .25}
            maxPolarAngle={Math.PI * .55}
            // minDistance={7}               
            // maxDistance={9}               
          />

          <Environment preset="sunset" background={false} />
          
          <DanielHead position={[0, 0, 0]}/>

          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={1} model3D={"/assets/models/html.glb"} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={2} model3D={"/assets/models/css.glb"} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={3} model3D={"/assets/models/javascript.glb"} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={4} model3D={"/assets/models/typescript.glb"} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={5} model3D={"/assets/models/react.glb"} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={6} model3D={"/assets/models/github.glb"} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={7} model3D={"/assets/models/figma.glb"} />

          <Shadow 
            position-y={-1.79} 
            rotation-x={-Math.PI / 2} 
            opacity={0.2} 
            scale={[2, 2, 2]} 
          />

          <pointLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Hero3D;

