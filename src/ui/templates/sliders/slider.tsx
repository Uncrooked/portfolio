"use client"

// npm
import { useMotionValue, useAnimate } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";

// components
import RoundBtn from "../../components/btns/roundBtn";

// styles
import "./slider.css";

//utils
import { countToArray } from "./utils";

interface props<T>{
    children:React.ReactNode;
    className?:string;
    step:number;
    gap?:number;
    max:number;
}

export default function Slider<T>({children,className,step,gap,max}:props<T>) {

    const index = useRef(0);
    const [scope,animate] = useAnimate();
    const x = useMotionValue(0);
    let slides = countToArray(max,-step);
    const dotsContainer = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if(gap && step && max && window.innerWidth < 430){
            slides = countToArray(max,-step, gap);
            x.set(gap);
        }
    },[])

    function slide(left:boolean = false){
        if(left && index.current > 0){
            index.current--;
        }else if(max && !left && index.current < max - 1){
            index.current++;
        }

        const dotList = dotsContainer.current?.getElementsByClassName("dot");
        if(dotList){
            for(let dot of dotList){
                dot.classList.remove("current");
            }

            dotList[index.current].classList.add("current")
        }

        animate(
            scope.current, 
            { 
                x: slides[index.current] + "px"
            }, 
            {
                type: "tween",
                duration: 0.3
            }
        );
    }

    function handlePan(info: PanInfo){
        const left = info.delta.x >= 0;
        if(left){
            slide(true);
        }else{
            slide();
        }
    }

    const dots = [];
    if(max){
        for(let i = 0; i < max; i++){
            const dot = <li key={i} className={`dot ${i == 0 ? "current" : ""}`}></li>;
            dots.push(dot);
        }
    }

    return (
        <div className={`slider ${className}`}>
            <div className="top">
                <RoundBtn 
                    icon="arrow" 
                    size="m" 
                    className="arrow left rotate-back" 
                    onClick={() => slide(true)} 
                />
                <div className="content">
                    <motion.ul
                        style={{x}}
                        onPanStart={(_,info) => {handlePan(info)}}
                        ref={scope}
                        className="container"
                    >
                        {children}
                    </motion.ul>
                </div>
                <RoundBtn 
                    icon="arrow"
                    size="m" 
                    className="arrow right" 
                    onClick={() => slide()} 
                />
            </div>
            <ul className="bottom" ref={dotsContainer}>
                {dots}
            </ul>
        </div>
    );
}
