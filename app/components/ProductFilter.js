"use client";


import { useState } from "react";



export default function ProductFilter({products,onFilter}){



const [category,setCategory]=useState("");

const [age,setAge]=useState("");

const [price,setPrice]=useState("");

const [sort,setSort]=useState("");





function applyFilter(){



let result=[...products];




// Category

if(category){

result=result.filter(

product=>product.category === category

);

}





// Age

if(age){


result=result.filter(

product=>product.age === age

);


}







// Price


if(price){


result=result.filter(

product=>product.price <= Number(price)

);


}







// Sort


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


<div className="
bg-white
shadow
rounded-3xl
p-6
mb-8
">





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

Toutes catégories

</option>


<option>

Vêtements

</option>


<option>

Jouets

</option>


<option>

Transport

</option>


<option>

Accessoires

</option>


<option>

Alimentation

</option>



</select>









<select

className="border rounded-xl p-3"

onChange={(e)=>setAge(e.target.value)}

>


<option value="">

Tous âges

</option>


<option>

0-6 mois

</option>


<option>

6-12 mois

</option>


<option>

0-12 mois

</option>


</select>










<input

type="number"

placeholder="Prix maximum DT"

className="border rounded-xl p-3"

onChange={(e)=>setPrice(e.target.value)}

/>








<select

className="border rounded-xl p-3"

onChange={(e)=>setSort(e.target.value)}

>


<option value="">

Trier par prix

</option>


<option value="low">

Prix croissant

</option>


<option value="high">

Prix décroissant

</option>



</select>





</div>






<button

onClick={applyFilter}

className="
mt-5
bg-pink-500
text-white
px-8
py-3
rounded-full
"

>

Filtrer

</button>






</div>



);


}