"use client"

// npm imports
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing';
import { useState, useRef, Suspense } from 'react';

// components
import Totem from '@/ui/components/3D/totem/totem';
import TotemsOverlay from './totems-overlay/totemsOverlay';
import LoaderThree from '@/ui/components/3D/loader/loaderThree';

//const
import { models, statesArray } from './constants';

//styles
import "./totemsPart.css";

export type StateProps = {
    hover: boolean;
    click: boolean;
}

export default function TotemsPart() {

    const selected = useRef<number>(null);
    const oneIsShown = useRef(false);
    const [allStates,setAllStates] = useState(statesArray);
    const modelsEl = models.map((param,index) => <Totem key={index} value={param} index={index} states={allStates[index]} setStates={setAllStates} selected={selected.current} oneIsShown={oneIsShown.current} />);

    return (
        <section id="totems-part" className="no-max-width">

            <Canvas style={{ width: '100%', height: '100vh' }} className="canvas">
                <Suspense fallback={<LoaderThree/>}>
                    {modelsEl}
                </Suspense>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 50]} color="white" intensity={1} />
                <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={30} near={0.1} far={500}/>
                <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={1} levels={9} intensity={1} />
                    <ToneMapping />
                </EffectComposer>
            </Canvas>

            <TotemsOverlay oneIsShown={oneIsShown} selected={selected} allStates={allStates} setAllStates={setAllStates} />
        
        </section>
    );
}