import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema(
{
  customer:{
    name:String,
    phone:String,
    address:String,
  },

  products:[
    {
      name:String,
      image:String,
      price:Number,
      quantity:Number,
    }
  ],

  totalPrice:Number,

  status:{
    type:String,
    default:"pending",
  }

},
{
  timestamps:true
}
);


const Order =
mongoose.models.Order || mongoose.model("Order", OrderSchema);


export default Order;