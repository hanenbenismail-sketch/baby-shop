import Link from "next/link";
import Image from "next/image";


export default function Home(){


return (

<div>


{/* HERO */}

<section className="hero">


<div className="hero-content">


<h1>
Bienvenue chez Baby Shop 🍼
</h1>


<p>
Tout pour le confort et le bonheur de votre bébé
</p>


<Link

href="/products"

className="btn btn-light btn-lg"

>

Découvrir nos produits

</Link>


</div>



<Image

src="/images/baby-banner.jpg"

alt="Baby Shop"

width={600}

height={400}

className="hero-image"

/>


</section>





{/* AVANTAGES */}


<section className="container mt-5">


<h2 className="text-center">

Pourquoi choisir Baby Shop ?

</h2>



<div className="row mt-4">


<div className="col-md-4 text-center">

<h4>
🚚 Livraison rapide
</h4>

<p>
Recevez vos commandes facilement et rapidement.
</p>

</div>




<div className="col-md-4 text-center">


<h4>
⭐ Produits qualité
</h4>


<p>
Des produits sélectionnés pour le confort de votre bébé.
</p>


</div>




<div className="col-md-4 text-center">


<h4>
🔒 Paiement sécurisé
</h4>


<p>
Achetez en toute confiance.
</p>


</div>


</div>


</section>







{/* PRODUITS */}


<section className="container mt-5">


<div className="text-center">


<h2>

🛍 Nos produits bébé

</h2>


<p>

Découvrez notre collection pour bébé

</p>



<Link

href="/products"

className="btn btn-primary"

>

Voir tous les produits

</Link>



</div>


</section>







{/* LOCALISATION BOUTIQUE */}


<section className="container mt-5 mb-5">


<h2 className="text-center mb-4">

📍 Localisation de notre boutique

</h2>




<div className="row align-items-center">



<div className="col-md-5">


<div className="card shadow p-4">


<h3>
🍼 Baby Shop
</h3>



<p>
📌 Adresse :
<br/>
Cité Chebbi, Tozeur, Tunisie
</p>



<p>
📞 Téléphone :
<br/>
+216 XX XXX XXX
</p>



<p>
🕘 Horaires :
<br/>
Lundi - Samedi : 08:00 - 18:00
</p>



<a

href="https://www.google.com/maps"

target="_blank"

className="btn btn-primary"

>

Ouvrir Google Maps 📍

</a>



</div>


</div>






<div className="col-md-7 mt-4 mt-md-0">


<div className="map-container">


<iframe

src="https://www.google.com/maps?q=Cité+Chebbi+Tozeur+Tunisie&output=embed"

width="100%"

height="350"

style={{

border:0,

borderRadius:"20px"

}}

loading="lazy"

allowFullScreen

></iframe>



</div>


</div>




</div>


</section>





</div>

)

}