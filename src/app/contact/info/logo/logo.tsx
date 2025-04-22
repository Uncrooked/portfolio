
//npm
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

//components
import Model from "@/ui/components/3D/model/model";

//type
import type { Group } from "three";

export default function Logo3d(){

    const ref = useRef<Group>(null);
    useFrame(() => {
            ref.current?.rotateY(0.01);
        })

    return(
        <Model path="https://leomurail.digital/assets/models/portfolio/logo.glb" ref={ref}/>
    )
}