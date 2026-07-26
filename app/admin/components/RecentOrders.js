"use client";

import { useEffect, useState } from "react";


export default function RecentOrders(){


const [orders,setOrders] = useState([]);

const [loading,setLoading] = useState(true);



useEffect(()=>{


async function getOrders(){


try{


const res = await fetch("/api/orders");

const data = await res.json();


setOrders(
Array.isArray(data)
?
data.slice(0,5)
:
[]
);


}catch(error){

console.log(error);

}finally{

setLoading(false);

}


}


getOrders();


},[]);






if(loading){

return (

<div className="
bg-white
rounded-3xl
p-6
border
shadow-sm
">

<p className="text-gray-500">
Loading orders...
</p>

</div>

);

}





return (

<div className="
bg-white
rounded-3xl
p-6
border
shadow-sm
">


<div className="
flex
justify-between
items-center
mb-6
">


<h2 className="
text-xl
font-bold
text-gray-800
">

Recent Orders

</h2>


<span className="
text-sm
text-gray-400
">

Last 5 orders

</span>


</div>





{

orders.length === 0 ?


(

<div className="
text-center
py-8
text-gray-500
">

No orders yet 🛒

</div>

)


:


(

<div className="overflow-x-auto">


<table className="w-full">


<thead>


<tr className="
border-b
text-left
text-gray-500
">


<th className="pb-3">
Customer
</th>


<th>
Total
</th>


<th>
Status
</th>


<th>
Date
</th>


</tr>


</thead>





<tbody>


{

orders.map((order)=>(


<tr

key={order._id}

className="
border-b
hover:bg-gray-50
transition
"

>


<td className="
py-4
font-semibold
text-gray-800
">


{order.customer?.name || "Guest Customer"}


</td>





<td className="
font-semibold
">

{order.totalPrice || 0} DT


</td>





<td>


<span

className={`

px-3
py-1
rounded-full
text-sm
font-semibold


${
order.status==="confirmed"

?

"bg-blue-100 text-blue-700"

:

order.status==="delivered"

?

"bg-green-100 text-green-700"

:

order.status==="cancelled"

?

"bg-red-100 text-red-700"

:

"bg-yellow-100 text-yellow-700"

}

`}

>

{order.status || "pending"}

</span>


</td>





<td className="text-gray-500">


{

order.createdAt

?

new Date(order.createdAt)
.toLocaleDateString("fr-FR")

:

"-"

}


</td>





</tr>


))


}


</tbody>


</table>


</div>


)


}



</div>


);


}