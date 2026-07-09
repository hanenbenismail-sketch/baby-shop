"use client";

import {useState} from "react";
import Image from "next/image";
import api from "../../services/api";


export default function Login(){


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

const response = await api.post("/login",form);


localStorage.setItem(
"token",
response.data.token
);


alert("Connexion réussie");


}

catch(error){

alert("Email ou mot de passe incorrect");

}


}



return (

<div className="login-page">


<div className="login-card">



<div className="login-image">


<Image

src="/images/login-baby.jpg"

alt="Baby Shop"

width={500}

height={500}

/>


</div>



<div className="login-form">



<h1>
Bienvenue 🍼
</h1>


<p>
Connectez-vous à votre compte Baby Shop
</p>



<form onSubmit={handleSubmit}>


<div className="mb-3">


<label>
Email
</label>


<input

type="email"

name="email"

className="form-control"

placeholder="Votre email"

onChange={handleChange}

required

/>


</div>




<div className="mb-3">


<label>
Mot de passe
</label>


<input

type="password"

name="password"

className="form-control"

placeholder="Votre mot de passe"

onChange={handleChange}

required

/>


</div>




<button

className="btn-login"

>

Se connecter

</button>



<p className="register-link">

Vous n'avez pas de compte ?

<a href="/register">

Créer un compte

</a>


</p>



</form>


</div>



</div>


</div>

)

}