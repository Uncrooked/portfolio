//components
import ProjectCard from "@/ui/components/cards/projectCard";

//styles
import "./allProjects.css";

//types
import { Project } from "../../type";

interface props{
    current:string;
    projectsData:Project[];
}

export default function AllProjects({current,projectsData}:props){
    const allProjectsEl = projectsData.filter(value => value.category == current || current == "all").map((param,index) => {
        return(
            <li key={index}>
                <ProjectCard {...param} href={param.url}/>
            </li>
        )
    });


    return(
        <ul className="all-projects">
            {allProjectsEl}
        </ul>
    )
}