import { Suspense } from "react";
import ProductsClient from "./ProductsClient";


export default function AdminProductsPage(){

return (

<Suspense fallback={
<div className="p-8 text-center text-gray-500">
Loading products...
</div>
}>

<ProductsClient />

</Suspense>

);

}