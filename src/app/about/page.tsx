//components
import Banner from "@/ui/components/banner/banner";
import HistoryPart from "./history-part/historyPart";
import SkillsPart from "./skills-part/skillsPart";
import TotemsPart from "./totems-part/totemsPart";
import JourneyPart from "@/ui/templates/journey-part/journeyPart";
import MorePart from "./more-part/morePart";

export default function Page(){
    return(
        <section id="about" className="no-max-width">
            <Banner title="À PROPOS" subTitle="Mon histoire" bgColor="light-blue"/>
            <HistoryPart/>
            <SkillsPart/>
            <TotemsPart/>
            <JourneyPart/>
            <MorePart/>
        </section>
    )
}