"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";



export default function ProductsCarousel({ products = [] }) {



if(products.length === 0){

return (

<p className="
text-center
text-gray-500
py-10
">

Aucun produit disponible

</p>

);

}





return (


<Swiper


modules={[Navigation, Autoplay]}


navigation


loop={products.length > 4}



autoplay={{

delay:3000,

disableOnInteraction:false

}}



spaceBetween={24}



breakpoints={{

0:{
slidesPerView:1
},


640:{
slidesPerView:2
},


768:{
slidesPerView:3
},


1024:{
slidesPerView:4
}


}}


>



{

products.map((product)=>(


<SwiperSlide

key={product.id}

className="h-auto"

>


<ProductCard

product={product}

/>


</SwiperSlide>


))


}



</Swiper>


);


}