import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const clock = new THREE.Clock()

export default function Sphere(props) {
    const mesh = useRef();

    useFrame(() => {
        const elapsedTime = clock.getElapsedTime()
        mesh.current.rotation.y = -89.5;

        if(props.position) {
            setTimeout(() => {
              const boxAngle = elapsedTime * 0.9
              mesh.current.position.x = Math.cos(boxAngle) * 3
              mesh.current.position.z = Math.sin(boxAngle) * 3
              mesh.current.position.y = Math.sin(elapsedTime * 2)
          }, props.second * 1000)   
        }
    })
    
    const gltf = useLoader(GLTFLoader, props.model3D);

    if(props.position) {
        return (
          <>
            <primitive 
                  object={gltf.scene} 
                  ref={mesh}
                  scale={.27}
                  position={props.position}
            />
          </>
        )
    }

    return null
}