"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import products from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  fr: {
    title: "Résultats de recherche",
    noResult: "Aucun résultat trouvé."
  },
  en: {
    title: "Search Results",
    noResult: "No results found."
  },
  ar: {
    title: "نتائج البحث",
    noResult: "لا توجد نتائج."
  }
};

export default function SearchClient() {
  const { language } = useLanguage();

  const searchParams = useSearchParams();

  const query = (searchParams.get("q") || "").trim().toLowerCase();

  const t = translations[language];

  const results = products.filter((product) => {
    const name =
      typeof product.name === "object"
        ? product.name[language]
        : product.name || "";

    const description =
      typeof product.description === "object"
        ? product.description[language]
        : product.description || "";

    const category =
      typeof product.category === "object"
        ? product.category[language]
        : product.category || "";

    return (
      String(name).toLowerCase().includes(query) ||
      String(description).toLowerCase().includes(query) ||
      String(category).toLowerCase().includes(query)
    );
  });

  return (
    <main
      dir={language === "ar" ? "rtl" : "ltr"}
      className="max-w-7xl mx-auto px-6 py-10"
    >
      <h1 className="text-3xl font-bold mb-2">
        {t.title}
      </h1>

      <p className="text-gray-500 mb-8">
        {query ? `"${query}"` : ""}
      </p>

      {results.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">
            {t.noResult}
          </p>

          <Link
            href="/products"
            className="inline-block mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
          >
            Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map((product, index) => (
            <ProductCard
              key={`${product.id ?? product._id}-${index}`}
              product={product}
            />
          ))}
        </div>
      )}
    </main>
  );
}