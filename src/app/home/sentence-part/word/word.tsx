//npm
import { motion } from "motion/react";
import type { MotionValue } from "motion/react";

//functions
import { useMotionStyles } from "../hooks";

interface props {
    indexTop:MotionValue;
    styles:{
        weights:number[];
        colors:string[];
    };
    value:string;
    index:number;
}

export default function Word({index,indexTop,styles,value}:props){
    const [fontWeight,color] = useMotionStyles({index,indexTop,styles}); 
    return <motion.li key={index} className="word" style={{fontWeight,color}}>{value}</motion.li>
}