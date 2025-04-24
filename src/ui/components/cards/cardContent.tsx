//npm
import Image from "next/image";
import { Suspense } from "react";

//components
import Tag from "../tags/tag";
import Btn from "../btns/btn";
import Icon from "../illu/icon";

//lib
import { fonts } from "@/lib/fonts";

export interface props {
    size?: "m" | "l";
    color?:string;
    title?:string;
    tags?: {
        id:number;
        name:string;
        slug:string;
    }[],
    thumbnail?: {
        id:number;
        alt:string;
        path:string;
        width:number;
        height:number;
    }
}

export default function CardContent({
    size,
    color = "blue",
    title = "Country Visualizer",
    tags = [
        {
            id:1,
            name:"Développement web",
            slug:"web-developmed",
        }
    ],
    thumbnail = {
        id:1,
        path:"/img/thumbnails/country-visualizer.webp",
        alt:"placeholder alt",
        width:360,
        height:300
    }
}: props){

    const tagsEl = tags.map((param,index) => (<li key={index}><Tag>{param.name}</Tag></li>));

    return(
        <article className={`project-card ${size}-size`}>
            <div className="container-img top">
                <Image draggable="false" src={thumbnail.path} alt={thumbnail.alt} width={thumbnail.width} height={thumbnail.height} />
            </div>
            <div className="bottom">
                <div className="left">
                    <h3 className={`${fonts.orbitron.className} title`} >{title}</h3>
                    <div className="tags">
                        {tagsEl}
                    </div>
                </div>
                <Btn color={color}><Icon picked="eye" size={20}/></Btn>
            </div>
        </article>
    )
}