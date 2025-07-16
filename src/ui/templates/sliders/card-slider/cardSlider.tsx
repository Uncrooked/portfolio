"use server"

//components
import StrateSlider from "./strateSlider";
import ProjectCard from "@/ui/components/cards/projectCard";;

//db
import prisma from "@/lib/prisma";

interface Props {
    categoryId: number;
    step:number;
}

export default async function CardSlider({categoryId,step}:Props){

    const data = await prisma.projects.findMany({
        where:{
          category_id:categoryId 
        },
        select:{
            name:true,
            slug:true,
            url:true,
            desc:true,
            other_url:true,
            thumbnail: {
                select: {
                    path: true,
                    width: true,
                    height: true,
                    alt: true,
                }
            },
            category: {
                select: {
                    name: true
                }
            },
            tags_join: {
                select: {
                    tags: {
                        select: {
                            name: true,
                            slug:true
                        }
                    }
                }
            }
        }
    })

    const projects = data.map((project,index) => <ProjectCard key={index} title={project.name} href={"/projects/" + project.slug} tags={project.tags_join.map(item => item.tags)} thumbnail={project.thumbnail} />)

    return(
    <StrateSlider step={step}>
        {projects}
    </StrateSlider>
    )

}