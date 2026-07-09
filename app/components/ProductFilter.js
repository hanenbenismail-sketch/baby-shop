"use client";

export default function ProductFilter({
  search,
  setSearch,
  category,
  setCategory,
  categories
}) {


return (

<div className="
flex
flex-col
md:flex-row
gap-4
mb-10
">


{/* Search */}

<input

type="text"

placeholder="Search product..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
border
rounded-xl
p-3
w-full
md:w-1/3
"

/>



{/* Category */}

<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="
border
rounded-xl
p-3
w-full
md:w-1/4
"

>


<option value="">
All Categories
</option>


{
categories.map((cat,index)=>(

<option
key={index}
value={cat}
>

{cat}

</option>

))
}


</select>


</div>

)

}
