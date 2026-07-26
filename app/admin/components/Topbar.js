"use client";

import {
  Bell,
  Search,
  User
} from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Topbar(){


const router = useRouter();

const [search,setSearch] = useState("");



function handleSearch(e){

if(e.key === "Enter" && search.trim()){

router.push(
`/admin/products?search=${search}`
);

}

}



return (

<header className="
bg-white
border-b
px-6
py-4
flex
justify-between
items-center
sticky
top-0
z-30
">


<div>

<h1 className="
text-xl
font-bold
text-gray-800
">

Baby Shop Admin

</h1>


<p className="
text-sm
text-gray-500
">

Dashboard Management

</p>


</div>





<div className="
flex
items-center
gap-5
">





<div className="
hidden
md:flex
items-center
gap-2
bg-gray-100
px-4
py-2
rounded-xl
">


<Search

size={18}

className="
text-gray-500
"

/>



<input

placeholder="Search products..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

onKeyDown={handleSearch}

className="
bg-transparent
outline-none
text-sm
w-40
"

/>



</div>







<button

title="Notifications"

className="
text-gray-600
hover:text-pink-600
transition
"

>

<Bell size={22}/>

</button>







<div className="
flex
items-center
gap-3
">


<div className="
bg-pink-100
text-pink-600
p-2
rounded-full
">

<User size={20}/>

</div>





<div className="
hidden
md:block
">


<p className="
font-semibold
text-gray-800
">

Admin

</p>


<p className="
text-xs
text-gray-500
">

Administrator

</p>


</div>



</div>





</div>



</header>


);

}