"use client"
//npm
import { useMotionValue, useMotionValueEvent, useTransform, motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

//components
import Icon from "@/ui/components/illu/icon";
import Word from "./word/word";

//functions && var
import {setIndexTop, setIconDisplay } from "./functions";
import {delay, styles, sentence } from "./constants";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./sentencePart.css";

export default function SentencePart(){

    //element
    const sentencePartEl = useRef<HTMLElement | null>(null);
    const iconsEl = useRef<HTMLDivElement | null>(null);

    //motion framer
    const indexTop = useMotionValue(0);
    const {scrollY} = useScroll();

    const rawRotate = useTransform(indexTop, [0, 2, 5, 8], [0, 360, 720, 1080]);
    const rotate = useSpring(rawRotate, {
        stiffness: 50,
        damping: 10
    });

    //scroll event
    useMotionValueEvent(scrollY,"change",() => {
        const current = sentencePartEl.current && setIndexTop(sentencePartEl.current,sentence.nbWords,delay);
        const icons = iconsEl.current?.getElementsByClassName("icon");

        if(current && icons){
            indexTop.set(current);
            setIconDisplay(current,icons);
        }
    })

    const wordsEl = sentence.words.map((param,index) => {
        return <Word key={index} styles={styles} value={param} index={index} indexTop={indexTop}/>
    })

    //comp list
    const sentenceEl = <ul className="sentence">{wordsEl}</ul>;

    return(
        <motion.section id="sentence-part" ref={sentencePartEl}>
            <h2 className={fonts.orbitron.className}>En une phrase</h2>
            {sentenceEl}
            <motion.div 
            style={{rotate,alignSelf:"end"}}
            ref={iconsEl}
            >
                <Icon picked="l" color="var(--white-color)" size={200} />
                <Icon picked="e" color="var(--white-color)" size={200} />
                <Icon picked="o" color="var(--white-color)" size={200} />
            </motion.div>
        </motion.section>
    )
}