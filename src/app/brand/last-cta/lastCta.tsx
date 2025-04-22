//components
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./lastCta.css";

export default function LastCta(){
    return(
        <section id="last-cta" className="no-max-width">
            <div className="content desktop">
                <h2 className={fonts.orbitron.className}>CLIVER.FR</h2>
                <Btn path="https://cliver.fr">Voir le site<Icon picked="eye"/></Btn>
            </div>
        </section>
    )
}