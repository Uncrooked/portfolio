//npm
import prisma from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

//components
import Tag from "@/ui/components/tags/tag";
import Btn from "@/ui/components/btns/btn";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./singlePost.css";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params;

    // Fetch data from Prisma
    const data = await prisma.projects.findFirst({
        where: {
            slug: slug
        },
        select:{
            name:true,
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
                include: {
                    tags: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    });

    if(!data) notFound();

    const otherUrl = data.other_url as {label:string;url:string;}[];

    return (
        <section id="single-post">
            <div className="left">
                <h1 className={fonts.imperial.className}>{data.name}</h1>
                <div className="tags">
                    {
                        data.tags_join.map((param,index) => 
                            <Tag key={index}>{param.tags.name}</Tag>
                        )
                    }
                </div>
                <div className="desc">
                    {data.desc?.split("\n\n").map((param,index) => <p key={index}>{param}</p>)}
                </div>
                <div className="container-btns">
                    <Btn path={data.url} >Voir le projet</Btn>
                    {
                        otherUrl && otherUrl.map((param,index) => 
                            <Btn key={index} color="light-blue" path={param.url}>{param.label}</Btn>
                        )
                    }
                </div>
            </div>
            <Image 
                width={data.thumbnail.width} 
                height={data.thumbnail.height} 
                alt={data.thumbnail.alt}
                src={data.thumbnail.path} 
            />
        </section>
    );
}