import { RefObject } from "react";

export function showSkill(skill:RefObject<HTMLElement|null>){
    skill.current?.classList.toggle("developped");
}