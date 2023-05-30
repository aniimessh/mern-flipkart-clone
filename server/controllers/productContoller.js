import Product from "../model/productSchema.js"
async function productController(req, res){
    try{
        const products = await Product.find({});
        res.status(200).json({
            products
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

export default productController;