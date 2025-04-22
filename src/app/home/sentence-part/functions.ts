export function setIndexTop(container:HTMLElement,nbWords:number,delay:number){
    const top = container.getBoundingClientRect().top;
    if(top){
        const step = window.innerHeight / nbWords;
        const current = Math.floor(nbWords - ((top + delay) / step));
        return current;
    }
}

export function setIconDisplay(current:number,icons:HTMLCollectionOf<Element>){
    for(let icon of icons){
        icon.classList.add("display-none");
    }

    const index = current <= 3 ? 0 : current <= 6 ? 1 : 2;
    icons[index].classList.remove("display-none");
}