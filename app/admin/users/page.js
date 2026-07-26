"use client";

import { useEffect, useState } from "react";


export default function UsersPage(){


const [users,setUsers] = useState([]);

const [loading,setLoading] = useState(true);



useEffect(()=>{

fetchUsers();

},[]);



async function fetchUsers(){


try{


const res = await fetch("/api/users");


const data = await res.json();


setUsers(data);



}catch(error){

console.log(error);

}
finally{

setLoading(false);

}


}





async function updateRole(id,role){


try{


await fetch(`/api/users/${id}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
role
})

});


fetchUsers();


}catch(error){

console.log(error);

}


}




async function deleteUser(id){


const confirmDelete = confirm(
"Delete this user?"
);


if(!confirmDelete) return;



try{


await fetch(`/api/users/${id}`,{

method:"DELETE"

});


fetchUsers();



}catch(error){

console.log(error);

}


}





if(loading){

return (

<p className="p-8">
Loading users...
</p>

)

}





return (

<div className="max-w-6xl mx-auto p-8">


<h1 className="
text-3xl
font-bold
mb-8
">

Users Management

</h1>





<div className="grid gap-5">



{

users.map(user=>(


<div

key={user._id}

className="
bg-white
rounded-xl
shadow
p-6
"

>


<div className="flex justify-between items-center">


<div>

<h2 className="font-bold text-lg">

{user.name}

</h2>


<p>
{user.email}
</p>


</div>




<span className="
bg-pink-100
text-pink-600
px-3
py-1
rounded-full
">

{user.role}

</span>



</div>





<div className="
flex
gap-3
mt-5
">


<select

value={user.role}

onChange={(e)=>
updateRole(
user._id,
e.target.value
)
}

className="
border
rounded-lg
px-3
py-2
"

>


<option value="user">
User
</option>


<option value="admin">
Admin
</option>


</select>





<button

onClick={()=>deleteUser(user._id)}

className="
bg-red-500
text-white
px-4
py-2
rounded-lg
"

>

Delete

</button>



</div>




</div>


))


}



</div>




</div>

);


}