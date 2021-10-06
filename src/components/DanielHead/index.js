import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function DanielHead() {
    const mesh = useRef()
    const [up, setUp] = useState(true)
    const [clockWise, setClockWise] = useState(true)

    const daniel3D = useLoader(GLTFLoader, '/assets/models/daniel3DHead.glb')
   
    useFrame(() => {    
      if(up) {
        mesh.current.position.y += 0.001
      } else {
        mesh.current.position.y -= 0.001
      }

  
      if(Math.ceil(mesh.current.position.y) === 2) {
        setUp(false)  
      }
  
      if(Math.ceil(mesh.current.position.y) === 0) {
        setUp(true)  
      }
      
      if(clockWise) {
        mesh.current.rotation.y += 0.001
      } else {
        mesh.current.rotation.y -= 0.001
      }
  
      if(Math.round(mesh.current.rotation.y * 10) / 10 === 0.3) {
        setClockWise(false)  
      }
  
      if(Math.round(mesh.current.rotation.y * 10) / 10 === -0.3) {
        setClockWise(true)  
      }
    })
  
    return (
      <>
        <primitive object={daniel3D.scene} 
              ref={mesh}
              scale={.37}
        />
      </>
    );
  };
  
  