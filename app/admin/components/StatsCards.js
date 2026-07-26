"use client";

import { useEffect, useState } from "react";

import {
  Package,
  ShoppingCart,
  Users,
  Wallet
} from "lucide-react";



export default function StatsCards(){


const [stats,setStats] = useState({

products:0,
orders:0,
users:0,
revenue:0

});


const [loading,setLoading] = useState(true);




useEffect(()=>{


async function getStats(){


try{


const res = await fetch("/api/admin/stats");

const data = await res.json();


setStats({

products:data.products || 0,

orders:data.orders || 0,

users:data.users || 0,

revenue:data.revenue || 0

});


}catch(error){

console.log(error);


}finally{

setLoading(false);

}


}


getStats();


},[]);







const cards=[


{
title:"Products",
value:stats.products,
icon:Package,
style:"bg-pink-100 text-pink-600"
},


{
title:"Orders",
value:stats.orders,
icon:ShoppingCart,
style:"bg-blue-100 text-blue-600"
},


{
title:"Customers",
value:stats.users,
icon:Users,
style:"bg-green-100 text-green-600"
},


{
title:"Revenue",
value:`${stats.revenue.toLocaleString("fr-FR")} DT`,
icon:Wallet,
style:"bg-yellow-100 text-yellow-600"
}


];





if(loading){

return (

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
">


{

[1,2,3,4].map((item)=>(

<div

key={item}

className="
h-32
bg-gray-100
rounded-3xl
animate-pulse
"

/>

))

}


</div>

);

}






return (


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
">



{

cards.map((card)=>{


const Icon = card.icon;



return (


<div

key={card.title}

className="
bg-white
rounded-3xl
p-6
border
shadow-sm
hover:shadow-xl
transition-all
duration-300
hover:-translate-y-1
"

>



<div className="
flex
justify-between
items-center
">


<div>


<p className="
text-gray-500
font-medium
">

{card.title}

</p>



<h2 className="
text-3xl
font-bold
text-gray-800
mt-3
">

{card.value}

</h2>



</div>





<div

className={`
p-4
rounded-2xl
${card.style}
`}

>

<Icon size={28}/>

</div>




</div>



</div>


)


})


}



</div>


);


}