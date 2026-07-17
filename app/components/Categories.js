"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    name: "Vêtements bébé",
    slug: "vetements",
    image: "/images/clothes.jpg",
  },
  {
    name: "Jouets",
    slug: "jouets",
    image: "/images/toys.jpg",
  },
  {
    name: "Alimentation",
    slug: "alimentation",
    image: "/images/feeding.jpg",
  },
  {
    name: "Chaussures",
    slug: "chaussures",
    image: "/images/shoes.jpg",
  },
  {
    name: "Mobilier bébé",
    slug: "mobilier",
    image: "/images/nursery.jpg",
  },
  {
    name: "Transport",
    slug: "transport",
    image: "/images/images.jpg",
  },
  {
    name: "Hygiène",
    slug: "hygiene",
    image: "/images/hygiene.jpg",
  },
  {
    name: "Accessoires",
    slug: "accessoires",
    image: "/images/accessories.jpg",
  },
];

export default function Categories() {
  return (
    <section
      className="
      py-16
      px-4
      sm:px-6
      bg-gradient-to-b
      from-pink-50
      to-white
    "
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-3xl
          md:text-4xl
          font-bold
          text-center
          text-gray-800
          mb-3
        "
        >
          Nos catégories
        </h2>

        <p
          className="
          text-center
          text-gray-500
          mb-10
          max-w-2xl
          mx-auto
        "
        >
          Découvrez tous les univers dédiés au confort et au bien-être de votre bébé.
        </p>


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
              slidesPerView: 2,
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

          {categories.map((category) => (

            <SwiperSlide key={category.slug}>

              <Link
                href={`/categories/${category.slug}`}
                className="
                group
                relative
                block
                h-52
                md:h-64
                rounded-3xl
                overflow-hidden
                border
                border-pink-100
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-300
              "
              >

                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-500
                "
                />


                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
                />


                <div
                  className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                "
                >

                  <h3
                    className="
                    text-white
                    text-base
                    md:text-lg
                    font-bold
                    drop-shadow-lg
                    text-center
                  "
                  >
                    {category.name}
                  </h3>

                </div>

              </Link>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>
    </section>
  );
}