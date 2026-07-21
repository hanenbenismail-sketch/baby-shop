"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
title:"Créer un compte 🍼",
subtitle:"Rejoignez Baby-Shop",
name:"Nom complet",
email:"Email",
phone:"Téléphone",
address:"Adresse complète",
password:"Mot de passe",
confirm:"Confirmer mot de passe",
button:"Créer mon compte",
have:"Vous avez déjà un compte ?",
login:"Connexion",
error:"Veuillez remplir tous les champs",
match:"Les mots de passe ne correspondent pas",
success:"Compte créé avec succès 🎉"
},


en:{
title:"Create account 🍼",
subtitle:"Join Baby-Shop",
name:"Full name",
email:"Email",
phone:"Phone",
address:"Full address",
password:"Password",
confirm:"Confirm password",
button:"Create account",
have:"Already have an account?",
login:"Login",
error:"Please fill all fields",
match:"Passwords do not match",
success:"Account created successfully 🎉"
},


ar:{
title:"إنشاء حساب 🍼",
subtitle:"انضم إلى Baby-Shop",
name:"الاسم الكامل",
email:"البريد الإلكتروني",
phone:"الهاتف",
address:"العنوان",
password:"كلمة المرور",
confirm:"تأكيد كلمة المرور",
button:"إنشاء الحساب",
have:"لديك حساب بالفعل؟",
login:"تسجيل الدخول",
error:"يرجى ملء جميع الحقول",
match:"كلمتا المرور غير متطابقتين",
success:"تم إنشاء الحساب بنجاح 🎉"
}

};








export default function RegisterPage(){



const router=useRouter();


const {language}=useLanguage();


const t=translations[language];



const [form,setForm]=useState({

name:"",
email:"",
phone:"",
address:"",
password:"",
password_confirmation:""

});



const [error,setError]=useState("");

const [success,setSuccess]=useState("");





function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}





function handleSubmit(e){


e.preventDefault();


setError("");



if(
!form.name ||
!form.email ||
!form.password ||
!form.password_confirmation
){

setError(t.error);

return;

}




if(form.password !== form.password_confirmation){

setError(t.match);

return;

}




setSuccess(t.success);



setTimeout(()=>{

router.push("/login");

},1500);



}






return (



<section

dir={language==="ar"?"rtl":"ltr"}

className="
min-h-screen
flex
items-center
justify-center
px-6
py-12
bg-gradient-to-br
from-pink-50
via-white
to-blue-50
"

>



<div

className="
w-full
max-w-md
bg-white
rounded-3xl
shadow-xl
p-8
border
border-gray-100
"

>




<div

className="
flex
justify-center
mb-6
"

>


<Image

src="/images/logo.jpg"

alt="Baby Shop"

width={70}

height={70}

className="
rounded-full
shadow-md
"

/>


</div>







<h1

className="
text-3xl
font-extrabold
text-center
mb-2
bg-gradient-to-r
from-pink-500
to-blue-500
bg-clip-text
text-transparent
"

>

{t.title}

</h1>




<p

className="
text-center
text-gray-500
mb-8
"

>

{t.subtitle}

</p>







{error &&

<p className="
bg-red-50
text-red-500
p-3
rounded-xl
text-center
">

{error}

</p>

}






{success &&

<p className="
bg-green-50
text-green-600
p-3
rounded-xl
text-center
">

{success}

</p>

}







<form

onSubmit={handleSubmit}

className="
space-y-4
"

>





{

[
["name",t.name],
["email",t.email],
["phone",t.phone],
["address",t.address],
["password",t.password],
["password_confirmation",t.confirm]

].map(([key,placeholder])=>(


<input

key={key}

name={key}

type={key.includes("password")?"password":"text"}

placeholder={placeholder}

value={form[key]}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
outline-none
focus:ring-2
focus:ring-pink-300
"

/>


))


}







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
shadow-md
"

>

{t.button}

</button>






</form>






<p

className="
text-center
mt-6
text-gray-600
"

>

{t.have}


<Link

href="/login"

className="
text-pink-500
font-bold
ml-2
"

>

{t.login}

</Link>



</p>






</div>



</section>



);


}