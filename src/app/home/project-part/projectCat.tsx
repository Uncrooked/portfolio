//npm
import { Suspense } from "react";

//components
import CatTitle from "./catTitle";
import CardSlider from "@/ui/templates/sliders/card-slider/cardSlider.server";
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
    return(
        <div className="project-cat">
            <section className="min-width">
                <CatTitle title={current.title} color={current.color}/>
            </section>
            <Suspense fallback={<SkeletonLoading width="90vw" height="440px" borderRadius={20} className="center"/>}>
                <CardSlider category_id={current.category_id}/>
            </Suspense>
            <section className="min-width">
                <Btn path="/projects" color={current.color} >Voir plus</Btn>
            </section>
        </div>
    )
}