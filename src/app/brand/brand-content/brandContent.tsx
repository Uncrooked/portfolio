//components
import PartnerVideo from "./partner-video/partnerVideo";
import ContentVideo from "./content-video/contentVideo";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./brandContent.css";

export default function BrandContent(){
    return(
        <section id="brand-content" className="no-max-width">
            <div className="top">
                <div className="content desktop">
                    <h2>LA CRÉATION DE <span className={fonts.imperial.className}>contenu</span></h2>
                </div>
            </div>
            <div className="center desktop">
                <PartnerVideo/>
            </div>

            <ContentVideo/>
        </section>
    )
}