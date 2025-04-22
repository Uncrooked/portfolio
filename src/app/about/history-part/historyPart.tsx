//npm
import Image from "next/image";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./historyPart.css";

export default function HistoryPart(){
    return(
        <section id="history">
            <h2 className={fonts.orbitron.className}>Mon histoire</h2>
            <div className="container">
                <div className="left">
                    <h3>Enchanté, je m'appelle Léo Murail.</h3>
                    <p>Mon aventure a commencé en première, en 2022, lorsque j'ai voulu créer une application pour composer des tenues. L’application aurait dû s’appeler messo, un mélange entre mood et dress. Voici le tout premier logo que j’ai réalisé :</p>
                    <div className="container-img">
                        <Image src="/img/pages/about/messo-logo-rules.webp" alt="Premier logo de Léo Murail fait sur figma avec les règles" width={300} height={177} />        
                        <Image src="/img/pages/about/messo-logo.webp" alt="Premier logo de Léo Murail fait sur figma" width={220} height={109} />
                    </div>
                    <p>Dû à mon manque d'expérience en codage, j'ai été forcé à apprendre le HTML, CSS, JavaScript et d'autres langages, ce qui m'a ouvert les portes du digital : design web/print, développement web, marketing digital, et e-commerce. Encore mineur, j'ai profité de ce temps pour me former. Mon rêve d'ingénieur a évolué vers le numérique, et j'ai rejoint My Digital School pour débuter cette aventure.</p>
                </div>
                <Image className="right" src="/img/pages/about/leo-travail.webp" alt="Léo Murail travaillant sur son bureau" width={640} height={360} />
            </div>
        </section>
    )
}