
//npm
import { useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";

//components
import Model from "@/ui/components/3D/model/model";
import LoaderThree from "@/ui/components/3D/loader/loaderThree";

//type
import type { Group } from "three";

export default function Logo3d(){

    const ref = useRef<Group>(null);
    useFrame(() => {
            ref.current?.rotateY(0.01);
        })

    return(
        <Suspense fallback={<LoaderThree/>}>
            <Model path="https://leomurail.fr/assets/models/portfolio/logo.glb" ref={ref}/>
        </Suspense>
    )
}