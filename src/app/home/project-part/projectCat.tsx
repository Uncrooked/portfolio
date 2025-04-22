//components
import CatTitle from "./catTitle";
import CardSlider from "@/ui/templates/sliders/card-slider/cardSlider.server";
import Btn from "@/ui/components/btns/btn";

//const
import { catsData } from "./constants";

//styles
import "./projectCat.css";

//type
interface props {
    cat:keyof typeof catsData;
}

export default function ProjectCat({cat}:props){
    const current = catsData[cat];
    return(
        <div className="project-cat">
            <section className="min-width">
                <CatTitle title={current.title} color={current.color}/>
            </section>
            <CardSlider category_id={current.category_id}/>
            <section className="min-width">
                <Btn color={current.color} >Voir plus</Btn>
            </section>
        </div>
    )
}