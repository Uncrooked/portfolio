//db
import prisma from "@/lib/prisma";

//components
import Banner from "@/ui/components/banner/banner";
import Main from "./main/main";

//types
import { Project, Category } from "./type";

export default async function Page(){

    const projectsData = await prisma.projects.findMany({
        select:{
            name:true,
            url:true,
            slug:true,
            tags_join:{
                select:{
                    tags:true
                }
            },
            thumbnail:true,
            category:{
                select:{
                    name:true,
                    color:true,
                    slug:true
                }
            }
        }
    })

    const formattedProjectsData: Project[] = projectsData.map((param) => ({
        url: "/projects/" + param.slug,
        category:param.category.slug,
        color: param.category.color,
        title: param.name,
        thumbnail: param.thumbnail,
        tags: param.tags_join.map((value) => value.tags),
    }));

    const categories : Category[] = (await prisma.categories.findMany()).map(param => ({
        name:param.name,
        slug:param.slug,
        color:param.color
    }));

    categories.splice(0,0,{
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