"use client"

// npm
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";

// components
import RoundBtn from "../../components/btns/roundBtn";

//functions
import { onPanStart, onPanEnd, onClick, setDots } from "./functions";

// styles
import "./slider.css";

interface props<T>{
    children:React.ReactNode;
    className?:string;
    panStart?:() => T;
    panEnd?:() => T;
    range:{
        start:number;
        end:number;
    };
    ref?:React.Ref<HTMLDivElement> | undefined;
    step?:number;
    gap?:number;
}

export default function Slider<T>({children,className,panStart,panEnd,range,ref,step,gap}:props<T>) {

    //react var
    const [x, setX] = useState(0);
    let index = useRef(0);
    const container = useRef<HTMLDivElement>(null);

    const dots = setDots(range.end + 1).map((param,index) => <span key={index} className={param}></span>);

    let isPan = false;

    const args = {
        pos:false,
        range:range,
        index:index,
        setPos:setX,
        container:container.current,
        step:step,
        gap:gap
    };

    useEffect(() => {
        if(gap){
            setX(window.innerWidth <= 430 ? gap : 0);
        }
    },[gap])

    //handles
    const handlePanStart = (event:PointerEvent,info:PanInfo) => {
        panStart && panStart();
        const pos = info.delta.x > 0;
        args.pos = pos;

        onPanStart({info,isPan,args});
    }

    const handlePanEnd = () => {
        panEnd && panEnd();
        isPan = onPanEnd();
    }

    return (
        <div className={`slider ${className}`}>
            <div className="top">
                <RoundBtn 
                    icon="arrow" 
                    size="m" 
                    className="arrow left rotate-back" 
                    onClick={() => {
                        args.pos = true;
                        onClick(args);
                    }} 
                />
                <div className="content" ref={ref}>
                    <motion.ul
                        animate={{ x }} 
                        onPanStart={handlePanStart} 
                        onPanEnd={handlePanEnd} 
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="container"
                    >
                        {children}
                    </motion.ul>
                </div>
                <RoundBtn 
                    icon="arrow"
                    size="m" 
                    className="arrow right" 
                    onClick={(e) => {
                        onClick(args);
                    }}
                />
            </div>
            <div className="bottom" ref={container}>
                {dots}
            </div>
        </div>
    );
}
