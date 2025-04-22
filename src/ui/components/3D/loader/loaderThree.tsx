//npm
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export default function LoaderThree(){
    const target = useRef<Mesh>(null);
    useFrame(() => {
        target.current?.rotateZ(0.1);
    })
    return(
        <mesh ref={target}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0045F3" />
        </mesh>
    )
}