import Link from "next/link";
import ProductCard from "./ProductCard";
import products from "@/app/data/products";


export default function FeaturedProducts(){


const featured = products.slice(0,4);



return (


<section
className="
bg-pink-50
py-16
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

⭐ Produits populaires

</h2>




<p
className="
text-center
text-gray-600
mb-10
"
>

Découvrez nos meilleurs produits bébé

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

featured.map(product=>(


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
from-pink-500
to-blue-500
text-white
px-8
py-3
rounded-full
font-bold
shadow-lg
hover:scale-105
transition
"

>

Voir tous les produits

</Link>



</div>






</div>


</section>


);


}