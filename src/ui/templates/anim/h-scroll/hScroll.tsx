//npm
import {  Ref } from "react";

interface props{
    children: React.ReactNode;
    height:number;
    ref: Ref<HTMLElement>
}

export default function HScroll({children,height,ref}:props){

    return(
        <section className="no-max-width" style={{height:`${height}px`}} ref={ref}>
            {children}
        </section>
    )
};