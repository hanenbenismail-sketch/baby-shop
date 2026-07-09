"use client";

import Link from "next/link";


export default function Navbar(){


return (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">


<div className="container">


<Link 
className="navbar-brand"
href="/"
>

🍼 Baby Shop

</Link>


<div>


<Link 
className="nav-link d-inline text-white mx-2"
href="/products"
>
Produits
</Link>


<Link 
className="nav-link d-inline text-white mx-2"
href="/cart"
>
Panier 🛒
</Link>


<Link 
className="nav-link d-inline text-white mx-2"
href="/login"
>
Connexion
</Link>
<li className="nav-item">

<Link

className="nav-link"

href="/checkout"

>

📦 Commande

</Link>

</li>

</div>


</div>


</nav>

)

}