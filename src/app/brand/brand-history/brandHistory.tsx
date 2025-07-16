//fonts
import { fonts } from "@/lib/fonts"

//styles
import "./brandHistory.css";

export default function BrandHistory(){
    return(
        <section id="brand-history">
            <h2 className={`title`}>L’histoire de <span className={fonts.imperial.className}>ma marque</span></h2>
            <p className="desc">
                Cliver est une marque de streetwear avant-gardiste qui allie qualité premium et souci d'évolution personnelle. Nous proposons une gamme de vêtements, notamment des pièces exclusives en édition limitée lancées lors de drop spéciaux et une collection de base de modèles essentiels disponibles toute l'année.<br/><br/>
                Notre slogan, « L'évolution personnelle commence », reflète notre conviction qu'il est important d'inspirer la croissance personnelle et l'ambition. Cliver est bien plus qu'un simple article de mode : c'est un mouvement qui encourage les individus à embrasser leur cheminement et à s'efforcer de faire de leur mieux.
            </p>
        </section>
    )
}