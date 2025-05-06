"use client"

//npm
import Link from "next/link";

//components
import CardContent from "./cardContent";

//styles
import "./projectCard.css";

//types
import type { props } from "./cardContent";

interface cardProps extends props{
    isClickable?: boolean;
    href?:string;
}

export default function ProjectCard({
    size = "m", 
    isClickable = true,
    color = "blue", 
    title,
    thumbnail,
    tags,
    href = "https://leomurail.com"
}:cardProps){

    const args = {
        size:size,
        color:color,
        title:title,
        tags:tags,
        thumbnail:thumbnail
    }

    const content = isClickable ?
        <Link href={href || "/"} onClick={() => {console.log("click",isClickable)}} className="project-card-parent" draggable="false">
            <CardContent {...args}/>
        </Link> :
        <div onClick={() => {console.log("click",isClickable)}} className="project-card-parent" draggable="false">
            <CardContent {...args}/>
        </div>

    return(content)
}