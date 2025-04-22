"use client"

// npm
import { useRef } from "react";
import { useScroll } from "motion/react";

// components
import JourneyContent from "./content/journeyContent";
import HScroll from "../anim/h-scroll/hScroll";

export default function JourneyPart() {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target
    });

    return (
        <HScroll height={3000} ref={target}>
            <JourneyContent scrollY={scrollYProgress} target={target} />
        </HScroll>
    );
}
