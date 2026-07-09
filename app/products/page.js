import ProductCard from "../components/ProductCard";
import products from "../data/products";


export default function Products(){


return (

<div>

<h1 className="text-center mb-5">
Nos annonces bébé 🍼
</h1>


<div className="row">


{

products.map(product=>(

<div

className="col-lg-4 col-md-6 mb-4"

key={product.id}

>


<ProductCard product={product}/>


</div>


))

}


</div>


</div>

)

}