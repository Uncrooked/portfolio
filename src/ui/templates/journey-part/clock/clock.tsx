//npm
import Image from "next/image";

//styles
import "./clock.css";

export default function Clock(){
    return(
        <div className="clock">
            <Image className="clock-head" src="/img/illu/clock/clock-head.svg" alt="horloge pour parcours leo murail portfolio" width={60} height={23}/>
            <Image className="clock-body" src="/img/illu/clock/clock-body.svg" alt="horloge pour parcours leo murail portfolio" width={85} height={85}/>
        </div>
    )
}