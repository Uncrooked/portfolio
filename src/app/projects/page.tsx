//npm
import { useState } from "react";

//db
import prisma from "@/lib/prisma";

//components
import Banner from "@/ui/components/banner/banner";
import Main from "./main/main";

//types
import { Project, Category } from "./type";

export default async function Page(){

    const projectsData = await prisma.projects.findMany({
        include:{
            tags_join:{
                include:{
                    tags:true
                }
            },
            thumbnail:true,
            category:true
        }
    })

    const formattedProjectsData: Project[] = projectsData.map((param) => ({
        url: param.url,
        category:param.category.slug,
        color: param.category.color,
        title: param.name,
        thumbnail: param.thumbnail,
        tags: param.tags_join.map((value) => value.tags),
    }));

    const categories : Category[] = (await prisma.categories.findMany()).map(param => ({
        id:param.id,
        name:param.name,
        slug:param.slug,
        color:param.color
    }));

    categories.splice(0,0,{
        id:0,
        name:"Tout",
        slug:"all",
        color:"yellow"
    })

    return(
        <section id="projects" className="no-max-width">
            <Banner title="MES PROJETS" subTitle="Scolaires et personnels" bgColor="yellow" />
            <section className="projects-part">
                <Main projectsData={formattedProjectsData} categories={categories} />
            </section>
        </section>
    )
}