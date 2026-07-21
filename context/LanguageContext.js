"use client";

import { createContext, useContext, useEffect, useState } from "react";

import fr from "@/messages/fr.json";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";


const LanguageContext = createContext();


const messages = {
  fr,
  en,
  ar
};


export function LanguageProvider({children}){


const [language,setLanguage] = useState("fr");


useEffect(()=>{

const saved = localStorage.getItem("language");

if(saved){
 setLanguage(saved);
}

},[]);



function changeLanguage(lang){

setLanguage(lang);

localStorage.setItem("language",lang);

}



const t = messages[language];



return (

<LanguageContext.Provider

value={{
 language,
 changeLanguage,
 t
}}

>

{children}

</LanguageContext.Provider>

)


}



export function useLanguage(){

return useContext(LanguageContext);

}