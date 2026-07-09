"use client";

import { useParams } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import products from "../../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const product = products.find(
  (item) => item.id === id
);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-96">
        <h2 className="text-2xl font-semibold text-red-500">
          Produit introuvable
        </h2>
      </div>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover rounded-3xl shadow"
          />
        </div>

        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-blue-600 mb-4">
            {product.price} TND
          </p>

          <p className="text-gray-600 mb-3">
            <strong>Catégorie :</strong> {product.category}
          </p>

          <p className="text-gray-700 mb-8">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition"
          >
            Ajouter au panier 🛒
          </button>

        </div>

      </div>
    </section>
  );
}