//components
import Banner from "@/ui/components/banner/banner";
import BrandHistory from "./brand-history/brandHistory";
import BrandPart from "@/ui/templates/brand-part/brandPart";
import BrandContent from "./brand-content/brandContent";
import AboutBrand from "./about-brand/aboutBrand";
import LastCta from "./last-cta/lastCta";

//styles
import "./brand.css";

export default function Page(){
    return(
        <section id="brand" className="no-max-width">
            <Banner title="MA MARQUE" subTitle="Cliver - Self Evolution Begins" bgColor="dark-blue" />
            <BrandHistory/>
            <BrandPart/> 
            <BrandContent/>
            <AboutBrand/>
            <LastCta/>
        </section>
    )
}