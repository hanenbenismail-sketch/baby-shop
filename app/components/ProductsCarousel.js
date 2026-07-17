"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";


export default function ProductsCarousel({ products }) {

  return (

    <Swiper

      modules={[Navigation, Autoplay]}

      navigation

      loop={true}

      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}

      spaceBetween={24}


      breakpoints={{
        0: {
          slidesPerView: 1,
        },

        640: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 3,
        },

        1024: {
          slidesPerView: 4,
        },
      }}

    >


      {products.map((product)=>(

        <SwiperSlide key={product.id}>

          <ProductCard product={product}/>

        </SwiperSlide>

      ))}


    </Swiper>

  );
}