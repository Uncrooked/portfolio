//lib
import { fonts } from "@/lib/fonts";

//components
import MouseDiv from "./mouseDiv";
import Btn from "@/ui/components/btns/btn";

//styles
import "./heroPart.css";


export default function heroPart(){
    return(
        <div id="hero-part" className="background">
            <section className="content">
                <h1 className="primary-title">
                    LÉO MURAIL<br/>
                    <span className={fonts.imperial.className}>Portfolio</span>
                </h1>
                <p className="text">Je ne suis pas du genre à me contenter de ce que j’ai déjà, mais plutôt à aller plus loin dans mes objectifs. Ma seule raison de rater c’est pour mieux faire par la suite.</p>
                <div className="buttons">
                    <Btn color="glass" path="/about">Mon histoire</Btn>
                    <Btn color="glass" path="/brand">Ma marque</Btn>
                    <Btn color="glass" path="/projects">Mes projets</Btn>
                </div>
                <MouseDiv/>
            </section>
        </div>
    );
}