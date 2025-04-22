//types
import type { MotionValue } from "motion";

//hooks
import { useTransform } from "motion/react";

interface motionStylesProps {
    index:number;
    indexTop:MotionValue;
    styles:{
        weights:number[];
        colors:string[];
    }
}

export function useMotionStyles({index,indexTop,styles}:motionStylesProps) : MotionValue[]{
    const range = [index,index + 1];
    const fontWeight = useTransform(indexTop,range,styles.weights);
    const color = useTransform(indexTop,range,styles.colors);

    return [fontWeight,color];
}