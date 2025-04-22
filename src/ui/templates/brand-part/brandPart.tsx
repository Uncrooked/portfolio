//components
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./brandPart.css";

export default function BrandPart(){
    return(
        <section id="brand-part">
            <h2 className={fonts.orbitron.className}>MA MARQUE</h2>
            <div className="bento">
                <div className="top bento-item"></div>
                <div className="bottom">
                    <div className="left bento-item"></div>
                    <div className="right bento-item"></div>
                </div>
            </div>
            <div className="cta bottom">
                <Btn path="https://cliver.fr">cliver.fr</Btn>
                <Btn path="https://instagram.com/cliverproject">
                    <Icon picked="instagram"/>
                </Btn>
            </div>
        </section>
    )
}