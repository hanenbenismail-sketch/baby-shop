"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

import products from "@/app/data/products";
import { useCart } from "@/context/CartContext";


export default function ProductDetails() {


  const { id } = useParams();

  const { addToCart } = useCart();



  const product = products.find(
    (item) => item.id.toString() === id
  );



  if (!product) {

    return (

      <div
        className="
        text-center
        py-20
        text-2xl
        text-red-500
        "
      >
        Produit introuvable
      </div>

    );

  }



  const images = product.images || [
    product.image
  ];



  return (

    <ProductView
      product={product}
      images={images}
      addToCart={addToCart}
    />

  );

}







function ProductView({product, images, addToCart}) {


  const [selectedImage, setSelectedImage] = useState(product.image);

  const [size, setSize] = useState("");

  const [color, setColor] = useState("");



  const productToCart = {

    ...product,

    selectedSize:size,

    selectedColor:color

  };




  return (

<section
className="
max-w-7xl
mx-auto
px-4
sm:px-6
py-12
"
>


<div
className="
grid
md:grid-cols-2
gap-10
"
>


{/* GALLERY */}

<div>


<div
className="
relative
h-[350px]
sm:h-[450px]
rounded-3xl
overflow-hidden
shadow-lg
"
>

<Image

src={selectedImage}

alt={product.name}

fill

className="
object-cover
"

/>

</div>





<div
className="
flex
gap-3
mt-5
flex-wrap
"
>


{images.map((img,index)=>(

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
?"border-pink-500"
:"border-gray-200"
}
`}

>

<Image

src={img}

alt={product.name}

fill

className="object-cover"

/>

</button>

))}


</div>


</div>









{/* INFO */}

<div
className="
flex
flex-col
justify-center
"
>


<h1
className="
text-3xl
sm:text-4xl
font-bold
text-gray-800
mb-4
"
>
{product.name}
</h1>





<div className="flex gap-3 items-center mb-5">

<span
className="
text-3xl
font-bold
text-pink-500
"
>
{product.price} DT
</span>


{product.oldPrice && (

<span
className="
text-gray-400
line-through
"
>
{product.oldPrice} DT
</span>

)}

</div>





<p
className="
text-gray-600
mb-5
"
>
{product.description}
</p>





<p className="mb-4">
⭐ {product.rating}/5
</p>





<p className="font-semibold mb-5">

Stock :

<span className="text-green-600">
 {product.stock}
</span>

</p>










{/* SIZE */}

{product.sizes?.length > 0 && (

<div className="mb-5">

<h3 className="font-bold mb-2">
Taille
</h3>


<div className="flex gap-3 flex-wrap">

{product.sizes.map((s)=>(

<button

key={s}

onClick={()=>setSize(s)}

className={`
px-4
py-2
rounded-xl
border
transition
${
size===s
?"bg-pink-500 text-white"
:"bg-white"
}
`}

>

{s}

</button>

))}

</div>


</div>

)}









{/* COLOR */}

{product.colors?.length > 0 && (

<div className="mb-6">


<h3 className="font-bold mb-2">
Couleur
</h3>


<div className="flex gap-3 flex-wrap">


{product.colors.map((c)=>(

<button

key={c}

onClick={()=>setColor(c)}

className={`
px-4
py-2
rounded-xl
border
transition
${
color===c
?"bg-blue-500 text-white"
:"bg-white"
}
`}

>

{c}

</button>

))}


</div>


</div>

)}










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

🛒 Ajouter au panier

</button>



</div>



</div>


</section>

  );

}