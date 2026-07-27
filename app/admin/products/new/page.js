"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function NewProductPage() {


const router = useRouter();



const [imageFile,setImageFile] = useState(null);

const [uploading,setUploading] = useState(false);



const [formData,setFormData] = useState({

name:"",
price:"",
oldPrice:"",
category:"",
brand:"",
stock:"",
age:"",
description:"",
image:""

});




function handleChange(e){

setFormData({

...formData,

[e.target.name]:e.target.value

});

}




async function uploadImage(){


if(!imageFile) return "";



const data = new FormData();


data.append(
"file",
imageFile
);



setUploading(true);



const res = await fetch("/api/upload",{

method:"POST",

body:data

});



const result = await res.json();



setUploading(false);



return result.url;


}







async function handleSubmit(e){

e.preventDefault();



try{


const imageUrl = await uploadImage();



const res = await fetch("/api/products",{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

...formData,


image:imageUrl,


price:Number(formData.price),


oldPrice:Number(formData.oldPrice),


stock:Number(formData.stock),


rating:0,


sizes:[],


colors:[],


images:[]

})


});






if(res.ok){


alert("Product added successfully!");


router.push("/admin/products");


router.refresh();



}else{


alert("Failed to add product.");

}


}catch(error){


console.error(error);


alert("Something went wrong.");

}


}








return (

<main className="max-w-3xl mx-auto p-8">


<h1 className="text-3xl font-bold mb-8">

Add Product

</h1>





<form

noValidate

onSubmit={handleSubmit}

className="space-y-4"

>





<input

type="text"

name="name"

placeholder="Product name"

value={formData.name}

onChange={handleChange}

className="w-full border rounded-lg p-3"

/>







<input

type="number"

name="price"

placeholder="Price"

value={formData.price}

onChange={handleChange}

className="w-full border rounded-lg p-3"

/>







<input

type="number"

name="oldPrice"

placeholder="Old Price"

value={formData.oldPrice}

onChange={handleChange}

className="w-full border rounded-lg p-3"

/>







<input

type="text"

name="category"

placeholder="Category"

value={formData.category}

onChange={handleChange}

className="w-full border rounded-lg p-3"

/>







<input

type="text"

name="brand"

placeholder="Brand"

value={formData.brand}

onChange={handleChange}

className="w-full border rounded-lg p-3"

/>







<input

type="number"

name="stock"

placeholder="Stock"

value={formData.stock}

onChange={handleChange}

className="w-full border rounded-lg p-3"

/>







<input

type="text"

name="age"

placeholder="Age"

value={formData.age}

onChange={handleChange}

className="w-full border rounded-lg p-3"

/>







<input

type="file"

accept="image/*"

onChange={(e)=>setImageFile(e.target.files[0])}

className="w-full border rounded-lg p-3"

/>









<textarea

name="description"

placeholder="Description"

value={formData.description}

onChange={handleChange}

rows={5}

className="w-full border rounded-lg p-3"

/>









<button

type="submit"

disabled={uploading}

className="
w-full
bg-pink-600
disabled:bg-gray-400
text-white
py-3
rounded-lg
hover:bg-pink-700
transition
"

>

{
uploading
?
"Uploading image..."
:
"Add Product"
}

</button>





</form>



</main>

);


}