//styles
import "./catTitle.css";

export default function CatTitle({title,color}:{title:string,color:string}){

    const cssVar = {"--cat-title-color": `var(--${color}-color)`} as React.CSSProperties;

    return(
        <div className={`${color} cat-title min-width`} style={cssVar}>
            <h3>{title}</h3>
            <hr />
        </div>
    )
}