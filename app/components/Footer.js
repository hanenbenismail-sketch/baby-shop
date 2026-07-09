import Image from "next/image";
import Link from "next/link";
export default function Footer(){

return (

<footer className="
bg-slate-800
text-white
mt-16
rounded-t-3xl
">


<div className="
max-w-7xl
mx-auto
px-6
py-12
grid
md:grid-cols-4
gap-10
">


{/* Description */}
{/* Brand / Description */}

<div>

<Link
href="/"
className="
flex
items-center
gap-3
mb-4
"
>

<Image
src="/images/logo.jpg"
alt="Baby Shop Logo"
width={55}
height={55}
className="
rounded-full
object-cover
shadow-md
"
/>


<div className="flex flex-col">


<span
className="
text-2xl
font-extrabold
tracking-wide
text-pink-400
"
>
BABY-SHOP
</span>


<span
className="
text-xs
text-gray-300
"
>
Boutique bébé 🍼
</span>


</div>


</Link>



<p
className="
text-gray-300
leading-7
"
>
Votre boutique en ligne spécialisée
dans les produits bébé.
Des articles de qualité pour
le confort et le bonheur de votre bébé.
</p>


</div>

{/* Navigation */}

<div>

<h4 className="
text-xl
font-semibold
mb-4
text-blue-300
">
Navigation
</h4>


<ul className="
space-y-3
text-gray-300
">


<li>
Accueil
</li>


<li>
Produits
</li>


<li>
Catégories
</li>


<li>
Panier
</li>


</ul>


</div>




{/* Contact */}

<div>

<h4 className="
text-xl
font-semibold
mb-4
text-blue-300
">
Contact
</h4>


<ul className="
space-y-3
text-gray-300
">


<li>
📍 Tozeur, Tunisie
</li>


<li>
📞 +216 XX XXX XXX
</li>


<li>
✉ contact@baby-shop.com
</li>


<li>
🕘 Lun - Sam : 08:00 - 18:00
</li>


</ul>


</div>




{/* Social + Security */}

<div>

<h4 className="
text-xl
font-semibold
mb-4
text-blue-300
">
Suivez-nous
</h4>


<div className="
flex
gap-3
mb-6
">


<a
className="
w-10
h-10
rounded-full
bg-pink-400
flex
items-center
justify-center
hover:scale-110
transition
"
>
f
</a>


<a
className="
w-10
h-10
rounded-full
bg-blue-400
flex
items-center
justify-center
hover:scale-110
transition
"
>
in
</a>


<a
className="
w-10
h-10
rounded-full
bg-green-400
flex
items-center
justify-center
hover:scale-110
transition
"
>
W
</a>


</div>



<h4 className="
font-semibold
text-blue-300
mb-3
">
Sécurité
</h4>


<p className="
text-gray-300
text-sm
">

🔒 Paiement sécurisé  
<br/>
🚚 Livraison rapide  
<br/>
✅ Produits vérifiés

</p>


</div>


</div>





<div className="
border-t
border-gray-600
text-center
py-5
text-gray-400
text-sm
">


© 2026 BABY-SHOP.
Tous droits réservés.


</div>


</footer>

)

}