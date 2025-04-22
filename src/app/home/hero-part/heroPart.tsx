//npm
import Image from "next/image";

//components
import Summary from "./summary";
import MouseDiv from "./mouseDiv";
import Slider from "@/ui/templates/sliders/slider";

//styles
import "./heroPart.css";


export default function heroPart(){
    return(
        <div id="hero-part" className="background">
            <section className="content">
                <Summary/>
                <Slider range={{start:0,end:2}} step={700} gap={-200}>
                    <li><Image draggable="false" src="/img/sliders/hero-part/leo-murail-tenant-sa-camera.webp" alt="Léo Murail tenant sa caméra" width={791} height={496} /></li>
                    <li><Image draggable="false" src="/img/sliders/hero-part/leo-murail-travail-sur-pc.webp" alt="Léo Murail travaillant sur PC" width={791} height={496} /></li>
                    <li><Image draggable="false" src="/img/sliders/hero-part/leo-murail-devant-camera.webp" alt="Léo Murail devant la caméra" width={791} height={496} /></li>
                </Slider>
                <MouseDiv/>
            </section>
        </div>
    );
}