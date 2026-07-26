import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";



// UPDATE USER ROLE

export async function PUT(request,{params}){


try{


await connectDB();



const {id} = await params;


const body = await request.json();



const user = await User.findByIdAndUpdate(

id,

body,

{
new:true
}

);



if(!user){

return Response.json(
{
message:"User not found"
},
{
status:404
}
);

}



return Response.json(user);



}catch(error){


return Response.json(

{
message:"Error updating user",
error:error.message
},

{
status:500
}

);


}

}






// DELETE USER


export async function DELETE(request,{params}){


try{


await connectDB();



const {id} = await params;



const user = await User.findByIdAndDelete(id);



if(!user){

return Response.json(
{
message:"User not found"
},
{
status:404
}
);

}



return Response.json({

message:"User deleted successfully"

});



}catch(error){


return Response.json(

{
message:"Error deleting user",
error:error.message
},

{
status:500
}

);


}


}