//npm
import {useRef, useEffect, useState} from "react";

//styles
import "./readMore.css";

interface props {
    children:React.ReactNode;
    height:number;
}

export default function ReadMore({children,height}:props){
    const target = useRef<HTMLDivElement|null>(null);
    const [isReadMore,setIsReadMore] = useState(true);
    const labels = ["[Lire plus...]","[Lire moins]"];
    
    useEffect(() => {
        const contentEl = target.current?.getElementsByClassName("content")[0];
        const btnEl = target.current?.getElementsByTagName("button")[0];

        if(contentEl && btnEl){
            btnEl.onclick = () => {
                contentEl.classList.toggle("develop");
                setIsReadMore(current => !current);
            }
        }
    },[])

    return(
        <div className="read-more" ref={target} style={{height:height + "px"}}>
            <div className="content" style={{height:height + "px"}}>
                {children}
            </div>
            <button className="read-more-btn">
                {isReadMore ? labels[0] : labels[1]}
            </button>
        </div>
    )
}