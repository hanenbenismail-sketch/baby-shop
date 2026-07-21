"use client";

import { useState } from "react";

import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

import products from "../data/products";

import { useLanguage } from "@/context/LanguageContext";




const translations = {

  fr:{
    title:"🛍 Nos produits bébé",
    empty:"😔 Aucun produit trouvé"
  },


  en:{
    title:"🛍 Our baby products",
    empty:"😔 No products found"
  },


  ar:{
    title:"🛍 منتجات الأطفال",
    empty:"😔 لا توجد منتجات"
  }

};






export default function ProductsPage(){



  const [filteredProducts,setFilteredProducts] = useState(products);


  const {language} = useLanguage();


  const t = translations[language];






  return (


    <main

      dir={language==="ar" ? "rtl" : "ltr"}

      className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      py-10
      "

    >





      <h1

        className="
        text-center
        text-3xl
        sm:text-4xl
        font-bold
        mb-8
        text-gray-800
        "

      >

        {t.title}

      </h1>







      <ProductFilter

        products={products}

        onFilter={setFilteredProducts}

      />









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

        filteredProducts.length > 0 ?


          filteredProducts.map(product=>(


            <ProductCard

              key={product.id}

              product={product}

            />


          ))



        :



          <div

            className="
            text-center
            col-span-full
            text-xl
            text-gray-500
            "

          >

            {t.empty}

          </div>


        }



      </div>





    </main>


  );


}