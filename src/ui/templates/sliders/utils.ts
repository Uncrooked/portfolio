export function countToArray(count:number,step:number,gap:number = 0):number[]{
    const arrayTemp: number[] = [];
    for(let i = 0; i < count; i++){
        const value = (step * i) + gap;
        arrayTemp.push(value);
    }

    return arrayTemp;
}