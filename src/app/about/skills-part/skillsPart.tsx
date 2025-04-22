//components
import Skill from "./skill/skill";

//styles
import "./skillsPart.css";

export default function SkillsPart(){
    return(
        <section id="skills">
            <h2>Mes hard skills</h2>
            <div className="container-skills">
                <Skill picked="code-editing"/>
                <Skill picked="web-design"/>
                <Skill picked="print-design"/>
                <Skill picked="video-editing"/>
            </div>
        </section>
    )
}