//components
import RowContent from "./row-content/rowContent";

//const
import { rowContents } from "./contants";

//styles
import "./contentVideo.css";

export default function ContentVideo(){

    const rowContentsEl = rowContents.map((param,index) =>
        <li key={index}>
            <RowContent 
                iframe={param.iframe} 
                img={param.img} 
                reverse={param.reverse ? param.reverse : false} 
            />
        </li>
    );

    return(
    
        <section className="bottom content-video">
            <h3>BRAND CONTENT</h3>
            <p className="sub-title">©made by @leomurail</p>
            <ul className="row-conents">
                {rowContentsEl}
            </ul>
        </section>

    )
}