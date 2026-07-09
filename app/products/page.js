import ProductCard from "../components/ProductCard";
import products from "../data/products";


export default function ProductsPage(){

return (

<div className="container mt-5">

<h1 className="text-center mb-5">
🛍 Nos produits bébé
</h1>


<div className="row">

{
products.map((product)=>(

<div 
className="col-md-4 mb-4"
key={product.id}
>

<ProductCard
product={product}
/>

</div>

))
}

</div>


</div>

)

}