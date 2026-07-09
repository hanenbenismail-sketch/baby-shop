"use client";

import { useState } from "react";


export default function RegisterPage(){


const [form,setForm]=useState({

name:"",
email:"",
address:"",
password:"",
password_confirmation:""

});



const handleChange = (e)=>{

setForm({

...form,

[e.target.name]: e.target.value

});

};



const handleSubmit = (e)=>{

e.preventDefault();

console.log(form);

};



return (

<div className="container mt-5">


<div className="card shadow p-5 mx-auto"
style={{
maxWidth:"500px",
borderRadius:"20px"
}}
>


<h1 className="text-center mb-4">
Créer un compte 🍼
</h1>


<form onSubmit={handleSubmit}>


<input

className="form-control mb-3"

name="name"

placeholder="Nom complet"

value={form.name}

onChange={handleChange}

/>



<input

className="form-control mb-3"

name="email"

placeholder="Email"

type="email"

value={form.email}

onChange={handleChange}

/>



<input

className="form-control mb-3"

name="address"

placeholder="Adresse complète"

value={form.address}

onChange={handleChange}

/>



<input

className="form-control mb-3"

name="password"

placeholder="Mot de passe"

type="password"

value={form.password}

onChange={handleChange}

/>



<input

className="form-control mb-3"

name="password_confirmation"

placeholder="Confirmer le mot de passe"

type="password"

value={form.password_confirmation}

onChange={handleChange}

/>



<button

className="
btn
btn-primary
w-100
"

>

Créer mon compte

</button>


</form>


</div>


</div>

)

}