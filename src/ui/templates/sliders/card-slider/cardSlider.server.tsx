//npm
import prisma from "@/lib/prisma";

//components
import CardSliderContent from "./cardSlider.client";


interface props{
    category_id?:number;
}

export default async function CardSlider({category_id}:props){

    const data = await prisma.projects.findMany({
        where:{
            category_id:category_id
        },
        include:{
            category:true,
            thumbnail:true,
            tags_join:{
                include:{
                    tags:true
                }
            }
        }
    })

    const filteredData = data.map(param => ({
        color:param.category.color,
        title:param.name,
        thumbnail:param.thumbnail,
        tags:param.tags_join.map(param => param.tags),
        href:param.url
    }))

    return(
        <CardSliderContent content={filteredData} />
    )
}