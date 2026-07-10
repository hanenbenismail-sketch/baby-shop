"use client";


import {useState} from "react";

import ProductCard from "../components/ProductCard";

import ProductFilter from "../components/ProductFilter";

import products from "../data/products";



export default function ProductsPage(){



const [filteredProducts,setFilteredProducts]=useState(products);





return (


<div className="
container
py-10
">



<h1 className="
text-center
text-4xl
font-bold
mb-8
">

🛍 Nos produits bébé

</h1>






<ProductFilter

products={products}

onFilter={setFilteredProducts}

/>







<div className="
grid
md:grid-cols-3
gap-6
">



{

filteredProducts.length > 0 ?



filteredProducts.map(product=>(


<ProductCard

key={product.id}

product={product}

/>


))



:

<div className="
text-center
col-span-3
text-xl
">

😔 Aucun produit trouvé

</div>



}




</div>





</div>


);


}