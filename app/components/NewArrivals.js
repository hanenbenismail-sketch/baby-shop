import ProductCard from "./ProductCard";
import products from "@/app/data/products";
import Link from "next/link";


export default function NewArrivals(){


const newProducts = products.slice(-4).reverse();



return (


<section
className="
py-16
bg-white
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>




<h2
className="
text-3xl
md:text-4xl
font-bold
text-center
text-gray-800
mb-4
"
>

🆕 Nouveautés bébé

</h2>





<p
className="
text-center
text-gray-600
mb-10
"
>

Découvrez nos derniers produits ajoutés

</p>







<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>


{

newProducts.map(product=>(


<ProductCard

key={product.id}

product={product}

/>


))


}


</div>







<div
className="
text-center
mt-10
"
>


<Link

href="/products"

className="
inline-flex
bg-gradient-to-r
from-blue-500
to-pink-500
text-white
px-8
py-3
rounded-full
font-bold
shadow-md
hover:scale-105
transition
"

>

Voir les nouveautés

</Link>



</div>






</div>


</section>


);


}