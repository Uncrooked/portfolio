import "./tag.css";

export default function Tag({children,style= "normal"}:{children:React.ReactNode;style: "normal" | "glass"}){
    return <span className={"tag " + style}>{children}</span>
}