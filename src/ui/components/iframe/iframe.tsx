"use client"

//components
import SkeletonLoading from "../loading/skeleton-loading/skeletonLoading";

//styles
import "./iframe.css";

interface Props {
    src: string;
    width?: number;
    height: number;
}

export default function Iframe({ src, width, height }: Props) {

    return (
        <div className="iframe-container" style={{height:height}}>
            <SkeletonLoading height="600px" width="100%" borderRadius={20}/>
            <iframe 
                src={src} 
                width={width} 
                height={height} 
                style={{ border: "none" }}
            ></iframe>
        </div>
    );
}
