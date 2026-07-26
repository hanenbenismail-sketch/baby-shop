"use client";

import { useEffect, useState } from "react";


export default function AdminOrdersPage(){

const [orders,setOrders] = useState([]);
const [loading,setLoading] = useState(true);



useEffect(()=>{

fetchOrders();

},[]);




async function fetchOrders(){

try{

const res = await fetch("/api/orders");
const data = await res.json();

console.log("ORDERS FROM API:", data);

setOrders(data);


}catch(error){

console.error(error);

}finally{

setLoading(false);

}

}





async function updateStatus(id,status){


try{


await fetch(`/api/orders/${id}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
status
})

});


fetchOrders();



}catch(error){

console.error(error);

}


}




if(loading){

return (

<div className="p-8 text-center">

Loading...

</div>

);

}





return (

<main className="max-w-7xl mx-auto p-8">


<h1 className="text-3xl font-bold mb-8">
Orders
</h1>




<div className="space-y-6">


{

orders.map((order)=>(


<div

key={order._id}

className="border rounded-xl p-6 shadow"

>



<div className="flex justify-between mb-4">



<div>


<h2 className="font-bold">

{order.customer?.name || "Guest Customer"}

</h2>



<p>

{order.customer?.phone || "-"}

</p>



<p>

{order.customer?.address || "-"}

</p>


</div>





<div>


<p className="font-bold">

{order.totalPrice} DT

</p>





<select

value={order.status}

onChange={(e)=>
updateStatus(
order._id,
e.target.value
)
}

className="border p-2 rounded"

>


<option value="pending">
Pending
</option>


<option value="confirmed">
Confirmed
</option>


<option value="shipped">
Shipped
</option>


<option value="delivered">
Delivered
</option>


<option value="cancelled">
Cancelled
</option>


</select>



</div>



</div>








<div>


<h3 className="font-semibold mb-2">

Products:

</h3>




{

order.products.map((item,index)=>(


<div

key={index}

className="flex gap-4 mb-2"

>


<img

src={item.image}

className="w-12 h-12 object-cover rounded"

/>



<p>

{item.name} × {item.quantity}

</p>



</div>


))

}



</div>




</div>



))


}



</div>



</main>


);


}