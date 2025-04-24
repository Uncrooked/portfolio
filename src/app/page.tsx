//npm
import { Suspense } from "react";

//components
import HeroPart from "./home/hero-part/heroPart";
import LastProjectPart from "./home/last-project-part/lastProjectPart";
import ProjectPart from "./home/project-part/projectPart";
import SentencePart from "./home/sentence-part/sentencePart";
import JourneyPart from "../ui/templates/journey-part/journeyPart";
import BrandPart from "@/ui/templates/brand-part/brandPart";
import SkeletonLoading from "@/ui/components/loading/skeleton-loading/skeletonLoading";

export default function Page(){

  return(
    <section id="home" className="no-max-width">
      <HeroPart/>
      <SentencePart/>
      <Suspense fallback={<SkeletonLoading width="100vw" height="800px" />}>
        <LastProjectPart/>
      </Suspense>
      <ProjectPart/>
      <JourneyPart/>
      <BrandPart/>
    </section>
  )
}