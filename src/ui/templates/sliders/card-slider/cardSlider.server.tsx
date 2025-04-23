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
        select:{
            name:true,
            url:true,
            slug:true,
            category:{
                select:{
                    color:true,
                    slug:true
                }
            },
            thumbnail:true,
            tags_join:{
                select:{
                    tags:true
                }
            }
        }
    })

    const filteredData = data.length ? data.map(param => ({
        color:param.category.color,
        title:param.name,
        thumbnail:param.thumbnail,
        tags:param.tags_join.map(param => param.tags),
        href: "/projects/" + param.slug
    })) : [];

    return(
        <CardSliderContent content={filteredData} />
    )
}