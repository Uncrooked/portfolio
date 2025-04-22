//components
import ContentImgDiv from "@/ui/templates/content-img-div/contentImgDiv";

//const
import { contentAbout } from "./constants";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./morePart.css";

export default function MorePart(){
    return(
        <>
            <section id="more-part" className="no-max-width">
                <h2 className={fonts.orbitron.className}>En savoir un peu plus</h2>
                <div className="row-content">
                    <h3>Pourquoi le digital ?</h3>
                    <p>La première raison est que c’est un domaine, dans le cadre de l’entrepreneuriat, qui permet de créer des projets ayant un impact considérable dans notre monde, sans nécessiter des levées de fonds à 1 million d’euros, et offrant un fort potentiel de scalabilité énorme. Ensuite, j’ai toujours aimé travailler sur un ordinateur. Enfin, j’ai développé une véritable passion pour les différents domaines qui composent ce secteur.</p>
                </div>
                <div className="row-content">
                    <h3>Comment j’ai découvert ce domaine </h3>
                    <p>Comment j’ai découvert ce domaine ?Comme je l’ai mentionné précédemment, j’ai découvert le domaine du digital en cherchant à lancer une application pour résoudre un problème que j’avais au lycée : s’habiller rapidement et efficacement, sans avoir à trop réfléchir. Cependant, ce projet s’est avéré bien plus complexe que prévu. Néanmoins, cette expérience m’a permis de développer une véritable passion pour le codage, le design, la création de vidéos et bien d’autres aspects du digital.</p>
                </div>
            </section>
            <ContentImgDiv data={contentAbout}/>
        </>
    )
}