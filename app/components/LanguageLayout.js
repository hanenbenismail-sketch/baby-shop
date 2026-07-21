"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";


export default function LanguageLayout({children}){


const {language}=useLanguage();



useEffect(()=>{


const html=document.documentElement;


if(language==="ar"){

html.lang="ar";
html.dir="rtl";

}

else if(language==="en"){

html.lang="en";
html.dir="ltr";

}

else{

html.lang="fr";
html.dir="ltr";

}


},[language]);



return children;


}