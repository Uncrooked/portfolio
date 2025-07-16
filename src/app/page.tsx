//components
import HeroPart from "./home/hero-part/heroPart";
import ProjectPart from "./home/project-part/projectPart";
import SentencePart from "./home/sentence-part/sentencePart";
import JourneyPart from "../ui/templates/journey-part/journeyPart";
import BrandPart from "@/ui/templates/brand-part/brandPart";

export default function Page(){

  return(
    <section id="home" className="no-max-width">
      <HeroPart/>
      <SentencePart/>
      <ProjectPart/>
      <JourneyPart/>
      <BrandPart/>
    </section>
  )
}