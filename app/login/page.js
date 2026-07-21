"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import api from "@/services/api";
import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
title:"Bienvenue 🍼",
subtitle:"Connectez-vous à votre compte Baby Shop",
email:"Votre email",
password:"Votre mot de passe",
button:"Se connecter",
account:"Vous n'avez pas de compte ?",
register:"Créer un compte",
success:"Connexion réussie",
error:"Email ou mot de passe incorrect"
},


en:{
title:"Welcome 🍼",
subtitle:"Login to your Baby Shop account",
email:"Your email",
password:"Your password",
button:"Login",
account:"Don't have an account?",
register:"Create account",
success:"Login successful",
error:"Invalid email or password"
},


ar:{
title:"مرحبا 🍼",
subtitle:"سجل الدخول إلى حساب Baby Shop",
email:"البريد الإلكتروني",
password:"كلمة المرور",
button:"تسجيل الدخول",
account:"ليس لديك حساب؟",
register:"إنشاء حساب",
success:"تم تسجيل الدخول بنجاح",
error:"البريد الإلكتروني أو كلمة المرور غير صحيحة"
}

};







export default function Login(){


const router = useRouter();


const {language}=useLanguage();


const t=translations[language];



const [form,setForm]=useState({

email:"",
password:""

});





function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}






async function handleSubmit(e){


e.preventDefault();



try{


const response = await api.post(
"/login",
form
);



localStorage.setItem(
"token",
response.data.token
);



alert(t.success);



router.push("/");


}


catch(error){


alert(t.error);


}


}







return (


<div

dir={language==="ar"?"rtl":"ltr"}

className="
min-h-screen
flex
items-center
justify-center
bg-pink-50
px-6
"

>


<div

className="
bg-white
rounded-3xl
shadow-xl
overflow-hidden
grid
md:grid-cols-2
max-w-4xl
w-full
"

>



<div

className="
relative
h-80
md:h-auto
"

>


<Image

src="/images/login-baby.jpg"

alt="Baby Shop"

fill

className="
object-cover
"

/>


</div>







<div

className="
p-8
md:p-12
"

>


<h1

className="
text-3xl
font-bold
text-gray-800
mb-3
"

>

{t.title}

</h1>





<p

className="
text-gray-500
mb-8
"

>

{t.subtitle}

</p>







<form onSubmit={handleSubmit}>



<label className="font-semibold">

Email

</label>


<input

type="email"

name="email"

placeholder={t.email}

className="
w-full
border
rounded-xl
p-3
mt-2
mb-5
"

onChange={handleChange}

required

/>








<label className="font-semibold">

{t.password}

</label>


<input

type="password"

name="password"

placeholder={t.password}

className="
w-full
border
rounded-xl
p-3
mt-2
mb-6
"

onChange={handleChange}

required

/>








<button

className="
w-full
bg-pink-500
hover:bg-pink-600
text-white
py-3
rounded-xl
font-bold
transition
"

>

{t.button}

</button>








<p className="
text-center
mt-6
text-gray-600
">


{t.account}

{" "}


<Link

href="/register"

className="
text-pink-500
font-bold
"

>

{t.register}

</Link>



</p>





</form>



</div>




</div>




</div>


);


}