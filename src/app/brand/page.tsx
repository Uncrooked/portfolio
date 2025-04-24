//npm
import { Suspense } from "react";

//components
import Banner from "@/ui/components/banner/banner";
import BrandHistory from "./brand-history/brandHistory";
import BrandPart from "@/ui/templates/brand-part/brandPart";
import BrandContent from "./brand-content/brandContent";
import AboutBrand from "./about-brand/aboutBrand";
import LastCta from "./last-cta/lastCta";
import Loading from "./loading";

//styles
import "./brand.css";

export default function Page(){
    return(
        <Suspense fallback={<Loading/>}>
            <section id="brand" className="no-max-width">
                <Banner title="MA MARQUE" subTitle="Cliver - Self Evolution Begins" bgColor="dark-blue" />
                <BrandHistory/>
                <BrandPart/> 
                <BrandContent/>
                <AboutBrand/>
                <LastCta/>
            </section>
        </Suspense>
    )
}