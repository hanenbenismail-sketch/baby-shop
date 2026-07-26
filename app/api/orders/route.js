import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";


// GET ALL ORDERS

export async function GET() {

  try {

    await connectDB();

    const orders = await Order.find()
      .sort({
        createdAt: -1
      });


    return Response.json(orders);


  } catch (error) {


    return Response.json(
      {
        message: "Error fetching orders",
        error: error.message
      },
      {
        status: 500
      }
    );


  }

}



// CREATE ORDER

export async function POST(request) {


  try {


    await connectDB();


    const body = await request.json();


    const order = await Order.create(body);



    return Response.json(
      order,
      {
        status: 201
      }
    );


  } catch (error) {


    return Response.json(
      {
        message: "Error creating order",
        error: error.message
      },
      {
        status: 500
      }
    );


  }

}