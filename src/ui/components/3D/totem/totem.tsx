//npm
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

//components
import Model from "../model/model";

//types
import type { Vector3 } from "three";
import { Group, MeshStandardMaterial } from "three";
import type { StateProps } from "@/app/about/totems-part/totemsPart";

interface props{
    value:{ scale?: Vector3 | undefined; position?: Vector3 | undefined; rotation?: [number, number, number] | undefined; };
    index:number;
    selected:number | null;
    states:StateProps;
    setStates:React.Dispatch<React.SetStateAction<{
        hover: boolean;
        click: boolean;
    }[]>>;
    oneIsShown:boolean;
}

export default function Totem({value,index,setStates,selected,states,oneIsShown}:props){

    const totem = useRef<Group>(null);
    const light = useRef<MeshStandardMaterial>(null);
    const anim = useRef({
        xPose:0,
        zPose:0,
        scale:1,
        opacity:0
    })
    const xValue = value.position?.x;

    useFrame(() => {

        //click anim
        if(totem.current && (xValue || xValue == 0)){
            if(states.click){
                anim.current.scale += anim.current.scale < 2 ? 0.05 : 0;
                anim.current.zPose -= anim.current.zPose > -4 ? 0.2 : 0;
                anim.current.xPose += anim.current.xPose > ((-15 - xValue) / 2) ? ((-15 - xValue)/2) / 20 : 0;
            }else if(!states.click && index == selected){
                anim.current.scale -= anim.current.scale > 1 ? 0.05 : 0;
                anim.current.zPose += anim.current.zPose < 0 ? 0.2 : 0;
                anim.current.xPose -= anim.current.xPose < 0 ? ((-15 - xValue)/2) / 20 : 0;
            }

            totem.current.scale.set(anim.current.scale,anim.current.scale,anim.current.scale); 
            totem.current.position.setY(anim.current.zPose);
            totem.current.position.setX(anim.current.xPose);
        }
    
        //light anim
        if(light.current){
            if(anim.current.opacity < 1 && states.hover){
                anim.current.opacity += 0.1;
                light.current.opacity = anim.current.opacity;
                totem.current?.rotateY(0.06);
            }else if(anim.current.opacity > 0 && !states.hover){
                anim.current.opacity -= 0.1;
                light.current.opacity = anim.current.opacity;
                totem.current?.rotateY(-0.06);
            }
        }
    })
        

    const visibility = oneIsShown ? index == selected ? true : false : true;

    return(
        <>
            <group
                key={index}
                onPointerOver={() => {setStates(prev => prev.map((item,i) => i == index ? {...item, hover:true} : item))}}
                onPointerOut={() => {setStates(prev => prev.map((item,i) => i == index ? {...item, hover:false} : item))}}
                visible={visibility}
            >
                <Model
                ref={totem}
                path={"https://leomurail.fr/assets/models/portfolio/totem-" + (index + 1) + ".glb"}
                args={value}
                />
                <mesh scale={[0.3,0.3,0.3]} position={[value.position ? value.position.x : 0 , 8, 0]}>
                    <sphereGeometry/>
                    <meshStandardMaterial emissive={'#FFFFFF'} emissiveIntensity={5} visible={ oneIsShown ? !visibility : true} opacity={0} transparent={true} ref={light}/>
                </mesh>
            </group>
        </>
    )
}