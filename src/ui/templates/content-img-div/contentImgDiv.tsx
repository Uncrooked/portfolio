import RowImgDiv from "@/ui/components/row-img-div/rowImgDiv"

interface props{
    data:{
            title:string;
            desc:string;
            img:string;
    }[];
}

export default function ContentImgDiv({data}:props){

    const rowImgEl = data.map((param,index) => <RowImgDiv key={index} reverse={ index == 1 } title={param.title} path={param.img} desc={param.desc}/>)

    return(
        <section className="content-img-div no-max-width">
            {rowImgEl}
        </section>
    )
}