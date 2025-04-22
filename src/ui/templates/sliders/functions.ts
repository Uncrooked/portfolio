import { PanInfo } from "motion/react";

interface baseProps{
    pos:boolean;
    range:{start:number,end:number};
    index:React.RefObject<number>;
    setPos:React.Dispatch<React.SetStateAction<number>>
    container:HTMLDivElement | null;
    step?: number;
    gap?:number;
}

interface panStartProps{
    info: PanInfo;
    isPan:boolean;
    args:baseProps
}

function currentDot(container:HTMLDivElement,index:number){
    const dots = container.getElementsByClassName("dot");

    for(let item of dots){
        item.classList.remove("current");
    }

    dots[index].classList.add("current");
}

export function slide({pos,range,index,setPos,container,step,gap}:baseProps){

    const currentIndex = Math.abs(index.current);

    //set index
    if(currentIndex > range.start && currentIndex < range.end){
        pos ? index.current-- : index.current++;
    }else if(currentIndex == range.start && !pos){
        index.current++;
    }else if(currentIndex == range.end && pos){
        index.current--;
    }

    container && currentDot(container,index.current);
    const currentGap = gap ? gap : 0;
    if(step){
        setPos(window.innerWidth <= 430 ? (-(step - 5) * index.current) + currentGap : (-step * index.current)); // Update the X state (-5 for the margin-inline space)
    }

    return true;
}

export const onPanStart = ({info,isPan,args}:panStartProps) => {
    const dir = Math.abs(info.delta.x / info.delta.y);//the direction == 0 vertical == infinite horizontal;

    if (!isPan && dir > 1) {
        isPan = slide(args);
        return isPan;
    }
};

export const onPanEnd = () => {
    return false; // Reset after sliding ends
}

export const onClick = ({pos = false,range,index,setPos,container,step}:baseProps) => {
    slide({pos,range,index,setPos,container,step});
}

export function setDots(number:number): string[]{
    const dots = [];
    for(let i = 0; i < number; i++){
        if(i == 0){
            dots.push("dot current");
        }else{
            dots.push("dot");
        }
    }

    return dots;
}