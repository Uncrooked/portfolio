//fonts
import { fonts } from "@/lib/fonts";

//components
import Btn from "@/ui/components/btns/btn";

//lib
import { ComponentList } from "@/lib/render";

//assets
import { summaryBtns } from "@/assets/var/compLists";

//styles
import "./summary.css";

export default function Summary(){
    return(
        <div id="summary">
            <h1 className={fonts.orbitron.className}>LEO MURAIL</h1>
            <h2>PORTFOLIO</h2>
            <p>Je ne suis pas du genre à me contenter de ce que j’ai déjà, mais plutôt à aller plus loin dans mes objectifs. Ma seule raison de rater c’est pour mieux faire par la suite.</p>
            <ComponentList array={summaryBtns} Comp={Btn} className="btns"/>
        </div>
    )
}