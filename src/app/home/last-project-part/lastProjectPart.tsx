//npm
import prisma from "@/lib/prisma";

//components 
import ProjectCard from "@/ui/components/cards/projectCard";
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./lastProjectPart.css";

export default async function LastProjectPart(){
    const data = await prisma.projects.findFirst({
        orderBy: {
            id: 'desc',
        },
        select:{
            url:true,
            name:true,
            slug:true,
            category:{
                select:{
                    color:true
                }
            },
            tags_join:{
                select:{
                    tags:true
                }
            },
            thumbnail:true
        }
    });
    
    const filteredData = {
        href: "/projects/" + data?.slug,
        thumbnail:data?.thumbnail,
        title:data?.name,
        tags:data?.tags_join.map(param => param.tags),
        color:data?.category.color
    }

    return(
        <section id="last-project-part">
            <div className="left">
                <h2 className={fonts.orbitron.className} >Mon dernier projet</h2>
                <ProjectCard size="l" {...filteredData}/>
            </div>
            <div className="right">
                <h3>Parcourir</h3>
                <div className="categories">
                    <Btn color="purple" path="/projects" >Développement web <Icon picked="eye" size={20} /></Btn>
                    <Btn color="light-purple" path="/projects" >Design web <Icon picked="eye" size={20} /></Btn>
                    <Btn color="red" path="/projects" >Design print <Icon picked="eye" size={20} /></Btn>
                </div>
            </div>
        </section>
    );
}