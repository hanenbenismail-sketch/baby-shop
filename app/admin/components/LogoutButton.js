"use client";

import { useRouter } from "next/navigation";


export default function LogoutButton(){


const router = useRouter();



function logout(){


document.cookie =
"token=; path=/; max-age=0";



router.push("/admin/login");

router.refresh();


}



return (

<button

onClick={logout}

className="
w-full
bg-red-600
text-white
py-3
rounded-xl
font-bold
"

>

Logout

</button>

);


}