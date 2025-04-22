function display(event:MouseEvent,mouseDiv:HTMLElement): boolean{
    //display mouseDiv according to the scope
    const scope = window.innerHeight - window.scrollY;
    const returnState = event.clientY >= scope ? false : true;
    
    //set display of mouseDiv
    mouseDiv?.classList.toggle("display-none",!returnState);

    return returnState;
}

function setPos(event:MouseEvent,mouseDiv:HTMLElement){
    //set pos
    setTimeout(() => {
       if(mouseDiv){
           mouseDiv.style.left = (event.clientX - 10) + "px";
           mouseDiv.style.top = (event.clientY - 10) + "px";
       }
   },20);
}


//export
export const setMouseDiv = (event: MouseEvent, mouseDiv: HTMLElement | null): boolean => {
   let returnState = true;
   if(mouseDiv){
       setPos(event,mouseDiv);
       returnState = display(event,mouseDiv);   
   }
   return returnState;
}