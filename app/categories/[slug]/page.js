import products from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";


export default async function CategoryPage({ params }) {


const { slug } = await params;



const categoryProducts = products.filter((product)=>{


const categorySlug = product.category.fr

.toLowerCase()

.normalize("NFD")

.replace(/[\u0300-\u036f]/g,"")

.replaceAll(" ","-");



return categorySlug === slug;


});





return (


<section

className="
py-16
px-4
sm:px-6
"

>


<div

className="
max-w-7xl
mx-auto
"

>



<h1

className="
text-3xl
sm:text-4xl
font-bold
text-center
mb-10
text-gray-800
capitalize
"

>

{slug ? slug.replaceAll("-"," ") : "Catégorie"}

</h1>






{

categoryProducts.length > 0 ? (


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-6
"

>


{

categoryProducts.map((product)=>(


<ProductCard

key={product.id}

product={product}

/>


))

}


</div>


)


:


(


<p

className="
text-center
text-gray-500
text-xl
"

>

Aucun produit trouvé

</p>


)


}



</div>


</section>


);


}