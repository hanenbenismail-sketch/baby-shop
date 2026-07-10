import Image from "next/image";
import Link from "next/link";


export default function SpecialOffers(){


return (


<section
className="
py-16
bg-gradient-to-r
from-pink-50
to-blue-50
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>



<div
className="
grid
md:grid-cols-2
gap-10
items-center
bg-white
rounded-3xl
shadow-lg
p-8
overflow-hidden
"
>







{/* CONTENT */}


<div>


<span
className="
inline-block
bg-pink-500
text-white
px-4
py-2
rounded-full
text-sm
font-bold
mb-4
"
>

🔥 Offre spéciale

</span>





<h2
className="
text-4xl
font-extrabold
text-gray-800
mb-4
"
>

Jusqu'à -30% 
<br/>
sur les produits bébé

</h2>






<p
className="
text-gray-600
text-lg
mb-6
"
>

Profitez de nos offres limitées :
vêtements, jouets et accessoires
pour votre bébé.

</p>







<div
className="
flex
gap-4
"
>


<Link

href="/products"

className="
bg-pink-500
hover:bg-pink-600
text-white
px-7
py-3
rounded-full
font-bold
transition
shadow-md
"

>

Découvrir

</Link>





<Link

href="/categories"

className="
border
border-blue-400
text-blue-500
px-7
py-3
rounded-full
font-bold
hover:bg-blue-50
transition
"

>

Voir catégories

</Link>



</div>






</div>









{/* IMAGE */}



<div
className="
relative
h-72
md:h-96
"
>


<Image

src="/images/offer-baby.jpg"

alt="Offre spéciale bébé"

fill

className="
object-cover
rounded-3xl
"

/>


</div>








</div>






</div>



</section>


);


}