"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";


const translations = {

fr:{
allCat:"Toutes catégories",
allAge:"Tous âges",
price:"Prix maximum DT",
sort:"Trier par prix",
low:"Prix croissant",
high:"Prix décroissant",
button:"Filtrer",

categories:{
Vêtements:"Vêtements",
Jouets:"Jouets",
Transport:"Transport",
Accessoires:"Accessoires",
Alimentation:"Alimentation",
Mobilier:"Mobilier",
Hygiène:"Hygiène"
},

ages:{
"0-6 mois":"0-6 mois",
"6-12 mois":"6-12 mois",
"0-12 mois":"0-12 mois"
}

},


en:{
allCat:"All categories",
allAge:"All ages",
price:"Maximum price TND",
sort:"Sort by price",
low:"Lowest price",
high:"Highest price",
button:"Filter",

categories:{
Vêtements:"Clothes",
Jouets:"Toys",
Transport:"Transport",
Accessoires:"Accessories",
Alimentation:"Food",
Mobilier:"Furniture",
Hygiène:"Hygiene"
},

ages:{
"0-6 mois":"0-6 months",
"6-12 mois":"6-12 months",
"0-12 mois":"0-12 months"
}

},


ar:{
allCat:"كل الأصناف",
allAge:"كل الأعمار",
price:"السعر الأقصى د.ت",
sort:"ترتيب حسب السعر",
low:"السعر من الأقل",
high:"السعر من الأعلى",
button:"تصفية",

categories:{
Vêtements:"ملابس",
Jouets:"ألعاب",
Transport:"نقل",
Accessoires:"إكسسوارات",
Alimentation:"غذاء",
Mobilier:"أثاث",
Hygiène:"نظافة"
},

ages:{
"0-6 mois":"0-6 أشهر",
"6-12 mois":"6-12 شهر",
"0-12 mois":"0-12 شهر"
}

}

};



export default function ProductFilter({products,onFilter}){


const {language}=useLanguage();

const t=translations[language];


const [category,setCategory]=useState("");

const [age,setAge]=useState("");

const [price,setPrice]=useState("");

const [sort,setSort]=useState("");




function applyFilter(){


let result=[...products];



if(category){

result=result.filter(
product=>product.category===category
);

}



if(age){

result=result.filter(
product=>product.age===age
);

}



if(price){

result=result.filter(
product=>product.price <= Number(price)
);

}



if(sort==="low"){

result.sort(
(a,b)=>a.price-b.price
);

}


if(sort==="high"){

result.sort(
(a,b)=>b.price-a.price
);

}



onFilter(result);

}





return (

<div

dir={language==="ar"?"rtl":"ltr"}

className="
bg-white
shadow
rounded-3xl
p-6
mb-8
"

>


<div className="
grid
md:grid-cols-4
gap-4
">


<select

className="border rounded-xl p-3"

onChange={(e)=>setCategory(e.target.value)}

>

<option value="">
{t.allCat}
</option>


{
Object.keys(t.categories).map((key)=>(

<option key={key} value={key}>

{t.categories[key]}

</option>

))
}


</select>





<select

className="border rounded-xl p-3"

onChange={(e)=>setAge(e.target.value)}

>

<option value="">
{t.allAge}
</option>


{
Object.keys(t.ages).map((key)=>(

<option key={key} value={key}>

{t.ages[key]}

</option>

))
}


</select>





<input

type="number"

placeholder={t.price}

className="border rounded-xl p-3"

onChange={(e)=>setPrice(e.target.value)}

/>






<select

className="border rounded-xl p-3"

onChange={(e)=>setSort(e.target.value)}

>


<option value="">
{t.sort}
</option>


<option value="low">
{t.low}
</option>


<option value="high">
{t.high}
</option>


</select>


</div>





<button

onClick={applyFilter}

className="
mt-5
bg-pink-500
hover:bg-pink-600
text-white
px-8
py-3
rounded-full
font-semibold
"

>

{t.button}

</button>



</div>

);

}