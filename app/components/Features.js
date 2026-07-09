const features = [
  {
    icon: "🚚",
    title: "Livraison rapide",
    text: "Recevez vos commandes facilement et rapidement."
  },
  {
    icon: "⭐",
    title: "Produits qualité",
    text: "Des produits sélectionnés pour le confort de votre bébé."
  },
  {
    icon: "🔒",
    title: "Paiement sécurisé",
    text: "Achetez en toute confiance."
  }
];


export default function Features(){

return (

<section className="py-16 bg-gray-50">

<div className="max-w-6xl mx-auto px-6">


<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
Pourquoi choisir Baby Shop ?
</h2>


<div className="
grid 
grid-cols-1 
md:grid-cols-3 
gap-8
">


{features.map((item,index)=>(

<div
key={index}
className="
bg-white
rounded-3xl
p-8
text-center
border
border-gray-100
shadow-sm
hover:shadow-xl
transition
duration-300
"
>


<div className="
text-5xl
mb-5
">
{item.icon}
</div>


<h3 className="
text-xl
font-bold
mb-3
">
{item.title}
</h3>


<p className="
text-gray-500
leading-relaxed
">
{item.text}
</p>


</div>

))}


</div>

</div>

</section>

)

}