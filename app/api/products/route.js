import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";


// GET ALL PRODUCTS

export async function GET(){


try{


await connectDB();


const products = await Product.find();



return Response.json(products);


}catch(error){


return Response.json(
{
message:"Error fetching products"
},
{
status:500
}
);


}


}







// CREATE PRODUCT

export async function POST(request){


try{


await connectDB();


const body = await request.json();



const product = await Product.create(body);



return Response.json(product,{
status:201
});



}catch(error){


return Response.json(
{
message:"Error creating product"
},
{
status:500
}
);


}


}