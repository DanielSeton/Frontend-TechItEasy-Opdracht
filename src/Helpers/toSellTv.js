import boughtTv from "./boughtTv.js";
import soldTv from "./soldTv.js";

function toSellTv (productArray){
    const initialProducts = boughtTv(productArray);
    const soldProducts = soldTv(productArray);
    return initialProducts - soldProducts;
}

export default toSellTv;
