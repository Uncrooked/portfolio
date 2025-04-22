"use client"

//npm
import { useEffect } from "react";

//functions
import { setMouseDiv } from "./function";

//styles
import "./mouseDiv.css";

export default function MouseDiv(){

    useEffect(() => {
        const mouseDiv = document.getElementById("mouse-div");
        let isMoving = false;
        document.onmousemove = (event:MouseEvent) => { isMoving = setMouseDiv(event,mouseDiv) };
    },[]);

    return(
        <div id="mouse-div" className="display-none"></div>
    )
}