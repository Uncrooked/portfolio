//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./banner.css";

interface props {
    title:string;
    subTitle:string;
    bgColor:string;
}

export default function Banner({title,subTitle,bgColor}:props){
    
    const cssVar = {"--banner-bg":`url(/img/backgrounds/background-${bgColor}.webp)`} as React.CSSProperties;

    return(
        <section id="banner" style={cssVar} className="no-max-width">
            <div className="desktop">
                <h1 className={`title ${fonts.orbitron.className}`}>{title}</h1>
                <p className="sub-title">{subTitle}</p>
            </div>
        </section>
    )
}