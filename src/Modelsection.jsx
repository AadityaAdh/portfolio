import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Computer } from './Computer';
import { Laptop } from './Laptop';


function Model() {
  const { scene } = useGLTF('public/models/computer.gltf');
  return <primitive object={scene} />;
}

export default function Modelsection() {
  return (
    <Canvas camera={{position:[-1,1,2.5],fov:2}}>
        <Stage environment="city" intensity={0.6}>
            <Laptop/>

        </Stage>
        
        <OrbitControls enableZoom={false}/>
      
    </Canvas>
  );
}
