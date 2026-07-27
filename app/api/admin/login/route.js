import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";


export async function POST(request){

try{


await connectDB();


const {email,password} = await request.json();



const user = await User.findOne({
email
});



if(!user){

return NextResponse.json(
{
message:"Invalid credentials"
},
{
status:401
}
);

}



const isMatch = await bcrypt.compare(
password,
user.password
);



if(!isMatch){

return NextResponse.json(
{
message:"Invalid credentials"
},
{
status:401
}
);

}



if(user.role !== "admin"){

return NextResponse.json(
{
message:"Access denied"
},
{
status:403
}
);

}



if(!process.env.JWT_SECRET){

throw new Error("JWT_SECRET is missing");

}



const token = jwt.sign(

{
id:user._id,
role:user.role
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);



const response = NextResponse.json({

message:"Login successful",

token,

user:{
name:user.name,
email:user.email,
role:user.role
}

});



response.cookies.set(

"token",

token,

{

httpOnly:true,

secure:process.env.NODE_ENV === "production",

sameSite:"strict",

maxAge:60 * 60 * 24 * 7,

path:"/"

}

);



return response;



}catch(error){


console.error(
"LOGIN ERROR:",
error
);



return NextResponse.json(

{
message:"Login error",
error:error.message
},

{
status:500
}

);


}

}