import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";



// GET SINGLE ORDER

export async function GET(request, { params }) {

try {

await connectDB();


const { id } = await params;


const order = await Order.findById(id)
.populate("user")
.populate("products.product");



if(!order){

return Response.json(
{
message:"Order not found"
},
{
status:404
}
);

}


return Response.json(order);



}catch(error){


return Response.json(
{
message:"Error fetching order",
error:error.message
},
{
status:500
}
);


}

}






// UPDATE ORDER STATUS

export async function PUT(request, { params }) {


try {


await connectDB();


const { id } = await params;


const body = await request.json();



const order = await Order.findByIdAndUpdate(
id,
body,
{
new:true
}
);



if(!order){

return Response.json(
{
message:"Order not found"
},
{
status:404
}
);

}



return Response.json(order);



}catch(error){


return Response.json(
{
message:"Error updating order",
error:error.message
},
{
status:500
}
);

}

}






// DELETE ORDER

export async function DELETE(request, { params }) {


try {


await connectDB();


const { id } = await params;



const order = await Order.findByIdAndDelete(id);



if(!order){

return Response.json(
{
message:"Order not found"
},
{
status:404
}
);

}



return Response.json(
{
message:"Order deleted successfully"
}
);



}catch(error){


return Response.json(
{
message:"Error deleting order",
error:error.message
},
{
status:500
}
);

}

}