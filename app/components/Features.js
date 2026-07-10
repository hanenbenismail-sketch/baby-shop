export default function Features() {


const features = [

{
icon:"🚚",
title:"Livraison rapide",
text:"Recevez vos produits bébé en toute simplicité."
},

{
icon:"⭐",
title:"Qualité garantie",
text:"Des articles choisis avec soin pour bébé."
},

{
icon:"🔒",
title:"Paiement sécurisé",
text:"Vos achats sont protégés et fiables."
}

];



return (

<section className="
py-12
bg-pink-50
">


<div className="
container
">


<h2 className="
text-center
text-3xl
font-bold
text-gray-800
mb-8
">

Pourquoi choisir Baby Shop ?

</h2>



<div className="
grid
grid-cols-1
md:grid-cols-3
gap-5
">


{

features.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-2xl
p-5
text-center
shadow-sm
hover:shadow-lg
transition
"


>


<div className="
text-4xl
mb-3
">

{item.icon}

</div>



<h3 className="
font-bold
text-lg
text-gray-800
mb-2
">

{item.title}

</h3>




<p className="
text-sm
text-gray-500
leading-relaxed
">

{item.text}

</p>



</div>


))

}


</div>


</div>


</section>


)

}