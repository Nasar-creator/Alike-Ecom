import mongoose from "mongoose";


const reviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        default:0,
    },

    comment:{
        type:String,
        required:true,
    }
},{
    timestamps:true
})

const productSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
name:{
    type:String,
    required:true,
},
image:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
category:{
    type:String,
    required:true,
},
brand:{
    type:String,
    required:true,
},
price:{
    type:Number,
    required:true,
},
countInStock:{
    type:Number,
    required:true,
    default:0,
},
reviews:[reviewSchema],

rating:{
    type:Number,
    required:true,
},
numReviews:{
    type:Number,
    required:true,
    default:0,
},

},
{timestamps:true,})
const Product= mongoose.model("Product",productSchema)
export default Product;

// _id: '1',
// name: 'Airpods Wireless Bluetooth Headphones',
// image: '/images/airpods.jpg',
// description:
//   'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
// brand: 'Apple',
// category: 'Electronics',
// price: 29980,
// countInStock: 10,
// rating: 4.5,
// numReviews: 12,