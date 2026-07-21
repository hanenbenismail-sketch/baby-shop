"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  fr: {
    allCat: "Toutes catégories",
    allAge: "Tous âges",
    price: "Prix maximum DT",
    sort: "Trier par prix",
    low: "Prix croissant",
    high: "Prix décroissant",
    button: "Filtrer",

    categories: [
      "Vêtements",
      "Jouets",
      "Transport",
      "Accessoires",
      "Alimentation",
      "Mobilier",
      "Hygiène",
      "Chaussures",
      "Couches",
    ],

    ages: [
      "0-6 mois",
      "6-12 mois",
      "0-12 mois",
    ],
  },

  en: {
    allCat: "All categories",
    allAge: "All ages",
    price: "Maximum price TND",
    sort: "Sort by price",
    low: "Lowest price",
    high: "Highest price",
    button: "Filter",

    categories: [
      "Clothing",
      "Toys",
      "Transport",
      "Accessories",
      "Feeding",
      "Furniture",
      "Hygiene",
      "Shoes",
      "Diapers",
    ],

    ages: [
      "0-6 months",
      "6-12 months",
      "0-12 months",
    ],
  },

  ar: {
    allCat: "كل الأصناف",
    allAge: "كل الأعمار",
    price: "السعر الأقصى د.ت",
    sort: "ترتيب حسب السعر",
    low: "السعر من الأقل",
    high: "السعر من الأعلى",
    button: "تصفية",

    categories: [
      "ملابس",
      "ألعاب",
      "نقل",
      "إكسسوارات",
      "تغذية",
      "أثاث",
      "نظافة",
      "أحذية",
      "حفاضات",
    ],

    ages: [
      "0-6 أشهر",
      "6-12 شهر",
      "0-12 شهر",
    ],
  },
};

export default function ProductFilter({ products, onFilter }) {
  const { language } = useLanguage();

  const t = translations[language];

  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  function applyFilter() {
    let result = [...products];

    if (category) {
      result = result.filter(
        (product) => product.category[language] === category
      );
    }

    if (age) {
      result = result.filter(
        (product) => product.age[language] === age
      );
    }

    if (price) {
      result = result.filter(
        (product) => product.price <= Number(price)
      );
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    onFilter(result);
  }

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-white shadow rounded-3xl p-6 mb-8"
    >
      <div className="grid md:grid-cols-4 gap-4">

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option value="">{t.allCat}</option>

          {t.categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option value="">{t.allAge}</option>

          {t.ages.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder={t.price}
          className="border rounded-xl p-3"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option value="">{t.sort}</option>
          <option value="low">{t.low}</option>
          <option value="high">{t.high}</option>
        </select>

      </div>

      <button
        onClick={applyFilter}
        className="mt-5 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold"
      >
        {t.button}
      </button>
    </div>
  );
}