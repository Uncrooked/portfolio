import Image from "next/image";

export const links = [
    {
      params: {
        path: "/",
        icon: "l",
      },
      children: "ACCUEIL",
    },
    {
      params: {
        path: "/about",
        icon: "l",
      },
      children: "MON HISTOIRE",
    },
    {
      params: {
        path: "/brand",
        icon: "e",
      },
      children: "MA MARQUE",
    },
    {
      params: {
        path: "/projects",
        icon: "o",
      },
      children: "MES PROJETS",
    },
];      

export const socialMedias = [
  {
    params:{
      path:"https://instagram.com/leomurail",
      color:"blue"
    },
    children:<Image src="img/icons/white/instagram.svg" alt="icône de l'instagram @leomurail de Léo Murail depuis son portfolio" width={25} height={25}/>
  },
  {
    params:{
      path:"https://www.linkedin.com/in/l%C3%A9o-murail-8aa072297/",
      color:"blue",
    },
    children:<Image src="img/icons/white/linkedin.svg" alt="icône du linedkin @leomurail de Léo Murail depuis son portfolio" width={25} height={25}/>
  }
]

export const summaryBtns = [
  {
    params:{
      path:"/about",
      color:"light-blue"
    },
    children:"Mon histoire"
  },
  {
    params:{
      path:"/brand",
      color:"blue"
    },
    children:"Ma marque"
  },
  {
    params:{
      path:"/projects",
      color:"yellow"
    },
    children:"Mes projets"
  }
]