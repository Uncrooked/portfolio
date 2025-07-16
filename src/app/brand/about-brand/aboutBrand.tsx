//comoponents
import ContentImgDiv from "@/ui/templates/content-img-div/contentImgDiv";

//const
import { contentAboutBrand } from "./constants";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./aboutBrand.css";

export default function AboutBrand(){
    return(
        <section id="about-brand" className="no-max-width">
            <h2 className="desktop">À PROPOS</h2>
            <ContentImgDiv data={contentAboutBrand} />
        </section>
    )
}