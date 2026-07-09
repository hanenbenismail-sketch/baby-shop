import products from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";


export default async function CategoryPage({params}){


const {slug}=await params;



const filteredProducts = products.filter((product)=>

product.category
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")
.replaceAll(" ","-")
.includes(slug)

);



return (

<section className="py-16 px-6">

<div className="max-w-7xl mx-auto">


<h1
className="
text-3xl
font-bold
text-center
mb-10
capitalize
"
>

{slug.replaceAll("-"," ")}

</h1>



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
filteredProducts.map((product)=>(

<ProductCard

key={product.id}

product={product}

/>

))
}


</div>



{
filteredProducts.length===0 && (

<p className="
text-center
text-gray-500
">

Aucun produit trouvé

</p>

)
}



</div>

</section>

)

}