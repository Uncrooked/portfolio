"use client"

//npm
import { useRef } from "react";

//components
import RoundBtn from "@/ui/components/btns/roundBtn";

//css
import "./cardSlider.css";


interface Props{
    step:number;
    children:React.ReactNode;
}

export default function StrateSlider({step,children}:Props){

    const slideLength = useRef(0);

    function handleScroll(event:React.UIEvent<HTMLDivElement, UIEvent>){
        const sliderContent = event.target as HTMLElement;
        slideLength.current = sliderContent.scrollLeft;
    }
    
    function handleArrowClick(event:React.MouseEvent<Element, MouseEvent>, right = true){
        const clickedElement = event.target as HTMLElement;
        const sliderContent = clickedElement.closest(".card-slider")?.getElementsByClassName("slider-content")[0];
        if(right){
        }else{
            sliderContent
        }

        const sliderContentWidth:{
            default:number;
            phone:null | number;
        } = {
            default:sliderContent?.clientWidth || step,
            phone:null
        };

        if(window.innerWidth <= 430){
            const numberOfCard = sliderContent?.getElementsByClassName("project-card").length;
            if(numberOfCard) {
                sliderContentWidth.phone = sliderContentWidth.default - sliderContentWidth.default % numberOfCard;
                console.log(sliderContentWidth.default % numberOfCard,sliderContentWidth.default);
            }
        }

        const finalWidth = sliderContentWidth.phone || sliderContentWidth.default;

        slideLength.current = right ? slideLength.current + finalWidth : slideLength.current - finalWidth;

        sliderContent?.scrollTo({
            left:slideLength.current,
            behavior:"smooth"
        })
    }

    return(
        <div className="card-slider">
        <RoundBtn icon="arrow" size="m" onClick={(event) => handleArrowClick(event,false)}/>
        <div className="slider-content" onScroll={(event) => handleScroll(event)}>
            {children}
        </div>
        <RoundBtn icon="arrow" size="m" onClick={(event) => handleArrowClick(event)}/>
        </div>
    )

}