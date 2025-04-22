"use client"

//npm
import { useState } from "react";

//components
import Filters from "./filters/filters";
import AllProjects from "./all-projects/allProjects";

//types
import { Project, Category } from "../type";

interface props{
    categories:Category[];
    projectsData:Project[];
}

export default function Main({categories,projectsData}:props){

    const [filter,setFilter] = useState("all");

    return(
        <>
            <Filters setCurrent={setFilter} categories={categories}/>
            <AllProjects current={filter} projectsData={projectsData}/>
        </>
    )
}