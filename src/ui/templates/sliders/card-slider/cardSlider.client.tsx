"use client"

//npm
import { useState, useRef, useEffect } from "react";

//components
import ProjectCard from "../../../components/cards/projectCard";
import Slider from "../slider";

//styles
import "./cardSlider.css";

interface props{
    content:{
        color: string;
        title: string;
        thumbnail: {
            id: number;
            path: string;
            alt: string;
            width: number;
            height: number;
        };
        tags: {
            id: number;
            name: string;
            slug: string;
        }[];
        href: string;
    }[];
}

export default function CardSliderContent({content}:props){

    const target = useRef<HTMLDivElement>(null);
    const [step,setStep] = useState({
        max:0,
        length:0
    });

    const [isClickable,setIsClickable] = useState(true);
    const projectCardsEl = content.map((param,index) => (
        <li key={index}>
            <ProjectCard 
                isClickable={isClickable} 
                color={param.color} 
                title={param.title}
                thumbnail={param.thumbnail}
                href={param.href}
                tags={param.tags}
            />
        </li>
    ))

    useEffect(() => {
        const projectCount = content.length;
        const step = content.length > 0 ? content.length - 1 : 0;
        const width = (projectCount * 400) + (step * 20);
        const stepLength = window.innerWidth;
        setStep({
            length:stepLength,
            max:Math.floor(width / stepLength) - 1
        });
    },[])

    return(
        <Slider ref={target} step={step.length} range={{start:0,end:step.max}} className="card-slider" panStart={() => {setIsClickable(false)}} panEnd={() => {setIsClickable(true)}} >
            {projectCardsEl}
        </Slider>
    )
}