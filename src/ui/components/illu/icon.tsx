"use client"

//npm
import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

//components
import Loading from "../loading/loading";

//styles
import "./icon.css";

interface props {
    picked:string;
    color?:string;
    size?:number;
    onClick?:() => void;
}

export default function Icon({picked,color = "white" ,size = 20, onClick}:props){
    const [SvgIcon,setSvgIcon] = useState<React.ElementType<{width?:number,fill?:string}> | null>(null);
    
    useEffect(() => {
       const Icon = dynamic(() => import(`/public/img/icons/dynamics/${picked}.svg`), { ssr: false , loading: () => <Loading />,});
       setSvgIcon(() => Icon);
    },[picked]); 

    const iconProps : {width?:number,fill?:string} = {};

    if (color) iconProps.fill = color;
    if (size) iconProps.width = size;

    return (
        <i className="icon" onClick={onClick}>
            {SvgIcon ? (
                <Suspense fallback={<Loading />}>
                    <SvgIcon {...iconProps} />
                </Suspense>
            ) : (
                <Loading />
            )}
        </i>
    );
}