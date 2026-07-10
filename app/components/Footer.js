import Image from "next/image";
import Link from "next/link";


export default function Footer(){


return (


<footer
className="
mt-16
rounded-t-3xl
bg-gradient-to-br
from-pink-50
via-white
to-blue-50
text-gray-700
"
>


<div
className="
max-w-7xl
mx-auto
px-6
py-12
grid
md:grid-cols-5
gap-10
"
>





{/* BRAND */}


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
bg-gradient-to-r
from-pink-500
to-blue-500
bg-clip-text
text-transparent
"
>

BABY-SHOP

</span>



<span
className="
text-xs
text-gray-500
"
>

Boutique bébé 🍼

</span>



</div>


</Link>






<p
className="
text-gray-600
leading-7
"
>

Votre boutique en ligne spécialisée
dans les produits bébé.
Des articles de qualité pour
le confort de votre bébé.

</p>



</div>








{/* NAVIGATION */}



<div>


<h4
className="
text-lg
font-bold
text-pink-500
mb-4
"
>

Navigation

</h4>




<ul
className="
space-y-3
"
>


<li>

<Link
href="/"
className="
hover:text-pink-500
transition
"
>

Accueil

</Link>

</li>



<li>

<Link
href="/products"
className="
hover:text-pink-500
transition
"
>

Produits

</Link>

</li>




<li>

<Link
href="/categories"
className="
hover:text-pink-500
transition
"
>

Catégories

</Link>

</li>





<li>

<Link
href="/cart"
className="
hover:text-pink-500
transition
"
>

Panier

</Link>

</li>



</ul>



</div>










{/* COMPTE */}



<div>


<h4
className="
text-lg
font-bold
text-blue-500
mb-4
"
>

Mon compte

</h4>



<ul
className="
space-y-3
"
>


<li>

<Link
href="/login"
className="
hover:text-blue-500
transition
"
>

Connexion

</Link>


</li>




<li>

<Link
href="/register"
className="
hover:text-blue-500
transition
"
>

Créer un compte

</Link>


</li>




<li>

<Link
href="/checkout"
className="
hover:text-blue-500
transition
"
>

Commande

</Link>


</li>



</ul>



</div>









{/* CONTACT */}



<div>


<h4
className="
text-lg
font-bold
text-pink-500
mb-4
"
>

Contact

</h4>




<ul
className="
space-y-3
text-gray-600
"
>


<li>
📍 Tunisie
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








{/* SOCIAL */}

<div>


<h4
className="
text-lg
font-bold
text-blue-500
mb-4
"
>

Suivez-nous

</h4>





<div
className="
flex
gap-3
mb-6
"
>



{/* Facebook */}

<a
href="https://facebook.com"
target="_blank"
rel="noopener noreferrer"
className="
w-10
h-10
rounded-full
bg-blue-500
text-white
flex
items-center
justify-center
font-bold
hover:scale-110
transition
"
>

f

</a>






{/* Instagram */}


<a
href="https://instagram.com"
target="_blank"
rel="noopener noreferrer"
className="
w-10
h-10
rounded-full
bg-pink-500
text-white
flex
items-center
justify-center
font-bold
hover:scale-110
transition
"
>

◎

</a>








{/* WhatsApp */}


<a
href="https://wa.me/216XXXXXXXX"
target="_blank"
rel="noopener noreferrer"
className="
w-10
h-10
rounded-full
bg-green-500
text-white
flex
items-center
justify-center
font-bold
hover:scale-110
transition
"
>

W

</a>





</div>





<h4
className="
text-lg
font-bold
text-blue-500
mb-3
"
>

Sécurité

</h4>



<p
className="
text-gray-600
text-sm
leading-7
"
>

🔒 Paiement sécurisé

<br/>

🚚 Livraison rapide

<br/>

✅ Produits vérifiés

</p>




</div>
</div>


<div
className="
border-t
border-gray-200
text-center
py-5
text-sm
text-gray-500
"
>

© {new Date().getFullYear()} BABY-SHOP.
Tous droits réservés.

</div>



</footer>


);


}