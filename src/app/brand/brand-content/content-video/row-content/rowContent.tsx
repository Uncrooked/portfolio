//npm
import Image from "next/image";

//components
import Iframe from "@/ui/components/iframe/iframe";

//styles
import "./rowContent.css";

interface props {
    img:string;
    iframe:string;
    reverse?:boolean;
}

export default function RowContent({img,iframe,reverse = false}:props){
    return(
        <div className={`row-content ${reverse && "reverse"}`}>
            <Image src={img} alt={`${img} du portfolio de Léo Murai`} width={450} height={450}/>
            <Iframe src={iframe} height={600}/>
        </div>
    )
}