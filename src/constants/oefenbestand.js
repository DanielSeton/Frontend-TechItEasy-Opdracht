import {inventory} from "./inventory.js";

export function opdracht1A() {
    const names = inventory.map((tv) => tv.name);
    console.log('uitkomst opdracht 1a: ');

    console.log(names)
}

export function opdracht1B() {

    console.log('uitkomst opdracht 1b');
    const soldTvInfo = inventory.filter((tv) => tv.sold - tv.originalStock === 0);
    console.log(soldTvInfo);
}

export function opdracht1C(){
    const findTv = inventory.find((tv) => tv.type === "NH3216SMART");
    console.log(findTv);
}

export function opdracht1D(){
    const filterByRefreshRate = inventory.filter((tv) => tv.refreshRate >= 100);
    const formatOutputAsObject = filterByRefreshRate.map(tv => {
        return({name: tv.name, suitable: true})
    })
    console.log(formatOutputAsObject);
}

// export function opdracht1E(){
//     const filterByScreenSize = inventory.filter((tv) => tv.size.includes >= 65);
//     console.log(filterByScreenSize);
// }
