//npm
import { Suspense } from "react";

//components
import Icon from "@/ui/components/illu/icon";
import CardSlider from "@/ui/templates/sliders/card-slider/cardSlider";
import Btn from "@/ui/components/btns/btn";
import SkeletonLoading from "@/ui/components/loading/skeleton-loading/skeletonLoading";

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

    let pickedIcon = "";

    switch(current.slug){
        case "web-development":
            pickedIcon = "code-editing";
            break;
        case "print-design":
            pickedIcon = "print-design";
            break;
        case "web-design":
            pickedIcon = "web-design";
            break;
    }
    return(
        <div className="project-cat">
            <div className="desktop title">
                {pickedIcon && <Icon size={45} picked={pickedIcon}/>}
                <h3>{current.title}</h3>
            </div>
            <Suspense fallback={<SkeletonLoading width="90vw" height="440px" borderRadius={20} className="center"/>}>
                <CardSlider categoryId={current.category_id} step={300}/>
            </Suspense>
            <section className="min-width">
                <Btn path="/projects" color="grey" >Voir plus</Btn>
            </section>
        </div>
    )
}