"use client";

import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";


export default function LanguageSwitcher(){


const {
 language,
 changeLanguage
}=useLanguage();



const [open,setOpen]=useState(false);



const languages=[

{
code:"fr",
label:"🇫🇷 Français"
},

{
code:"en",
label:"🇬🇧 English"
},

{
code:"ar",
label:"🇹🇳 العربية"
}

];



return (

<div className="relative">


{/* CIRCLE BUTTON */}

<button

onClick={()=>setOpen(!open)}

className="

w-11
h-11

rounded-full

border

flex
items-center
justify-center

gap-1

hover:bg-pink-50

hover:border-pink-400

transition

"

>


<Globe size={18}/>


<span className="text-xs font-bold">

{language.toUpperCase()}

</span>


</button>







{/* DROPDOWN */}

{

open &&


<div

className={`

absolute

top-14

bg-white

shadow-xl

rounded-2xl

border

p-2

w-44

z-50


${language==="ar"
?
"left-0"
:
"right-0"
}

`}

>


{

languages.map((item)=>(


<button

key={item.code}

onClick={()=>{

changeLanguage(item.code);

setOpen(false);

}}

className={`

w-full

text-left

px-4

py-3

rounded-xl

transition

hover:bg-pink-100

${
language===item.code
?
"text-pink-500 font-bold"
:
""
}

`}

>

{item.label}


</button>


))


}



</div>


}



</div>

)

}