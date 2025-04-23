function setBurger(){
    const menuBtn = document.getElementById("menu-btn")
    const roundBtns = menuBtn?.getElementsByClassName("round-btn");
    
    if(roundBtns){
        for(let btn of roundBtns){
            btn?.classList.toggle("display-none");
        }
    }
}

function changeOverlay(overlayEl:HTMLElement,body:HTMLElement,toggle = true, displayOverlay: "add" | "remove" = "add"){
    overlayEl?.animate([
        {transform:"translateY(0)"},
        {transform:"translateY(100vh)"}
    ],{
        duration:500,
        easing:"ease-out"
    })

    setTimeout(() => {
        const overlayEl = document.getElementById("overlay");
        const currentAction = toggle ? "toggle" : "add";
        overlayEl?.classList[toggle ? "toggle" : "add"]("display-none");
        body?.classList[toggle ? "toggle" : displayOverlay]("display-overlay");
    },450);
}

export function setOverlay(){
    const body = document.getElementsByTagName("body")[0];
    const overlayEl = document.getElementById("overlay");
    if(overlayEl){
        if(!Array.from(overlayEl.classList).includes("display-none")){
            changeOverlay(overlayEl,body,true);
        }else{
            overlayEl?.classList.toggle("display-none");
            body?.classList.toggle("display-overlay");
        }
        setBurger();
    }
}

export function removeHeader(){
    const overlayEl = document.getElementById("overlay");
    const body = document.getElementsByTagName("body")[0];
    if(overlayEl && !overlayEl.classList[1]){
        setBurger();
        changeOverlay(overlayEl,body,false,"remove");
    }
}