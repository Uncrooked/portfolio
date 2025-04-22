"use client"

//npm
import { useRef } from "react";

//components
import Icon from "@/ui/components/illu/icon";
import RoundBtn from "@/ui/components/btns/roundBtn";
import SkillContent from "./skillContent";

//functions
import { showSkill } from "./functions";

//const
import { skills } from "../constant";

//styles
import "./skill.css";

interface props{
    picked: keyof typeof skills;
}

export default function Skill({picked}:props){

    const target = useRef<HTMLDivElement>(null);

    return(
        <div className="skill" onClick={() => showSkill(target)} ref={target}>
            <div className="content">
                <div className="container">
                    <div className="top">
                        <span className="skill-icon">
                            <Icon picked={picked} size={100}/>
                        </span>
                        <RoundBtn size="m" icon="arrow" />
                    </div>
                    <SkillContent picked={skills[picked]} />
                </div>
                <p className="desc-title">{skills[picked].title}</p>
            </div>
        </div>
    )
}