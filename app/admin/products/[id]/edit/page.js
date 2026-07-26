"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";


export default function EditProductPage(){

const {id}=useParams();

const router=useRouter();


const [imageFile,setImageFile]=useState(null);
const [uploading,setUploading]=useState(false);


const [formData,setFormData]=useState({

name:"",
price:"",
oldPrice:"",
category:"",
brand:"",
stock:"",
age:"",
description:"",
image:null

});



useEffect(()=>{

if(id){
fetchProduct();
}

},[id]);




async function fetchProduct(){

try{

const res=await fetch(`/api/products/${id}`);

const data=await res.json();


setFormData({

name:data.name || "",
price:data.price || "",
oldPrice:data.oldPrice || "",
category:data.category || "",
brand:data.brand || "",
stock:data.stock || "",
age:data.age || "",
description:data.description || "",
image:data.image || null

});


}catch(error){

console.log(error);

}

}





function handleChange(e){

setFormData({

...formData,

[e.target.name]:e.target.value

});

}







async function uploadImage(){


if(!imageFile){

return formData.image;

}


const data=new FormData();

data.append("file",imageFile);



setUploading(true);


try{


const res=await fetch("/api/upload",{

method:"POST",

body:data

});


const result=await res.json();


return result.url;


}catch(error){

console.log(error);

return formData.image;

}

finally{

setUploading(false);

}


}







async function handleSubmit(e){

e.preventDefault();


try{


const imageUrl=await uploadImage();



const res=await fetch(`/api/products/${id}`,{


method:"PUT",


headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

...formData,

image:imageUrl,

price:Number(formData.price),

oldPrice:Number(formData.oldPrice),

stock:Number(formData.stock)

})


});



if(res.ok){

alert("Product updated successfully");

router.push("/admin/products");

router.refresh();

}



}catch(error){

console.log(error);

}


}






return (

<main className="max-w-3xl mx-auto p-8">


<h1 className="text-3xl font-bold mb-8">

Edit Product

</h1>



<form
onSubmit={handleSubmit}
className="space-y-4"
>


<input
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Name"
className="w-full border rounded-lg p-3"
/>



<input
name="price"
type="number"
value={formData.price}
onChange={handleChange}
placeholder="Price"
className="w-full border rounded-lg p-3"
/>



<input
name="oldPrice"
type="number"
value={formData.oldPrice}
onChange={handleChange}
placeholder="Old Price"
className="w-full border rounded-lg p-3"
/>



<input
name="category"
value={formData.category}
onChange={handleChange}
placeholder="Category"
className="w-full border rounded-lg p-3"
/>



<input
name="brand"
value={formData.brand}
onChange={handleChange}
placeholder="Brand"
className="w-full border rounded-lg p-3"
/>



<input
name="stock"
type="number"
value={formData.stock}
onChange={handleChange}
placeholder="Stock"
className="w-full border rounded-lg p-3"
/>



<input
name="age"
value={formData.age}
onChange={handleChange}
placeholder="Age"
className="w-full border rounded-lg p-3"
/>




{
formData.image && (

<img
src={formData.image}
alt="product"
className="w-32 h-32 object-cover rounded-lg"
/>

)

}




<input

type="file"

accept="image/*"

onChange={(e)=>setImageFile(e.target.files[0])}

className="w-full border rounded-lg p-3"

/>





<textarea

name="description"

value={formData.description}

onChange={handleChange}

rows={5}

placeholder="Description"

className="w-full border rounded-lg p-3"

/>





<button

disabled={uploading}

className="
w-full
bg-blue-600
disabled:bg-gray-400
text-white
py-3
rounded-lg
"

>

{
uploading
?
"Uploading..."
:
"Update Product"
}


</button>



</form>



</main>

);


}