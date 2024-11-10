import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Laptop(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./laptop.gltf')
  const { actions,names } = useAnimations(animations, group)
  console.log(names)
  
  useEffect(()=>{
    actions[names[0]].reset().fadeIn(0.5).play();

  },[]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.918}>
          <group name="laptop_leatherfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="pCylinder1"
                  position={[0, 0.192, -1.15]}
                  rotation={[-0.384, 0, Math.PI / 2]}
                  scale={[0.075, 1.5, 0.075]}>
                  <mesh
                    name="pCylinder1_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder1_phong1_0.geometry}
                    material={materials.phong1}
                  />
                </group>
                <group
                  name="pCylinder3"
                  position={[1.654, 0.192, -1.15]}
                  rotation={[-Math.PI / 9, 0, Math.PI / 2]}
                  scale={[0.075, 0.15, 0.075]}>
                  <mesh
                    name="pCylinder3_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder3_phong1_0.geometry}
                    material={materials.phong1}
                  />
                  <group
                    name="pCube134"
                    position={[17.195, 11.027, -2.966]}
                    rotation={[0, 0.14, -Math.PI / 2]}
                    scale={[23, 26, 0.133]}>
                    <mesh
                      name="pCube134_blinn1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube134_blinn1_0.geometry}
                      material={materials.blinn1}
                    />
                  </group>
                  <group name="pCylinder2" position={[0, 22.053, 0]}>
                    <mesh
                      name="pCylinder2_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCylinder2_phong1_0.geometry}
                      material={materials.phong1}
                    />
                  </group>
                  <group
                    name="pCube4"
                    position={[15.072, 11.027, -2.725]}
                    rotation={[0, -1.431, -Math.PI / 2]}
                    scale={[24, 0.667, 32]}>
                    <mesh
                      name="pCube4_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube4_phong1_0.geometry}
                      material={materials.phong1}
                    />
                  </group>
                </group>
                <group name="pCube6" position={[-1.743, 0.15, 0.365]} scale={[0.1, 0.01, 0.08]}>
                  <mesh
                    name="pCube6_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube6_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                </group>
                <group name="pCube7" position={[1.743, 0.15, 0.365]} scale={[0.1, 0.01, 0.08]}>
                  <mesh
                    name="pCube7_phong3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube7_phong3_0.geometry}
                    material={materials.phong3}
                  />
                </group>
                <group name="pCube8" position={[1.743, 0.15, 0.128]} scale={[0.1, 0.01, 0.08]}>
                  <mesh
                    name="pCube8_phong3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube8_phong3_0.geometry}
                    material={materials.phong3}
                  />
                </group>
                <group name="group1">
                  <group name="pCube3" position={[-1.62, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube3_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube3_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube13" position={[-1.44, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube13_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube13_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube14" position={[-1.26, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube14_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube14_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube15" position={[-1.08, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube15_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube15_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube16" position={[-0.9, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube16_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube16_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube17" position={[-0.72, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube17_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube17_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube18" position={[-0.54, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube18_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube18_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube19" position={[-0.36, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube19_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube19_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube20" position={[-0.18, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube20_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube20_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube21" position={[0, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube21_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube21_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube22" position={[0.18, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube22_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube22_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube23" position={[0.36, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube23_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube23_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube24" position={[0.54, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube24_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube24_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube25" position={[0.72, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube25_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube25_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube26" position={[0.9, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube26_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube26_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube27" position={[1.08, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube27_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube27_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube28" position={[1.26, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube28_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube28_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube29" position={[1.44, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube29_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube29_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube30" position={[1.62, 0.185, -0.63]} scale={[0.1, 0.05, 0.075]}>
                    <mesh
                      name="pCube30_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube30_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                </group>
                <group name="group2">
                  <group name="pCube5" position={[-1.62, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube5_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube5_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube31" position={[-1.44, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube31_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube31_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube32" position={[-1.26, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube32_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube32_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube33" position={[-1.08, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube33_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube33_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube34" position={[-0.9, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube34_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube34_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube35" position={[-0.72, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube35_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube35_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube36" position={[-0.54, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube36_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube36_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube37" position={[-0.36, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube37_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube37_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube38" position={[-0.18, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube38_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube38_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube39" position={[0, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube39_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube39_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube40" position={[0.18, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube40_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube40_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube41" position={[0.36, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube41_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube41_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube42" position={[0.54, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube42_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube42_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube43" position={[0.72, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube43_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube43_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube113" position={[0.99, 0.185, -0.43]} scale={[0.3, 0.05, 0.1]}>
                    <mesh
                      name="pCube113_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube113_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube45" position={[1.26, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube45_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube45_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube46" position={[1.44, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube46_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube46_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube47" position={[1.62, 0.185, -0.43]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube47_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube47_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                </group>
                <group name="group3">
                  <group name="pCube112" position={[-1.57, 0.185, -0.23]} scale={[0.2, 0.05, 0.1]}>
                    <mesh
                      name="pCube112_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube112_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube76" position={[-1.36, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube76_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube76_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube75" position={[-1.18, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube75_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube75_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube74" position={[-1, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube74_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube74_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube73" position={[-0.82, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube73_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube73_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube72" position={[-0.64, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube72_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube72_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube71" position={[-0.46, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube71_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube71_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube70" position={[-0.28, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube70_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube70_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube69" position={[-0.1, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube69_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube69_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube68" position={[0.08, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube68_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube68_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube67" position={[0.265, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube67_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube67_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube66" position={[0.44, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube66_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube66_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube65" position={[0.62, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube65_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube65_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube64" position={[0.8, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube64_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube64_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube116" position={[1.03, 0.185, -0.13]} scale={[0.2, 0.05, 0.3]}>
                    <mesh
                      name="pCube116_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube116_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube50" position={[1.26, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube50_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube50_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube49" position={[1.44, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube49_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube49_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube48" position={[1.62, 0.185, -0.23]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube48_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube48_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                </group>
                <group name="group4">
                  <group
                    name="pCube111"
                    position={[-1.53, 0.185, -0.03]}
                    scale={[0.275, 0.05, 0.1]}>
                    <mesh
                      name="pCube111_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube111_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube89" position={[-1.28, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube89_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube89_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube88" position={[-1.1, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube88_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube88_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube87" position={[-0.92, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube87_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube87_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube86" position={[-0.74, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube86_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube86_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube85" position={[-0.56, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube85_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube85_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube84" position={[-0.38, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube84_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube84_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube83" position={[-0.2, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube83_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube83_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube82" position={[-0.02, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube82_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube82_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube81" position={[0.16, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube81_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube81_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube80" position={[0.34, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube80_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube80_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube79" position={[0.52, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube79_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube79_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube78" position={[0.7, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube78_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube78_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube77" position={[0.88, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube77_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube77_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube53" position={[1.26, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube53_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube53_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube52" position={[1.44, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube52_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube52_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube51" position={[1.62, 0.185, -0.03]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube51_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube51_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                </group>
                <group name="group5">
                  <group name="pCube110" position={[-1.58, 0.185, 0.17]} scale={[0.175, 0.05, 0.1]}>
                    <mesh
                      name="pCube110_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube110_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube103" position={[-1.38, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube103_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube103_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube101" position={[-1.2, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube101_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube101_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube100" position={[-1.02, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube100_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube100_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube99" position={[-0.84, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube99_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube99_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube98" position={[-0.66, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube98_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube98_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube97" position={[-0.48, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube97_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube97_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube96" position={[-0.3, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube96_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube96_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube95" position={[-0.12, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube95_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube95_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube94" position={[0.06, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube94_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube94_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube93" position={[0.24, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube93_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube93_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube92" position={[0.42, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube92_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube92_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube91" position={[0.6, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube91_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube91_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube114" position={[0.84, 0.185, 0.17]} scale={[0.27, 0.05, 0.1]}>
                    <mesh
                      name="pCube114_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube114_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube60" position={[1.08, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube60_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube60_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube56" position={[1.26, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube56_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube56_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube55" position={[1.44, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube55_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube55_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube54" position={[1.62, 0.185, 0.17]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube54_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube54_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                </group>
                <group name="group6">
                  <group name="pCube109" position={[-1.58, 0.185, 0.37]} scale={[0.175, 0.05, 0.1]}>
                    <mesh
                      name="pCube109_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube109_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube102" position={[-1.38, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube102_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube102_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube104" position={[-1.2, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube104_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube104_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube105" position={[-1.02, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube105_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube105_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube117" position={[-0.39, 0.185, 0.37]} scale={[1, 0.05, 0.1]}>
                    <mesh
                      name="pCube117_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube117_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube108" position={[0.24, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube108_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube108_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube107" position={[0.42, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube107_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube107_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube115" position={[0.66, 0.185, 0.37]} scale={[0.22, 0.05, 0.1]}>
                    <mesh
                      name="pCube115_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube115_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube62" position={[0.9, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube62_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube62_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube61" position={[1.08, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube61_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube61_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube59" position={[1.26, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube59_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube59_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube58" position={[1.44, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube58_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube58_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="pCube57" position={[1.62, 0.185, 0.37]} scale={[0.1, 0.05, 0.1]}>
                    <mesh
                      name="pCube57_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube57_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                </group>
                <group name="pCube131">
                  <mesh
                    name="pCube131_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube131_phong1_0.geometry}
                    material={materials.phong1}
                  />
                </group>
                <group
                  name="pCube132"
                  position={[-1.743, 0.139, -0.263]}
                  scale={[0.1, 0.005, 0.04]}>
                  <mesh
                    name="pCube132_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube132_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                </group>
                <group
                  name="pCylinder7"
                  position={[-1.235, 0.054, -1.118]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.01, 0.05, 0.01]}>
                  <mesh
                    name="pCylinder7_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder7_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                </group>
                <group name="pCube133">
                  <mesh
                    name="pCube133_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube133_phong1_0.geometry}
                    material={materials.phong1}
                  />
                </group>
                <group name="group7">
                  <group
                    name="pCube119"
                    position={[1.17, -0.005, 0.9]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.5, 0.02, 0.1]}>
                    <mesh
                      name="pCube119_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube119_phong1_0.geometry}
                      material={materials.phong1}
                    />
                  </group>
                  <group
                    name="pCube120"
                    position={[-1.17, -0.005, -0.78]}
                    rotation={[0, 0, -Math.PI]}
                    scale={[-0.65, -0.026, -0.13]}>
                    <mesh
                      name="pCube120_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube120_phong1_0.geometry}
                      material={materials.phong1}
                    />
                  </group>
                  <group
                    name="pCube121"
                    position={[1.17, -0.005, -0.78]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.65, 0.026, 0.13]}>
                    <mesh
                      name="pCube121_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube121_phong1_0.geometry}
                      material={materials.phong1}
                    />
                  </group>
                  <group
                    name="pCube118"
                    position={[-1.17, -0.005, 0.9]}
                    rotation={[0, 0, -Math.PI]}
                    scale={[-0.5, -0.02, -0.1]}>
                    <mesh
                      name="pCube118_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube118_phong1_0.geometry}
                      material={materials.phong1}
                    />
                  </group>
                </group>
                <group name="pCube135" position={[0, 0.195, 0.765]} scale={[0.7, 0.001, 0.4]}>
                  <mesh
                    name="pCube135_phong4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube135_phong4_0.geometry}
                    material={materials.phong4}
                  />
                </group>
                <group name="pCube136" position={[1.18, 0.2, -0.921]} scale={[0.2, 0.01, 0.05]}>
                  <mesh
                    name="pCube136_phong2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube136_phong2_0.geometry}
                    material={materials.phong2}
                  />
                </group>
                <group
                  name="pCube137"
                  position={[1, 0.2, -0.921]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.1, -0.01, -0.05]}>
                  <mesh
                    name="pCube137_phong2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube137_phong2_0.geometry}
                    material={materials.phong2}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./laptop.gltf')