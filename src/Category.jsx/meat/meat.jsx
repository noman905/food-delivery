import { Meatcard } from "./meatcard";
import { meatarray } from "./meatarray";

export const Meat=(()=>{

return(

<>
<section className="m-8">
    <h1 className="text-4xl font-semibold m-auto flex justify-center items-center ">Meat All Items</h1>

   <ul className="flex flex-wrap  m-6 p-5 gap-8 w-[95%] justify-center items-center ">

 {meatarray.map((current,ind)=>{


    return <Meatcard key={ind} current={current}/>



 })}
    

   </ul>
   </section>
   </>

   

)


})



