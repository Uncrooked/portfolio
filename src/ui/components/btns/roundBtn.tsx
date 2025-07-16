"use client"

//npm
import Link from "next/link";
import React, { Suspense } from "react";

//components
import Icon from "../illu/icon";
import AssetLoading from "../loading/asset-loading/assetLoading";

//styles
import "./roundBtn.css";

interface props{
  path?: string;
  icon: string;
  size: "s" | "m" | "l" | "xl";
  onClick?: (e:React.MouseEvent) => void;
  display?:boolean;
  className?:string;
}

export default function RoundBtn({ path, icon, size, display = true, onClick = () => {},className = "" }: props) {

  return (
    path ?
    <Link className={`round-btn ${size} ${display ? "" : "display-none"} ${className}`} href={path} onClick={onClick}>
      <Suspense fallback={<AssetLoading/>}>
        <Icon picked={icon} size={25} color="var(--white-color)" />
      </Suspense>
    </Link>
    :
    <div className={`round-btn ${size} ${display ? "" : "display-none"} ${className}`} onClick={onClick}>
      <Suspense fallback={<AssetLoading/>}>  
        <Icon picked={icon} size={25} color="var(--white-color)" />
      </Suspense>  
    </div>
  );
  
}
