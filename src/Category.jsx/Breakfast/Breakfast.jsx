import { breakfastarray } from "./Breakastarray";

import { Breakfastcard } from "./Breakfastcrad"; 

export const Breakfast=(()=>{

return(

<>
<section className="m-8">
    <h1 className="text-4xl font-semibold m-auto flex justify-center items-center ">Breakfast All Items</h1>

   <ul className="flex flex-wrap  m-6 p-5 gap-8 w-[95%] justify-center items-center ">

 {breakfastarray.map((current,ind)=>{


    return <Breakfastcard key={ind} current={current}/>



 })}
    

   </ul>
   </section>
   </>

   

)


})



