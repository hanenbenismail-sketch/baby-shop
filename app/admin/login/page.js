"use client";

import { useState } from "react";


export default function AdminLoginPage(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);



  async function handleLogin(e){

    e.preventDefault();

    setLoading(true);
    setError("");


    try{


      const res = await fetch("/api/admin/login",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          email,
          password
        })

      });



      const data = await res.json();



      if(!res.ok){

        throw new Error(data.message);

      }



      console.log("LOGIN SUCCESS", data);


localStorage.setItem(
  "token",
  data.token
);

localStorage.setItem(
  "user",
  JSON.stringify(data.user)
);


      console.log("GO TO ORDERS");



      window.location.href = "/admin/orders";



    }catch(error){


      console.log(error);

      setError(error.message);


    }finally{

      setLoading(false);

    }

  }




  return (

    <main className="min-h-screen flex items-center justify-center bg-gray-50">


      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >


        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>



        {error && (

          <p className="text-red-500 mb-4">
            {error}
          </p>

        )}



        <input

          type="email"

          placeholder="Email"

          className="border p-3 rounded w-full mb-4"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          required

        />



        <input

          type="password"

          placeholder="Password"

          className="border p-3 rounded w-full mb-4"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          required

        />



        <button

          disabled={loading}

          className="bg-black text-white p-3 rounded w-full"

        >

          {loading ? "Loading..." : "Login"}

        </button>


      </form>


    </main>

  );

}