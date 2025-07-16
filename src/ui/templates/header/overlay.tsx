//components
import HeaderLink from "./headerLink/headerLink";
import Btn from "../../components/btns/btn";

//styles
import "./overlay.css";

//lib
import { ComponentList } from "@/lib/render";

//assets
import { links, socialMedias } from "@/assets/var/compLists";
import { fonts } from "@/lib/fonts";

export default function HeaderOverlay(){

    return(
        <section id="overlay" className="no-max-width display-none">
                
            <ComponentList array={links} Comp={HeaderLink} className="left"/>

            <div className="right">
                <h2>JE ME <span className={fonts.imperial.className}>présente</span></h2>
                <p>Enchanté, je me présente : Léo Murail, passionné par le digital et l'entrepreneuriat. J’ai un objectif dans la vie : atteindre mes buts sur le long terme et apprendre toujours plus. Chaque projet est pour moi une opportunité de me dépasser et de concrétiser mes idées.</p>
                <ComponentList array={socialMedias} Comp={Btn} className="social-medias"/>
            </div>
        </section>
    )
}