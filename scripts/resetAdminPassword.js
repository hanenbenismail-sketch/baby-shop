import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";


dotenv.config({
  path: ".env.local"
});


async function resetPassword() {

  try {

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing");
    }


    await mongoose.connect(process.env.MONGODB_URI);


    const hashedPassword = await bcrypt.hash(
      "Admin123456",
      10
    );


    const user = await User.findOneAndUpdate(
      {
        email: "admin@babyshop.com"
      },
      {
        password: hashedPassword
      },
      {
        new: true
      }
    );


    if (!user) {

      console.log("Admin not found.");

    } else {

      console.log(
        "Password updated successfully!"
      );

    }


    await mongoose.disconnect();

    process.exit(0);


  } catch (error) {

    console.error(
      "Error:",
      error.message
    );

    process.exit(1);

  }

}


resetPassword();