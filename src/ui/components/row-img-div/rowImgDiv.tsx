//npm
import Image from "next/image";

//styles
import "./rowImgDiv.css";

interface props{
    title:string;
    desc:string;
    path:string;
    reverse?:boolean
}

export default function RowImgDiv({title,desc,path,reverse = false}:props){
    const descEl = desc.split("\n\n").map((param,index) => <p key={index} className="text-row">{param}</p>)
    return(
        <div className={"row-img-div " + (reverse && "reverse")}>
            <div className="left">
                <h3>{title}</h3>
                <div>{descEl}</div>
            </div>
            <Image src={path} alt="image du portfolio de Léo Murail" width={720} height={720} />
        </div>
    )
}