//npm
import { useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';
import { Group } from 'three';

interface props {
    path:string;
    args?:{
        scale?:Vector3;
        position?:Vector3;
        rotation?:[number,number,number];
    },
    ref?:React.RefObject<null | Group>;
}

export default function Model({path,args,ref}:props){
    
    // Use the useGLTF hook to load the model
    const glb = useGLTF(path);

    return(
        <group 
            scale={args?.scale} 
            rotation={args?.rotation} 
            position={args?.position}
        >
            <primitive object={glb.scene} ref={ref}/>
        </group>
    )
}