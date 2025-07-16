//components
import ProjectCat from "./projectCat";
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";

//constants
import { catsData } from "./constants";

//fonts

import { fonts } from "@/lib/fonts";

//styles
import "./projectPart.css";

export default function ProjectPart(){

    const projectCats = Object.keys(catsData).map(param => {
        const key = param as keyof typeof catsData;
        return <li key={key} className="project-cat-li"><ProjectCat key={key} cat={key} /></li>
    });

    return(
        <section className="project-part no-max-width">
            <div className="top desktop">
                <h2 className={fonts.montserrat.className} >MES PROJETS</h2>
                <Btn path="/projects" color="blue">Tous les projets <Icon picked="eye" size={20}/></Btn>
            </div>
            <ul className="project-cats">
                {projectCats}
            </ul>
        </section>
    )
}