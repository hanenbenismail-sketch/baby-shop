import Link from "next/link";
import LogoutButton from "./components/LogoutButton";
import StatsCards from "./components/StatsCards";
import {
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";


import RecentOrders from "./components/RecentOrders";

export default function AdminPage(){


const cards = [

{
title:"Products",
description:"Manage products",
icon:Package,
link:"/admin/products"
},

{
title:"Orders",
description:"Manage orders",
icon:ShoppingCart,
link:"/admin/orders"
},

{
title:"Users",
description:"Manage users",
icon:Users,
link:"/admin/users"
}

];



return (

<main className="space-y-8">


{/* Header */}

<div className="flex justify-between items-center">


<div>

<h1 className="text-3xl font-bold text-gray-800">
Admin Dashboard
</h1>

<p className="text-gray-500 mt-2">
Welcome back 👋 Manage your Baby Shop easily
</p>

</div>


<LogoutButton />


</div>




{/* Statistics */}

<StatsCards />

{/*RecentOrders*/}

<RecentOrders />

{/* Quick Management */}

<div className="grid md:grid-cols-3 gap-6">


{

cards.map((card)=>{


const Icon = card.icon;


return (

<Link

key={card.title}

href={card.link}

className="
bg-white
border
rounded-2xl
p-6
shadow-sm
hover:shadow-lg
transition
"

>


<div className="
flex
items-center
gap-4
">


<div className="
bg-pink-100
text-pink-600
p-4
rounded-xl
">

<Icon size={28}/>

</div>



<div>

<h2 className="text-xl font-bold">
{card.title}
</h2>

<p className="text-gray-500">
{card.description}
</p>


</div>


</div>


</Link>


)


})


}


</div>





{/* Recent Activity */}

<div className="
bg-white
border
rounded-2xl
p-6
shadow-sm
">


<h2 className="
text-xl
font-bold
mb-4
">

Recent Activity

</h2>


<ul className="space-y-3 text-gray-600">


<li>
🛒 New order received
</li>

<li>
📦 Product updated
</li>

<li>
👤 New customer registered
</li>


</ul>


</div>



</main>


);

}