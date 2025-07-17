//npm
import { MotionValue } from "motion";
import { motion, useTransform } from "motion/react";
import { useState, useEffect, RefObject } from "react";

//components
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";
import TimelineDate from "@/ui/components/timeline-date/timelineDate";
import Clock from "../clock/clock";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./journeyContent.css";

interface props {
    scrollY:MotionValue<number>;
    target:RefObject<HTMLElement | null>;
}

export default function JourneyContent({scrollY,target}:props){
    const [xRange,setXRange] = useState(0);

    const x = useTransform(scrollY,[0,1],["0",-xRange + "px"]);

    useEffect(() => {
        const el = target.current?.querySelector(".all-dates .container");
        if(el){
            const range = el.clientWidth - window.innerWidth;
            setXRange(range);
        }
    },[target])

    return(
            <section id="journey-content" className="no-max-width">
                <div>
                    <div className="top desktop">
                        <div className="left">
                            <h2 className={fonts.montserrat.className}>Mon parcours</h2>
                            <p className={"current-period " + fonts.imperial.className}>prossionnel</p>
                        </div>
                        <Btn color="blue" path="/about">
                            En entier
                            <Icon picked="arrow"/>
                        </Btn>
                    </div>
                    <div className="all-dates desktop">
                        <motion.div 
                            className="container"
                            style={{x}}
                        >
                            <TimelineDate date="2020 - 2023" title="Lycée Notre-Dame Challans" desc="J’ai passé 3 ans en bac général scientifique (Maths, Physique-Chimie, SVT). J’étais très intéressé par ces domaines, et mes notes le reflétaient, car j’avais environ 15 de moyenne générale. Mais à ce moment-là, ma volonté de devenir ingénieur se transformait petit à petit, car je découvrais le monde du digital."/>
                            <TimelineDate date="Septembre 2023" title="Rentrée My Digital School - Bachelor cycle web et multimédia" desc="Alors que tout le monde se dirigeait vers PARCOURSUP, j’ai décidé d’emprunter un chemin différent. J’ai donc visité des écoles dans le domaine qui me plaisait, et c’est ainsi que j’ai découvert My Digital School. Je suis maintenant en Bachelor 2 dans cette école."/>
                            <TimelineDate date="Janvier 2024" title="Création de ma micro-entreprise - Marque CLIVER" desc="Mon premier projet professionnel concret est ma marque de vêtements nommée CLIVER, une marque de streetwear dont le slogan est Self Evolution Begins, l’évolution de soi. Autrement dit, c’est une marque basée sur le développement personnel dans l’univers du streetwear."/>
                            <TimelineDate date="Mai - Juin 2024" title="Stage chez OC’COMUNIQUE - Développeur wordpress" desc="Pour avril et mai derniers, j’ai obtenu un stage en tant qu’intégrateur WordPress. Durant ce stage, j’ai appris à maîtriser WordPress comme ma poche, à mettre des produits en ligne sur un site e-commerce, à améliorer un site e-commerce, et j’ai suivi un appel avec un professionnel en SEO."/>
                            <TimelineDate date="Juin 2024" title="Première collection de ma marque" desc="En juin dernier, j’ai lancé le premier drop (collection) de ma marque, qui a duré un mois. Mon objectif était de sortir un tee-shirt en deux coloris, retraçant l’histoire et la vision de ma marque. Grâce à ce drop, j’ai pu réaliser une vidéo professionnelle avec un ami qui travaille dans le cinéma, ..."/>
                            <TimelineDate date="Avril - Septembre 2025 " title="Stage chez IDIX - Développeur fullstack" desc="D'avril à septembre 2025, l'agence IDIX m'a accueilli en tant que développeur fullstack junior. J'ai pu participer à différents projets frontend et backend, travailler sur des API et contribuer à leur solution Paddix."/>
                        </motion.div>
                    </div>
                    <Clock/>
                </div>
                
            </section>
    )
}