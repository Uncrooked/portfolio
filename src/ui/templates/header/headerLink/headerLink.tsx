"use client"

//fonts 
import { fonts } from "@/lib/fonts";

//npm
import Link from "next/link";
import Image from "next/image";

//functions
import { removeHeader } from "../functions";

//styles
import "./headerLink.css";

interface props {
    children : React.ReactNode;
    path:string;
    icon:string;
}

export default function HeaderLink({children,path,icon} : props){
    return(
        <Link onClick={removeHeader} href={path} className={`header-link ${fonts.orbitron.className}`}> <Image src={`img/icons/white/${icon}.svg`} width={50} height={50} alt="icon prenant la lettre de léo murail pour les liens de son portfolio dans le header"/> {children}</Link>
    )
}