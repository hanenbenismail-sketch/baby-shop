import Image from "next/image";
import Link from "next/link";


const categories = [

{
name:"Vêtements bébé",
slug:"vetements",
image:"/images/clothes.jpg"
},

{
name:"Jouets",
slug:"jouets",
image:"/images/toys.jpg"
},

{
name:"Alimentation",
slug:"alimentation",
image:"/images/feeding.jpg"
},

{
name:"Chaussures",
slug:"chaussures",
image:"/images/shoes.jpg"
},

{
name:"Mobilier bébé",
slug:"mobilier",
image:"/images/nursery.jpg"
},

{
name:"Transport",
slug:"transport",
image:"/images/images.jpg"
},

{
name:"Hygiène",
slug:"hygiene",
image:"/images/hygiene.jpg"
},

{
name:"Accessoires",
slug:"accessoires",
image:"/images/accessories.jpg"
}

];


export default function Categories(){


return (

<section className="
py-16
px-6
bg-pink-50
">


<h2 className="
text-3xl
font-bold
text-center
mb-10
text-gray-800
">

Nos catégories

</h2>



<div className="
max-w-7xl
mx-auto
grid
grid-cols-2
md:grid-cols-4
gap-6
">


{
categories.map((category)=>(


<Link

key={category.slug}

href={`/categories/${category.slug}`}

className="
group
bg-white
rounded-3xl
overflow-hidden
shadow-sm
hover:shadow-xl
transition
"


>


<div className="
relative
h-48
">


<Image

src={category.image}

alt={category.name}

fill

className="
object-cover
group-hover:scale-110
transition
"

/>


</div>



<div className="
p-5
text-center
">


<h3 className="
font-semibold
text-lg
text-gray-800
">

{category.name}

</h3>





</div>


</Link>


))

}


</div>


</section>

)

}