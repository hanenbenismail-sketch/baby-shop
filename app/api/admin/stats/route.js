import { connectDB } from "@/lib/mongodb";

import Product from "@/models/Product";
import Order from "@/models/Order";
import User from "@/models/User";



export async function GET(){


try{


await connectDB();



const products = await Product.countDocuments();


const orders = await Order.countDocuments();


const users = await User.countDocuments();





const revenueData = await Order.aggregate([


{
$match:{
status:{
$in:[
"confirmed",
"delivered"
]
}
}
},



{
$group:{
_id:null,

total:{
$sum:"$totalPrice"
}

}

}


]);





const revenue = Number(revenueData[0]?.total || 0);





return Response.json({

products,
orders,
users,
revenue

});





}catch(error){



return Response.json(

{
message:"Stats error",
error:error.message
},

{
status:500
}

);


}


}