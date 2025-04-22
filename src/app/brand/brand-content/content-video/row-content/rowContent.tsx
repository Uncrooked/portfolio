//npm
import Image from "next/image";

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
            <iframe src={iframe} height={600}></iframe>
        </div>
    )
}