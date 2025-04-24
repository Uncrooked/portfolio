//styles
import "./skeletonLoading.css";

interface props{
    width:string;
    height:string;
    borderRadius?:number;
    className?:string;
}

export default function SkeletonLoading({width,height,borderRadius = 0, className = ""}:props){
    const cssVar = {
        "--skeleton-border-radius":borderRadius + "px",
        "--skeleton-height":height,
        "--skeleton-width":width
    } as React.CSSProperties;
    return(
        <div className={`skeleton-loading ${className}`} style={cssVar}></div>
    )
}