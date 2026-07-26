import dotenv from "dotenv";

dotenv.config({
  path: ".env.local"
});


import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.js";



const MONGODB_URI = process.env.MONGODB_URI;



async function createAdmin(){


  try{


    if(!MONGODB_URI){

      throw new Error("MONGODB_URI is missing");

    }



    await mongoose.connect(MONGODB_URI);



    const hashedPassword = await bcrypt.hash(
      "Admin123456",
      10
    );



    const admin = await User.create({

      name:"Admin",

      email:"admin@babyshop.com",
      password:hashedPassword,

      role:"admin"

    });



    console.log(
      "Admin created:",
      admin.email
    );



    await mongoose.disconnect();


    process.exit(0);



  }catch(error){


    console.log(
      "Error:",
      error.message
    );


    process.exit(1);


  }


}



createAdmin();