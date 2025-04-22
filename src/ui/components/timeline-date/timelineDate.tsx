//components
import Line from "./line";
import ReadMore from "../read-more/readMore";

//styles
import "./timelineDate.css";

interface props {
    date:string;
    title:string;
    desc:string;
}

export default function TimelineDate({date,title,desc}:props){
    return(
        <div className="timeline-date">
            <h3 className="date">
                {date}
            </h3>
            <Line/>
            <div className="content">
                <ReadMore height={50}>
                    <h4 className="title">
                        {title}
                    </h4>
                    {desc}
                </ReadMore>
            </div>
        </div>
    )
}