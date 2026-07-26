"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  Pencil,
  Trash2,
  Plus,
  Search
} from "lucide-react";


export default function ProductsClient(){


const [products,setProducts]=useState([]);

const [loading,setLoading]=useState(true);

const [search,setSearch]=useState("");

const searchParams = useSearchParams();





useEffect(()=>{

setSearch(
  searchParams.get("search") || ""
);

},[searchParams]);






useEffect(()=>{

fetchProducts();

},[]);






async function fetchProducts(){


try{


const res = await fetch("/api/products");

const data = await res.json();

setProducts(data);


}catch(error){

console.log(error);


}finally{

setLoading(false);

}


}







async function deleteProduct(id){


const confirmDelete = confirm(
"Delete this product?"
);


if(!confirmDelete) return;



try{


const res = await fetch(`/api/products/${id}`,{

method:"DELETE"

});



if(res.ok){


setProducts(prev =>

prev.filter(
(product)=>product._id !== id
)

);


}



}catch(error){

console.log(error);

}


}






const filteredProducts = products.filter((product)=>{


const name = product.name || "";


return name
.toLowerCase()
.includes(
search.toLowerCase()
);


});






if(loading){

return (

<div className="
p-8
text-center
text-gray-500
">

Loading products...

</div>

);

}






return (

<main className="space-y-8">





<div className="
flex
flex-col
md:flex-row
md:justify-between
md:items-center
gap-5
">



<div>


<h1 className="
text-3xl
font-bold
text-gray-800
">

Products

</h1>


<p className="
text-gray-500
">

Manage your baby products

</p>




<div className="
mt-4
flex
items-center
gap-2
bg-white
border
rounded-xl
px-4
w-full
md:w-80
">


<Search

size={18}

className="text-gray-400"

/>




<input

type="text"

placeholder="Search products..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
py-3
outline-none
"

/>


</div>



</div>





<Link

href="/admin/products/new"

className="
flex
items-center
justify-center
gap-2
bg-pink-500
text-white
px-5
py-3
rounded-2xl
font-semibold
"

>


<Plus size={20}/>

Add Product


</Link>



</div>








<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
">





{

filteredProducts.map(product=>(


<div

key={product._id}

className="
bg-white
rounded-3xl
p-5
border
shadow-sm
hover:shadow-xl
transition
"

>



<img

src={product.image}

alt={product.name}

className="
w-full
h-52
object-cover
rounded-2xl
"

/>




<h2 className="
text-xl
font-bold
mt-5
">

{product.name}

</h2>






<div className="
flex
justify-between
mt-4
">



<span className="
bg-pink-100
text-pink-600
px-3
py-1
rounded-full
font-semibold
">

{product.price} DT

</span>





<span className="
bg-green-100
text-green-600
px-3
py-1
rounded-full
">

Stock: {product.stock}

</span>



</div>







<div className="
flex
gap-3
mt-6
">



<Link

href={`/admin/products/${product._id}/edit`}

className="
flex-1
flex
justify-center
items-center
gap-2
bg-blue-500
text-white
py-2
rounded-xl
"

>

<Pencil size={18}/>

Edit

</Link>







<button

onClick={()=>deleteProduct(product._id)}

className="
flex-1
flex
justify-center
items-center
gap-2
bg-red-500
text-white
py-2
rounded-xl
"

>


<Trash2 size={18}/>

Delete


</button>



</div>





</div>


))


}



</div>






{

filteredProducts.length === 0 && (

<div className="
text-center
text-gray-500
py-10
">

No products found

</div>

)

}



</main>

);


}