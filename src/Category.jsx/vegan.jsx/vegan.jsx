import { veganarray } from "./veganarray";

import { Vegancard } from "./vegancard"; 

export const Vegan=(()=>{

 return(

<>
<section className="m-8">
    <h1 className="text-4xl font-semibold m-auto flex justify-center items-center ">Vegan All Items</h1>

   <ul className="flex flex-wrap  m-auto p-5 gap-8 w-[95%] justify-center items-center ">

 {veganarray.map((current,ind)=>{


    return <Vegancard key={ind} current={current}/>



 })}
    

   </ul>
   </section>
   </>

   

)


})



