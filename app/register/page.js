"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function RegisterPage(){


const router = useRouter();



const [form,setForm]=useState({

name:"",
email:"",
address:"",
phone:"",
password:"",
password_confirmation:""

});



const [error,setError]=useState("");

const [success,setSuccess]=useState("");





const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};






const handleSubmit=(e)=>{


e.preventDefault();


setError("");



if(
!form.name ||
!form.email ||
!form.password ||
!form.password_confirmation
){

setError("Veuillez remplir tous les champs");

return;

}



if(form.password !== form.password_confirmation){

setError("Les mots de passe ne correspondent pas");

return;

}



setSuccess("Compte créé avec succès 🎉");



setTimeout(()=>{

router.push("/login");

},1500);



};






return (



<section
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





{/* LOGO */}


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

Créer un compte 🍼

</h1>





<p
className="
text-center
text-gray-500
mb-8
"
>

Rejoignez Baby-Shop

</p>






{
error &&

<p
className="
bg-red-50
text-red-500
p-3
rounded-xl
mb-4
text-center
"
>

{error}

</p>

}







{
success &&

<p
className="
bg-green-50
text-green-600
p-3
rounded-xl
mb-4
text-center
"
>

{success}

</p>

}









<form
onSubmit={handleSubmit}
className="
space-y-4
"
>





<input

name="name"

placeholder="Nom complet"

value={form.name}

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






<input

name="email"

type="email"

placeholder="Email"

value={form.email}

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







<input

name="phone"

placeholder="Téléphone"

value={form.phone}

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








<input

name="address"

placeholder="Adresse complète"

value={form.address}

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








<input

name="password"

type="password"

placeholder="Mot de passe"

value={form.password}

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








<input

name="password_confirmation"

type="password"

placeholder="Confirmer mot de passe"

value={form.password_confirmation}

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

Créer mon compte

</button>






</form>







<p
className="
text-center
mt-6
text-gray-600
"
>

Vous avez déjà un compte ?

<Link

href="/login"

className="
text-pink-500
font-bold
ml-2
hover:underline
"

>

Connexion

</Link>


</p>






</div>






</section>


);


}