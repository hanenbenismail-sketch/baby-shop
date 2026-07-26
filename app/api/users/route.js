import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";


// GET ALL USERS

export async function GET(){


try{


await connectDB();



const users = await User.find()
.sort({
createdAt:-1
});



return Response.json(users);



}catch(error){


return Response.json(

{
message:"Error fetching users",
error:error.message
},

{
status:500
}

);


}


}