"use client";

import Link from "next/link";

import ProductsCarousel from "./ProductsCarousel";
import products from "@/app/data/products";

import { useLanguage } from "@/context/LanguageContext";



const translations = {

  fr:{
    title:"🆕 Nouveautés bébé",
    description:"Découvrez nos derniers produits ajoutés",
    button:"Voir les nouveautés"
  },


  en:{
    title:"🆕 New Baby Arrivals",
    description:"Discover our latest added products",
    button:"View new arrivals"
  },


  ar:{
    title:"🆕 أحدث منتجات الأطفال",
    description:"اكتشف أحدث المنتجات المضافة",
    button:"عرض المنتجات الجديدة"
  }

};





export default function NewArrivals(){


  const {language}=useLanguage();


  const t = translations[language];



  const newProducts = products
    .filter(product=>product.newArrival)
    .slice(0,8);





  return (


    <section

      dir={language==="ar" ? "rtl" : "ltr"}

      className="
      py-16
      bg-white
      "

    >



      <div

        className="
        max-w-7xl
        mx-auto
        px-6
        "

      >





        <h2

          className="
          text-3xl
          md:text-4xl
          font-bold
          text-center
          text-gray-800
          mb-4
          "

        >

          {t.title}

        </h2>






        <p

          className="
          text-center
          text-gray-600
          mb-10
          "

        >

          {t.description}

        </p>







        {
          newProducts.length > 0 ? (


            <ProductsCarousel

              products={newProducts}

            />


          ) : (


            <p

              className="
              text-center
              text-gray-500
              "

            >

              Aucun nouveau produit disponible

            </p>


          )
        }







        <div

          className="
          text-center
          mt-10
          "

        >



          <Link

            href="/products"

            className="
            inline-flex
            bg-gradient-to-r
            from-blue-500
            to-pink-500
            text-white
            px-8
            py-3
            rounded-full
            font-bold
            shadow-md
            hover:scale-105
            transition
            "

          >

            {t.button}

          </Link>



        </div>





      </div>


    </section>


  );


}