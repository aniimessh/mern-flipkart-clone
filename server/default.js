import { products } from "./constants/data.js";
import { Product } from "./model/productSchema.js";
export async function defaultDatabase () {
    try{
        await Product.insertMany(products);
        console.log("Data imported successfully");
    }catch(err){
        console.log("Error while inserting default data");
        console.log(err.message);
    }
}