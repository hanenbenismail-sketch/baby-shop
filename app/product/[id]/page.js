"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

import { Heart, Star } from "lucide-react";

import products from "@/app/data/products";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";


const translations = {

fr:{
notFound:"Produit introuvable",
size:"Taille",
color:"Couleur",
stock:"Stock",
add:"🛒 Ajouter au panier",
reviews:"avis"
},

en:{
notFound:"Product not found",
size:"Size",
color:"Color",
stock:"Stock",
add:"🛒 Add to cart",
reviews:"reviews"
},

ar:{
notFound:"المنتج غير موجود",
size:"المقاس",
color:"اللون",
stock:"المخزون",
add:"🛒 أضف إلى السلة",
reviews:"تقييم"
}

};





export default function ProductDetails(){


const {id}=useParams();

const {addToCart}=useCart();

const {language}=useLanguage();

const t=translations[language];



const product=products.find(
(item)=>item.id.toString()===id
);




if(!product){

return (

<div className="
text-center
py-20
text-2xl
text-red-500
">

{t.notFound}

</div>

);

}




return (

<ProductView

product={product}

addToCart={addToCart}

t={t}

language={language}

/>

);


}









function ProductView({
product,
addToCart,
t,
language
}){


const {addToWishlist,isInWishlist}=useWishlist();


const [selectedImage,setSelectedImage]=useState(
product.image
);


const [size,setSize]=useState("");

const [color,setColor]=useState("");



const images=product.images || [
product.image
];



const liked=isInWishlist(product.id);



const productToCart={

...product,

selectedSize:size,

selectedColor:color

};







return (


<section

dir={language==="ar"?"rtl":"ltr"}

className="
max-w-7xl
mx-auto
px-6
py-12
"

>


<div className="
grid
md:grid-cols-2
gap-10
">





{/* IMAGE */}


<div>


<div className="
relative
h-[350px]
sm:h-[450px]
rounded-3xl
overflow-hidden
shadow-lg
">


<Image

src={selectedImage}

alt={product.name[language]}

fill

className="
object-cover
"

/>





<button

onClick={()=>addToWishlist(product)}

className="
absolute
top-5
right-5
bg-white
w-11
h-11
rounded-full
flex
items-center
justify-center
shadow
"

>


<Heart

size={24}

className={

liked

?

"fill-pink-500 text-pink-500"

:

"text-gray-400"

}

/>


</button>



</div>






<div className="
flex
gap-3
mt-5
flex-wrap
">


{

images.map((img,index)=>(


<button

key={index}

onClick={()=>setSelectedImage(img)}

className={`
relative
w-20
h-20
rounded-xl
overflow-hidden
border-2
${
selectedImage===img
?
"border-pink-500"
:
"border-gray-200"
}
`}

>


<Image

src={img}

alt={product.name[language]}

fill

className="object-cover"

/>


</button>


))

}


</div>



</div>









{/* INFO */}


<div className="
flex
flex-col
justify-center
">



<h1 className="
text-4xl
font-bold
text-gray-800
mb-4
">

{product.name[language]}

</h1>






<div className="
flex
items-center
gap-3
mb-5
">


<span className="
text-3xl
font-bold
text-pink-500
">

{product.price} DT

</span>




{
product.oldPrice &&

<span className="
line-through
text-gray-400
">

{product.oldPrice} DT

</span>

}



</div>








<p className="
text-gray-600
mb-5
">

{product.description[language]}

</p>







<div className="
flex
items-center
gap-2
mb-5
">


{

[1,2,3,4,5].map((s)=>(


<Star

key={s}

size={20}

className={

s<=product.rating

?

"fill-yellow-400 text-yellow-400"

:

"text-gray-300"

}

/>


))

}



<span>

({product.reviews || 0} {t.reviews})

</span>


</div>








<p className="
font-semibold
mb-5
">

{t.stock} :

<span className="
text-green-600
">

 {product.stock}

</span>

</p>









{product.sizes?.length > 0 &&

<div className="mb-5">

<h3 className="font-bold mb-2">

{t.size}

</h3>


<div className="flex gap-3 flex-wrap">


{

product.sizes.map((s,index)=>(


<button

key={index}

onClick={()=>setSize(s.fr)}

className={`

px-4

py-2

rounded-xl

border

${

size===s.fr

?

"bg-pink-500 text-white"

:

"bg-white"

}

`}

>

{s[language]}

</button>


))

}


</div>


</div>

}



{product.colors?.length > 0 &&

<div className="mb-6">


<h3 className="font-bold mb-2">

{t.color}

</h3>


<div className="flex gap-3 flex-wrap">


{

product.colors.map((c,index)=>(


<button

key={index}

onClick={()=>setColor(c.fr)}

className={`

px-4

py-2

rounded-xl

border

${

color===c.fr

?

"bg-blue-500 text-white"

:

"bg-white"

}

`}

>

{c[language]}

</button>


))

}


</div>


</div>

}









<button

onClick={()=>addToCart(productToCart)}

className="
w-full
bg-pink-500
hover:bg-pink-600
text-white
py-4
rounded-2xl
font-bold
text-lg
transition
"

>

{t.add}

</button>







</div>


</div>


</section>


);


}