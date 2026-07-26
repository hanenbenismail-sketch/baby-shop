import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import mongoose from "mongoose";
console.log("PRODUCT ID ROUTE LOADED");

// GET SINGLE PRODUCT

export async function GET(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;

    console.log("PRODUCT ID:", id);


    if (!mongoose.Types.ObjectId.isValid(id)) {

      return Response.json(
        {
          message: "Invalid product id"
        },
        {
          status: 400
        }
      );

    }


    const product = await Product.findOne({
      _id: id
    });


    console.log("FOUND PRODUCT:", product);


    if (!product) {

      return Response.json(
        {
          message: "Product not found"
        },
        {
          status: 404
        }
      );

    }


    return Response.json(product);


  } catch (error) {

    console.log(error);

    return Response.json(
      {
        message: "Error fetching product",
        error: error.message
      },
      {
        status: 500
      }
    );

  }

}



// UPDATE PRODUCT

export async function PUT(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;


    const body = await request.json();


    const product = await Product.findOneAndUpdate(
      {
        _id: id
      },
      body,
      {
        new: true
      }
    );


    if (!product) {

      return Response.json(
        {
          message: "Product not found"
        },
        {
          status: 404
        }
      );

    }


    return Response.json(product);


  } catch (error) {

    console.log(error);

    return Response.json(
      {
        message: "Error updating product",
        error: error.message
      },
      {
        status: 500
      }
    );

  }

}



// DELETE PRODUCT

export async function DELETE(request, { params }) {

  try {

    await connectDB();

    const { id } = await params;


    const product = await Product.findOneAndDelete({
      _id: id
    });


    if (!product) {

      return Response.json(
        {
          message: "Product not found"
        },
        {
          status: 404
        }
      );

    }


    return Response.json(
      {
        message: "Product deleted successfully"
      }
    );


  } catch (error) {

    console.log(error);

    return Response.json(
      {
        message: "Error deleting product",
        error: error.message
      },
      {
        status: 500
      }
    );

  }

}