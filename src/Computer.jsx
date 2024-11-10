import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Computer(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./computer.gltf')
  const { actions,names } = useAnimations(animations, group)
  console.log(names)
  useEffect(()=>{
    actions[names[0]].reset().fadeIn(0.5).play();

  },[]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cube125_7"
                position={[-0.108, -0.055, 0.829]}
                rotation={[0.024, 0, 0]}
                scale={0.087}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Space}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.White_Keys_2}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.Shift_Arrow}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.White_Keys_1}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.White_Keys_7}
                />
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Black_Keys_1}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials['Arrow.001']}
                />
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.White_Keys_3}
                />
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.Black_Keys_5}
                />
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Black_keys_4}
                />
                <mesh
                  name="Object_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.Black_Keys_3}
                />
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.White_Keys_4}
                />
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Black_Keys_2}
                />
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.White_Keys_5}
                />
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials['Material.003']}
                />
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name="Plane002_8"
                position={[-0.467, -0.051, 0.575]}
                rotation={[0.057, 0, 0]}
                scale={2.637}>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.Polycarbonate_Case}
                />
              </group>
              <group
                name="Cylinder_9"
                position={[0.727, -0.007, 0.33]}
                rotation={[0.073, 0, 0]}
                scale={[2.609, 2.663, 2.609]}>
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.Alumunium_Knob}
                />
              </group>
              <group
                name="Plane005_10"
                position={[0.019, -0.124, 0.565]}
                rotation={[0.019, 0, 0]}
                scale={2.637}>
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials.Polycarbonate_Case}
                />
              </group>
              <group
                name="Empty003_11"
                position={[0.012, 0.063, 0.573]}
                rotation={[0.024, 0, 0]}
                scale={[0.837, 0.197, 0.361]}
              />
              <group
                name="Plane006_12"
                position={[-0.595, -0.143, 0.855]}
                rotation={[0.019, 0, 0]}
                scale={2.637}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Polycarbonate_Case}
                />
              </group>
              <group
                name="Plane010_13"
                position={[-0.726, -0.139, 0.343]}
                rotation={[0.037, 0, 0]}
                scale={2.637}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.Polycarbonate_Case}
                />
              </group>
              <group
                name="Plane012_14"
                position={[0.02, -0.055, 0.584]}
                rotation={[0.006, 0, 0]}
                scale={2.637}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.Plate_Metal}
                />
              </group>
              <group name="Cube230_15" position={[0.663, -0.131, 0.285]} scale={2.637}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.Polycarbonate_Case}
                />
              </group>
              <group
                name="monitor_18"
                position={[-0.007, 0.087, -0.594]}
                scale={[0.523, 0.1, 0.339]}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials['7355608']}
                />
                <mesh
                  name="Object_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials.black}
                />
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.blue_light}
                />
              </group>
              <group name="mouse_19" position={[1.912, 0, 0.558]} scale={[0.114, 0.107, 0.204]}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.black}
                />
                <mesh
                  name="Object_43"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43.geometry}
                  material={materials.blue_light}
                />
              </group>
              <group name="cpu_20" position={[-2.133, 0.997, -0.542]} scale={[0.438, 1, 1.09]}>
                <mesh
                  name="Object_45"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_45.geometry}
                  material={materials.black}
                />
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.blue_light}
                />
                <mesh
                  name="Object_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_47.geometry}
                  material={materials.Plastic}
                />
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials['Material.005']}
                />
                <mesh
                  name="Object_49"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49.geometry}
                  material={materials.Hitam}
                />
              </group>
              <group name="Plane001_22" position={[1.829, 0.009, 0.584]} scale={0.576}>
                <mesh
                  name="Object_51"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_51.geometry}
                  material={materials.Plastic}
                />
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.blue_light}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./computer.gltf')