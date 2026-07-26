"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Home,
  Package,
  ShoppingCart,
  Users
} from "lucide-react";

import LogoutButton from "./components/LogoutButton";
import Topbar from "./components/Topbar";



export default function AdminLayout({children}){


const pathname = usePathname();

const [open,setOpen] = useState(false);



const menu=[

{
name:"Dashboard",
path:"/admin",
icon:Home
},

{
name:"Products",
path:"/admin/products",
icon:Package
},

{
name:"Orders",
path:"/admin/orders",
icon:ShoppingCart
},

{
name:"Customers",
path:"/admin/users",
icon:Users
}

];



return (

<div className="
min-h-screen
flex
bg-pink-50/40
">





{/* Mobile Button */}

<button

onClick={()=>setOpen(true)}

className="
md:hidden
fixed
top-4
left-4
z-50
bg-pink-500
text-white
px-4
py-2
rounded-xl
shadow
"

>

☰

</button>





{/* Overlay */}

{

open && (

<div

onClick={()=>setOpen(false)}

className="
fixed
inset-0
bg-black/30
z-40
md:hidden
"

/>

)

}







{/* Sidebar */}


<aside

className={`

fixed
top-0
left-0
h-full
w-72
bg-white
border-r
shadow-sm
p-6
z-50

transition-transform
duration-300

md:static
md:translate-x-0

${

open

?

"translate-x-0"

:

"-translate-x-full"

}

`}

>




{/* Logo */}


<div className="
mb-10
">


<div className="
flex
items-center
gap-3
">


<div className="
bg-pink-100
p-3
rounded-2xl
text-2xl
">

🍼

</div>



<div>

<h2 className="
text-2xl
font-bold
text-pink-600
">

Baby Shop

</h2>


<p className="
text-sm
text-gray-500
">

Admin Panel

</p>


</div>


</div>


</div>









<nav className="
space-y-3
">


{

menu.map(item=>{


const Icon=item.icon;


const active = pathname === item.path;



return (


<Link

key={item.path}

href={item.path}

onClick={()=>setOpen(false)}

className={`

flex
items-center
gap-3
px-4
py-3
rounded-2xl
font-semibold
transition


${

active

?

"bg-pink-500 text-white shadow-lg shadow-pink-200"

:

"text-gray-600 hover:bg-pink-50 hover:text-pink-600"

}

`}

>



<Icon size={21}/>


<span>

{item.name}

</span>



</Link>


)


})

}



</nav>








<div className="
absolute
bottom-6
left-6
right-6
">


<LogoutButton />


</div>





</aside>









{/* Content */}


<main className="
flex-1
">


<Topbar />


<div className="
p-6
">

{children}

</div>


</main>






</div>


);


}