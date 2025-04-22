"use client"

//npm
import Logo3d from "./logo/logo";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, SpotLight } from "@react-three/drei";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./info.css";

export default function Info(){
    return(
        <div className="right info">
            <Canvas>
                <Logo3d/>
                <directionalLight position={[-5,20,20]} color="red" intensity={5} />
                <SpotLight position={[0,0,50]} color="#FF4DA7" intensity={5} />
                <ambientLight color="#FF4DA7" intensity={5} />
                <PerspectiveCamera makeDefault position={[0,0,20]} near={0.1} far={5000}/>
                <OrbitControls enableZoom={false}/>
            </Canvas>
            <h2 className={fonts.orbitron.className}>Nantes</h2>
            <p className="email-info">contact@leomurail.fr</p>
        </div>
    )
}