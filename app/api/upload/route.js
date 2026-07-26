import cloudinary from "@/lib/cloudinary";


export async function POST(request){

try{


const formData = await request.formData();


const file = formData.get("file");



if(!file){

return Response.json(
{
message:"No file uploaded"
},
{
status:400
}
);

}



const bytes = await file.arrayBuffer();


const buffer = Buffer.from(bytes);




const result = await new Promise((resolve,reject)=>{


cloudinary.uploader.upload_stream(

{
folder:"baby-shop",
resource_type:"image"
},


(error,result)=>{


if(error){

reject(error);

}else{

resolve(result);

}


}

).end(buffer);



});




return Response.json({

url:result.secure_url

});



}catch(error){


console.log("UPLOAD ERROR:",error);


return Response.json(

{
message:"Upload failed",
error:error.message
},

{
status:500
}

);


}

}