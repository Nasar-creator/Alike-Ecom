import Product from "../models/productModels.js";
import asyncHandler from "../middleware/asyncHandler.js";


// @desc     Fetch All Product
// @route    Get /api/products
// @access   public
const getAllProducts=asyncHandler(async(req,res)=>{
    const allProducts = await Product.find({})
    res.json(allProducts)
});


// @desc     Fetch A Product
// @route    Get /api/products/:id
// @access   public
const getProductById=asyncHandler(async(req,res)=>{
    const singleProduct= await Product.findById(req.params.id)
    if (singleProduct){
         res.json(singleProduct)
    }
    else{
        res.status(404);
        throw new Error('Resource not found')
    }
   
})

export {getAllProducts,getProductById}