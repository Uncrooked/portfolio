//npm
import Image from "next/image";

//components
import Tag from "../tags/tag";
import Btn from "../btns/btn";
import Icon from "../illu/icon";

//css
import "./projectCard.css";

export interface props {
    portrait?:boolean;
    size?: "m" | "l";
    title?:string;
    tags?: {
        name:string;
        slug:string;
    }[];
    thumbnail?: {
        alt:string;
        path:string;
        width:number;
        height:number;
    };
    href:string;
}

export default function ProjectCard({
    portrait = false,
    size,
    title = "Country Visualizer",
    tags = [
        {
            name:"No tag",
            slug:"no-tag",
        }
    ],
    thumbnail = {
        path:"/img/thumbnails/country-visualizer.webp",
        alt:"placeholder alt",
        width:360,
        height:300
    },
    href = "https://leomurail.com"
}: props){

    const cssVar = {"--background-card-image": "url(" + thumbnail.path + ")"} as React.CSSProperties;

    const tagsEl = tags.map((param,index) => (<li key={index}><Tag style="glass">{param.name}</Tag></li>));

    return(
        <article className={`project-card ${size}-size ${portrait ? "portrait" : ""}`} style={cssVar}>
            <div className="card-layer">
                <div className="left">
                    <h4>{title}</h4>
                    <div className="card-tags">
                        {tagsEl}
                    </div>
                </div>
                <Btn color="glass" path={href}>Voir <Icon picked="eye"/></Btn>
            </div>
        </article>
    )
}