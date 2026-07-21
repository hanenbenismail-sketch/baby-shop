import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({

name:{
type:String,
required:true
},


price:{
type:Number,
required:true
},


oldPrice:Number,


category:String,


brand:String,


rating:Number,


stock:Number,


age:String,


sizes:[String],


colors:[String],


description:String,


image:String,


images:[String]


},
{
timestamps:true
}

);



export default mongoose.models.Product ||
mongoose.model("Product",ProductSchema);